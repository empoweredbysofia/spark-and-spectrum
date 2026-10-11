const button=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
function closeMenu(){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open menu');}
button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close menu':'Open menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))closeMenu();});
const tabs=[...document.querySelectorAll('.resource-tab')],cards=[...document.querySelectorAll('.resource-card')];
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>{t.classList.toggle('active',t===tab);t.setAttribute('aria-pressed',String(t===tab));});cards.forEach(c=>c.hidden=tab.dataset.filter!=='all'&&c.dataset.type!==tab.dataset.filter);}));
const legacy={"wellbeing": "get-support.html#wellbeing", "about": "about.html", "who-we-are": "about.html#who-we-are", "who-we-support": "get-support.html", "what": "programmes.html", "programmes": "programmes.html#programmes", "resources": "resources.html#resources", "membership": "membership.html#membership", "commission-programmes": "programmes.html#commission-programmes", "community": "about.html#community", "team": "about.html#team", "professional-support": "programmes.html#professional-support", "work": "programmes.html#professional-support"};
function routeLegacy(){if(location.pathname.endsWith("/")||location.pathname.endsWith("/index.html")){const dest=legacy[location.hash.slice(1)];if(dest)location.replace(dest);}}
routeLegacy();window.addEventListener("hashchange",routeLegacy);
