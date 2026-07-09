window.portfolioCategories=[
  {id:'all',label:'كل الأعمال'},
  {id:'restaurants',label:'مطاعم وكافيهات'},
  {id:'ac',label:'تكييف و MEP'},
  {id:'products',label:'منتجات ومتاجر'},
  {id:'tools',label:'معدات وأدوات'},
  {id:'construction',label:'مقاولات وإنشاءات'},
  {id:'translation',label:'ترجمة وخدمات'},
  {id:'digital',label:'برامج ومنتجات رقمية'},
  {id:'cars',label:'سيارات وخدمات'},
  {id:'travel',label:'سفر وخدمات'},
  {id:'branding',label:'تصميمات متنوعة'}
];

const categoryOrder={restaurants:0,ac:1,products:2,tools:3,construction:4,translation:5,digital:6,cars:7,travel:8,branding:9};
const rawWorks=[
  {src:'assets/optimized/work_94.webp',cat:'restaurants',rating:9.8},
  {src:'assets/optimized/work_95.webp',cat:'restaurants',rating:9.7},
  {src:'assets/optimized/work_92.webp',cat:'restaurants',rating:9.5},
  {src:'assets/optimized/work_15.webp',cat:'restaurants',rating:9},
  {src:'assets/optimized/work_91.webp',cat:'ac',rating:9.9},
  {src:'assets/optimized/work_96.webp',cat:'ac',rating:9.8},
  {src:'assets/optimized/work_89.webp',cat:'ac',rating:9.7},
  {src:'assets/optimized/work_88.webp',cat:'ac',rating:9.6},
  {src:'assets/optimized/work_90.webp',cat:'ac',rating:9.5},
  {src:'assets/optimized/work_93.webp',cat:'ac',rating:9.4},
  {src:'assets/optimized/work_87.webp',cat:'ac',rating:9.2},
  {src:'assets/optimized/work_3.webp',cat:'ac',rating:8.7},
  {src:'assets/optimized/work_2.webp',cat:'ac',rating:8.5},
  {src:'assets/optimized/work_1.webp',cat:'ac',rating:8.4},
  {src:'assets/optimized/work_7.webp',cat:'products',rating:8.9},
  {src:'assets/optimized/work_8.webp',cat:'products',rating:8.8},
  {src:'assets/optimized/work_4.webp',cat:'products',rating:8.7},
  {src:'assets/optimized/work_16.webp',cat:'products',rating:8.6},
  {src:'assets/optimized/work_17.webp',cat:'products',rating:8.5},
  {src:'assets/optimized/work_5.webp',cat:'products',rating:8.4},
  {src:'assets/optimized/work_86.webp',cat:'products',rating:8.2},
  {src:'assets/optimized/majer_darag.webp',cat:'products',rating:8},
  {src:'assets/optimized/bfc5e0b7-657f-4cfd-ba31-5e15c5ae8f15.webp',cat:'products',rating:5},
  {src:'assets/optimized/work_25.webp',cat:'tools',rating:9},
  {src:'assets/optimized/work_26.webp',cat:'tools',rating:8.4},
  {src:'assets/optimized/work_41.webp',cat:'tools',rating:8.3},
  {src:'assets/optimized/work_27.webp',cat:'tools',rating:8.2},
  {src:'assets/optimized/work_28.webp',cat:'tools',rating:8.2},
  {src:'assets/optimized/work_38.webp',cat:'tools',rating:8.1},
  {src:'assets/optimized/work_29.webp',cat:'tools',rating:8},
  {src:'assets/optimized/work_33.webp',cat:'tools',rating:8},
  {src:'assets/optimized/work_42.webp',cat:'tools',rating:7.9},
  {src:'assets/optimized/work_31.webp',cat:'tools',rating:7.9},
  {src:'assets/optimized/work_35.webp',cat:'tools',rating:7.8},
  {src:'assets/optimized/work_34.webp',cat:'tools',rating:7.8},
  {src:'assets/optimized/work_72.webp',cat:'tools',rating:7.7},
  {src:'assets/optimized/work_73.webp',cat:'tools',rating:7.7},
  {src:'assets/optimized/work_36.webp',cat:'tools',rating:7.6},
  {src:'assets/optimized/work_32.webp',cat:'tools',rating:7.6},
  {src:'assets/optimized/work_39.webp',cat:'tools',rating:7.5},
  {src:'assets/optimized/work_40.webp',cat:'tools',rating:7.5},
  {src:'assets/optimized/work_43.webp',cat:'tools',rating:7.4},
  {src:'assets/optimized/work_48.webp',cat:'tools',rating:7.4},
  {src:'assets/optimized/work_53.webp',cat:'tools',rating:7.3},
  {src:'assets/optimized/work_54.webp',cat:'tools',rating:7.3},
  {src:'assets/optimized/work_60.webp',cat:'tools',rating:7.2},
  {src:'assets/optimized/work_44.webp',cat:'tools',rating:7.2},
  {src:'assets/optimized/work_49.webp',cat:'tools',rating:7.2},
  {src:'assets/optimized/work_55.webp',cat:'tools',rating:7.1},
  {src:'assets/optimized/work_45.webp',cat:'tools',rating:7.1},
  {src:'assets/optimized/work_50.webp',cat:'tools',rating:7.1},
  {src:'assets/optimized/work_56.webp',cat:'tools',rating:7},
  {src:'assets/optimized/work_46.webp',cat:'tools',rating:7},
  {src:'assets/optimized/work_51.webp',cat:'tools',rating:7},
  {src:'assets/optimized/work_57.webp',cat:'tools',rating:6.9},
  {src:'assets/optimized/work_52.webp',cat:'tools',rating:6.9},
  {src:'assets/optimized/work_58.webp',cat:'tools',rating:6.9},
  {src:'assets/optimized/work_61.webp',cat:'tools',rating:6.8},
  {src:'assets/optimized/work_62.webp',cat:'tools',rating:6.8},
  {src:'assets/optimized/work_74.webp',cat:'tools',rating:6.7},
  {src:'assets/optimized/work_71.webp',cat:'tools',rating:6.6},
  {src:'assets/optimized/work_30.webp',cat:'tools',rating:6.5},
  {src:'assets/optimized/work_37.webp',cat:'tools',rating:6.5},
  {src:'assets/optimized/work_47.webp',cat:'tools',rating:6.5},
  {src:'assets/optimized/work_59.webp',cat:'tools',rating:6.5},
  {src:'assets/optimized/work_63.webp',cat:'construction',rating:8.8},
  {src:'assets/optimized/work_64.webp',cat:'construction',rating:8.5},
  {src:'assets/optimized/work_68.webp',cat:'construction',rating:8.3},
  {src:'assets/optimized/work_65.webp',cat:'construction',rating:7.9},
  {src:'assets/optimized/work_66.webp',cat:'construction',rating:7.8},
  {src:'assets/optimized/work_67.webp',cat:'construction',rating:7.6},
  {src:'assets/optimized/work_9.webp',cat:'translation',rating:8.7},
  {src:'assets/optimized/work_10.webp',cat:'translation',rating:8.6},
  {src:'assets/optimized/work_14.webp',cat:'translation',rating:8.5},
  {src:'assets/optimized/work_11.webp',cat:'translation',rating:8.4},
  {src:'assets/optimized/work_13.webp',cat:'translation',rating:8.3},
  {src:'assets/optimized/work_80.webp',cat:'translation',rating:8.2},
  {src:'assets/optimized/work_81.webp',cat:'translation',rating:8.1},
  {src:'assets/optimized/work_12.webp',cat:'translation',rating:7.9},
  {src:'assets/optimized/work_24.webp',cat:'translation',rating:7.7},
  {src:'assets/optimized/work_78.webp',cat:'digital',rating:8.5},
  {src:'assets/optimized/work_76.webp',cat:'digital',rating:8.2},
  {src:'assets/optimized/work_77.webp',cat:'digital',rating:8},
  {src:'assets/optimized/work_18.webp',cat:'cars',rating:8.4},
  {src:'assets/optimized/work_19.webp',cat:'cars',rating:8},
  {src:'assets/optimized/work_20.webp',cat:'cars',rating:7.9},
  {src:'assets/optimized/work_21.webp',cat:'cars',rating:7.8},
  {src:'assets/optimized/work_22.webp',cat:'cars',rating:7.7},
  {src:'assets/optimized/work_23.webp',cat:'cars',rating:7.6},
  {src:'assets/optimized/work_85.webp',cat:'travel',rating:8.4},
  {src:'assets/optimized/work_83.webp',cat:'travel',rating:8},
  {src:'assets/optimized/work_84.webp',cat:'travel',rating:7.9},
  {src:'assets/optimized/work_82.webp',cat:'branding',rating:7.3},
  {src:'assets/optimized/work_69.webp',cat:'branding',rating:7.2},
  {src:'assets/optimized/work_70.webp',cat:'branding',rating:7.1},
  {src:'assets/optimized/work_75.webp',cat:'branding',rating:7}
];

