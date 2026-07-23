/* ===== Ícones SVG embutidos (sem dependência de CDN/fonte externa) ===== */
const ICONS={
'ti-book-2':'<path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/><path d="M19 16h-12a2 2 0 0 0 -2 2"/><path d="M9 8h6"/>',
'ti-moon':'<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>',
'ti-sun':'<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>',
'ti-cpu':'<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M9 9h6v6h-6z"/><path d="M3 10h2M3 14h2M10 3v2M14 3v2M21 10h-2M21 14h-2M14 21v-2M10 21v-2"/>',
'ti-arrow-left':'<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>',
'ti-edit':'<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/>',
'ti-pencil':'<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>',
'ti-plus':'<path d="M12 5l0 14"/><path d="M5 12l14 0"/>',
'ti-trash':'<path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>',
'ti-clock':'<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 7v5l3 3"/>',
'ti-files':'<path d="M15 3v4a1 1 0 0 0 1 1h4"/><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"/><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"/>',
'ti-player-play':'<path d="M7 4v16l13 -8z"/>',
'ti-books':'<path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M5 8h4M9 16h4"/><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219z"/>',
'ti-video-off':'<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/>',
'ti-book':'<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>',
'ti-file-text':'<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 9l1 0M9 13l6 0M9 17l6 0"/>',
'ti-download':'<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>',
'ti-copy':'<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"/>',
'ti-x':'<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
'ti-chevron-down':'<path d="M6 9l6 6l6 -6"/>',
'ti-chevron-up':'<path d="M6 15l6 -6l6 6"/>',
'ti-report':'<path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"/><path d="M18 12v-5a2 2 0 0 0 -2 -2h-2"/><path d="M8 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M8 11h4"/><path d="M8 15h3"/><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M18.5 19.5l2.5 2.5"/>',
'ti-alert-triangle':'<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/><path d="M12 16h.01"/>',
'ti-check':'<path d="M5 12l5 5l10 -10"/>',
'ti-search':'<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
'ti-share':'<path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/><path d="M8.7 10.7l6.6 -3.4"/><path d="M8.7 13.3l6.6 3.4"/>',
'ti-menu-2':'<path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/>',
'ti-archive':'<path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/><path d="M10 12l4 0"/>',
'ti-folder':'<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"/>',
'ti-help':'<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
'ti-info-circle':'<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/>',
'ti-refresh':'<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>',
'ti-upload':'<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/>',
'ti-note':'<path d="M13 20l7 -7"/><path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"/>',
'ti-paperclip':'<path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/>',
'ti-photo':'<path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>',
'ti-file':'<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>',
'ti-eye':'<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>',
'ti-device-tablet':'<path d="M5 3m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>',
'ti-palette':'<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
'ti-shield':'<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/>',
'ti-language':'<path d="M4 5h7"/><path d="M9 3v2c0 4.418 -2.239 8 -5 8"/><path d="M5 9c0 2.144 2.952 3.908 6.7 4"/><path d="M12 20l4 -9l4 9"/><path d="M19.1 18h-6.2"/>',
'ti-key':'<path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.977a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.977a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"/><path d="M15 9h.01"/>',
'ti-mail':'<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M3 7l9 6l9 -6"/>',
'ti-music':'<path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/><path d="M9 17v-13h10v13"/><path d="M9 8h10"/>',
'ti-camera':'<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"/><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>',
'ti-clipboard':'<path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"/>',
'ti-undo':'<path d="M9 14l-4 -4l4 -4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>'
};
function paintIcons(){
  document.querySelectorAll('i.ti').forEach(el=>{
    const cls=[...el.classList].find(c=>c.startsWith('ti-'));
    if(!cls||el.getAttribute('data-ic')===cls)return;
    const inner=ICONS[cls];
    if(inner){el.innerHTML=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;el.setAttribute('data-ic',cls);}
  });
}
/* --- caixa de vidro 3D (aparece só nos temas Prometeu) ---
   O cartão tem overflow:hidden, e overflow:hidden anula o preserve-3d do
   próprio elemento — então a caixa é montada EM VOLTA dele: um wrapper com a
   perspectiva (.g3box), um miolo que gira (.g3in) e as faces irmãs (.f3), que
   fazem a espessura. Nos temas claro e escuro o wrapper fica sem estilo
   nenhum, e a aparência deles não muda. É idempotente e roda no mesmo
   MutationObserver que pinta os ícones. */
function envolve3D(){
  document.querySelectorAll('.card,.cap-card').forEach(card=>{
    const pai=card.parentElement;
    if(!pai||pai.classList.contains('g3in'))return;
    const box=document.createElement('div');box.className='g3box';
    const inn=document.createElement('div');inn.className='g3in';
    /* o degrau da escada é margem DO CARTÃO; tem de subir para o wrapper,
       senão as faces ficam mais largas que o cartão e sobra moldura vazia */
    [...card.classList].filter(c=>c.indexOf('esc-')===0).forEach(c=>{
      box.classList.add(c);card.classList.remove(c);
    });
    pai.insertBefore(box,card);
    inn.appendChild(card);box.appendChild(inn);
    inn.insertAdjacentHTML('beforeend','<div class="f3 back"></div><div class="f3 right"></div>');
  });
}
new MutationObserver(()=>{paintIcons();envolve3D();if(window.scheduleTranslate)scheduleTranslate();}).observe(document.documentElement,{childList:true,subtree:true});

const CPS=['CP1','CP2','CP3','CP4','CP5','CP6','CP7','CP8','CP9','CP10','CP11'];
let themeIdx=0,_mcb=null,vidTimer=null,curDiscId=null,curAulaId=null,curCapId=null,editVidId=null,demoOn=false;
const THEMES=['L','D','P','P PR','P PB'];
const THEME_META={
  'L':{icon:'ti-sun',label:'Claro',bg:'#F0EDE8'},
  'D':{icon:'ti-moon',label:'Escuro',bg:'#000'},
  'P':{icon:'ti-cpu',label:'Prometeu',bg:'#050b13'},
  'P PR':{icon:'ti-cpu',label:'P. Vermelho',bg:'#120407'},
  'P PB':{icon:'ti-cpu',label:'P. Azul',bg:'#04060f'}
};
const SEED={"disciplinas":[]}; // app entregue vazio — o usuario cria as proprias materias

/* ===== Projetos (anos letivos) — cada projeto guarda um banco completo ===== */
const APP_VERSION='3.2', APP_DATE='julho de 2026';
const PROJ_KEY='prometeu.projects.v1';
let projReg=null;
function loadProjects(){
  try{
    const raw=localStorage.getItem(PROJ_KEY);
    if(raw){const p=JSON.parse(raw);if(p&&Array.isArray(p.projetos)&&p.projetos.length&&p.projetos.some(x=>x.id===p.ativo)){projReg=p;return;}}
  }catch(e){}
  // 1ª execução: cria o projeto padrão; o banco antigo (se existir) é migrado em loadDB()
  const id=nid();
  projReg={projetos:[{id,ano:String(new Date().getFullYear()),instituicao:'',criadoEm:Date.now()}],ativo:id};
  saveProjects();
}
function saveProjects(){try{localStorage.setItem(PROJ_KEY,JSON.stringify(projReg));}catch(e){}}
function projKey(id){return 'prometeu.db.p'+id;}
function dbKey(){return projKey(projReg.ativo);}
function curProj(){return projReg.projetos.find(p=>p.id===projReg.ativo);}
function projNome(p){return (p.ano||'—')+(p.instituicao?' · '+p.instituicao:'');}

/* ===== Persistência (localStorage) ===== */
const DB_KEY='prometeu.db.v2', OLD_DB_KEY='prometeu.db.v1', THEME_KEY='prometeu.theme.v1';
let db;
function loadDB(){
  try{
    const raw=localStorage.getItem(dbKey());
    if(raw){const parsed=JSON.parse(raw);if(parsed&&Array.isArray(parsed.disciplinas)){db=parsed;normalizeDB();return;}}
  }catch(e){}
  // Projeto sem banco próprio (1º uso): migra o banco antigo v2 para dentro do projeto.
  try{
    const raw2=localStorage.getItem(DB_KEY);
    if(raw2){const p2=JSON.parse(raw2);if(p2&&Array.isArray(p2.disciplinas)){db=p2;normalizeDB();saveDB();return;}}
  }catch(e){}
  // Migração da v1: preserva séries criadas pelo usuário (id de timestamp)
  // e substitui as amostras antigas pela base curricular completa.
  let userDiscs=[];
  try{
    const old=localStorage.getItem(OLD_DB_KEY);
    if(old){const p=JSON.parse(old);if(p&&Array.isArray(p.disciplinas))userDiscs=p.disciplinas.filter(d=>d.id>=1e11);}
  }catch(e){}
  db={disciplinas:[...JSON.parse(JSON.stringify(SEED)).disciplinas,...userDiscs]};
  normalizeDB();saveDB();
}
function normalizeDB(){
  db.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>{
    if(typeof c.apresentado!=='boolean')c.apresentado=false;
    if(typeof c.obs!=='string')c.obs='';
    c.videos.forEach(v=>{
      if(typeof v.resumo!=='string')v.resumo='';
      if(!Array.isArray(v.materiais))v.materiais=[];
      if(!Array.isArray(v.arquivos))v.arquivos=[];
      // backups/JSON montados fora do app podem trazer só "dur" (texto) sem
      // "durSeg" (número) — sem isso os totais e o relógio ficam vazios
      if(typeof v.durSeg!=='number'||!isFinite(v.durSeg)||v.durSeg<0)v.durSeg=parseInt(v.durSeg,10)||0;
      if(!v.durSeg&&typeof v.dur==='string')v.durSeg=parseDur(v.dur);
      v.dur=v.durSeg>0?fmtS(v.durSeg):((typeof v.dur==='string'&&v.dur.trim())?v.dur:'--:--');
    });
  })));
}
function capTem(c){return c.videos.length>0||c.videos.some(v=>(v.resumo||'').trim()||(v.materiais||[]).length);}
function aulaPend(a){return a.caps.filter(c=>!c.apresentado).length;}
function aulaMinistrados(a){return a.caps.filter(c=>c.apresentado).length;}
function saveDB(){
  if(demoOn)return; // durante a demonstração o banco é temporário — nunca persiste
  try{localStorage.setItem(dbKey(),JSON.stringify(db));}catch(e){}
}
function loadTheme(){
  try{const t=parseInt(localStorage.getItem(THEME_KEY),10);if(!isNaN(t)&&t>=0&&t<THEMES.length)return t;}catch(e){}
  return 0;
}
function saveTheme(){try{localStorage.setItem(THEME_KEY,String(themeIdx));}catch(e){}}

function nid(){return Date.now()+(Math.random()*9999|0);}
function fmtS(s){if(!s||s<=0)return'--:--';const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;return h>0?`${h}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`:`${m}:${String(ss).padStart(2,'0')}`;}
/* Duração em texto -> segundos. Tolerante aos formatos que uma IA costuma
   escrever num .json ("12 min", "1h05", "PT12M5S", "725"), além do relógio
   mm:ss / hh:mm:ss digitado no formulário. Devolve 0 se não reconhecer. */
