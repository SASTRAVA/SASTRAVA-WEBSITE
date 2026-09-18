const canvas = document.querySelector('#scene');
const ctx = canvas.getContext('2d');
const type = document.body.dataset.scene;
let w, h, dpr, t = 0, mx = 0, my = 0, targetX = 0, targetY = 0;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
function resize(){ dpr=Math.min(devicePixelRatio||1,2); w=canvas.clientWidth; h=canvas.clientHeight; canvas.width=w*dpr; canvas.height=h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); }
window.addEventListener('resize',resize); resize();
window.addEventListener('pointermove',e=>{ targetX=(e.clientX/innerWidth-.5)*2; targetY=(e.clientY/innerHeight-.5)*2; });
const seed = [...type].reduce((a,c)=>a+c.charCodeAt(0),0);
const rand = (n)=>{ const x=Math.sin(n*12.9898+seed)*43758.5453; return x-Math.floor(x); };
const pts=Array.from({length:90},(_,i)=>({x:rand(i*2+1),y:rand(i*2+2),z:rand(i*2+3),s:rand(i*2+4)*2+0.5}));
function line(a,b,alpha=.35,color='gold'){ctx.strokeStyle=color==='teal'?`rgba(49,184,184,${alpha})`:`rgba(216,177,93,${alpha})`;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}
function dot(x,y,r,color='gold',alpha=.9){ctx.fillStyle=color==='teal'?`rgba(86,210,205,${alpha})`:`rgba(239,220,168,${alpha})`;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
function project(x,y,z,rot){const c=Math.cos(rot),s=Math.sin(rot);const X=x*c-z*s,Y=y,Z=x*s+z*c;const q=1/(1+Z*.002);return{x:w*.58+X*q,y:h*.47+Y*q,q};}
function architecture(rot){let nodes=[];for(let i=0;i<18;i++){let a=i/18*Math.PI*2, ring=80+(i%3)*65;nodes.push(project(Math.cos(a)*ring,Math.sin(a*2)*65,Math.sin(a)*ring,rot));}nodes.forEach((p,i)=>{line(p,nodes[(i+1)%nodes.length],.32,i%3?'gold':'teal');if(i%2===0)line(p,nodes[(i+5)%nodes.length],.16,'teal');dot(p.x,p.y,3+p.q*2,i%3?'gold':'teal')});}
function growth(rot){let center=project(0,0,0,rot);for(let r=52;r<240;r+=52){ctx.strokeStyle=`rgba(216,177,93,${.18+r/1400})`;ctx.lineWidth=1.5;ctx.beginPath();ctx.ellipse(center.x,center.y,r,r*.34,rot*.7,0,Math.PI*2);ctx.stroke();}for(let i=0;i<24;i++){let a=i*.72+rot*2,r=100+Math.sin(i*1.7)*85,p=project(Math.cos(a)*r,Math.sin(a)*r*.45,Math.sin(a)*80,rot);line(p,center,.12,'teal');dot(p.x,p.y,2.5,i%4?'teal':'gold');}}
function knowledge(rot){let nodes=[];for(let i=0;i<22;i++){let a=i*2.4, r=55+(i%5)*42;nodes.push(project(Math.cos(a)*r,Math.sin(a)*r*.7,Math.cos(i)*80,rot));}nodes.forEach((p,i)=>{nodes.slice(i+1).forEach((q,j)=>{if((i+j)%7===0)line(p,q,.23,'teal')});dot(p.x,p.y,3,(i%4===0?'gold':'teal'))});}
function operations(rot){let center=project(0,0,0,rot);for(let i=0;i<5;i++){let a=i*Math.PI*2/5+rot,r=55+i*28,p=project(Math.cos(a)*r,Math.sin(a)*r,0,rot);ctx.strokeStyle='rgba(216,177,93,.4)';ctx.strokeRect(p.x-18,p.y-12,36,24);line(p,center,.28,i%2?'gold':'teal');dot(p.x,p.y,3,i%2?'gold':'teal')}dot(center.x,center.y,7,'gold');}
function ecosystem(rot){for(let i=0;i<7;i++){let a=i*Math.PI*2/7+rot,r=105;let p=project(Math.cos(a)*r,Math.sin(a)*r*.55,Math.sin(a)*55,rot);let q=project(Math.cos(a+.8)*r,Math.sin(a+.8)*r*.55,Math.sin(a+.8)*55,rot);line(p,q,.35,i%2?'gold':'teal');dot(p.x,p.y,5,i%2?'gold':'teal');}let c=project(0,0,0,rot);dot(c.x,c.y,9,'gold');}
function constellation(rot){let nodes=[];for(let i=0;i<14;i++){let a=i*.91, r=60+(i%4)*48;nodes.push(project(Math.cos(a)*r,Math.sin(a)*r*.58,Math.sin(a)*100,rot));}nodes.forEach((p,i)=>{if(i)line(p,nodes[i-1],.3,i%3?'gold':'teal');dot(p.x,p.y,3+(i%3),i%3?'teal':'gold')});}
function frame(){t+=reduce.matches?0.002:.008; mx+=(targetX-mx)*.04;my+=(targetY-my)*.04;ctx.clearRect(0,0,w,h);const glow=ctx.createRadialGradient(w*.58,h*.46,0,w*.58,h*.46,Math.max(w,h)*.5);glow.addColorStop(0,'rgba(25,91,92,.22)');glow.addColorStop(.55,'rgba(12,30,35,.1)');glow.addColorStop(1,'rgba(3,7,10,0)');ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);pts.forEach((p,i)=>{let x=(p.x*w+w*.1+mx*20)%w,y=(p.y*h+my*12)%h;dot(x,y,p.s,'teal',.15+p.z*.3)});const r=t+mx*.15;({architecture,growth,knowledge,operations,ecosystem,constellation}[type])(r);requestAnimationFrame(frame)}
frame();