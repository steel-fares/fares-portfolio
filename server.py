import http.server
import socketserver
import urllib.parse
import json
import re
import os
import sys

PORT = 3000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Allow CORS and prevent caching for development convenience
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_POST(self):
        parsed_path = urllib.parse.urlparse(self.path)
        
        # 1. API: Upload WebP image directly to disk
        if parsed_path.path == '/api/upload':
            try:
                query = urllib.parse.parse_qs(parsed_path.query)
                filename = query.get('filename', ['image.webp'])[0]
                filename = os.path.basename(filename) # Prevent directory traversal
                
                content_length = int(self.headers['Content-Length'])
                file_data = self.rfile.read(content_length)
                
                # Ensure directories exist
                os.makedirs('assets/optimized', exist_ok=True)
                filepath = os.path.join('assets/optimized', filename)
                
                with open(filepath, 'wb') as f:
                    f.write(file_data)
                
                print(f"[SUCCESS] Saved uploaded image to {filepath}")
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(b'{"success":true}')
            except Exception as e:
                print(f"[ERROR] Upload failed: {e}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f'{{"error":"{str(e)}"}}'.encode('utf-8'))
            return
            
        # 2. API: Save updated portfolio works list to portfolio-data.js
        elif parsed_path.path == '/api/save':
            try:
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length)
                works_data = json.loads(post_data.decode('utf-8'))
                
                filepath = 'portfolio-data.js'
                if os.path.exists(filepath):
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Format the array elements nicely as JavaScript objects
                    formatted_items = []
                    for work in works_data:
                        # Clean up formatting to match the original layout
                        item_str = f"  {{src:'{work['src']}',cat:'{work['cat']}',rating:{work['rating']}}}"
                        formatted_items.append(item_str)
                    
                    new_array_content = ",\n".join(formatted_items)
                    
                    # Regex replace the rawWorks array block
                    new_content = re.sub(
                        r'(const rawWorks\s*=\s*\[)(.*?)(\];)',
                        r'\1\n' + new_array_content + r'\n\3',
                        content,
                        flags=re.DOTALL
                    )
                    
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                        
                    print(f"[SUCCESS] Saved updated portfolio works to {filepath}")
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(b'{"success":true}')
                else:
                    self.send_response(404)
                    self.end_headers()
            except Exception as e:
                print(f"[ERROR] Save failed: {e}")
                self.send_response(500)
                self.end_headers()
                self.wfile.write(f'{{"error":"{str(e)}"}}'.encode('utf-8'))
            return
            
        self.send_response(404)
        self.end_headers()

def run():
    # Allow port reuse to avoid 'Address already in use' errors
    socketserver.TCPServer.allow_reuse_address = True
    
    # Configure sys.stdout for UTF-8 encoding
    sys.stdout.reconfigure(encoding='utf-8')
    
    handler = CustomHandler
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        print(f"🚀 Fares Portfolio CMS Server is running at http://localhost:{PORT}")
        print("💡 Open http://localhost:3000/edit.html to edit your portfolio.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
            httpd.server_close()

if __name__ == '__main__':
    run()