function parseDur(str){
  if(typeof str==='number')return isFinite(str)&&str>0?Math.round(str):0;
  if(!str)return 0;
  const s=String(str).trim().toLowerCase().replace(/,/g,'.');
  if(!s)return 0;
  let m;
  // 1) relógio mm:ss ou hh:mm:ss (aceita texto em volta: "12:05 min")
  m=s.match(/(\d{1,3}):([0-5]?\d)(?::([0-5]?\d))?/);
  if(m)return m[3]!==undefined?(+m[1])*3600+(+m[2])*60+(+m[3]):(+m[1])*60+(+m[2]);
  // 2) ISO 8601 do YouTube: PT1H2M3S
  m=s.match(/^p?t(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if(m&&(m[1]||m[2]||m[3]))return (+m[1]||0)*3600+(+m[2]||0)*60+(+m[3]||0);
  // 3) "1h05" / "1 h 05" — minutos colados na hora, sem unidade própria
  m=s.match(/^(\d{1,2})\s*h\s*(\d{1,2})\s*(?:min|m)?$/);
  if(m)return (+m[1])*3600+(+m[2])*60;
  // 4) por extenso: "12 min", "1 hora 5 minutos", "12m5s"
  let seg=0,achou=false;
  [[/(\d+(?:\.\d+)?)\s*(?:horas|hora|hrs|hr|h)(?![a-z])/,3600],
   [/(\d+(?:\.\d+)?)\s*(?:minutos|minuto|mins|min|m)(?![a-z])/,60],
   [/(\d+(?:\.\d+)?)\s*(?:segundos|segundo|segs|seg|s)(?![a-z])/,1]
  ].forEach(u=>{const x=s.match(u[0]);if(x){seg+=parseFloat(x[1])*u[1];achou=true;}});
  if(achou)return Math.round(seg);
  // 5) número puro: acima de 100 só pode ser segundos; até 100, minutos
  m=s.match(/^(\d+(?:\.\d+)?)$/);
  if(m){const n=parseFloat(m[1]);return Math.round(n>100?n:n*60);}
  return 0;
}
function capDurSeg(cap){return cap.videos.reduce((s,v)=>s+(v.durSeg||0),0);}
function aulaDurSeg(a){return a.caps.reduce((s,c)=>s+capDurSeg(c),0);}
function discDurSeg(d){return d.aulas.reduce((s,a)=>s+aulaDurSeg(a),0);}
/* horas já ministradas (capítulos com apresentado=true) — o resto é "não ministrado" */
function capMinSeg(c){return c.apresentado?capDurSeg(c):0;}
function aulaMinSeg(a){return a.caps.reduce((s,c)=>s+capMinSeg(c),0);}
function discMinSeg(d){return d.aulas.reduce((s,a)=>s+aulaMinSeg(a),0);}
function getDisc(id){return db.disciplinas.find(d=>d.id===id);}
function getAula(d,id){return d.aulas.find(a=>a.id===id);}
function getCap(a,id){return a.caps.find(c=>c.id===id);}
function vi(id){return(document.getElementById(id)||{}).value?.trim()||'';}
function scanBar(value,max,seg){
  seg=seg||20;if(!max||max<=0)max=1;
  const lit=value>0?Math.max(1,Math.round((value/max)*seg)):0;
  let h='<div class="scan-bar">';
  for(let i=0;i<seg;i++)h+=`<i class="${i<lit?'on':''}"></i>`;
  return h+'</div>';
}

function applyThemeUI(t){
  const m=THEME_META[t];
  document.getElementById('root').className=t;
  document.body.className=t;                     // fundo do body acompanha o tema (corrige fundo branco)
  document.documentElement.style.background=m.bg; // e o html também (overscroll/rotação)
  ['ti0','ti1','ti2','ti3','ti4','ti5','ti6','ti7'].forEach(id=>{const el=document.getElementById(id);if(el)el.className=`ti ${m.icon}`;});
  const tl=document.getElementById('tl0');if(tl)tl.textContent=(window.tr?tr(m.label):m.label);
  paintIcons();
}
function toggleTheme(){
  themeIdx=(themeIdx+1)%THEMES.length;
  applyThemeUI(THEMES[themeIdx]);
  saveTheme();
}
// dir='back' faz a tela entrar pela esquerda (animação scrBack no styles.css)
function showScreen(id,dir){if(window.mvSair)mvSair(); // trocar de tela encerra o modo mover
  document.querySelectorAll('.screen').forEach(s=>{s.classList.remove('active');s.classList.remove('nav-back');});
  const el=document.getElementById(id);el.classList.toggle('nav-back',dir==='back');el.classList.add('active');
  if(window.posicionarUndo)posicionarUndo();}
function goBack(to){if(document.getElementById('s-vid').classList.contains('active'))limparDraft();closeModal();showScreen(to,'back');if(to==='s-main')renderDiscs();else if(to==='s-series')renderSeries();else if(to==='s-disc')renderAulas();else if(to==='s-aula')renderCaps();}

let curMat=null,MATS=[];
// escada hierárquica: cada item da lista recua um degrau a mais (teto de 4,
// senão numa série com 16 aulas o último cartão ficaria fino demais)
function esc(i){return 'esc-'+Math.min(i,4);}
function discPend(d){return d.aulas.reduce((s,a)=>s+aulaPend(a),0);}
function matKey(d){return (d.nome||'—').toUpperCase();}
function matDiscs(mat){return db.disciplinas.filter(d=>matKey(d)===mat);}

function renderDiscs(){ // TELA 1: apenas as matérias
  saveDB();
  if(window.fireMenuHint)fireMenuHint(); // destaque do ☰ quando a home aparece (1º uso)
  const el=document.getElementById('list-discs');
  if(!db.disciplinas.length){el.innerHTML='<div class="empty"><i class="ti ti-books" aria-hidden="true"></i><p>Nenhuma matéria.<br>Toque em <b>Nova matéria</b>.</p></div>';return;}
  const groups={};
  db.disciplinas.forEach(d=>{(groups[matKey(d)]=groups[matKey(d)]||[]).push(d);});
  MATS=Object.keys(groups);
  const matDur=m=>groups[m].reduce((s,d)=>s+discDurSeg(d),0);
  const maxDur=Math.max(1,...MATS.map(matDur));
  el.innerHTML=MATS.map((m,i)=>{
    const ds=groups[m];
    const nAulas=ds.reduce((s,d)=>s+d.aulas.length,0);
    return `
    <div class="card ${esc(i)}" data-mv="mat" data-mvk="${escH(m)}"><div class="disc-row">
      <div class="disc-accent"></div>
      <div class="disc-body" onclick="openMat(${i})">
        <div class="disc-av">${escH(m.slice(0,3))}</div>
        <div class="disc-info">
          <div class="dn">${escH(m)}</div>
          <div class="dc">${ds.length} série${ds.length!==1?'s':''}/ano${ds.length!==1?'s':''}</div>
          <div class="ds">${nAulas} aula${nAulas!==1?'s':''} · ${fmtS(matDur(m))}${(()=>{const pp=ds.reduce((s,d)=>s+discPend(d),0);return pp>0?` · <span class="ta-pend">● ${pp} a ministrar</span>`:'';})()}</div>
          ${scanBar(matDur(m),maxDur)}
        </div>
      </div>
      <div class="side-btns">
        <button class="iBtn edt" onclick="renameMat(${i})" aria-label="Renomear matéria"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="removeMat(${i})" aria-label="Remover matéria"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`;
  }).join('');
}
function openMat(i){pushNav();curMat=MATS[i];renderSeries();showScreen('s-series');}
function renameMat(i){
  const m=MATS[i];
  openModal(tr('Renomear matéria'),[{id:'mm-n',lbl:'Nome da matéria',val:m}],()=>{
    const novo=vi('mm-n');if(!novo){alert(tr('Informe o nome.'));return;}
    matDiscs(m).forEach(d=>d.nome=novo.toUpperCase());
    if(curMat===m)curMat=novo.toUpperCase();
    closeModal();renderDiscs();
  });
}
function removeMat(i){
  const m=MATS[i];const n=matDiscs(m).length;
  if(!confirm(trf('Remover a matéria "{m}" e sua(s) {n} série(s)?',{m,n})))return;
  // guarda cada série removida COM a posição, para o Desfazer devolver na ordem
  const salvos=[];db.disciplinas.forEach((d,ix)=>{if(matKey(d)===m)salvos.push({ix,d});});
  db.disciplinas=db.disciplinas.filter(d=>matKey(d)!==m);renderDiscs();
  armarUndo(trf('Matéria <b>{m}</b> excluída.',{m:escH(m)}),fidsDe(salvos.map(s=>s.d)),
    ()=>{salvos.forEach(s=>db.disciplinas.splice(s.ix,0,s.d));});
}

const openSeries=new Set(); // séries com a árvore de aulas expandida (estado da sessão)
function toggleTree(id){
  const wrap=document.getElementById('tw-'+id),btn=document.getElementById('tt-'+id);
  if(!wrap)return;
  const open=!openSeries.has(id);
  open?openSeries.add(id):openSeries.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
}
function renderSeries(){ // TELA 2: séries/anos da matéria; aulas recolhidas no botão
  saveDB();
  document.getElementById('mat-ttl').textContent=curMat||'';
  const el=document.getElementById('list-series');
  const ds=matDiscs(curMat);
  refreshColarBtn(); // antes do return de lista vazia: colar numa matéria sem séries é o caso mais útil
  if(!ds.length){el.innerHTML='<div class="empty"><i class="ti ti-books" aria-hidden="true"></i><p>Nenhuma série/ano.<br>Toque em <b>Nova série/ano</b>.</p></div>';return;}
  const maxDur=Math.max(1,...ds.map(discDurSeg));
  el.innerHTML=ds.map((d,i)=>{
    const aulasHtml=d.aulas.length?d.aulas.map(a=>`
      <div class="tree-aula" onclick="curDiscId=${d.id};openAula(${a.id})">
        <div class="ta-line"><b>Aula ${String(a.numero).padStart(2,'0')}</b><span>${escH(a.titulo)}</span>${aulaPend(a)>0?`<span class="ta-pend">● ${aulaPend(a)}</span>`:''}<span class="ta-dur">${fmtS(aulaDurSeg(a))}</span></div>
        ${a.caps.map(c=>`<div class="tree-cap">${escH(c.num||'Cap.')} — ${escH(c.nome)}</div>`).join('')}
      </div>`).join(''):'<div class="tree-empty">Sem aulas ainda</div>';
    const isOpen=openSeries.has(d.id);
    return `
    <div class="card ${esc(i)}" data-mv="serie" data-mvk="${d.id}">
      <div class="disc-row">
        <div class="disc-accent"></div>
        <div class="disc-body" onclick="openDisc(${d.id})">
          <div class="disc-av">${(d.turma||'?').replace(/[^0-9A-Za-zÀ-ú]/g,'').slice(0,3)||'S/A'}</div>
          <div class="disc-info">
            <div class="dn">${escH(d.turma||'Série/Ano não definido')}</div>
            <div class="dc">${escH(d.capitulo||'Sem capítulo')}</div>
            <div class="ds">${d.aulas.length} aula${d.aulas.length!==1?'s':''}${discPend(d)>0?` · <span class="ta-pend">● ${discPend(d)} a ministrar</span>`:''}</div>
            ${(()=>{const tot=discDurSeg(d),min=discMinSeg(d),nao=tot-min;return `<div class="hrs-row">
              <span class="hrs-item"><i class="ti ti-clock" aria-hidden="true"></i><b>${fmtS(tot)}</b> <span class="hrs-l">${tr('Horas totais')}</span></span>
              <span class="hrs-item ok"><i class="ti ti-check" aria-hidden="true"></i><b>${fmtS(min)}</b> <span class="hrs-l">${tr('Ministradas')}</span></span>
              <span class="hrs-item pend"><i class="ti ti-alert-triangle" aria-hidden="true"></i><b>${fmtS(nao)}</b> <span class="hrs-l">${tr('Não ministradas')}</span></span>
            </div>`;})()}
            ${scanBar(discDurSeg(d),maxDur)}
          </div>
        </div>
        <div class="side-btns">
          <button class="iBtn" onclick="openRelatorio(${d.id})" aria-label="Relatório da série"><i class="ti ti-report" aria-hidden="true"></i></button>
          <button class="iBtn" onclick="copiarSerie(${d.id})" aria-label="Copiar série"><i class="ti ti-copy" aria-hidden="true"></i></button>
          <button class="iBtn edt" onclick="openEditDisc(${d.id})" aria-label="Editar"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="iBtn del" onclick="removeDisc(${d.id})" aria-label="Remover"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>
      <button class="tree-toggle${isOpen?' open':''}" id="tt-${d.id}" onclick="toggleTree(${d.id})" aria-expanded="${isOpen}">
        <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
        <span>${d.aulas.length} aula${d.aulas.length!==1?'s':''}</span>
      </button>
      <div class="tree-wrap${isOpen?' open':''}" id="tw-${d.id}"><div class="tree-inner"><div class="tree-aulas">${aulasHtml}</div></div></div>
    </div>`;
  }).join('');
  paintIcons();
}
function openAddSerie(){
  if(!exigirAtivacao())return;
  openModal(trf('Nova série/ano — {m}',{m:curMat}),[{id:'md-t',lbl:'Série/Ano',ph:'Ex: 6° ANO'},{id:'md-c',lbl:'Capítulo / unidade',ph:'Ex: Cap. 01 — Brasil Colônia'}],()=>{
    const turma=vi('md-t');if(!turma){alert(tr('Informe a série/ano.'));return;}
    db.disciplinas.push({id:nid(),nome:curMat,turma,capitulo:vi('md-c'),aulas:[]});closeModal();renderSeries();
  });
}
/* ===== Copiar e colar uma série inteira (com aulas, capítulos e vídeos) =====
   A "área de transferência" fica no localStorage: sobrevive a fechar o app e
   permite colar numa matéria diferente — ou até em outro ano letivo. */
const CLIP_KEY='prometeu.clip.serie.v1';
function lerClip(){try{return JSON.parse(localStorage.getItem(CLIP_KEY)||'null');}catch(e){return null;}}
// gerador de id que nunca repete um id já usado no banco (nid() sozinho pode
// repetir quando dezenas de ids nascem no mesmo milissegundo)
function geradorId(){
  const usados=new Set();
  db.disciplinas.forEach(d=>{usados.add(d.id);(d.aulas||[]).forEach(a=>{usados.add(a.id);(a.caps||[]).forEach(c=>{usados.add(c.id);(c.videos||[]).forEach(v=>usados.add(v.id));});});});
  return()=>{let n;do{n=nid();}while(usados.has(n));usados.add(n);return n;};
}
function copiarSerie(id){
  const d=getDisc(id);if(!d)return;
  try{localStorage.setItem(CLIP_KEY,JSON.stringify({turma:d.turma,capitulo:d.capitulo,aulas:d.aulas}));}
  catch(e){alert(tr('Não foi possível copiar: a memória do navegador está cheia.'));return;}
  refreshColarBtn();
  showToast(trf('Série <b>{s}</b> copiada. Abra a matéria de destino e toque em <b>Colar</b>.',{s:escH(d.turma||'')}),6000);
}
// mostra/esconde o botão Colar e escreve nele o nome da série copiada
function refreshColarBtn(){
  const b=document.getElementById('fab-colar');if(!b)return;
  const c=lerClip();
  b.hidden=!c;
  if(c)document.getElementById('fab-colar-lbl').textContent=trf('Colar {s}',{s:c.turma||tr('série')});
}
function colarSerie(){
  if(!exigirAtivacao())return;
  const c=lerClip();if(!c){showToast(tr('Nada foi copiado ainda.'),3000);return;}
  const novoId=geradorId();
  // ids novos em todos os níveis; os fid dos anexos são MANTIDOS de propósito —
  // o blob no IndexedDB é o mesmo arquivo, compartilhado (igual ao duplicar projeto)
  const nova={id:novoId(),nome:curMat,turma:c.turma||'',capitulo:c.capitulo||'',
    aulas:(c.aulas||[]).map(a=>({id:novoId(),numero:a.numero,titulo:a.titulo||'',
      caps:(a.caps||[]).map(cp=>({id:novoId(),num:cp.num||'',nome:cp.nome||'',apresentado:!!cp.apresentado,obs:cp.obs||'',
        videos:(cp.videos||[]).map(v=>({...v,id:novoId(),
          materiais:(v.materiais||[]).map(m=>({...m})),
          arquivos:(v.arquivos||[]).map(f=>({...f}))}))}))}))};
  db.disciplinas.push(nova);
  renderSeries();
  showToast(trf('Série <b>{s}</b> colada em {m}.',{s:escH(nova.turma),m:escH(curMat||'')}),4000);
}
function openDisc(id){pushNav();curDiscId=id;renderAulas();showScreen('s-disc');}
function openAddDisc(){if(!exigirAtivacao())return;openModal(tr('Nova matéria'),[{id:'md-n',lbl:'Nome da matéria',ph:'Ex: HISTÓRIA'},{id:'md-t',lbl:'Série/Ano',ph:'Ex: 6° ANO'},{id:'md-c',lbl:'Capítulo / unidade',ph:'Ex: Cap. 01 — Brasil Colônia'}],()=>{
  const nome=vi('md-n');if(!nome){alert(tr('Informe o nome.'));return;}
  db.disciplinas.push({id:nid(),nome:nome.toUpperCase(),turma:vi('md-t'),capitulo:vi('md-c'),aulas:[]});closeModal();renderDiscs();
});}
function openEditDisc(id){const d=getDisc(id);openModal(tr('Editar série/ano'),[{id:'md-n',lbl:'Matéria',val:d.nome},{id:'md-t',lbl:'Série/Ano',val:d.turma},{id:'md-c',lbl:'Capítulo / unidade',val:d.capitulo}],()=>{
  d.nome=(vi('md-n')||d.nome).toUpperCase();d.turma=vi('md-t');d.capitulo=vi('md-c');closeModal();
  if(document.getElementById('s-series').classList.contains('active'))renderSeries();else renderDiscs();
  if(curDiscId===id)renderAulas();
});}
function editCurDisc(){openEditDisc(curDiscId);}
function removeDisc(id){
  if(!confirm(tr('Remover esta série/ano e todas as suas aulas?')))return;
  const ix=db.disciplinas.findIndex(d=>d.id===id);if(ix<0)return;
  const d=db.disciplinas[ix];
  db.disciplinas.splice(ix,1);renderSeries();
  armarUndo(trf('Série <b>{s}</b> excluída.',{s:escH(d.turma||'')}),fidsDe([d]),()=>{db.disciplinas.splice(ix,0,d);});
}

function renderAulas(){
  saveDB();
  const disc=getDisc(curDiscId);if(!disc)return;
  document.getElementById('disc-ttl').textContent=`${disc.nome}${disc.turma?' — '+disc.turma:''}`;
  document.getElementById('disc-cap-lbl').textContent=disc.capitulo||'Toque para editar';
  const el=document.getElementById('list-aulas');
  if(!disc.aulas.length){el.innerHTML='<div class="empty"><i class="ti ti-video-off" aria-hidden="true"></i><p>Nenhuma aula.<br>Toque em <b>Nova aula</b>.</p></div>';return;}
  const maxDur=Math.max(1,...disc.aulas.map(aulaDurSeg));
  el.innerHTML=disc.aulas.map((a,i)=>`
    <div class="card ${esc(i)}${aulaPend(a)===0&&aulaMinistrados(a)>0?' ok-min':''}" data-mv="aula" data-mvk="${a.id}"><div class="aula-row">
      <div class="aula-nc" onclick="openAula(${a.id})" aria-label="Abrir aula ${String(a.numero).padStart(2,'0')}"><div class="num-c">A${String(a.numero).padStart(2,'0')}</div></div>
      <div class="aula-body" onclick="openAula(${a.id})">
        <div class="at">${escH(a.titulo)}</div>
        <div class="as">${a.caps.length} cap. · ${a.caps.reduce((s,c)=>s+c.videos.length,0)} vídeos · ${fmtS(aulaDurSeg(a))}${aulaPend(a)>0?` · <span class="ta-pend">● ${aulaPend(a)} a ministrar</span>`:''}</div>
        ${scanBar(aulaDurSeg(a),maxDur,16)}
        <div class="ac">${(()=>{const cps=a.caps.map((c,i)=>c.videos.length?`CP${i+1}`:null).filter(Boolean);return cps.length?cps.join(' · '):'Sem conteúdo nos capítulos';})()}</div>
      </div>
      <div class="side-btns">
        <button class="iBtn edt" onclick="openEditAula(${a.id})" aria-label="Editar"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="removeAula(${a.id})" aria-label="Remover"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`).join('');
}
function openAula(id){pushNav();curAulaId=id;selCP=null;renderCaps();showScreen('s-aula');}
function openAddAula(){
  if(!exigirAtivacao())return;
  const disc=getDisc(curDiscId);
  openModal(tr('Nova aula'),[{id:'ma-t',lbl:'Título da aula',ph:'Ex: A Sociedade Patriarcal'}],()=>{
    const titulo=vi('ma-t');if(!titulo){alert(tr('Informe o título.'));return;}
    const num=(disc.aulas.reduce((m,a)=>Math.max(m,a.numero),0))+1;
    disc.aulas.push({id:nid(),numero:num,titulo,cps:[],caps:[]});closeModal();renderAulas();
  });
}
function openEditAula(id){const disc=getDisc(curDiscId);const aula=getAula(disc,id);
  openModal(tr('Editar aula'),[{id:'ma-t',lbl:'Título da aula',val:aula.titulo}],()=>{
    aula.titulo=vi('ma-t')||aula.titulo;closeModal();renderAulas();if(curAulaId===id)renderCaps();
  });}
function editCurAula(){openEditAula(curAulaId);}
function removeAula(id){
  const disc=getDisc(curDiscId);if(!confirm(tr('Remover esta aula?')))return;
  const ix=disc.aulas.findIndex(a=>a.id===id);if(ix<0)return;
  const aula=disc.aulas[ix];
  const nums=disc.aulas.map(a=>({a,n:a.numero})); // a renumeração também tem de voltar no Desfazer
  disc.aulas.splice(ix,1);disc.aulas.forEach((a,i)=>a.numero=i+1);renderAulas();
  armarUndo(trf('Aula <b>{t}</b> excluída.',{t:escH(aula.titulo||'')}),fidsDe([{aulas:[aula]}]),
    ()=>{disc.aulas.splice(ix,0,aula);nums.forEach(x=>x.a.numero=x.n);});
}

const openCaps=new Set(); // capítulos com a lista de vídeos expandida (estado da sessão)
function toggleCap(id){
  const wrap=document.getElementById('twc-'+id),btn=document.getElementById('ttc-'+id);
  if(!wrap)return;
  const open=!openCaps.has(id);
  open?openCaps.add(id):openCaps.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
}
/* ===== Observações do capítulo (janela recolhida por padrão) ===== */
const openObs=new Set();let obsTimer=null;
function toggleObs(id){
  const wrap=document.getElementById('two-'+id),btn=document.getElementById('tto-'+id);
  if(!wrap)return;
  const open=!openObs.has(id);
  open?openObs.add(id):openObs.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
  if(open){const ta=wrap.querySelector('textarea');if(ta)setTimeout(()=>ta.focus(),140);}
}
function setObs(id,val){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,id);
  if(!cap)return;
  cap.obs=val;
  clearTimeout(obsTimer);obsTimer=setTimeout(saveDB,400); // salva sem re-renderizar (não interrompe a digitação)
  const dot=document.getElementById('obsdot-'+id);if(dot)dot.style.display=val.trim()?'inline':'none';
}
function renderCaps(){
  saveDB();
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);if(!aula)return;
  document.getElementById('aula-num-ttl').textContent=trf('Aula {n}',{n:String(aula.numero).padStart(2,'0')});
  document.getElementById('aula-titulo-lbl').textContent=aula.titulo;
  const totalVids=aula.caps.reduce((s,c)=>s+c.videos.length,0);
  const pend=aulaPend(aula),feitos=aulaMinistrados(aula),comConteudo=pend+feitos;
  const pendTxt=comConteudo>0?(pend>0?` · <span class="pend-badge" style="display:inline-flex">● ${pend} a ministrar</span>`:' · <span class="done-badge" style="display:inline-flex">✓ tudo ministrado</span>'):'';
  document.getElementById('aula-info-lbl').innerHTML=`${aula.caps.length} cap. · ${totalVids} vídeo${totalVids!==1?'s':''} · ${fmtS(aulaDurSeg(aula))}${pendTxt}`;
  paintIcons();
  const nCPs=Math.max(11,aula.caps.length);
  document.getElementById('chips-cp').innerHTML=Array.from({length:nCPs},(_,i)=>{
    const cap=aula.caps[i];
    const lit=!!(cap&&capTem(cap));
    const sel=selCP===i+1;
    return `<span class="chip${lit?' on':''}${sel?' sel':''}" id="cp-${i+1}" ${cap?`onclick="selectCP(${i+1},${cap.id})"`:''} role="button" aria-pressed="${sel}">CP${i+1}</span>`;
  }).join('');
  const el=document.getElementById('list-caps');
  if(!aula.caps.length){el.innerHTML='<div class="empty"><i class="ti ti-player-play" aria-hidden="true"></i><p>Nenhum capítulo ainda.<br>Toque em <b>Novo capítulo</b>.</p></div>';return;}
  el.innerHTML=aula.caps.map((cap,ci)=>{
    const durSeg=capDurSeg(cap);
    const vidsHtml=cap.videos.map((vid,vi2)=>`
      <div class="vid-row" data-mv="vid" data-mvk="${vid.id}" data-mvc="${cap.id}">
        <div class="vid-badge"><div class="vid-num">V${vi2+1}</div></div>
        <div class="vid-info">
          <div class="vid-nome">${escH(vid.nome||'Vídeo '+(vi2+1))}</div>
          <div class="vid-dur"><i class="ti ti-clock" style="font-size:10px" aria-hidden="true"></i> ${escH(vid.dur||'--:--')}<span class="vid-badges">${vid.resumo?'<i class="ti ti-file-text" aria-hidden="true" title="Tem resumo"></i>':''}${vid.materiais&&vid.materiais.length?`<i class="ti ti-book" aria-hidden="true"></i>${vid.materiais.length}`:''}${vid.arquivos&&vid.arquivos.length?`<i class="ti ti-paperclip" aria-hidden="true" title="Documentos anexados"></i>${vid.arquivos.length}`:''}</span></div>
        </div>
        <div class="vid-btns">
          ${urlSegura(vid.link)
            ?`<button class="iBtn-sm play" onclick="abrirVidLink(${cap.id},${vid.id})" aria-label="Abrir vídeo"><i class="ti ti-player-play" aria-hidden="true"></i></button>`
            :`<button class="iBtn-sm play" onclick="ytSearch(${cap.id},${vid.id})" aria-label="Buscar este vídeo no YouTube" title="Sem link — buscar no YouTube"><i class="ti ti-search" aria-hidden="true"></i></button>`}
          <button class="iBtn-sm edt" onclick="goToFormVid(${cap.id},${vid.id})" aria-label="Editar vídeo"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="iBtn-sm del" onclick="removeVid(${cap.id},${vid.id})" aria-label="Remover vídeo"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>`).join('');
    const pend=!cap.apresentado;
    return `
    <div class="cap-card${pend?' pend':''}${!pend&&capTem(cap)?' ok-min':''} ${esc(ci)}" id="cc-${cap.id}" data-mv="cap" data-mvk="${cap.id}">
      <div class="cap-header">
        <div class="cap-accent"></div>
        <div class="cap-hinfo">
          <div class="cap-num">${escH(cap.num||'Cap.')}</div>
          <div class="cap-nome">${escH(cap.nome)}</div>
          <div class="cap-total">
            <i class="ti ti-files" style="font-size:11px" aria-hidden="true"></i>
            ${cap.videos.length} vídeo${cap.videos.length!==1?'s':''}
            &nbsp;·&nbsp;
            <i class="ti ti-clock" style="font-size:11px" aria-hidden="true"></i>
            <span class="cap-total-dur">${durSeg>0?fmtS(durSeg):'--:--'}</span>
            ${pend?'<span class="ta-pend" style="margin-left:6px">● A MINISTRAR</span>':'<span style="margin-left:6px;color:var(--txt3)">✓ ministrado</span>'}
          </div>
        </div>
        <div class="cap-hbtns">
          <button class="iBtn edt" onclick="openEditCap(${cap.id})" aria-label="Editar capítulo"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="cap-check${cap.apresentado?'':' checked'}" onclick="toggleApresentado(${cap.id})" aria-label="${cap.apresentado?'Marcar como a ministrar':'Marcar como ministrado'}" role="checkbox" aria-checked="${!cap.apresentado}" title="Marcado = a ministrar; vazio = já ministrado"><span class="box"><i class="ti ti-check" aria-hidden="true"></i></span></button>
          <button class="iBtn del" onclick="removeCap(${cap.id})" aria-label="Remover capítulo"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="cap-tabs">
        <button class="tree-toggle${openCaps.has(cap.id)?' open':''}" id="ttc-${cap.id}" onclick="toggleCap(${cap.id})" aria-expanded="${openCaps.has(cap.id)}">
          <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
          <span>${cap.videos.length} vídeo${cap.videos.length!==1?'s':''}</span>
        </button>
        <button class="tree-toggle obs-toggle${openObs.has(cap.id)?' open':''}" id="tto-${cap.id}" onclick="toggleObs(${cap.id})" aria-expanded="${openObs.has(cap.id)}">
          <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
          <i class="ti ti-note" aria-hidden="true"></i>
          <span>Observações</span>
          <span class="obs-dot" id="obsdot-${cap.id}" style="display:${(cap.obs||'').trim()?'inline':'none'}">●</span>
        </button>
      </div>
      <div class="tree-wrap${openCaps.has(cap.id)?' open':''}" id="twc-${cap.id}"><div class="tree-inner">
        <div class="vid-list">${vidsHtml}</div>
        <button class="add-vid-btn" onclick="goToFormVid(${cap.id},null)">
          <i class="ti ti-plus" aria-hidden="true"></i> Adicionar vídeo neste capítulo
        </button>
      </div></div>
      <div class="tree-wrap${openObs.has(cap.id)?' open':''}" id="two-${cap.id}"><div class="tree-inner">
        <div class="obs-box"><textarea class="finput obs-ta" handwriting="false" placeholder="Anotações deste capítulo (lembretes, tarefas, páginas do livro…)" oninput="setObs(${cap.id},this.value)">${escH(cap.obs||'')}</textarea></div>
      </div></div>
    </div>`;
  }).join('')+`<button class="add-cap-btn" onclick="openAddCap()"><i class="ti ti-plus" aria-hidden="true"></i> Novo capítulo</button>`;
}