const seenSrcs=new Set();
const initialWorks=rawWorks.filter(work=>{
  if(seenSrcs.has(work.src)) return false;
  seenSrcs.add(work.src);
  return true;
});

const manualOrdersKey='fares-portfolio-manual-orders-v1';
const deletedWorksKey='fares-portfolio-deleted-works-v1';
const addedWorksKey='fares-portfolio-added-works-v1';

let manualOrders={};
let deletedWorks=new Set();
let addedWorks=[];

try{manualOrders=JSON.parse(localStorage.getItem(manualOrdersKey)||'{}');}catch(err){}
try{deletedWorks=new Set(JSON.parse(localStorage.getItem(deletedWorksKey)||'[]'));}catch(err){}
try{addedWorks=JSON.parse(localStorage.getItem(addedWorksKey)||'[]');}catch(err){}

window.portfolioWorks=[...initialWorks,...addedWorks].sort((a,b)=>{
  const catDiff=(categoryOrder[a.cat]??99)-(categoryOrder[b.cat]??99);
  if(catDiff!==0)return catDiff;
  return b.rating-a.rating;
});

function saveManualOrders(){
  try{localStorage.setItem(manualOrdersKey,JSON.stringify(manualOrders));}catch(err){}
}

function saveDeletedWorks(){
  try{localStorage.setItem(deletedWorksKey,JSON.stringify(Array.from(deletedWorks)));}catch(err){}
}

