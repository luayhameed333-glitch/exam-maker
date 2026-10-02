const CACHE='exam-maker-v4';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
function save(r,res){if(res&&(res.ok||res.type==='opaque')){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  const font=u.hostname==='fonts.googleapis.com'||u.hostname==='fonts.gstatic.com';
  if(u.origin!==location.origin&&!font)return;
  const isPage=r.mode==='navigate'||u.pathname.endsWith('.html')||u.pathname.endsWith('/');
  if(isPage&&u.origin===location.origin){
    // الصفحة: الأحدث من الإنترنت أولاً، وإذا ما كو إنترنت من النسخة المحفوظة
    e.respondWith(new Promise(resolve=>{
      const t=setTimeout(()=>caches.match(r).then(h=>h&&resolve(h)),4000);
      fetch(r,{cache:'no-store'}).then(res=>{clearTimeout(t);resolve(save(r,res))})
        .catch(()=>{clearTimeout(t);caches.match(r).then(h=>resolve(h||caches.match('./index.html')))});
    }));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>save(r,res)).catch(()=>hit);
    return hit||net;
  }));
});