let selCP=null;
function selectCP(n,capId){
  selCP=(selCP===n)?null:n; // tocar de novo desmarca
  // atualiza só as classes dos chips (sem re-render, preservando animações)
  document.querySelectorAll('#chips-cp .chip').forEach((el,i)=>el.classList.toggle('sel',selCP===i+1));
  if(selCP===null)return;
  // expande o capítulo (se recolhido) e rola até ele
  if(!openCaps.has(capId))toggleCap(capId);
  const card=document.getElementById('cc-'+capId);
  if(card)setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'start'}),80);
}
function openAddCap(){
  if(!exigirAtivacao())return;
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);
  openModal(tr('Novo capítulo'),[{id:'cf-num',lbl:'Número / identificador',ph:'Ex: Cap. 01',val:`Cap. ${String(aula.caps.length+1).padStart(2,'0')}`},{id:'cf-nome',lbl:'Nome do capítulo',ph:'Ex: Ciclo do Pau Brasil'}],()=>{
    const nome=vi('cf-nome');if(!nome){alert(tr('Informe o nome.'));return;}
    const capId=nid();
    aula.caps.push({id:capId,num:vi('cf-num'),nome,videos:[]});
    openCaps.add(capId); // capítulo novo abre expandido
    closeModal();renderCaps();
  });
}
function openEditCap(capId){const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  openModal(tr('Editar capítulo'),[{id:'cf-num',lbl:'Número / identificador',val:cap.num},{id:'cf-nome',lbl:'Nome do capítulo',val:cap.nome}],()=>{
    cap.num=vi('cf-num');cap.nome=vi('cf-nome')||cap.nome;closeModal();renderCaps();
  });}
function removeCap(capId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);
  if(!confirm(tr('Remover este capítulo e todos os seus vídeos?')))return;
  const ix=aula.caps.findIndex(c=>c.id===capId);if(ix<0)return;
  const cap=aula.caps[ix];
  aula.caps.splice(ix,1);renderCaps();
  armarUndo(trf('Capítulo <b>{c}</b> excluído.',{c:escH(cap.nome||cap.num||'')}),fidsDe([{aulas:[{caps:[cap]}]}]),
    ()=>{aula.caps.splice(ix,0,cap);});
}
function toggleApresentado(capId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  if(!cap)return;
  cap.apresentado=!cap.apresentado; // marcado(checked)=a ministrar; vazio=ministrado
  renderCaps();
}
function abrirVidLink(capId,vidId){ // abre o link SEM passar a URL por atributo HTML (evita injeção — E2)
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  const v=cap&&cap.videos.find(x=>x.id===vidId);
  const u=v?urlSegura(v.link):'';
  if(u)window.open(u,'_blank','noopener');
}
function ytSearch(capId,vidId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  const v=cap&&cap.videos.find(x=>x.id===vidId);if(!v)return;
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(v.nome||''),'_blank');
}
function ytSearchForm(){
  const n=vi('vf-nome');
  if(!n){alert(tr('Preencha o nome do vídeo primeiro.'));return;}
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(n),'_blank');
}
function removeVid(capId,vidId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  if(!confirm(tr('Remover este vídeo?')))return;
  const ix=cap.videos.findIndex(v=>v.id===vidId);if(ix<0)return;
  const v=cap.videos[ix];
  cap.videos.splice(ix,1);renderCaps();
  armarUndo(trf('Vídeo <b>{v}</b> excluído.',{v:escH(v.nome||'')}),(v.arquivos||[]).map(x=>x.fid),
    ()=>{cap.videos.splice(ix,0,v);});
}

let formMats=[];
function goToFormVid(capId,vidId){
  if(vidId==null&&!exigirAtivacao())return; // só bloqueia vídeo NOVO; editar existente é livre
  curCapId=capId;editVidId=vidId;
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  const vid=vidId?cap.videos.find(x=>x.id===vidId):null;
  const numVid=vid?cap.videos.indexOf(vid)+1:cap.videos.length+1;
  document.getElementById('vid-form-ttl').textContent=vid?trf('Editar V{v} — {c}',{v:numVid,c:cap.num}):trf('Novo vídeo — {c}',{c:cap.num||cap.nome});
  document.getElementById('vf-nome').value=vid?.nome||'';
  document.getElementById('vf-link').value=vid?.link||'';
  document.getElementById('vf-dur').value=vid&&vid.dur&&vid.dur!=='--:--'?vid.dur:'';
  document.getElementById('vf-resumo').value=vid?.resumo||'';
  formMats=(vid?.materiais||[]).map(m=>({titulo:m.titulo||'',link:m.link||''}));
  formArqs=(vid?.arquivos||[]).map(a=>({fid:a.fid,titulo:a.titulo||'',autor:a.autor||'',nomeArq:a.nomeArq||'',tipo:a.tipo||'',tamanho:a.tamanho||0}));
  matsOpen=false; // seção de material começa recolhida
  const twm=document.getElementById('tw-mats'),ttm=document.getElementById('tt-mats');
  if(twm)twm.classList.remove('open');if(ttm)ttm.classList.remove('open');
  resumoOpen=!!(vid?.resumo); // resumo recolhido; abre se o vídeo já tem texto
  const twr=document.getElementById('tw-resumo'),ttr=document.getElementById('tt-resumo');
  if(twr)twr.classList.toggle('open',resumoOpen);
  if(ttr){ttr.classList.toggle('open',resumoOpen);ttr.setAttribute('aria-expanded',resumoOpen);}
  renderMats();renderArqs();updPg();
  document.getElementById('vf-hint').textContent=vid?.link?tr('Link cadastrado'):'';
  // vazio de propósito: o campo "Duração" ao lado já mostra o mesmo valor.
  // Esta linha só reaparece quando o YouTube devolve a duração detectada.
  document.getElementById('vf-dur-info').innerHTML='';
  document.getElementById('vf-spin').style.display='none';
  if(vid)autoFetchDurSeVazio(vid,vidId);
  pushNav();showScreen('s-vid');
  // Sem foco automático de propósito: na maioria das vezes o professor só vai
  // COLAR o link, e o teclado subindo sozinho tapava metade do formulário.
}

/* ===== Resumo: contador de páginas (≈3.000 caracteres/página A4) ===== */
function updPg(){
  const len=document.getElementById('vf-resumo').value.length;
  const pg=len===0?0:Math.max(1,Math.ceil(len/3000));
  const el=document.getElementById('vf-pg');
  // só os caracteres: o "≈ N pág." já está no título da seção, logo acima
  el.textContent=trf('{n}/9000 caracteres',{n:len});
  el.classList.toggle('warn',pg>=3);
  const rc=document.getElementById('resumo-count');
  if(rc)rc.textContent=len?trf('Resumo do vídeo (≈ {p} pág.)',{p:pg}):tr('Resumo do vídeo');
}

/* ===== Resumo (seção recolhível no formulário do vídeo) ===== */
let resumoOpen=false;
function toggleResumo(){
  resumoOpen=!resumoOpen;
  const w=document.getElementById('tw-resumo'),t=document.getElementById('tt-resumo');
  if(w)w.classList.toggle('open',resumoOpen);
  if(t){t.classList.toggle('open',resumoOpen);t.setAttribute('aria-expanded',resumoOpen);}
}

/* ===== Materiais didáticos (seção recolhível no formulário do vídeo) ===== */
let matsOpen=false;
function toggleMats(){
  matsOpen=!matsOpen;
  const w=document.getElementById('tw-mats'),t=document.getElementById('tt-mats');
  if(w)w.classList.toggle('open',matsOpen);
  if(t){t.classList.toggle('open',matsOpen);t.setAttribute('aria-expanded',matsOpen);}
}
function updMatCount(){
  const n=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim()).length+formArqs.length;
  const el=document.getElementById('mats-count');
  if(el)el.textContent=n?trf('Material didático e documentos ({n})',{n}):tr('Material didático e documentos');
}
function renderMats(){
  const box=document.getElementById('vf-mats');
  box.innerHTML=formMats.map((m,i)=>`
    <div class="mat-row">
      <input class="finput mat-t" placeholder="Título (ex: Casa-Grande & Senzala)" value="${escH(m.titulo||'')}" oninput="formMats[${i}].titulo=this.value"/>
      <button class="mat-x mat-s" onclick="buscarMat(${i})" aria-label="Buscar este material em PDF na internet" title="Buscar PDF grátis na internet"><i class="ti ti-search" aria-hidden="true"></i></button>
      <button class="mat-x" onclick="formMats.splice(${i},1);renderMats()" aria-label="Remover material"><i class="ti ti-x" aria-hidden="true"></i></button>
    </div>`).join('');
  updMatCount();
  agendarDraft();
}
function buscarMat(i){ // busca o livro/material em PDF gratuito na internet
  const m=formMats[i]||{};
  const t=(m.titulo||'').trim();
  if(!t){alert(tr('Preencha o título do material primeiro.'));return;}
  const q=`"${t}" pdf`;
  window.open('https://www.google.com/search?q='+encodeURIComponent(q),'_blank');
}
function addMat(){if(!matsOpen)toggleMats();formMats.push({titulo:'',link:''});renderMats();
  const rows=document.querySelectorAll('#vf-mats .mat-t');if(rows.length)rows[rows.length-1].focus();}