function saveAddedWorks(){
  try{localStorage.setItem(addedWorksKey,JSON.stringify(addedWorks));}catch(err){}
}

window.getPortfolioWorksForCategory=function(cat){
  if(cat==='all'){
    const saved=localStorage.getItem('fares-portfolio-all-order-v1');
    if(saved){
      try{
        const srcs=JSON.parse(saved);
        const map=new Map(window.portfolioWorks.map(w=>[w.src,w]));
        const ordered=srcs.filter(src=>map.has(src)&&!deletedWorks.has(src)).map(src=>map.get(src));
        const rest=window.portfolioWorks.filter(w=>!srcs.includes(w.src)&&!deletedWorks.has(w.src));
        const result=ordered.concat(rest);
        console.log('✅ getPortfolioWorksForCategory("all") عاد',result.length,'عمل من localStorage');
        return result;
      }catch(e){console.error('خطأ في قراءة all order:',e)}
    }
    const result=window.portfolioWorks.filter(w=>!deletedWorks.has(w.src));
    console.log('⚪ getPortfolioWorksForCategory("all") عاد',result.length,'عمل من الافتراضي');
    return result;
  }
  const works=window.portfolioWorks.filter(w=>w.cat===cat&&!deletedWorks.has(w.src));
  const saved=manualOrders[cat];
  if(!saved||!saved.length)return works;
  const map=new Map(works.map(w=>[w.src,w]));
  const ordered=saved.filter(src=>map.has(src)).map(src=>map.get(src));
  const rest=works.filter(w=>!saved.includes(w.src));
  return ordered.concat(rest);
};

window.reorderPortfolioWorks=function(cat,srcs){
  if(!cat||cat==='all')return;
  manualOrders[cat]=srcs.filter(Boolean);
  saveManualOrders();
};

window.removePortfolioWork=function(cat,src){
  if(!cat)return;
  deletedWorks.add(src);
  saveDeletedWorks();
  
  addedWorks=addedWorks.filter(w=>w.src!==src);
  saveAddedWorks();

  console.log('🗑️ حذف العمل:',src,'من القسم:',cat);
  if(cat!=='all'){
    const next=(manualOrders[cat]||[]).filter(item=>item!==src);
    manualOrders[cat]=next;
    saveManualOrders();
  }
};

window.addPortfolioWork=function(src,cat,rating){
  const work={src,cat,rating:parseFloat(rating)||5};
  window.portfolioWorks.push(work);
  addedWorks.push(work);
  saveAddedWorks();
  deletedWorks.delete(src);
  saveDeletedWorks();
  console.log('➕ إضافة عمل جديد:',src,'في القسم:',cat);
  return work;
};

window.convertImageToWebP=async function(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=(e)=>{
      const img=new Image();
      img.onload=()=>{
        const canvas=document.createElement('canvas');
        canvas.width=img.width;
        canvas.height=img.height;
        const ctx=canvas.getContext('2d');
        ctx.drawImage(img,0,0);
        canvas.toBlob((blob)=>{
          if(!blob)return reject('فشل التحويل');
          resolve(blob);
        },'image/webp',0.8);
      };
      img.onerror=()=>reject('فشل تحميل الصورة');
      img.src=e.target.result;
    };
    reader.onerror=()=>reject('فشل قراءة الملف');
    reader.readAsDataURL(file);
  });
};