/* ===== Documentos anexados (PDF / imagem / Word) — blobs no IndexedDB ===== */
let formArqs=[];
const ARQ_MAX=10, ARQ_MB=100;
let _idb=null;
function idbOpen(){
  return new Promise((res,rej)=>{
    if(_idb)return res(_idb);
    if(!('indexedDB' in window))return rej(new Error('IndexedDB indisponível'));
    const q=indexedDB.open('prometeu-files',1);
    q.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains('files'))d.createObjectStore('files',{keyPath:'fid'});};
    q.onsuccess=()=>{_idb=q.result;res(_idb);};
    q.onerror=()=>rej(q.error);
  });
}
function fPut(rec){return idbOpen().then(d=>new Promise((res,rej)=>{const t=d.transaction('files','readwrite');t.objectStore('files').put(rec);t.oncomplete=res;t.onerror=()=>rej(t.error);}));}
function fGet(fid){return idbOpen().then(d=>new Promise((res,rej)=>{const r=d.transaction('files').objectStore('files').get(fid);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);}));}
function fDel(fids){if(!fids.length)return Promise.resolve();return idbOpen().then(d=>new Promise((res,rej)=>{const t=d.transaction('files','readwrite');const s=t.objectStore('files');fids.forEach(f=>s.delete(f));t.oncomplete=res;t.onerror=()=>rej(t.error);}));}
function fKeys(){return idbOpen().then(d=>new Promise((res,rej)=>{const r=d.transaction('files').objectStore('files').getAllKeys();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error);}));}
async function sweepOrphans(){ // apaga do IndexedDB arquivos que nenhum projeto referencia mais
  const usados=new Set();
  const coleta=data=>{try{data.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>usados.add(x.fid))))));}catch(e){}};
  projReg.projetos.forEach(p=>{
    if(p.id===projReg.ativo)coleta(db);
    else{try{coleta(JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}'));}catch(e){}}
  });
  formArqs.forEach(a=>usados.add(a.fid)); // protege anexos de um formulário ainda aberto
  try{const d=JSON.parse(localStorage.getItem(DRAFT_KEY)||'null');((d&&d.arqs)||[]).forEach(a=>usados.add(a.fid));}catch(e){} // e do rascunho guardado
  coleta({disciplinas:[{aulas:(lerClip()||{}).aulas||[]}]}); // e da série copiada (colar depois de excluir a original)
  if(undoAcao&&undoAcao.fids)undoAcao.fids.forEach(f=>usados.add(f)); // e do que ainda dá para desfazer
  const keys=await fKeys();
  await fDel(keys.filter(k=>!usados.has(k)));
}
let _sweepT=null;
// ms maior nas exclusões com Desfazer: o blob tem de sobreviver até o aviso sumir
function agendarLimpeza(ms){clearTimeout(_sweepT);_sweepT=setTimeout(()=>sweepOrphans().catch(()=>{}),ms||800);}
function pickArq(){
  if(formArqs.length>=ARQ_MAX){alert(trf('Limite de {n} documentos por vídeo.',{n:ARQ_MAX}));return;}
  document.getElementById('vf-file').click();
}
function pickFoto(){
  if(formArqs.length>=ARQ_MAX){alert(trf('Limite de {n} documentos por vídeo.',{n:ARQ_MAX}));return;}
  document.getElementById('vf-foto').click();
}
function arqTipoOk(f){ // validação em JS (o accept do input é curto p/ o seletor abrir em qualquer Android)
  if(/^(application\/pdf|image\/|audio\/)/.test(f.type))return true;
  if(/(msword|wordprocessingml)/.test(f.type))return true;
  return /\.(pdf|docx?|jpe?g|png|gif|webp|bmp|heic|mp3|m4a|aac|ogg|opus|wav|3gp|amr)$/i.test(f.name||'');
}
async function onArqPick(input){
  const files=[...(input.files||[])];input.value='';
  for(const f of files){
    if(formArqs.length>=ARQ_MAX){alert(trf('Limite de {n} documentos por vídeo — os demais não foram importados.',{n:ARQ_MAX}));break;}
    if(!arqTipoOk(f)){alert(trf('"{f}" não é um tipo aceito (PDF, imagem, Word ou áudio).',{f:f.name}));continue;}
    if(f.size>ARQ_MB*1024*1024){alert(trf('"{f}" passa de {n} MB e não foi importado.',{f:f.name,n:ARQ_MB}));continue;}
    const fid=nid();
    try{await fPut({fid,nome:f.name,tipo:f.type,blob:f});}
    catch(e){alert(tr('Não foi possível guardar o arquivo neste navegador.'));break;}
    formArqs.push({fid,titulo:f.name.replace(/\.[^.]+$/,''),autor:'',nomeArq:f.name,tipo:f.type,tamanho:f.size});
  }
  renderArqs();
}
function arqIcon(t){return /pdf/.test(t)?'ti-file-text':/^image\//.test(t)?'ti-photo':/^audio\//.test(t)?'ti-music':'ti-file';}
function fmtKB(n){return n>=1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';}
function arqBadge(a){ // pré-visualização: miniatura p/ imagem, selo colorido p/ os demais tipos
  // src transparente: o blob real vem do IndexedDB depois, e sem isso o
  // navegador desenha o ícone de "imagem quebrada" durante a espera
  if(/^image\//.test(a.tipo))return `<img class="arq-thumb" id="arqth-${a.fid}" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">`;
  if(/pdf/.test(a.tipo)||/\.pdf$/i.test(a.nomeArq))return '<span class="arq-badge b-pdf" aria-hidden="true">PDF</span>';
  if(/(msword|wordprocessingml)/.test(a.tipo)||/\.docx?$/i.test(a.nomeArq))return '<span class="arq-badge b-doc" aria-hidden="true">DOC</span>';
  if(/^audio\//.test(a.tipo)||/\.(mp3|m4a|aac|ogg|opus|wav|3gp|amr)$/i.test(a.nomeArq))return '<span class="arq-badge b-aud" aria-hidden="true">♪</span>';
  return `<i class="ti ${arqIcon(a.tipo)} arq-ic" aria-hidden="true"></i>`;
}
function renderArqs(){
  const box=document.getElementById('vf-arqs');if(!box)return;
  box.innerHTML=formArqs.map((a,i)=>`
    <div class="arq-row">
      ${arqBadge(a)}
      <div class="arq-campos">
        <input class="finput" placeholder="Título" value="${escH(a.titulo||'')}" oninput="formArqs[${i}].titulo=this.value"/>
        <div class="arq-meta">${escH(a.nomeArq)} · ${fmtKB(a.tamanho)}</div>
      </div>
      <div class="arq-btns">
        <button class="iBtn-sm play" onclick="abrirArq(${a.fid})" aria-label="Abrir arquivo"><i class="ti ti-eye" aria-hidden="true"></i></button>
        <button class="iBtn-sm play" onclick="shareArq(${a.fid})" aria-label="Compartilhar arquivo" title="Compartilhar (WhatsApp, e-mail…)"><i class="ti ti-share" aria-hidden="true"></i></button>
        <button class="iBtn-sm del" onclick="formArqs.splice(${i},1);renderArqs()" aria-label="Remover arquivo"><i class="ti ti-x" aria-hidden="true"></i></button>
      </div>
    </div>`).join('');
  const c=document.getElementById('arq-count');if(c)c.textContent=`${formArqs.length}/${ARQ_MAX}`;
  updMatCount();
  paintIcons();
  agendarDraft();
  formArqs.forEach(a=>{ // carrega as miniaturas de imagem a partir do IndexedDB
    if(!/^image\//.test(a.tipo))return;
    fGet(a.fid).then(r=>{
      const img=document.getElementById('arqth-'+a.fid);
      if(!img||!r||!r.blob)return;
      const url=URL.createObjectURL(r.blob);
      img.onload=()=>URL.revokeObjectURL(url);
      img.src=url;
    }).catch(()=>{});
  });
}
function baixarBlob(r){
  const url=URL.createObjectURL(r.blob);
  const a=document.createElement('a');a.href=url;a.download=r.nome||'arquivo';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),60000);
}
async function abrirArq(fid){
  let r=null;
  try{r=await fGet(fid);}catch(e){}
  if(!r||!r.blob){alert(tr('Arquivo não encontrado no armazenamento deste navegador.'));return;}
  try{
    const url=URL.createObjectURL(r.blob);
    const visual=/pdf/.test(r.tipo)||/^image\//.test(r.tipo)||/^audio\//.test(r.tipo);
    if(visual){
      const w=window.open(url,'_blank');
      if(!w&&confirm(tr('A visualização não abriu (pop-up bloqueado). Baixar o arquivo em vez disso?')))baixarBlob(r);
    }
    else baixarBlob(r);
    setTimeout(()=>URL.revokeObjectURL(url),60000);
  }catch(e){alert(tr('Não foi possível abrir este arquivo. Teste com outro documento — se o outro abrir, o problema é o arquivo em si, não o app.'));}
}
async function shareArq(fid){
  try{
    const r=await fGet(fid);
    if(!r||!r.blob){alert(tr('Arquivo não encontrado no armazenamento deste navegador.'));return;}
    const file=new File([r.blob],r.nome||'documento',{type:r.tipo||r.blob.type||''});
    if(navigator.canShare&&navigator.canShare({files:[file]})){
      try{await navigator.share({files:[file],title:r.nome||''});}catch(e){} // usuário cancelar é normal
      return;
    }
    // sem share sheet (ex.: PC) — baixa para enviar por WhatsApp Web, e-mail etc.
    alert(tr('Este navegador não tem a janela de compartilhamento — o arquivo será baixado para você enviar por WhatsApp Web, e-mail etc.'));
    baixarBlob(r);
  }catch(e){alert(tr('Não foi possível compartilhar o arquivo.'));}
}

/* ===== Exportação do resumo (Word / PDF) — offline ===== */
function buildResumoHTML(){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,curCapId);
  const nome=vi('vf-nome')||tr('Vídeo sem nome');
  const resumo=document.getElementById('vf-resumo').value.trim();
  const mats=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim());
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const link=vi('vf-link');
  const prof=(curProj()||{}).professor||'';
  const aulaVal=`${String(aula.numero).padStart(2,'0')} — ${aula.titulo||''}`;
  const capVal=`${cap.num||''} ${cap.nome||''}`.trim();
  const linkRow=link?`<div class="hrow"><b>${tr('Link')}:</b> ${urlSegura(link)?`<a href="${esc(link)}">${esc(link)}</a>`:esc(link)}</div>`:'';
  const paras=resumo?resumo.split(/\n{2,}/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join(''):`<p><i>${tr('(Sem resumo preenchido)')}</i></p>`;
  const matsHtml=mats.length?`<h2>${tr('Material didático')}</h2><ul>${mats.map(m=>`<li><b>${esc(m.titulo||'—')}</b>${m.link?' — '+(/^https?:\/\//i.test(m.link)?`<a href="${esc(m.link)}">${esc(m.link)}</a>`:esc(m.link)):''}</li>`).join('')}</ul>`:'';
  const arqsHtml=formArqs.length?`<h2>${tr('Documentos anexados')}</h2><ul>${formArqs.map(a=>`<li><b>${esc(a.titulo||a.nomeArq)}</b>${a.autor?' — '+esc(a.autor):''} <span style="color:#777">(${esc(a.nomeArq)})</span></li>`).join('')}</ul>`:'';
  return `<!DOCTYPE html><html lang="${LANG_META[LANG].tag}"><head><meta charset="utf-8"><title>${esc(nome)}</title>
<style>
@page{size:A4;margin:2.5cm}
body{font-family:Georgia,'Times New Roman',serif;font-size:12pt;line-height:1.5;color:#111;max-width:17cm;margin:auto}
.hdr{font-size:10.5pt;color:#333;border-bottom:1px solid #999;padding-bottom:8pt;margin-bottom:14pt}
.hrow{margin:1pt 0}
.hrow b{color:#111}
a{color:#1155cc}
h2{font-size:13pt;margin-top:18pt}
ul{padding-left:18pt}
</style></head><body>
<div class="hdr">
<div class="hrow"><b>${tr('Matéria')}:</b> ${esc(disc.nome||'')}</div>
<div class="hrow"><b>${tr('Serie')}:</b> ${esc(disc.turma||'')}</div>
<div class="hrow"><b>${tr('Professor')}:</b> ${esc(prof)}</div>
<div class="hrow"><b>${tr('Aula')}:</b> ${esc(aulaVal)}</div>
<div class="hrow"><b>${tr('Cap.')}:</b> ${esc(capVal)}</div>
<div class="hrow"><b>${tr('Título Do Vídeo')}:</b> ${esc(nome)}</div>
${linkRow}
</div>
${paras}
${matsHtml}
${arqsHtml}
</body></html>`;
}
function nomeArquivoResumo(){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,curCapId);
  const nome=vi('vf-nome')||tr('video');
  const partes=[disc?.nome,disc?.turma,'Aula '+String(aula.numero).padStart(2,'0'),aula?.titulo,cap?.num,cap?.nome,nome].filter(Boolean).join(' ');
  return (partes.toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').replace(/^-+|-+$/g,'').slice(0,150))||'video';
}
function expWord(){
  const html=buildResumoHTML();
  const blob=new Blob(['\ufeff'+html],{type:'application/msword'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`resumo-${nomeArquivoResumo()}.doc`;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}
function expPDF(){
  const w=window.open('','_blank');
  if(!w){alert(tr('Permita pop-ups para exportar em PDF.'));return;}
  w.document.write(buildResumoHTML());
  w.document.close();
  w.focus();
  setTimeout(()=>w.print(),350); // na caixa de impressão, escolha "Salvar como PDF"
}

/* ===== Reordenar blocos (segurar o bloco → modo mover) =====
   Segurar o dedo (ou a caneta) ~0,5 s em cima de um cartão acende o "modo
   mover": o cartão fica destacado e aparecem ▲ ▼ e Concluir por cima dele.
   Funciona nos 5 níveis — cada cartão carrega data-mv (o tipo) e data-mvk
   (a chave); o vídeo carrega também data-mvc (o capítulo dele). Depois de
   mover, a tela é redesenhada e o cartão é reencontrado por esse par, e não
   por posição (a posição mudou, é justamente o que a gente acabou de fazer). */
const MV_TIPOS=['mat','serie','aula','cap','vid'];
let mvAlvo=null,mvTimer=null,mvP0=null,mvSkipAte=0;
function mvCard(){
  if(!mvAlvo)return null;
  const els=document.querySelectorAll('[data-mv="'+mvAlvo.tipo+'"]');
  for(const el of els){
    if(el.dataset.mvk!==mvAlvo.chave)continue;
    if(mvAlvo.capId&&el.dataset.mvc!==mvAlvo.capId)continue;
    return el;
  }
  return null;
}
function mvLimpar(){
  document.querySelectorAll('.mv-on').forEach(c=>{
    c.classList.remove('mv-on');
    const b=c.querySelector('.mv-bar');if(b)b.remove();
  });
}
function mvPintar(){
  mvLimpar();
  const card=mvCard();if(!card)return;
  card.classList.add('mv-on');
  const bar=document.createElement('div');
  bar.className='mv-bar';
  bar.innerHTML='<div class="mv-row">'+
    `<button class="mv-b" onclick="mvMover(-1)" aria-label="${tr('Mover para cima')}"><i class="ti ti-chevron-up" aria-hidden="true"></i></button>`+
    `<button class="mv-b" onclick="mvMover(1)" aria-label="${tr('Mover para baixo')}"><i class="ti ti-chevron-down" aria-hidden="true"></i></button>`+
    `<button class="mv-b ok" onclick="mvSair()"><i class="ti ti-check" aria-hidden="true"></i>${tr('Concluir')}</button>`+
    '</div>';
  card.appendChild(bar);
  paintIcons();
}
function mvEntrar(el){
  const tipo=el.dataset.mv;
  if(MV_TIPOS.indexOf(tipo)<0)return;
  mvAlvo={tipo,chave:el.dataset.mvk,capId:el.dataset.mvc||null};
  if(navigator.vibrate){try{navigator.vibrate(15);}catch(e){}} // aviso tátil no tablet
  mvPintar();mvVerBotoes();
}
/* os ▲ ▼ ficam no ALTO do cartão; se o topo dele estiver escondido (atrás da
   barra de título ou abaixo da dobra), traz o cartão para um lugar visível */
function mvVerBotoes(){
  const c=mvCard();if(!c)return;
  const t=c.getBoundingClientRect().top;
  if(t<64||t>window.innerHeight-90)window.scrollBy({top:t-84,behavior:'smooth'});
}
function mvSair(){
  if(!mvAlvo)return;
  mvAlvo=null;mvLimpar();
}
// pisca o cartão quando já é o primeiro (ou o último) da lista
function mvFimDaLista(){
  const c=mvCard();if(!c)return;
  c.classList.add('mv-nope');setTimeout(()=>c.classList.remove('mv-nope'),360);
}
function mvSwap(arr,i,dir){
  const j=i+dir;
  if(i<0||j<0||j>=arr.length)return false;
  const [x]=arr.splice(i,1);arr.splice(j,0,x);return true;
}
function mvMover(dir){
  if(!mvAlvo)return;
  const f={mat:mvMoverMat,serie:mvMoverSerie,aula:mvMoverAula,cap:mvMoverCap,vid:mvMoverVid}[mvAlvo.tipo];
  if(!f||!f(dir)){mvFimDaLista();return;}
  saveDB();
  rerenderAtual();
  mvPintar();mvVerBotoes();
}
function mvMoverMat(dir){
  // matéria não é um registro: é um grupo de db.disciplinas com o mesmo nome.
  // Mover = reordenar os grupos e remontar a lista na ordem nova.
  const ordem=[],grupos={};
  db.disciplinas.forEach(d=>{const k=matKey(d);if(!grupos[k]){grupos[k]=[];ordem.push(k);}grupos[k].push(d);});
  if(!mvSwap(ordem,ordem.indexOf(mvAlvo.chave),dir))return false;
  db.disciplinas=ordem.reduce((acc,k)=>acc.concat(grupos[k]),[]);
  return true;
}
function mvMoverSerie(dir){
  // a série só troca de lugar com a vizinha DA MESMA matéria; as outras
  // matérias não podem sair do lugar, então trocamos as duas posições globais
  const pos=[];db.disciplinas.forEach((d,ix)=>{if(matKey(d)===curMat)pos.push(ix);});
  const i=pos.findIndex(ix=>String(db.disciplinas[ix].id)===mvAlvo.chave),j=i+dir;
  if(i<0||j<0||j>=pos.length)return false;
  const a=pos[i],b=pos[j],tmp=db.disciplinas[a];
  db.disciplinas[a]=db.disciplinas[b];db.disciplinas[b]=tmp;
  return true;
}
function mvMoverAula(dir){
  const disc=getDisc(curDiscId);if(!disc)return false;
  if(!mvSwap(disc.aulas,disc.aulas.findIndex(a=>String(a.id)===mvAlvo.chave),dir))return false;
  disc.aulas.forEach((a,i)=>a.numero=i+1); // a numeração acompanha a ordem
  return true;
}
function mvMoverCap(dir){
  const aula=getAula(getDisc(curDiscId),curAulaId);if(!aula)return false;
  return mvSwap(aula.caps,aula.caps.findIndex(c=>String(c.id)===mvAlvo.chave),dir);
}
function mvMoverVid(dir){
  const aula=getAula(getDisc(curDiscId),curAulaId);if(!aula)return false;
  const cap=aula.caps.find(c=>String(c.id)===mvAlvo.capId);if(!cap)return false;
  return mvSwap(cap.videos,cap.videos.findIndex(v=>String(v.id)===mvAlvo.chave),dir);
}
/* Detecção da pressão longa: 520 ms parado (tolerância de 12 px, senão rolar a
   tela com o dedo em cima de um cartão viraria "mover"). */
function mvCancelaTimer(){if(mvTimer){clearTimeout(mvTimer);mvTimer=null;}mvP0=null;}
document.addEventListener('pointerdown',e=>{
  mvCancelaTimer();
  if(e.button)return; // só o botão principal / o toque
  if(mvAlvo)return;   // já está no modo mover
  const t=e.target;if(!t||!t.closest)return;
  if(t.closest('button,input,textarea,select,a,.mv-bar'))return; // botão é botão
  const alvo=t.closest('[data-mv]');if(!alvo)return;
  mvP0={x:e.clientX,y:e.clientY};
  mvTimer=setTimeout(()=>{
    mvTimer=null;
    mvSkipAte=Date.now()+800; // engole o clique que vem junto com essa pressão
    mvEntrar(alvo);
  },520);
},true);
document.addEventListener('pointermove',e=>{
  if(!mvTimer||!mvP0)return;
  if(Math.abs(e.clientX-mvP0.x)>12||Math.abs(e.clientY-mvP0.y)>12)mvCancelaTimer();
},true);
['pointerup','pointercancel','scroll','wheel'].forEach(ev=>document.addEventListener(ev,mvCancelaTimer,true));
document.addEventListener('click',e=>{
  if(mvSkipAte&&Date.now()<mvSkipAte){mvSkipAte=0;e.stopPropagation();e.preventDefault();return;}
  if(!mvAlvo)return;
  if(e.target.closest&&e.target.closest('.mv-bar'))return; // ▲ ▼ e Concluir funcionam
  mvSair();e.stopPropagation();e.preventDefault(); // tocar fora só encerra o modo
},true);

/* ===== Toast de notificação ===== */
function showToast(html,ms){
  const zone=document.getElementById('toast-zone');
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<i class="ti ti-alert-triangle" aria-hidden="true"></i><div>${html}</div>`;
  t.onclick=()=>dismiss();
  zone.appendChild(t);paintIcons();
  let gone=false;
  function dismiss(){if(gone)return;gone=true;t.classList.add('out');setTimeout(()=>t.remove(),320);}
  setTimeout(dismiss,ms||6000);
}

/* ===== Desfazer exclusão (todas as camadas + anos letivos) =====
   Guarda só a ÚLTIMA exclusão e mostra a barra fixa no alto do app, logo
   abaixo da barra de título. A barra NÃO some sozinha: fica até o professor
   desfazer, fechar no X, ou excluir outra coisa (o aviso de 8 s passava
   despercebido no tablet). Enquanto ela estiver de pé o sweepOrphans()
   preserva os anexos do que foi excluído — ver a linha do undoAcao.fids em
   sweepOrphans(). */
let undoAcao=null;
function undoBar(){return document.getElementById('undo-bar');}
/* A faixa é UMA só, mas cada tela tem a sua barra de título. Por isso ela é
   MUDADA DE LUGAR: entra sempre logo depois da barra de título da tela aberta.
   (Deixá-la solta no topo do #root empurrava e cobria o título e o botão ☰.) */
function posicionarUndo(){
  const bar=undoBar();if(!bar||bar.hidden)return;
  const tela=document.querySelector('.screen.active');if(!tela)return;
  const tb=tela.querySelector('.topbar');if(!tb)return;
  if(bar.previousElementSibling!==tb)tb.insertAdjacentElement('afterend',bar);
}
function armarUndo(msg,fids,restaurar){
  undoAcao={restaurar,fids:fids||[]};
  const bar=undoBar();
  if(bar){
    bar.innerHTML=`<i class="ti ti-trash" aria-hidden="true"></i>`+
      `<div class="ub-txt">${msg}</div>`+
      `<button class="ub-undo" onclick="desfazerExclusao()"><i class="ti ti-undo" aria-hidden="true"></i>${tr('Desfazer')}</button>`+
      `<button class="ub-x" onclick="fecharUndo()" aria-label="${tr('Fechar')}"><i class="ti ti-x" aria-hidden="true"></i></button>`;
    bar.hidden=false;posicionarUndo();paintIcons();
  }
  agendarLimpeza(1500);
}
function fecharUndo(){
  undoAcao=null;
  const bar=undoBar();if(bar){bar.hidden=true;bar.innerHTML='';}
  agendarLimpeza();
}
function desfazerExclusao(){
  if(!undoAcao){fecharUndo();return;}
  const a=undoAcao;undoAcao=null;
  const bar=undoBar();if(bar){bar.hidden=true;bar.innerHTML='';}
  a.restaurar();
  rerenderAtual();
  agendarLimpeza();
  showToast(tr('Restaurado.'),3000);
}
// re-renderiza a tela aberta — a exclusão pode ter vindo de qualquer nível
function rerenderAtual(){
  const at=document.querySelector('.screen.active');if(!at)return;
  const f={'s-main':renderDiscs,'s-series':renderSeries,'s-disc':renderAulas,'s-aula':renderCaps,'s-proj':renderProjetos}[at.id];
  if(f)f();else saveDB();
}
// fids dos anexos de um pedaço qualquer do banco (para o sweep não apagar)
function fidsDe(lista){
  const out=[];
  (lista||[]).forEach(d=>(d.aulas||[]).forEach(a=>(a.caps||[]).forEach(c=>(c.videos||[]).forEach(v=>(v.arquivos||[]).forEach(x=>out.push(x.fid))))));
  return out;
}

/* ===== Relatório da série/ano (estrutura completa) ===== */
const escH=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
/* Só aceita http(s) — bloqueia javascript:, data: etc. Usar sempre que uma URL
   guardada for parar em href/window.open (E2 do roteiro de segurança). */
function urlSegura(u){u=String(u||'').trim();return /^https?:\/\//i.test(u)?u:'';}
/* Ao salvar um link digitado: completa o https:// de "youtube.com/..." e
   descarta o que não é link navegável (javascript:, data:, texto solto). */
function normalizarLink(u){
  u=String(u||'').trim();
  if(!u)return '';
  if(/^https?:\/\//i.test(u))return u;
  if(/^[\w.-]+\.[a-z]{2,}([\/?#:]|$)/i.test(u))return 'https://'+u;
  return '';
}
let relDiscId=null;
function openRelatorio(discId){
  relDiscId=discId;
  const d=getDisc(discId);if(!d)return;
  const nCaps=d.aulas.reduce((s,a)=>s+a.caps.length,0);
  const nVids=d.aulas.reduce((s,a)=>s+a.caps.reduce((x,c)=>x+c.videos.length,0),0);
  document.getElementById('rmodal-title').textContent=trf('Relatório — {d}',{d:`${d.nome} · ${d.turma||tr('Série única')}`});
  document.getElementById('rmodal-sub').textContent=[trf('{n} aulas',{n:d.aulas.length}),trf('{n} capítulos',{n:nCaps}),trf('{n} vídeos',{n:nVids}),fmtS(discDurSeg(d))].join(' · ');
  pushNav();document.getElementById('rmodal').classList.add('open');paintIcons();
}
function closeRModal(){document.getElementById('rmodal').classList.remove('open');relDiscId=null;}
function buildRelatorioHTML(discId){
  const d=getDisc(discId);
  const nCaps=d.aulas.reduce((s,a)=>s+a.caps.length,0);
  const nVids=d.aulas.reduce((s,a)=>s+a.caps.reduce((x,c)=>x+c.videos.length,0),0);
  const hoje=new Date().toLocaleDateString(LANG_META[LANG].tag);
  let corpo='';
  d.aulas.forEach(a=>{
    corpo+=`<h2>${trf('Aula {n}',{n:String(a.numero).padStart(2,'0')})} — ${escH(a.titulo)} <span class="dur">${fmtS(aulaDurSeg(a))}</span></h2>`;
    if(!a.caps.length){corpo+=`<p class="vazio">${tr('Sem capítulos.')}</p>`;return;}
    a.caps.forEach(c=>{
      const st=c.apresentado?` <span class="ok">${tr('✓ ministrado')}</span>`:` <span class="pend">${tr('● a ministrar')}</span>`;
      corpo+=`<h3>${escH(c.num||'Cap.')} — ${escH(c.nome)}${st}</h3>`;
      if((c.obs||'').trim())corpo+=`<p class="obs">${tr('Obs.:')} ${escH(c.obs.trim()).replace(/\n/g,'<br>')}</p>`;
      if(!c.videos.length){corpo+=`<p class="vazio">${tr('Sem vídeos.')}</p>`;return;}
      corpo+='<ul>';
      c.videos.forEach((v,i)=>{
        corpo+=`<li><b>V${i+1}</b> · ${escH(v.nome)} — <span class="dur">${escH(v.dur||'--:--')}</span>`;
        if(v.link)corpo+=`<br>Link: ${urlSegura(v.link)?`<a href="${escH(v.link)}">${escH(v.link)}</a>`:escH(v.link)}`;
        if((v.resumo||'').trim())corpo+=`<br><i>${trf('Resumo disponível ({n} caracteres)',{n:v.resumo.trim().length})}</i>`;
        if((v.materiais||[]).length){
          corpo+='<br>'+tr('Material didático')+':<ul>'+v.materiais.map(m=>`<li>${escH(m.titulo||'—')}${m.link?' — '+(/^https?:\/\//i.test(m.link)?`<a href="${escH(m.link)}">${escH(m.link)}</a>`:escH(m.link)):''}</li>`).join('')+'</ul>';
        }
        if((v.arquivos||[]).length){
          corpo+='<br>'+tr('Documentos anexados')+':<ul>'+v.arquivos.map(x=>`<li>${escH(x.titulo||x.nomeArq)}${x.autor?' — '+escH(x.autor):''}</li>`).join('')+'</ul>';
        }
        corpo+='</li>';
      });
      corpo+='</ul>';
    });
  });
  return `<!DOCTYPE html><html lang="${LANG_META[LANG].tag}"><head><meta charset="utf-8"><title>${trf('Relatório — {d}',{d:escH(d.nome)+' '+escH(d.turma||'')})}</title>
<style>
@page{size:A4;margin:2.2cm}
body{font-family:Georgia,'Times New Roman',serif;font-size:11.5pt;line-height:1.45;color:#111;max-width:17cm;margin:auto}
h1{font-size:17pt;margin:0 0 2pt}
.meta{font-size:10pt;color:#555;border-bottom:1px solid #999;padding-bottom:8pt;margin-bottom:14pt}
h2{font-size:13pt;margin:16pt 0 4pt;border-bottom:1px solid #ccc;padding-bottom:2pt}
h3{font-size:11.5pt;margin:9pt 0 2pt}
ul{padding-left:16pt;margin:2pt 0 6pt}
li{margin-bottom:4pt}
.dur{font-family:monospace;color:#333}
.link{font-size:9.5pt;color:#444;word-break:break-all}
a{color:#1155cc;word-break:break-all}
.pend{color:#c0392b;font-size:9.5pt;font-weight:bold}
.ok{color:#2e7d32;font-size:9.5pt}
.vazio{color:#888;font-style:italic;margin:2pt 0}
.obs{color:#555;font-style:italic;margin:2pt 0;font-size:10pt}
</style></head><body>
<h1>${escH(d.nome)} — ${escH(d.turma||tr('Série única'))}</h1>
<div class="meta">${escH(d.capitulo||'')} · ${trf('{n} aulas',{n:d.aulas.length})} · ${trf('{n} capítulos',{n:nCaps})} · ${trf('{n} vídeos',{n:nVids})} · ${tr('duração total')} ${fmtS(discDurSeg(d))} · ${tr('gerado em')} ${hoje}</div>
${corpo}
</body></html>`;
}
function relWord(){
  if(relDiscId==null)return;
  const d=getDisc(relDiscId);
  const blob=new Blob(['\ufeff'+buildRelatorioHTML(relDiscId)],{type:'application/msword'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`relatorio-${(d.nome+'-'+(d.turma||'')).toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').slice(0,60)}.doc`;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  closeRModal();
}
function relPDF(){
  if(relDiscId==null)return;
  const w=window.open('','_blank');
  if(!w){alert(tr('Permita pop-ups para gerar o PDF.'));return;}
  w.document.write(buildRelatorioHTML(relDiscId));
  w.document.close();w.focus();
  setTimeout(()=>w.print(),350);
  closeRModal();
}

/* ===== Detecção de vídeo duplicado na mesma série/ano ===== */
function findDuplicado(disc,nome,link,ignoreVidId){
  if(!link)return null; // sem link, não alarma (títulos repetidos legítimos existem)
  const n=nome.trim().toLowerCase(),l=link.trim();
  for(const a of disc.aulas)for(const c of a.caps)for(const v of c.videos){
    if(v.id!==ignoreVidId&&(v.link||'').trim()===l&&(v.nome||'').trim().toLowerCase()===n)
      return {aula:a,cap:c};
  }
  return null;
}
function ytId(url){const m=url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/);return m?m[1]:null;}
function onVidLink(){
  clearTimeout(vidTimer);
  const link=document.getElementById('vf-link').value.trim();const id=ytId(link);
  const hint=document.getElementById('vf-hint');
  if(id){hint.textContent=tr('Link do YouTube reconhecido — buscando título…');document.getElementById('vf-spin').style.display='flex';vidTimer=setTimeout(()=>fetchYT(id),1400);}
  else{hint.textContent=link.startsWith('http')?tr('Link detectado.'):'';document.getElementById('vf-spin').style.display='none';}
}
/* Duração automática via YouTube IFrame API (sem chave; opcional — sem internet segue o manual) */
let _ytApiP=null;
function ytApi(){
  if(window.YT&&window.YT.Player)return Promise.resolve(window.YT);
  if(_ytApiP)return _ytApiP;
  _ytApiP=new Promise((res,rej)=>{
    const prev=window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady=()=>{try{prev&&prev();}catch(e){}res(window.YT);};
    const s=document.createElement('script');
    s.src='https://www.youtube.com/iframe_api';
    s.onerror=()=>rej(new Error('offline'));
    document.head.appendChild(s);
    setTimeout(()=>rej(new Error('timeout')),8000);
  });
  _ytApiP.catch(()=>{_ytApiP=null;}); // permite tentar de novo se falhou (ex.: voltou a internet)
  return _ytApiP;
}
function fetchYTDur(id){
  return ytApi().then(YT=>new Promise((res,rej)=>{
    const host=document.createElement('div');
    host.style.cssText='position:fixed;left:-9999px;top:0;width:2px;height:2px;overflow:hidden';
    document.body.appendChild(host);
    const alvo=document.createElement('div');host.appendChild(alvo);
    let done=false,p=null;
    const fim=seg=>{if(done)return;done=true;try{p&&p.destroy();}catch(e){}host.remove();seg>0?res(seg):rej(new Error('sem duração'));};
    try{
      p=new YT.Player(alvo,{videoId:id,playerVars:{mute:1,playsinline:1},events:{
        onReady:e=>fim(Math.round(e.target.getDuration()||0)),
        onError:()=>fim(0)
      }});
    }catch(e){fim(0);}
    setTimeout(()=>fim(0),8000);
  }));
}
/* Duração ausente (ex.: vídeo veio de um .json editado por IA) — busca sozinho ao abrir o vídeo */
function autoFetchDurSeVazio(vid,vidId){
  if(!vid||vid.durSeg>0)return;
  const id=ytId(vid.link||'');
  if(!id)return;
  document.getElementById('vf-spin').style.display='flex';
  fetchYTDur(id).then(seg=>{
    if(editVidId!==vidId)return; // saiu da tela ou trocou de vídeo enquanto buscava
    const el=document.getElementById('vf-dur');
    if(seg>0&&el&&!el.value.trim()){
      el.value=fmtS(seg);
      document.getElementById('vf-dur-info').innerHTML=`<i class="ti ti-clock" aria-hidden="true"></i> ${escH(fmtS(seg))}`;
      document.getElementById('vf-hint').textContent=tr('Duração obtida automaticamente.');
    }
  }).catch(()=>{}).finally(()=>{
    if(editVidId===vidId)document.getElementById('vf-spin').style.display='none';
  });
}
async function fetchYT(id){
  try{const r=await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);if(r.ok){const j=await r.json();if(j.title&&!document.getElementById('vf-nome').value.trim())document.getElementById('vf-nome').value=j.title;}}catch(e){}
  let durOk=false;
  try{
    const seg=await fetchYTDur(id);
    const el=document.getElementById('vf-dur');
    if(seg>0&&el&&!el.value.trim()){el.value=fmtS(seg);durOk=true;}
  }catch(e){}
  document.getElementById('vf-spin').style.display='none';
  document.getElementById('vf-hint').textContent=durOk?tr('Título e duração obtidos.'):tr('Título obtido. Preencha a duração se necessário.');
}
function salvarVid(){
  const nome=document.getElementById('vf-nome').value.trim();
  const link=normalizarLink(document.getElementById('vf-link').value); // completa https:// e descarta o que não é link (E2)
  const durStr=document.getElementById('vf-dur').value.trim();
  const resumo=document.getElementById('vf-resumo').value.trim();
  const materiais=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim())
    .map(m=>({titulo:(m.titulo||'').trim(),link:(m.link||'').trim()}));
  if(!nome){alert(tr('Informe o nome do vídeo.'));document.getElementById('vf-nome').focus();return;}
  const durSeg=parseDur(durStr);const dur=durSeg>0?fmtS(durSeg):(durStr||'--:--');
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,curCapId);
  const dup=findDuplicado(disc,nome,link,editVidId);
  const arquivos=formArqs.map(a=>({fid:a.fid,titulo:(a.titulo||'').trim()||a.nomeArq,autor:(a.autor||'').trim(),nomeArq:a.nomeArq,tipo:a.tipo,tamanho:a.tamanho}));
  if(editVidId){const v=cap.videos.find(x=>x.id===editVidId);v.nome=nome;v.link=link;v.dur=dur;v.durSeg=durSeg;v.resumo=resumo;v.materiais=materiais;v.arquivos=arquivos;}
  else cap.videos.push({id:nid(),nome,link,dur,durSeg,resumo,materiais,arquivos});
  openCaps.add(curCapId); // mostra o capítulo do vídeo salvo
  formArqs=[];agendarLimpeza(); // limpa anexos que foram removidos no formulário
  goBack('s-aula');
  if(dup)showToast(trf('<b>Vídeo duplicado nesta série:</b> mesmo nome e link já existem na <b>Aula {a}</b> · {c}.',{a:String(dup.aula.numero).padStart(2,'0'),c:escH(dup.cap.num||'Cap.')+' — '+escH(dup.cap.nome)}),7000);
}

/* ===== Rascunho automático do formulário de vídeo =====
   O resto do app salva a cada ação; só aqui dava para perder texto digitado.
   O vídeo continua entrando na lista apenas ao tocar "Salvar vídeo". */
const DRAFT_KEY='prometeu.vidDraft.v1';
let _draftT=null;
function draftTemConteudo(d){
  return !!((d.nome||'').trim()||(d.link||'').trim()||(d.dur||'').trim()||(d.resumo||'').trim()
    ||(d.mats||[]).some(m=>(m.titulo||'').trim()||(m.link||'').trim())||(d.arqs||[]).length);
}
function salvarDraft(){
  if(demoOn)return;
  const tela=document.getElementById('s-vid');
  if(!tela||!tela.classList.contains('active'))return;
  const d={proj:projReg.ativo,disc:curDiscId,aula:curAulaId,cap:curCapId,vid:editVidId,
    nome:vi('vf-nome'),link:vi('vf-link'),dur:vi('vf-dur'),
    resumo:(document.getElementById('vf-resumo')||{}).value||'',
    mats:formMats,arqs:formArqs,ts:Date.now()};
  try{
    if(draftTemConteudo(d))localStorage.setItem(DRAFT_KEY,JSON.stringify(d));
    else localStorage.removeItem(DRAFT_KEY);
  }catch(e){}
}
function agendarDraft(){clearTimeout(_draftT);_draftT=setTimeout(salvarDraft,600);}
function limparDraft(){clearTimeout(_draftT);try{localStorage.removeItem(DRAFT_KEY);}catch(e){}}
function checarDraft(){ // no boot: oferece restaurar um formulário que ficou aberto
  let d=null;try{d=JSON.parse(localStorage.getItem(DRAFT_KEY)||'null');}catch(e){}
  if(!d||!draftTemConteudo(d))return;
  if(d.proj!==projReg.ativo)return; // rascunho de outro projeto — fica guardado até ele ser aberto
  const disc=getDisc(d.disc);const aula=disc&&getAula(disc,d.aula);const cap=aula&&getCap(aula,d.cap);
  if(!cap){limparDraft();return;} // a estrutura foi apagada/alterada
  if(!confirm(trf('Você tinha um vídeo não salvo ("{n}"). Restaurar o rascunho?',{n:(d.nome||'').trim()||tr('sem nome')}))){limparDraft();return;}
  if(d.vid&&!cap.videos.some(v=>v.id===d.vid))d.vid=null;
  curMat=matKey(disc);curDiscId=d.disc;curAulaId=d.aula;
  goToFormVid(d.cap,d.vid||null);
  if(!document.getElementById('s-vid').classList.contains('active'))return; // ex.: ativação exigida
  document.getElementById('vf-nome').value=d.nome||'';
  document.getElementById('vf-link').value=d.link||'';
  document.getElementById('vf-dur').value=d.dur||'';
  document.getElementById('vf-resumo').value=d.resumo||'';
  formMats=(d.mats||[]).map(m=>({titulo:m.titulo||'',link:m.link||''}));
  formArqs=(d.arqs||[]).map(a=>({...a}));
  renderMats();renderArqs();updPg();
  if((d.resumo||'').trim()&&!resumoOpen)toggleResumo();
}

function openModal(title,fields,cb){
  pushNav();
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-fields').innerHTML=fields.map(f=>{
    const campo=f.type==='select'
      ?`<select class="finput" id="${f.id}">${(f.opts||[]).map(o=>`<option value="${escH(o.v)}"${o.v===(f.val||'')?' selected':''}>${escH(o.t)}</option>`).join('')}</select>`
      :`<input class="finput" id="${f.id}" placeholder="${escH(f.ph||'')}" value="${escH(f.val||'')}"/>`;
    return `<div style="margin-bottom:12px"><label class="flbl">${escH(f.lbl)}</label>${campo}</div>`;
  }).join('');
  _mcb=cb;document.getElementById('modal-ok').onclick=()=>_mcb&&_mcb();
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>{const el=document.getElementById(fields[0].id);if(el){el.focus();if(fields[0].val&&typeof el.select==='function')el.select();}},60);
}
function closeModal(){document.getElementById('modal').classList.remove('open');_mcb=null;}
function modalOverlayClick(e){if(e.target===document.getElementById('modal'))closeModal();}

/* ===== Tela de projetos (anos letivos) ===== */
function formacaoOpts(){
  return [
    {v:'',t:tr('Não informado')},
    {v:'tecnico',t:tr('Técnico')},
    {v:'graduado',t:tr('Graduado')},
    {v:'pos',t:tr('Pós-graduando')},
    {v:'mestrado',t:tr('Mestrado')},
    {v:'doutorado',t:tr('Doutorado')}
  ];
}
function formacaoLbl(v){const o=formacaoOpts().find(x=>x.v===v);return o?o.t:'';}
function openProjetos(){pushNav();closeMenu();renderProjetos();showScreen('s-proj');}
function renderProjetos(){
  saveDB();
  const el=document.getElementById('list-proj');
  el.innerHTML=projReg.projetos.map((p,i)=>{
    const ativo=p.id===projReg.ativo;
    let nd=0,na=0;
    try{const d=ativo?db:JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}');nd=d.disciplinas.length;na=d.disciplinas.reduce((s,x)=>s+x.aulas.length,0);}catch(e){}
    return `<div class="card${ativo?' proj-ativo':''} ${esc(i)}"><div class="disc-row">
      <div class="disc-accent"></div>
      <div class="disc-body" onclick="ativarProjeto(${p.id})">
        <div class="disc-av"><i class="ti ti-archive" aria-hidden="true"></i></div>
        <div class="disc-info">
          <div class="dn">${trf('Ano letivo {a}',{a:escH(p.ano||'—')})}</div>
          <div class="dc">${escH(p.instituicao||'Instituição não informada')}</div>
          <div class="ds">${nd} matéria${nd!==1?'s':''}/série${nd!==1?'s':''} · ${na} aula${na!==1?'s':''}${ativo?' · <b>EM USO</b>':' · toque para abrir'}</div>
        </div>
      </div>
      <div class="side-btns">
        <button class="iBtn" onclick="exportBackup(${p.id})" aria-label="Exportar arquivo deste projeto"><i class="ti ti-download" aria-hidden="true"></i></button>
        <button class="iBtn edt" onclick="editProjeto(${p.id})" aria-label="Editar projeto"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn" onclick="duplicarProjeto(${p.id})" aria-label="Duplicar projeto"><i class="ti ti-copy" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="delProjeto(${p.id})" aria-label="Excluir projeto"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`;
  }).join('');
  paintIcons();
}
function novoProjeto(){
  closeMenu();
  if(!exigirAtivacao())return;
  openModal(tr('Criar novo projeto (ano letivo)'),[
    {id:'pj-ano',lbl:'Ano',ph:'Ex: '+new Date().getFullYear(),val:String(new Date().getFullYear())},
    {id:'pj-inst',lbl:'Instituição',ph:'Ex: Escola Estadual …'},
    {id:'pj-prof',lbl:tr('Professor'),ph:tr('Ex: Nome do professor')},
    {id:'pj-form',lbl:tr('Formação'),type:'select',opts:formacaoOpts()}
  ],()=>{
    const ano=vi('pj-ano');if(!ano){alert(tr('Informe o ano.'));return;}
    saveDB(); // garante o projeto atual salvo antes de trocar
    const id=nid();
    try{localStorage.setItem(projKey(id),'{"disciplinas":[]}');}catch(e){alert(tr('Sem espaço no navegador para criar o projeto.'));return;}
    projReg.projetos.push({id,ano,instituicao:vi('pj-inst'),professor:vi('pj-prof'),formacao:vi('pj-form'),criadoEm:Date.now()});
    projReg.ativo=id;saveProjects();
    loadDB();closeModal();refreshProjUI();renderDiscs();showScreen('s-main');
    showToast(trf('<b>Projeto {a} criado e em uso.</b> O anterior ficou arquivado — troque quando quiser em ☰ → Gerenciar projetos.',{a:escH(ano)}),8000);
  });
}
function ativarProjeto(id){
  if(id===projReg.ativo){goBack('s-main');return;}
  saveDB();
  projReg.ativo=id;saveProjects();
  loadDB();refreshProjUI();renderDiscs();showScreen('s-main');
  const p=curProj();
  showToast(trf('<b>Projeto ativo:</b> {p}.',{p:escH(projNome(p))}),5000);
}
function editProjeto(id){
  const p=projReg.projetos.find(x=>x.id===id);if(!p)return;
  openModal(tr('Editar projeto'),[
    {id:'pj-ano',lbl:'Ano',val:p.ano},
    {id:'pj-inst',lbl:'Instituição',val:p.instituicao},
    {id:'pj-prof',lbl:tr('Professor'),ph:tr('Ex: Nome do professor'),val:p.professor||''},
    {id:'pj-form',lbl:tr('Formação'),type:'select',opts:formacaoOpts(),val:p.formacao||''}
  ],()=>{
    p.ano=vi('pj-ano')||p.ano;p.instituicao=vi('pj-inst');p.professor=vi('pj-prof');p.formacao=vi('pj-form');
    saveProjects();closeModal();renderProjetos();refreshProjUI();
  });
}
function duplicarProjeto(id){
  const p=projReg.projetos.find(x=>x.id===id);if(!p)return;
  if(!exigirAtivacao())return;
  let dados='{"disciplinas":[]}';
  try{dados=(id===projReg.ativo)?JSON.stringify(db):(localStorage.getItem(projKey(id))||dados);}catch(e){}
  saveDB();
  const novoId=nid();
  try{localStorage.setItem(projKey(novoId),dados);}catch(e){alert(tr('Sem espaço no navegador para duplicar o projeto.'));return;}
  projReg.projetos.push({id:novoId,ano:p.ano,instituicao:p.instituicao,professor:p.professor,formacao:p.formacao,criadoEm:Date.now()});
  saveProjects();renderProjetos();refreshProjUI();
  showToast(trf('<b>Projeto duplicado.</b> Cópia de "{p}" criada.',{p:escH(projNome(p))}),5000);
}
function delProjeto(id){
  if(projReg.projetos.length<=1){alert(tr('Este é o único projeto. Crie outro antes de excluir este.'));return;}
  const p=projReg.projetos.find(x=>x.id===id);if(!p)return;
  if(!confirm(trf('Excluir o projeto "{p}" com TODAS as matérias, aulas e documentos dele? Você terá alguns segundos para desfazer.',{p:projNome(p)})))return;
  if(!confirm(tr('Tem certeza? Se quiser guardar uma cópia, cancele e use antes o botão de exportar (seta para baixo).')))return;
  // guarda tudo o que é preciso para devolver o projeto: o banco em texto,
  // a ficha no registro, a posição dela e se ele estava em uso
  const ix=projReg.projetos.findIndex(x=>x.id===id);
  const era=projReg.ativo===id;
  if(era)saveDB(); // grava o que está na tela antes de trocar de projeto
  let txt=null,fids=[];
  try{txt=localStorage.getItem(projKey(id));fids=fidsDe((JSON.parse(txt||'{"disciplinas":[]}')).disciplinas);}catch(e){}
  try{localStorage.removeItem(projKey(id));}catch(e){}
  projReg.projetos.splice(ix,1);
  if(era){projReg.ativo=projReg.projetos[0].id;loadDB();refreshProjUI();}
  saveProjects();renderProjetos();
  armarUndo(trf('Ano letivo <b>{p}</b> excluído.',{p:escH(projNome(p))}),fids,()=>{
    try{if(txt!==null)localStorage.setItem(projKey(id),txt);}catch(e){}
    projReg.projetos.splice(ix,0,p);
    if(era){projReg.ativo=id;loadDB();refreshProjUI();} // loadDB ANTES de qualquer saveDB
    saveProjects();
  });
}
const PROJ_BAR_MAX=7; // quantos projetos de troca rápida aparecem no menu lateral
function refreshProjUI(){
  const p=curProj();if(!p)return;
  const el=document.getElementById('proj-bar-lbl');
  if(el)el.textContent=trf('Ano letivo {a}',{a:p.ano||'—'})+(p.instituicao?' · '+p.instituicao:'');
  const a=document.getElementById('dw-proj');if(a)a.textContent=projNome(p);
  // lista de troca rápida no menu lateral (até 7 projetos): ativo primeiro
  const box=document.getElementById('dw-projlist');
  if(box){
    const ativo=projReg.projetos.find(x=>x.id===projReg.ativo);
    const outros=projReg.projetos.filter(x=>x.id!==projReg.ativo);
    const lista=[ativo,...outros].filter(Boolean).slice(0,PROJ_BAR_MAX);
    box.innerHTML=lista.map(pr=>{
      const on=pr.id===projReg.ativo;
      return `<button class="dw-projitem${on?' on':''}" onclick="ativarProjeto(${pr.id})"><i class="ti ti-archive" aria-hidden="true"></i><span>${escH(projNome(pr))}</span>${on?'<b>✓</b>':''}</button>`;
    }).join('');
    paintIcons();
  }
}

/* ===== Backup em arquivo (.json) — inclui os documentos anexados ===== */
function blobB64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]||'');r.onerror=rej;r.readAsDataURL(blob);});}
function b64Blob(b64,tipo){const bin=atob(b64);const u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Blob([u],{type:tipo||'application/octet-stream'});}
async function exportBackup(pid){
  closeMenu();
  const p=projReg.projetos.find(x=>x.id===(pid||projReg.ativo));if(!p)return;
  let data;
  if(p.id===projReg.ativo){saveDB();data=db;}
  else{try{data=JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}');}catch(e){data={disciplinas:[]};}}
  const fids=[];let totalArq=0;
  data.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>{fids.push(x.fid);totalArq+=x.tamanho||0;})))));
  if(totalArq>200*1024*1024&&!confirm(trf('Os documentos anexados somam {n} — o backup vai ficar pesado e pode demorar para gerar e importar. Continuar?',{n:fmtKB(totalArq)})))return;
  const arquivos=[];
  for(const fid of fids){
    try{const r=await fGet(fid);if(r&&r.blob)arquivos.push({fid,nome:r.nome,tipo:r.tipo,b64:await blobB64(r.blob)});}catch(e){}
  }
  const out={formato:'prometeu-backup',versao:2,exportadoEm:new Date().toISOString(),projeto:{ano:p.ano,instituicao:p.instituicao},db:data,arquivos};
  const blob=new Blob([JSON.stringify(out)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=('prometeu-'+(p.ano||'projeto')+(p.instituicao?'-'+p.instituicao:'')).toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').slice(0,60)+'.json';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  showToast(tr('<b>Backup exportado.</b> Guarde o arquivo .json em local seguro (Drive, pen-drive…).'),6000);
}
function importBackupPick(){closeMenu();document.getElementById('bk-file').click();}
async function importBackup(input){
  const f=input.files&&input.files[0];input.value='';if(!f)return;
  let j;try{j=JSON.parse(await f.text());}catch(e){alert(tr('Arquivo inválido.'));return;}
  if(!j||j.formato!=='prometeu-backup'||!j.db||!Array.isArray(j.db.disciplinas)){alert(tr('Este arquivo não é um backup do Organizador de Aulas.'));return;}
  // regrava anexos com ids novos (evita conflito com arquivos já existentes)
  const mapa={};
  for(const arq of (j.arquivos||[])){
    const nf=nid();mapa[arq.fid]=nf;
    try{await fPut({fid:nf,nome:arq.nome||'arquivo',tipo:arq.tipo||'',blob:b64Blob(arq.b64||'',arq.tipo)});}catch(e){}
  }
  j.db.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>{if(mapa[x.fid])x.fid=mapa[x.fid];})))));
  saveDB();
  const id=nid();
  try{localStorage.setItem(projKey(id),JSON.stringify(j.db));}catch(e){alert(tr('Sem espaço no navegador para importar este projeto.'));return;}
  projReg.projetos.push({id,ano:(j.projeto&&j.projeto.ano)||'?',instituicao:(j.projeto&&j.projeto.instituicao)||'',criadoEm:Date.now()});
  projReg.ativo=id;saveProjects();
  loadDB();refreshProjUI();renderDiscs();showScreen('s-main');
  showToast(tr('<b>Projeto importado</b> e colocado em uso.'),6000);
}

/* ===== Menu lateral (drawer) ===== */
function openMenu(){pushNav();clearMenuHint();refreshProjUI();document.getElementById('drawer').classList.add('open');document.getElementById('drawer-ov').classList.add('open');}
function closeMenu(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawer-ov').classList.remove('open');}

/* ===== Modal de informações (Ajuda) ===== */
function openInfo(title,html){pushNav();closeMenu();document.getElementById('im-title').textContent=title;document.getElementById('im-body').innerHTML=html;document.getElementById('imodal').classList.add('open');paintIcons();}
function closeInfo(){document.getElementById('imodal').classList.remove('open');}
function showVersao(){
  openInfo(tr('Versão'),`
    <div><b>${tr('Organizador de Aulas — Prometeu')}</b></div>
    <div>${trf('Versão {v} · {d}',{v:APP_VERSION,d:tr(APP_DATE)})}</div>
    <div>${tr('App 100% offline: os dados ficam guardados neste navegador/aparelho — nada é enviado para a internet.')}</div>
    <div>${tr('Projetos guardados:')} <b>${projReg.projetos.length}</b> · ${tr('Matérias no projeto atual:')} <b>${db.disciplinas.length}</b></div>`);
}
function showAtualizacao(){
  openInfo(tr('Atualização'),`
    <div>${tr('O app funciona sem internet; uma atualização só chega quando você recebe uma <b>versão nova</b> do arquivo ou do site.')}</div>
    <div>${tr('<b>Versão instalada como app (PWA):</b> toque em “Verificar atualização agora”. Se houver versão nova no site, ela é baixada e aplicada ao fechar e reabrir o app.')}</div>
    <div>${tr('<b>Versão em arquivo único (prometeu.html):</b> basta substituir o arquivo antigo pelo novo. Os dados <b>não se perdem</b> — eles ficam no navegador, não dentro do arquivo.')}</div>
    <div>${tr('<b>Dica:</b> antes de atualizar, exporte um backup (☰ → Arquivo → Exportar backup).')}</div>
    <button class="btn-pri" onclick="checarAtualizacao()"><i class="ti ti-refresh" aria-hidden="true"></i> ${tr('Verificar atualização agora')}</button>`);
}
async function checarAtualizacao(){
  if(!('serviceWorker' in navigator)||!location.protocol.startsWith('http')){
    alert(tr('Esta cópia roda como arquivo único: para atualizar, substitua o prometeu.html por uma versão mais nova. Seus dados não se perdem.'));return;
  }
  try{
    const reg=await navigator.serviceWorker.getRegistration();
    if(reg){await reg.update();alert(tr('Verificação concluída. Se houver versão nova, feche e reabra o app para aplicar.'));}
    else alert(tr('O app ainda não está instalado como PWA neste navegador.'));
  }catch(e){alert(tr('Não foi possível verificar agora (sem internet?).'));}
}

/* ===== Tutorial ===== */
/* Figuras SVG compartilhadas entre os idiomas (tokens %FIG0%…%FIG4% no texto).
   Os rótulos <text> internos são traduzidos pelo translateDOM (i18n.js). */
const FIGS=[
'<div class="tut-fig"><svg width="200" height="214" viewBox="0 0 200 214" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="3" width="100" height="26" rx="5"/><text x="100" y="20" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">MATÉRIA</text><path d="M100 29v9"/><path d="M96 34l4 5 4-5"/><rect x="50" y="48" width="100" height="26" rx="5"/><text x="100" y="65" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">SÉRIE / ANO</text><path d="M100 74v9"/><path d="M96 79l4 5 4-5"/><rect x="50" y="93" width="100" height="26" rx="5"/><text x="100" y="110" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">AULA</text><path d="M100 119v9"/><path d="M96 124l4 5 4-5"/><rect x="50" y="138" width="100" height="26" rx="5"/><text x="100" y="155" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">CAPÍTULO</text><path d="M100 164v9"/><path d="M96 169l4 5 4-5"/><rect x="50" y="183" width="100" height="26" rx="5"/><text x="100" y="200" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">VÍDEO</text></svg></div>',
'<div class="tut-fig"><svg width="250" height="92" viewBox="0 0 250 92" fill="none" stroke="currentColor" stroke-width="1.5"><g opacity="0.4"><rect x="6" y="16" width="108" height="62" rx="7"/><path d="M6 32h108"/><text x="60" y="56" text-anchor="middle" fill="currentColor" stroke="none" font-size="13">2025</text><text x="60" y="70" text-anchor="middle" fill="currentColor" stroke="none" font-size="7">ARQUIVADO</text></g><rect x="136" y="10" width="108" height="70" rx="7"/><path d="M136 27h108"/><text x="190" y="53" text-anchor="middle" fill="currentColor" stroke="none" font-size="13">2026</text><text x="190" y="68" text-anchor="middle" fill="currentColor" stroke="none" font-size="7">EM USO ●</text></svg></div>',
'<div class="tut-fig"><svg width="250" height="76" viewBox="0 0 250 76" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="242" height="28" rx="6"/><rect x="14" y="13" width="14" height="14" rx="3"/><path d="M17 20l3 3 6-6"/><text x="40" y="24" fill="currentColor" stroke="none" font-size="9">Cap. 01 — caixinha marcada = ● A MINISTRAR</text><g opacity="0.55"><rect x="4" y="42" width="242" height="28" rx="6"/><rect x="14" y="49" width="14" height="14" rx="3"/><text x="40" y="60" fill="currentColor" stroke="none" font-size="9">Cap. 02 — caixinha vazia = ✓ já ministrado</text></g></svg></div>',
'<div class="tut-fig"><svg width="250" height="82" viewBox="0 0 250 82" fill="none" stroke="currentColor" stroke-width="1.5"><g transform="translate(10,16) scale(1.9)"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5-6.5a3 3 0 0 0-6-6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5-6.5"/></g><rect x="82" y="12" width="44" height="58" rx="5"/><text x="104" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">PDF</text><rect x="142" y="12" width="44" height="58" rx="5"/><circle cx="156" cy="30" r="5"/><path d="M144 62l12-14 8 8 6-6 14 12"/><rect x="202" y="12" width="44" height="58" rx="5"/><text x="224" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">DOC</text></svg></div>',
'<div class="tut-fig"><svg width="260" height="100" viewBox="0 0 260 100" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="252" height="88" rx="10"/><path d="M130 6v88" stroke-dasharray="4 4"/><text x="67" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">ORGANIZADOR</text><text x="67" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">DE AULAS</text><text x="193" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">YOUTUBE /</text><text x="193" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">ANOTAÇÕES</text><circle cx="130" cy="50" r="6" fill="currentColor" stroke="none" opacity="0.7"/></svg></div>'
];
const TUT=[
{ic:'ti-book-2',t:'Visão geral',c:`
<p>O <b>Organizador de Aulas</b> organiza suas aulas em vídeo em 5 níveis, do geral para o específico:</p>
%FIG0%
<p>Exemplo: <b>HISTÓRIA</b> → <b>2° ano EM</b> → <b>Aula 12 (Revolução Francesa)</b> → <b>Cap. 01</b> → <b>vídeo do YouTube</b>.</p>
<p>Tudo funciona <b>sem internet</b> e é salvo automaticamente no aparelho a cada alteração.</p>`},
{ic:'ti-menu-2',t:'O menu ☰',c:`
<p>O botão <b>☰</b> (canto superior esquerdo da tela inicial) abre o <b>menu</b> — é por ele que se começa a usar o app. Lá dentro estão:</p>
<ul>
<li><b>Projeto em uso</b> e a lista de troca rápida (até 7 anos letivos).</li>
<li><b>Arquivo:</b> criar e gerenciar projetos, e exportar/importar o <b>backup (.json)</b>.</li>
<li><b>Ativar / Comprar:</b> ativar a versão completa (na cópia adquirida pelo site).</li>
<li><b>Ajuda:</b> Tutorial, <b>Modo demonstração</b>, Idioma, Privacidade, Termos de uso, Atualização e Versão.</li>
</ul>
<p>Para fechar o menu, toque na área escura ao lado ou no <b>✕</b>.</p>`},
{ic:'ti-archive',t:'Projetos — anos letivos',c:`
<p>Cada <b>projeto</b> guarda um ano letivo completo (Ano + Instituição), com todas as matérias, aulas e documentos.</p>
%FIG1%
<ul>
<li><b>Criar:</b> menu ☰ → <b>Criar novo projeto</b> → preencha <b>Ano</b> e <b>Instituição</b>. O projeto novo começa vazio e vira o projeto em uso.</li>
<li><b>Arquivar:</b> nada se perde — o ano anterior fica guardado na lista de projetos.</li>
<li><b>Trocar:</b> toque na barra do ano letivo (na tela inicial) ou em ☰ → <b>Gerenciar projetos</b> e escolha o projeto.</li>
<li><b>Guardar fora do aparelho:</b> use <b>Exportar backup</b> (seção Backup, mais abaixo).</li>
</ul>`},
{ic:'ti-books',t:'Matérias e séries',c:`
<p>A tela inicial lista as <b>matérias</b>. Dentro de uma matéria ficam as <b>séries/anos</b> (ex.: 1°, 2° e 3° ano).</p>
<ul>
<li><b>Nova matéria:</b> botão grande no rodapé da tela inicial.</li>
<li><b>Nova série:</b> abra a matéria e toque em <b>Nova série/ano</b>.</li>
<li>Na série, o botão com a <b>setinha (nº de aulas)</b> abre a árvore resumida das aulas.</li>
<li><b>Horas de cada série:</b> o cartão mostra três indicadores — <b>Horas totais</b> (soma da duração de todos os vídeos), <b>Ministradas</b> (capítulos já marcados como dados) e <b>Não ministradas</b> (o que ainda falta). Eles se atualizam sozinhos conforme você marca os capítulos.</li>
<li>O ícone de <b>relatório</b> na série gera um documento Word/PDF com toda a estrutura.</li>
<li>Os ícones de <b>lápis</b> e <b>lixeira</b> editam e removem cada item.</li>
</ul>`},
{ic:'ti-player-play',t:'Aulas e capítulos',c:`
<p>Dentro da série ficam as <b>aulas</b> (numeradas automaticamente) e, dentro de cada aula, os <b>capítulos</b>.</p>
%FIG2%
<ul>
<li>A <b>caixinha</b> do capítulo controla a pendência: marcada = ainda falta dar essa aula; vazia = já ministrada. Os contadores “● a ministrar” sobem para aula, série e matéria.</li>
<li>Os <b>chips CP1…CP11</b> acendem quando o capítulo tem conteúdo; tocar num chip aceso rola até o capítulo.</li>
<li><b>Observações:</b> cada capítulo tem uma janelinha “Observações” (recolhida por padrão) para anotações livres — lembretes, tarefas, páginas do livro. O ponto ● indica que há texto salvo.</li>
</ul>`},
{ic:'ti-video-off',t:'Vídeos',c:`
<p>Dentro do capítulo, toque em <b>Adicionar vídeo</b>. No formulário você pode:</p>
<ul>
<li><b>Nome</b> do vídeo (obrigatório).</li>
<li><b>Link do YouTube:</b> ao colar, o app preenche sozinho o <b>nome do vídeo</b> e a <b>duração</b> (precisa de internet só nessa hora). Sem link, o botão de lupa procura o vídeo pelo nome no YouTube.</li>
<li><b>Duração</b> no campo pequeno ao lado do link (MM:SS ou H:MM:SS) — se não for detectada sozinha, preencha à mão; ela alimenta os totais de aula, série e matéria.</li>
<li><b>Resumo</b> de até ≈3 páginas — fica numa seção recolhida abaixo do botão de busca; toque nela para abrir. Exporta em <b>Word (.doc)</b> ou <b>PDF</b>.</li>
<li><b>Rascunho automático:</b> o que você digita neste formulário é guardado sozinho; se o app fechar sem salvar, ele oferece restaurar tudo na próxima abertura.</li>
</ul>
<p>Na lista, o <b>▶</b> abre o link do vídeo e os ícones ao lado do tempo mostram se há resumo, materiais ou documentos anexados.</p>`},
{ic:'ti-paperclip',t:'Material didático e documentos',c:`
<p>No formulário do vídeo, a seção <b>“Material didático e documentos”</b> fica recolhida — toque nela para expandir.</p>
%FIG3%
<ul>
<li><b>Materiais citados:</b> lista simples com o <b>título</b> do livro citado no vídeo. A <b>lupa</b> ao lado de cada material procura na internet uma versão <b>gratuita em PDF</b> do livro.</li>
<li><b>Documentos anexados:</b> toque em <b>Importar PDF, imagem, Word ou áudio</b> para guardar até <b>10 arquivos por vídeo</b> (até <b>100 MB</b> cada — cabe um livro inteiro) dentro do próprio app.</li>
<li>Cada documento tem um <b>Título</b> editável, além de <b>miniatura</b> (fotos) ou <b>selo colorido</b> (PDF, DOC, áudio) para reconhecer o tipo de longe.</li>
<li>O <b>olhinho</b> abre PDFs e imagens na hora; arquivos Word são baixados para abrir no editor do aparelho. Se um PDF não abrir, teste outro documento — alguns arquivos já vêm com defeito de origem.</li>
<li>O botão de <b>compartilhar</b> envia o documento por <b>WhatsApp</b>, e-mail ou qualquer outro app do aparelho.</li>
<li>Os anexos entram no backup do projeto e saem nos relatórios.</li>
</ul>`},
{ic:'ti-palette',t:'Temas',c:`
<p>O botão no canto superior direito alterna entre os 5 temas — a preferência fica salva:</p>
<ol>
<li><b>Claro</b> — fundo bege, vermelho terracota.</li>
<li><b>Escuro</b> — preto OLED com néon branco.</li>
<li><b>Prometeu</b> — HUD sci-fi ciano (assinatura do app).</li>
<li><b>P. Vermelho</b> e <b>P. Azul</b> — variações do Prometeu.</li>
</ol>`},
{ic:'ti-eye',t:'Letras maiores e zoom',c:`
<p>Para quem prefere letras e botões maiores:</p>
<ul>
<li><b>☰ → Tamanho do texto:</b> toque em <b>A+</b> para aumentar as letras e os botões do app inteiro (até 150%) e em <b>A−</b> para voltar. A escolha fica salva.</li>
<li><b>Zoom de pinça:</b> em celulares e tablets, você também pode ampliar qualquer tela afastando dois dedos sobre ela (movimento de pinça).</li>
</ul>`},
{ic:'ti-report',t:'Relatórios e exportações',c:`
<ul>
<li><b>Relatório da série:</b> ícone de relatório no cartão da série → Word ou PDF com aulas, capítulos, vídeos, links, observações, pendências e documentos.</li>
<li><b>Resumo do vídeo:</b> dentro do formulário do vídeo → Word ou PDF com o texto do resumo, material didático e anexos.</li>
<li>Para PDF, o navegador abre a tela de impressão: escolha <b>“Salvar como PDF”</b>.</li>
<li><b>No tablet/celular:</b> salve o PDF na <b>memória interna</b> (pasta Downloads). Salvar direto no <b>cartão de memória</b> pode gerar “arquivo corrompido” — é uma limitação do Android, não do app; depois mova o arquivo para o cartão pelo app Arquivos.</li>
</ul>`},
{ic:'ti-shield',t:'Backup e segurança dos dados',c:`
<p><b>O salvamento é automático.</b> Tudo o que você digita é guardado sozinho, a cada alteração, <b>no navegador deste aparelho</b> — não existe botão “salvar”, e nada é enviado para a internet. Se o app for desinstalado ou os dados do navegador forem limpos, porém, eles se vão. Por isso, para <b>trocar de aparelho</b> ou ter uma cópia de segurança, exporte um backup:</p>
<ul>
<li><b>Exportar:</b> ☰ → Arquivo → <b>Exportar backup (.json)</b> — gera um arquivo com o projeto inteiro, anexos incluídos.</li>
<li><b>Nome do arquivo:</b> <code>prometeu-&lt;ano&gt;.json</code> (por exemplo, <b>prometeu-2026.json</b>; se o projeto tiver instituição, ela entra no nome). É esse arquivo que você leva para outro aparelho.</li>
<li><b>Onde ele fica:</b> na <b>pasta de Downloads</b> do aparelho — no <b>Windows</b>, “Downloads” (ou “Transferências”); no <b>Android</b>, “Download”; no <b>iPhone/iPad</b>, app <b>Arquivos</b> → “Transferências/Downloads”. Copie-o para o Google Drive, e-mail ou pen-drive para não perder.</li>
<li><b>Importar:</b> ☰ → Arquivo → <b>Importar backup (.json)</b> — no aparelho novo, escolha esse arquivo e o projeto inteiro é recriado.</li>
<li>Sugestão: exporte ao fim de cada bimestre e antes de atualizar o app.</li>
</ul>`},
{ic:'ti-device-tablet',t:'No tablet Samsung (Galaxy Tab S)',c:`
<p>O app foi ajustado para tablets — tela cheia, <b>tela dividida</b> e <b>exibição pop-up</b> do One UI:</p>
%FIG4%
<ul>
<li><b>Instalar no celular/tablet Android:</b> abra o site no Chrome → menu ⋮ → <b>“Instalar aplicativo”</b> (ou “Adicionar à tela inicial”). O app passa a abrir em janela própria, sem barra do navegador.</li>
<li><b>Instalar no iPhone/iPad:</b> abra o site no <b>Safari</b> → botão <b>Compartilhar</b> (quadrado com seta) → <b>“Adicionar à Tela de Início”</b>.</li>
<li><b>Instalar no computador (Windows):</b> abra o site no <b>Edge ou Chrome</b> e clique no <b>ícone de instalação</b> que aparece na barra de endereço — o app vira um programa com ícone no menu Iniciar.</li>
<li><b>Tela dividida:</b> toque em <b>Recentes</b> (botão ▯|▯ ou gesto), toque no <b>ícone do app</b> no topo do cartão → <b>“Abrir em visualização em tela dividida”</b> → escolha o segundo app (ex.: YouTube). A divisória central ajusta o tamanho.</li>
<li><b>Exibição pop-up:</b> em Recentes, toque no ícone do app → <b>“Abrir em exibição pop-up”</b> — o app vira uma janelinha flutuante sobre outro app.</li>
<li>O layout se reorganiza sozinho em qualquer tamanho de janela. Nas Observações, a conversão de escrita à mão da caneta fica desativada (use o teclado) para evitar erros.</li>
</ul>`},
{ic:'ti-alert-triangle',t:'Problemas comuns e soluções',c:`
<p>Antes de pensar que algo quebrou, confira esta lista — a maioria dos casos tem solução simples:</p>
<ul>
<li><b>“Arquivo corrompido” ao salvar PDF ou backup no cartão de memória:</b> é uma limitação do Android — os aplicativos só gravam com segurança na <b>memória interna</b> do aparelho. Salve sempre na pasta <b>Downloads</b> (memória interna) e depois, se quiser, mova o arquivo para o cartão pelo app Arquivos.</li>
<li><b>Os dados sumiram:</b> os dados vivem no navegador deste aparelho. <b>Limpar os dados do navegador/site</b> ou desinstalar o app apaga tudo. Prevenção: exporte o <b>backup (.json)</b> com frequência (☰ → Arquivo).</li>
<li><b>A duração do vídeo não apareceu:</b> a detecção automática precisa de internet na hora em que o link é colado. Sem internet, digite a duração à mão no campo pequeno ao lado do link (MM:SS).</li>
<li><b>O app abre com a barra do navegador em cima:</b> a instalação não terminou como aplicativo. Reinstale pelo site (Chrome → ⋮ → <b>“Instalar aplicativo”</b>) ou baixe o APK atualizado na página Comprar do site.</li>
<li><b>Paguei e o código não chegou:</b> confira a caixa de <b>spam/lixo eletrônico</b>. Se não estiver lá, escreva para o e-mail de suporte (☰ → Ativar) informando o e-mail usado na compra.</li>
<li><b>A tela de pagamento mostra valor maior que o anunciado:</b> o Mercado Pago às vezes sugere a “Linha de Crédito” (com juros). Volte e escolha <b>Pix</b> ou cartão comum — o valor certo aparece antes de confirmar.</li>
<li><b>Um PDF anexado não abre:</b> alguns arquivos já vêm com defeito de origem. Teste outro documento; se os demais abrem, o problema é do arquivo, não do app.</li>
<li><b>As letras ficaram diferentes sem internet:</b> normal — sem rede o app usa a fonte do sistema. Nada se perde.</li>
</ul>`},
{ic:'ti-help',t:'Atualização e versão',c:`
<ul>
<li><b>☰ → Ajuda → Atualização:</b> explica como atualizar cada versão (PWA ou arquivo único) e verifica se há versão nova.</li>
<li><b>☰ → Ajuda → Versão:</b> mostra a versão instalada e um resumo dos dados guardados.</li>
</ul>`}
];
function buildTutorial(){
  const secs=(typeof TUT_ML!=='undefined'&&TUT_ML[LANG])||TUT; // pt-BR e pt-PT usam o original
  return secs.map((s,i)=>`
  <div class="tut-sec">
    <button class="tut-t${i===0?' open':''}" id="tut-t-${i}" onclick="toggleTut(${i})" aria-expanded="${i===0}">
      <i class="ti ${s.ic} tic" aria-hidden="true"></i><span>${i+1}. ${s.t}</span><i class="ti ti-chevron-down chev" aria-hidden="true"></i>
    </button>
    <div class="tree-wrap${i===0?' open':''}" id="tut-w-${i}"><div class="tree-inner"><div class="tut-c">${s.c.replace(/%FIG(\d)%/g,(m,k)=>FIGS[+k]||'')}</div></div></div>
  </div>`).join('');
}
function openTutorial(){
  pushNav();closeMenu();
  const b=document.getElementById('tut-body');
  if(b.dataset.ok!==LANG){b.innerHTML=buildTutorial();b.dataset.ok=LANG;paintIcons();}
  showScreen('s-tut');
}
function toggleTut(i){
  const w=document.getElementById('tut-w-'+i),t=document.getElementById('tut-t-'+i);
  if(!w)return;
  const o=!w.classList.contains('open');
  w.classList.toggle('open',o);
  if(t){t.classList.toggle('open',o);t.setAttribute('aria-expanded',o);}
}

/* ===== Consentimento (primeiro uso) ===== */
const CONSENT_KEY='prometeu.consent.v1';
function checkConsent(){
  try{if(localStorage.getItem(CONSENT_KEY))return;}catch(e){return;}
  document.getElementById('cmodal').classList.add('open');
}
function aceitarConsent(){
  try{localStorage.setItem(CONSENT_KEY,JSON.stringify({v:1,quando:new Date().toISOString()}));}catch(e){}
  document.getElementById('cmodal').classList.remove('open');
  _menuHintPending=true; // 1º uso: destaca o botão ☰ quando a home aparecer
  offerTutorial(); // logo após aceitar, oferece o tutorial rápido (só no 1º uso)
}
/* ===== Oferta de tutorial rápido (apenas no primeiríssimo uso) ===== */
const TUTOFFER_KEY='prometeu.tutoffer.v1';
function offerTutorial(){
  try{if(localStorage.getItem(TUTOFFER_KEY))return;}catch(e){}
  try{localStorage.setItem(TUTOFFER_KEY,'1');}catch(e){}
  document.getElementById('tmodal').classList.add('open');
}
function aceitarTutorial(){document.getElementById('tmodal').classList.remove('open');demoStart();}
function recusarTutorial(){document.getElementById('tmodal').classList.remove('open');setTimeout(fireMenuHint,220);}

/* ===== Destaque do botão ☰ na primeiríssima abertura ===== */
let _menuHintPending=false;
const MENUHINT_KEY='prometeu.menuhint.v1';
function fireMenuHint(){
  if(!_menuHintPending||demoOn)return;
  try{if(localStorage.getItem(MENUHINT_KEY))return;}catch(e){}
  if(!document.getElementById('s-main').classList.contains('active'))return;
  if(['cmodal','tmodal','modal','imodal','rmodal'].some(id=>{const e=document.getElementById(id);return e&&e.classList.contains('open');}))return;
  const btn=document.getElementById('menuBtn');if(!btn)return;
  _menuHintPending=false;try{localStorage.setItem(MENUHINT_KEY,'1');}catch(e){}
  btn.classList.add('hint');
  const b=document.createElement('div');b.id='menuHintBubble';
  b.innerHTML=`<span>${escH(tr('Comece por aqui: toque no menu ☰'))}</span><span class="x" onclick="clearMenuHint()">✕</span>`;
  document.body.appendChild(b);
  setTimeout(()=>{if(document.getElementById('menuHintBubble'))clearMenuHint();},12000);
}
function clearMenuHint(){
  const btn=document.getElementById('menuBtn');if(btn)btn.classList.remove('hint');
  const b=document.getElementById('menuHintBubble');if(b)b.remove();
}

/* ===== Privacidade / Termos (resumo no app + documento completo online) ===== */
const LEGAL_PT={
priv:'<p><b>Resumo:</b></p><ul><li>O app funciona 100% offline. Todo o conteúdo que você cria fica guardado apenas no navegador deste aparelho (localStorage/IndexedDB).</li><li>Nenhum dado pessoal é coletado, transmitido ou vendido. Não há anúncios, rastreadores nem estatísticas.</li><li>Funções online opcionais: buscar o título de um vídeo no YouTube (envia só o link do vídeo ao YouTube) e carregar fontes do Google Fonts. Ambas são opcionais — o app funciona sem elas.</li><li>Os backups (.json) são criados por você e ficam onde você os guardar.</li><li>Para apagar tudo: exclua os projetos no app ou limpe os dados do site/app nas configurações do aparelho.</li><li>Contato: organizadordeaulas.prometeu@gmail.com</li></ul>',
termos:'<p><b>Resumo:</b></p><ul><li>Licença pessoal e intransferível, para uso de quem adquiriu o app.</li><li>É proibida a revenda, redistribuição ou exploração comercial por terceiros sem autorização prévia, por escrito, do autor.</li><li>O app é fornecido "como está"; mantenha backups dos seus dados (☰ → Arquivo → Exportar backup).</li><li>O conteúdo que você cadastra (aulas, links, arquivos) é seu e é de sua responsabilidade.</li><li>Contato: organizadordeaulas.prometeu@gmail.com</li></ul>'
};
function openLegal(k){
  const titulo=k==='priv'?tr('Política de Privacidade'):tr('Termos de Uso');
  let html=tr(k==='priv'?'LEGAL_PRIV':'LEGAL_TERMS');
  if(html==='LEGAL_PRIV'||html==='LEGAL_TERMS')html=LEGAL_PT[k==='priv'?'priv':'termos'];
  if(location.protocol.startsWith('http')){
    const arq=k==='priv'?'privacidade.html':'termos.html';
    html+=`<button class="btn-sec" onclick="window.open('${arq}','_blank')"><i class="ti ti-eye" aria-hidden="true"></i> ${tr('Ver documento completo (online)')}</button>`;
  }
  openInfo(titulo,html);
}

/* ===== Instalação como app (PWA) ===== */
let _bipEvt=null;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();_bipEvt=e;});
function isStandalone(){try{return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;}catch(e){return false;}}
const INSTALL_PT='<p><b>No computador (Windows) — Edge ou Chrome:</b></p><ol><li>Abra este site no <b>Microsoft Edge</b> ou <b>Google Chrome</b>.</li><li>Confira que o endereço começa com <b>https://</b> e é o site oficial do app.</li><li>Clique no <b>ícone de instalar</b> (um monitor com uma seta ⤓) no fim da barra de endereço — ou menu <b>⋮</b> → <b>“Instalar Organizador de Aulas”</b>.</li><li>Confirme em <b>“Instalar”</b>. O app ganha um ícone no <b>menu Iniciar</b> e passa a abrir em janela própria.</li></ol><p><b>No Android (celular/tablet):</b> abra no <b>Chrome</b> → menu <b>⋮</b> → <b>“Instalar aplicativo”</b> (ou “Adicionar à tela inicial”). Se a opção não aparecer, o navegador pode não suportar a instalação (ex.: Mi Browser) — use o Chrome.</p><p class="fhint">Segurança: instale sempre a partir do site oficial e mantenha o navegador atualizado. O app funciona offline e guarda tudo só neste aparelho.</p>';
const INSTALL_IOS_PT='<p><b>No iPhone ou iPad — pelo Safari:</b></p><ol><li>Abra este site no <b>Safari</b> (precisa ser o Safari — outros navegadores no iPhone não instalam apps).</li><li>Confira que o endereço começa com <b>https://</b> e é o site oficial do app.</li><li>Toque no botão <b>Compartilhar</b> (o quadrado com uma seta para cima, na barra de baixo).</li><li>Role a lista e toque em <b>“Adicionar à Tela de Início”</b> → <b>“Adicionar”</b>.</li></ol><p>O app ganha um ícone próprio e passa a abrir em tela cheia, como um aplicativo normal.</p><p class="fhint">Segurança: instale sempre pelo Safari a partir do site oficial. O app funciona offline e guarda tudo só neste aparelho.</p>';
function isIOS(){return /iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
function instalarApp(){
  closeMenu();
  if(isStandalone()){openInfo(tr('Instalar aplicativo'),'<p>'+tr('O app já está instalado neste aparelho.')+'</p>');return;}
  if(_bipEvt){const e=_bipEvt;_bipEvt=null;e.prompt();return;}
  let html;
  if(isIOS()){html=tr('INSTALL_HELP_IOS');if(html==='INSTALL_HELP_IOS')html=INSTALL_IOS_PT;}
  else{html=tr('INSTALL_HELP');if(html==='INSTALL_HELP')html=INSTALL_PT;}
  openInfo(tr('Instalar aplicativo'),html);
}

/* ===== Teclado móvel: mantém o campo focado visível acima do teclado ===== */
window.addEventListener('focusin',e=>{
  const el=e.target;
  if(!el||(el.tagName!=='INPUT'&&el.tagName!=='TEXTAREA'))return;
  const mov=matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth';
  setTimeout(()=>{try{el.scrollIntoView({block:'center',behavior:mov});}catch(_){}},300);
});

/* ===== Críticas e sugestões (e-mail do autor) ===== */
function enviarFeedback(){
  closeMenu();
  location.href='mailto:organizadordeaulas.prometeu@gmail.com?subject='+encodeURIComponent(tr('Críticas e sugestões — Organizador de Aulas'));
}

/* ===== Seletor de idioma ===== */
function openIdioma(){
  const html=Object.keys(LANG_META).map(k=>
    `<button class="btn-sec" style="width:100%;margin-bottom:8px${k===LANG?';font-weight:700':''}" onclick="setLang('${k}')">${LANG_META[k].label}${k===LANG?' ✓':''}</button>`
  ).join('');
  openInfo(tr('Escolha o idioma'),html);
}

/* ===== Modo demonstração (para gravar o vídeo promocional) =====
   Roda com um banco de EXEMPLO temporário, que aparece só durante a
   animação e é descartado no fim — o banco real do usuário nunca é tocado
   (saveDB é bloqueado enquanto demoOn=true). */
let demoTimer=null,demoIdx=0,demoTheme0=0,demoBak=null,demoTotal=0;
const DEMO_CONTENT={
'pt-BR':{subj:'HISTÓRIA',grade:'2° ANO — ENSINO MÉDIO',unit:'Exemplo (apague quando quiser)',
  l1:'A Revolução Francesa',c1a:'Antecedentes e causas',v1a:'A Revolução Francesa — resumo',
  c1b:'A Queda da Bastilha',v1b:'1789: o povo nas ruas',
  l2:'A Revolução Industrial',c2a:'A máquina a vapor',v2a:'Das oficinas às fábricas',
  sum:'A Revolução Francesa (1789) marcou o fim do Antigo Regime e a ascensão da burguesia, difundindo os ideais de liberdade, igualdade e fraternidade.',
  mat:'O Antigo Regime e a Revolução — Alexis de Tocqueville'},
'en':{subj:'HISTORY',grade:'11th grade',unit:'Sample (delete anytime)',
  l1:'The French Revolution',c1a:'Background and causes',v1a:'The French Revolution — overview',
  c1b:'The Storming of the Bastille',v1b:'1789: the people in the streets',
  l2:'The Industrial Revolution',c2a:'The steam engine',v2a:'From workshops to factories',
  sum:'The French Revolution (1789) ended the Ancien Régime and raised the bourgeoisie, spreading the ideals of liberty, equality and fraternity.',
  mat:'The Old Regime and the Revolution — Alexis de Tocqueville'},
'es':{subj:'HISTORIA',grade:'2.º de bachillerato',unit:'Ejemplo (borra cuando quieras)',
  l1:'La Revolución Francesa',c1a:'Antecedentes y causas',v1a:'La Revolución Francesa — resumen',
  c1b:'La toma de la Bastilla',v1b:'1789: el pueblo en las calles',
  l2:'La Revolución Industrial',c2a:'La máquina de vapor',v2a:'De los talleres a las fábricas',
  sum:'La Revolución Francesa (1789) puso fin al Antiguo Régimen y elevó a la burguesía, difundiendo los ideales de libertad, igualdad y fraternidad.',
  mat:'El Antiguo Régimen y la Revolución — Alexis de Tocqueville'},
'zh':{subj:'历史',grade:'高二',unit:'示例（可随时删除）',
  l1:'法国大革命',c1a:'背景与原因',v1a:'法国大革命 — 概述',
  c1b:'攻占巴士底狱',v1b:'1789：人民走上街头',
  l2:'工业革命',c2a:'蒸汽机',v2a:'从作坊到工厂',
  sum:'法国大革命（1789 年）终结了旧制度，使资产阶级崛起，传播了自由、平等、博爱的理念。',
  mat:'旧制度与大革命 — 阿历克西·德·托克维尔'}
};
function demoContent(){return DEMO_CONTENT[LANG]||DEMO_CONTENT['pt-BR'];}
/* Narração da demonstração — texto-fonte pt-BR; en/es/zh vêm do i18n (chaves DEMO_1..10) */
const DEMO_NARR_PT={
DEMO_1:'Este é o Organizador de Aulas: as matérias ficam na tela inicial, agrupadas automaticamente.',
DEMO_MENU:'Tudo começa no menu ☰: projetos, backup, idioma, ajuda e ativação da versão completa.',
DEMO_2:'Dentro de uma matéria ficam as séries/anos. O botão de seta mostra a árvore de aulas.',
DEMO_3:'Cada série reúne aulas numeradas, com duração total e contadores de pendências.',
DEMO_4:'Dentro de uma aula: os capítulos. A caixinha marca o que ainda falta ministrar.',
DEMO_5:'Cada capítulo guarda vídeos, com links, resumos, materiais e documentos anexados.',
DEMO_6:'O formulário do vídeo busca o título no YouTube e exporta resumos em Word/PDF.',
DEMO_7:'Cinco temas visuais, incluindo o HUD sci-fi Prometeu.',
DEMO_8:'Os projetos arquivam anos letivos inteiros — troque quando quiser, com backup em arquivo.',
DEMO_9:'Os relatórios da série exportam toda a estrutura em Word ou PDF.',
DEMO_10:'Tudo 100% offline: seus dados nunca saem do aparelho. Organizador de Aulas.'
};
function demoTxt(code){
  const d=I18N[LANG];const v=d&&d[code];
  if(v!=null)return typeof v==='function'?v({}):v;
  return DEMO_NARR_PT[code]||code; // pt-BR e pt-PT usam o texto-fonte
}
function buildDemoDB(){
  const t=demoContent();
  const mk=(base,n)=>base*100+n;
  const disc={id:9000001,nome:t.subj,turma:t.grade,capitulo:t.unit,aulas:[
    {id:9010001,numero:1,titulo:t.l1,cps:[],caps:[
      {id:9020001,num:'Cap. 01',nome:t.c1a,apresentado:false,obs:'',videos:[
        {id:9030001,nome:t.v1a,link:'',dur:'12:30',durSeg:750,resumo:t.sum,
         materiais:[{titulo:t.mat,link:''}],arquivos:[]}]},
      {id:9020002,num:'Cap. 02',nome:t.c1b,apresentado:false,obs:'',videos:[
        {id:9030002,nome:t.v1b,link:'',dur:'08:15',durSeg:495,resumo:'',materiais:[],arquivos:[]}]}
    ]},
    {id:9010002,numero:2,titulo:t.l2,cps:[],caps:[
      {id:9020003,num:'Cap. 01',nome:t.c2a,apresentado:true,obs:'',videos:[
        {id:9030003,nome:t.v2a,link:'',dur:'15:40',durSeg:940,resumo:'',materiais:[],arquivos:[]}]}
    ]}
  ]};
  return {disciplinas:[disc]};
}
function demoSteps(){
  const d0=db.disciplinas[0];
  const a0=d0&&d0.aulas[0];
  const c0=a0&&a0.caps[0];
  const v0=c0&&c0.videos[0];
  return [
    {c:'DEMO_1',ms:5600,sel:'#list-discs .card',f:()=>{showScreen('s-main');renderDiscs();}},
    {c:'DEMO_MENU',ms:6200,sel:'.drawer',f:()=>{showScreen('s-main');renderDiscs();openMenu();}},
    {c:'DEMO_2',ms:6000,sel:'#list-series .tree-toggle',f:()=>{closeMenu();openMat(0);const dd=matDiscs(curMat)[0];if(dd&&!openSeries.has(dd.id))toggleTree(dd.id);}},
    {c:'DEMO_3',ms:5600,sel:'#list-aulas .card',f:()=>{if(d0)openDisc(d0.id);}},
    {c:'DEMO_4',ms:6000,sel:'.cap-check',f:()=>{if(a0){curDiscId=d0.id;openAula(a0.id);}}},
    {c:'DEMO_5',ms:5600,sel:'#list-caps .cap-card',f:()=>{if(c0&&!openCaps.has(c0.id))toggleCap(c0.id);}},
    {c:'DEMO_6',ms:6400,sel:'.form-wrap',f:()=>{if(c0)goToFormVid(c0.id,v0?v0.id:null);}},
    {c:'DEMO_7',ms:2800,sel:'.theme-btn',f:()=>{goBack('s-main');toggleTheme();}},
    {c:'DEMO_7',ms:2600,sel:'.theme-btn',f:toggleTheme},
    {c:'DEMO_7',ms:2600,sel:'.theme-btn',f:toggleTheme},
    {c:'DEMO_8',ms:5600,sel:'#list-proj .card',f:()=>{openProjetos();}},
    {c:'DEMO_9',ms:5600,sel:'#rmodal .modal-box',f:()=>{goBack('s-main');if(d0)openRelatorio(d0.id);}},
    {c:'DEMO_10',ms:6000,sel:null,f:()=>{closeRModal();showScreen('s-main');renderDiscs();}}
  ];
}
function demoStart(){
  closeMenu();
  if(demoOn)return;
  demoOn=true;demoIdx=0;demoTheme0=themeIdx;demoTotal=demoSteps().length;
  demoBak=JSON.stringify(db);          // guarda o banco real do usuário
  db=buildDemoDB();                    // carrega a amostra temporária
  curMat=null;curDiscId=null;curAulaId=null;curCapId=null;
  openSeries.clear();openCaps.clear();openObs.clear();
  showScreen('s-main');renderDiscs();
  // holofote (aponta o elemento explicado) + legenda grande
  const spot=document.createElement('div');spot.id='demo-spot';document.body.appendChild(spot);
  const cap=document.createElement('div');cap.id='demo-cap';
  cap.innerHTML=`<span class="demo-badge" id="demo-step"></span><span id="demo-txt"></span>`+
    `<button class="demo-x" onclick="demoStop()" aria-label="${escH(tr('Toque para parar a demonstração'))}"><i class="ti ti-x" aria-hidden="true"></i></button>`;
  document.body.appendChild(cap);paintIcons();
  demoNext();
}
function demoSpot(sel){
  const spot=document.getElementById('demo-spot');if(!spot)return;
  const el=sel?document.querySelector(sel):null;
  if(el&&el.getBoundingClientRect){
    const r=el.getBoundingClientRect(),pad=8;
    // limita a área para não “vazar” atrás da legenda de baixo
    const maxB=window.innerHeight-140;
    const top=Math.max(6,r.top-pad), h=Math.min(r.height+pad*2,maxB-top);
    spot.style.display='block';
    spot.style.top=top+'px';spot.style.left=Math.max(6,r.left-pad)+'px';
    spot.style.width=Math.min(r.width+pad*2,window.innerWidth-12)+'px';
    spot.style.height=Math.max(36,h)+'px';
  }else spot.style.display='none';
}
function demoNext(){
  if(!demoOn)return;
  const s=demoSteps()[demoIdx++];
  if(!s){demoStop();return;}
  try{s.f();}catch(e){}
  const el=document.getElementById('demo-txt');if(el)el.textContent=demoTxt(s.c);
  const st=document.getElementById('demo-step');if(st)st.textContent=demoIdx+'/'+demoTotal;
  setTimeout(()=>{if(demoOn)demoSpot(s.sel);},420); // espera o render antes de apontar
  demoTimer=setTimeout(demoNext,s.ms||5200);
}
function demoStop(){
  if(!demoOn)return;
  demoOn=false;clearTimeout(demoTimer);
  ['demo-cap','demo-spot'].forEach(id=>{const e=document.getElementById(id);if(e)e.remove();});
  closeMenu();closeRModal();
  if(demoBak!=null){try{db=JSON.parse(demoBak);}catch(e){}demoBak=null;} // restaura o banco real
  curMat=null;curDiscId=null;curAulaId=null;curCapId=null;
  openSeries.clear();openCaps.clear();openObs.clear();
  themeIdx=demoTheme0;applyThemeUI(THEMES[themeIdx]);saveTheme();
  showScreen('s-main');renderDiscs();openMenu(); // termina na tela inicial com o menu ☰ aberto
}

/* ===== Cobrança / ativação (só na distribuição direta — Pix + chave offline) =====
   Modelo: 14 dias de uso completo; depois, CRIAR conteúdo novo pede ativação.
   Ver/editar/exportar NUNCA é bloqueado (o professor nunca perde acesso aos dados).
   A chave é verificada OFFLINE por assinatura ECDSA P-256 (Web Crypto): a chave
   privada fica só com o autor (tools/assinador-licenca.html); aqui só a pública. */
const PIX_CFG={ // pagamento automático (Mercado Pago → worker → e-mail com o código)
  preco:'US$ 5 (~R$ 25)',
  email:'organizadordeaulas.prometeu@gmail.com',    // suporte: se o código não chegar
  // Checkout criado pelo NOSSO worker (dispara o webhook que envia o código).
  // NUNCA voltar ao link mpago.la do painel: "Link de pagamento" não notifica
  // a aplicação e o comprador fica sem o código (bug real do teste de 13/07).
  link:'https://prometeu-ativacao.organizadordeaulas-prometeu.workers.dev/comprar'
};
const LIC_PUBKEY={kty:'EC',crv:'P-256',x:'or3swlJ1Zsy8FIxg3oMI8GTeuhjsce1MREgOJCuu1Js',y:'TNSijRdV4gopbyxI0le4IYbGL7GguL5cOQgjM9GDEDU'};
const LIC_KEY='prometeu.license.v1',INSTALL_KEY='prometeu.install.v1',TRIAL_DIAS=14;
let licState={ativo:false,email:''};
/* Canal de instalação: o pacote da Google Play abre com ?src=play (start_url
   do TWA). Nesse canal o app já foi PAGO na loja: tudo liberado e a tela de
   Pix fica oculta (política da Play proíbe pagamento externo no app). */
const CHANNEL_KEY='prometeu.channel.v1';
let CHANNEL='web';
try{
  // O canal vem SEMPRE da URL atual: o TWA da Play abre com ?src=play em todo
  // boot (start_url), então não precisa persistir. Persistir travava o canal em
  // 'play' p/ sempre no navegador comum que visitasse a URL do TWA uma vez
  // (escondia a tela Ativar/Comprar na web — bug E6 do roteiro).
  CHANNEL=/[?&]src=play\b/.test(location.search)?'play':'web';
  localStorage.setItem(CHANNEL_KEY,CHANNEL); // só registro p/ diagnóstico
}catch(e){}
function installTs(){
  try{const r=localStorage.getItem(INSTALL_KEY);if(r)return +JSON.parse(r).t||Date.now();
    const t=Date.now();localStorage.setItem(INSTALL_KEY,JSON.stringify({t}));return t;
  }catch(e){return Date.now();}
}
function trialDiasRestantes(){return Math.max(0,Math.ceil(TRIAL_DIAS-(Date.now()-installTs())/86400000));}
function trialAtivo(){return trialDiasRestantes()>0;}
function podeCriar(){return CHANNEL==='play'||licState.ativo||trialAtivo();}
function exigirAtivacao(){if(podeCriar())return true;openAtivar();return false;}
/* Verificação offline da chave (ECDSA) */
function _b64uBytes(s){s=String(s).replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';const b=atob(s),u=new Uint8Array(b.length);for(let i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u;}
let _licPK=null;
async function _getLicPK(){if(_licPK)return _licPK;_licPK=await crypto.subtle.importKey('jwk',LIC_PUBKEY,{name:'ECDSA',namedCurve:'P-256'},false,['verify']);return _licPK;}
async function verificarCodigo(code){
  try{
    code=(code||'').trim().replace(/\s+/g,'');
    const i=code.indexOf('.');if(i<1)return{ok:false};
    const email=new TextDecoder().decode(_b64uBytes(code.slice(0,i)));
    const sig=_b64uBytes(code.slice(i+1));
    const msg=new TextEncoder().encode('prometeu.ativacao.v1|'+email.trim().toLowerCase());
    const ok=await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},await _getLicPK(),sig,msg);
    return{ok,email};
  }catch(e){return{ok:false};}
}
async function carregarLicenca(){
  let s=null;try{s=JSON.parse(localStorage.getItem(LIC_KEY)||'null');}catch(e){}
  if(!s||!s.code)return;
  licState={ativo:true,email:s.email||''}; // otimista: nunca bloqueia pagante no boot
  if(!(window.crypto&&crypto.subtle))return; // sem Web Crypto: mantém otimista
  const r=await verificarCodigo(s.code);
  if(r.ok)licState={ativo:true,email:r.email};
  else{licState={ativo:false,email:''};try{localStorage.removeItem(LIC_KEY);}catch(e){}}
  refreshLicUI();
}
async function ativarComCodigo(){
  const campo=document.getElementById('at-code'),msg=document.getElementById('at-msg');
  const code=campo?campo.value:'';
  if(!(window.crypto&&crypto.subtle)){if(msg){msg.textContent=tr('Este navegador não suporta a verificação de licença.');msg.className='at-msg erro';}return;}
  const r=await verificarCodigo(code);
  if(r.ok){
    try{localStorage.setItem(LIC_KEY,JSON.stringify({code:code.trim().replace(/\s+/g,''),email:r.email,quando:new Date().toISOString()}));}catch(e){}
    licState={ativo:true,email:r.email};
    renderAtivar();
    showToast(trf('<b>Ativado!</b> Obrigado. Licença registrada para {e}.',{e:escH(r.email)}),6000);
  }else if(msg){msg.textContent=tr('Código inválido. Confira se copiou o código completo do e-mail.');msg.className='at-msg erro';}
}
function pagarAgora(){
  // Abre o checkout do worker já com o e-mail do comprador (external_reference):
  // é assim que o webhook sabe para onde mandar o código, mesmo no Pix.
  const be=document.getElementById('at-email'),msg=document.getElementById('at-msg');
  const em=(be&&be.value||'').trim();
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){
    if(msg){msg.textContent=tr('Digite um e-mail válido para receber o código.');msg.className='at-msg erro';}
    if(be)be.focus();return;
  }
  if(msg){msg.textContent='';msg.className='at-msg';}
  window.open(PIX_CFG.link+'?email='+encodeURIComponent(em),'_blank','noopener');
}
function openAtivar(){pushNav();closeMenu();renderAtivar();showScreen('s-ativar');}
function refreshLicUI(){const s=document.getElementById('s-ativar');if(s&&s.classList.contains('active'))renderAtivar();}
function renderAtivar(){
  const el=document.getElementById('at-body');if(!el)return;
  const dias=trialDiasRestantes();
  let status;
  if(licState.ativo)status=`<div class="at-card ok"><i class="ti ti-check" aria-hidden="true"></i><div><b>${tr('Versão completa ativada')}</b><div class="fhint">${escH(licState.email||'')}</div></div></div>`;
  else if(dias>0)status=`<div class="at-card"><i class="ti ti-clock" aria-hidden="true"></i><div><b>${trf('Período gratuito: {n} dia(s) restante(s)',{n:dias})}</b><div class="fhint">${tr('Você usa tudo livremente. Depois do período, criar conteúdo novo pede ativação — ver e exportar seus dados continua sempre liberado.')}</div></div></div>`;
  else status=`<div class="at-card fim"><i class="ti ti-alert-triangle" aria-hidden="true"></i><div><b>${tr('Período gratuito encerrado')}</b><div class="fhint">${tr('Ative para criar novos conteúdos. Seus dados e as exportações continuam acessíveis.')}</div></div></div>`;
  el.innerHTML=status+(licState.ativo?'':`
    <div class="at-sec">
      <h3>${tr('Como ativar')} · ${escH(PIX_CFG.preco)}</h3>
      ${PIX_CFG.link?`
      <label class="flbl">${tr('Seu e-mail (para receber o código de ativação)')}</label>
      <input class="finput" id="at-email" type="email" autocomplete="email" placeholder="exemplo@gmail.com">
      <button class="btn-pri at-pay" style="margin-top:10px" onclick="pagarAgora()"><i class="ti ti-key" aria-hidden="true"></i> ${tr('Pagar agora (Pix ou cartão)')}</button>
      <div class="fhint" style="margin:8px 0 4px">${tr('Pagamento seguro pelo Mercado Pago. O código de ativação chega em poucos minutos no e-mail informado acima — cole-o no campo abaixo.')}</div>`:''}
      <label class="flbl" style="margin-top:16px">${tr('Código de ativação (recebido por e-mail)')}</label>
      <textarea class="finput" id="at-code" rows="3" placeholder="${tr('Cole aqui o código de ativação')}"></textarea>
      <div class="at-msg" id="at-msg"></div>
      <button class="btn-pri" style="margin-top:10px" onclick="ativarComCodigo()">${tr('Ativar')}</button>
      <div class="at-alt" style="margin-top:12px">${trf('Problemas ou não recebeu o código? Escreva para {mail}.',{mail:'<b>'+escH(PIX_CFG.email)+'</b>'})}</div>
    </div>`);
  paintIcons();
}

/* ===== Tamanho do texto (acessibilidade — letras e botões maiores) ===== */
const FS_KEY='prometeu.fontscale.v1';
const FS_NIVEIS=[100,112,125,137,150];
let fsIdx=(function(){try{const v=parseInt(localStorage.getItem(FS_KEY)||'100',10);const i=FS_NIVEIS.indexOf(v);return i>=0?i:0;}catch(e){return 0;}})();
function aplicarFonte(){
  const pct=FS_NIVEIS[fsIdx]||100;
  document.body.style.zoom=pct+'%';
  const el=document.getElementById('dz-val');if(el)el.textContent=pct+'%';
  try{localStorage.setItem(FS_KEY,String(pct));}catch(e){}
}
function mudarFonte(d){fsIdx=Math.max(0,Math.min(FS_NIVEIS.length-1,fsIdx+d));aplicarFonte();}

/* ===== Aviso remoto (porta de correção pós-publicação) =====
   Busca um aviso.json opcional publicado junto do site:
     {"id":1,"msg":"texto do aviso","url":"https://... (opcional)"}
   Cada id é mostrado uma única vez (prometeu.aviso.v1). 100% degradável:
   sem internet, em file:// ou sem o arquivo, nada acontece. */
const AVISO_KEY='prometeu.aviso.v1';
function checarAviso(){
  try{
    if(location.protocol==='file:')return;
    const ctl=('AbortController' in window)?new AbortController():null;
    if(ctl)setTimeout(()=>ctl.abort(),6000);
    fetch('aviso.json',{cache:'no-store',signal:ctl?ctl.signal:undefined})
      .then(r=>r.ok?r.json():null)
      .then(a=>{
        if(!a||!a.id||!(a.msg||'').trim())return;
        let visto=null;try{visto=localStorage.getItem(AVISO_KEY);}catch(e){}
        if(String(visto)===String(a.id))return;
        try{localStorage.setItem(AVISO_KEY,String(a.id));}catch(e){}
        showToast('<b>'+tr('Aviso')+':</b> '+escH(a.msg)+(urlSegura(a.url)?' <a href="'+escH(urlSegura(a.url))+'" target="_blank" rel="noopener">'+tr('Saiba mais')+'</a>':''),12000);
      }).catch(()=>{});
  }catch(e){}
}

/* ===== Botão/gesto "voltar" do sistema (Android/tablet) =====
   Cada ação de navegação do usuário (abrir tela, menu ou janela) registra uma
   entrada no histórico NO MOMENTO DO TOQUE (pushNav dentro dos openX). Isso é
   obrigatório: o Chrome/Android IGNORA entradas criadas sem gesto do usuário
   ("history manipulation intervention") — o sentinela criado no carregamento
   era pulado pelo gesto de voltar no TWA/APK e o app minimizava (bug real do
   tablet, 16/07). O popstate consome uma entrada por vez: fecha o que estiver
   aberto ou sobe um nível; na tela inicial, deixa o app sair/minimizar. */
const BACK_PARENT={'s-series':'s-main','s-disc':'s-series','s-aula':'s-disc','s-vid':'s-aula','s-proj':'s-main','s-tut':'s-main','s-ativar':'s-main'};
function pushNav(){try{history.pushState({prometeu:1},'');}catch(e){}}
function backSistema(){
  if(typeof demoOn!=='undefined'&&demoOn){demoStop();return true;}
  const aberto=id=>{const e=document.getElementById(id);return e&&e.classList.contains('open');};
  if(aberto('drawer')){closeMenu();return true;}
  if(aberto('modal')){closeModal();return true;}
  if(aberto('imodal')){closeInfo();return true;}
  if(aberto('rmodal')){closeRModal();return true;}
  if(aberto('tmodal')){recusarTutorial();return true;}
  // cmodal (consentimento) fica de fora de propósito: precisa de resposta.
  const cur=document.querySelector('.screen.active');
  if(!cur||cur.id==='s-main')return false; // na home: deixa sair
  goBack(BACK_PARENT[cur.id]||'s-main');
  return true;
}
try{
  window.addEventListener('popstate',()=>{
    if(!backSistema())history.back(); // home: esvazia o resto e sai/minimiza
  });
}catch(e){}

/* ===== Inicialização ===== */
loadProjects();
loadDB();
themeIdx=loadTheme();
renderDiscs();
applyThemeUI(THEMES[themeIdx]);
refreshProjUI();
const _dv=document.getElementById('dw-ver');if(_dv)_dv.textContent='Prometeu · v'+APP_VERSION;
if(isStandalone()){const _bi=document.getElementById('dw-install');if(_bi)_bi.style.display='none';} // já instalado
paintIcons();
if(window.i18nBoot)i18nBoot(); // traduz a interface estática e o título
installTs();checkConsent();checarAviso();
if(CHANNEL==='play'){const _bb=document.querySelector('.dw-buy');if(_bb)_bb.style.display='none';} // Play: comprado na loja
else carregarLicenca(); // distribuição direta: verifica a licença guardada (offline, async)
setTimeout(()=>sweepOrphans().catch(()=>{}),1600); // faxina de anexos órfãos, sem travar a abertura
aplicarFonte(); // tamanho do texto salvo (menu ☰)
document.querySelector('#s-vid .form-wrap').addEventListener('input',agendarDraft); // rascunho automático
setTimeout(checarDraft,400); // oferece restaurar formulário de vídeo não salvo

/* ===== PWA: registra o service worker (só quando servido via http/https) ===== */
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  });
}
