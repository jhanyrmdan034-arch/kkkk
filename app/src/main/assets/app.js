"use strict";
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
if(new URLSearchParams(location.search).has("androidapp")) document.body.classList.add("android");

const ICONS={
search:'<circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20.2 20.2-4.1-4.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
compose:'<path d="M12 20h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16.7 3.9a2.4 2.4 0 0 1 3.4 3.4L8 19.4l-4.2 1.1L4.9 16.3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
archive:'<path d="M4 4h16v5H4zM6 9h12v10H6z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M10 13h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
"person-plus":'<circle cx="10" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M3.5 20c.8-3.6 3.4-5.5 6.5-5.5 2 0 3.8.8 5 2.3M18 8v6M15 11h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
plus:'<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
phone:'<path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/>',
"phone-plus":'<path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/>',
qr:'<path fill="currentColor" d="M4 4h6v6H4zm2 2v2h2V6zm8-2h6v6h-6zm2 2v2h2V6zM4 14h6v6H4zm2 2v2h2v-2zm9-2h2v2h-2zm3 3h2v3h-5v-2h3zm-3 1h2v2h-2z"/>',
"smile-edit":'<circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="7.5" cy="9" r="1" fill="currentColor"/><circle cx="12.5" cy="9" r="1" fill="currentColor"/><path d="M7 13c1.8 1.5 4.2 1.5 6 0M15.5 15.5 20 20M18.8 13.8l2.2 2.2-2 2-2.2-2.2z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
"camera-plus":'<path d="M4 8h3l2-3h6l2 3h3v11H4z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="12" cy="13" r="3.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M18.5 17v5M16 19.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
person:'<circle cx="12" cy="8" r="4" fill="currentColor"/><path fill="currentColor" d="M4 21c.7-4.2 3.9-6.5 8-6.5s7.3 2.3 8 6.5z"/>',
wallet:'<path fill="currentColor" d="M3 7a3 3 0 0 1 3-3h11a1 1 0 0 1 0 2H7v12h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a3 3 0 0 1-3-3zm13 6.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z"/>',
bookmark:'<path fill="currentColor" d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.2L5 21V4a1 1 0 0 1 1-1z"/>',
devices:'<rect x="3" y="5" width="13" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="17" y="9" width="4" height="10" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M7 19h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
bell:'<path fill="currentColor" d="M18 16H6c.8-1.2 1.5-2.6 1.5-4.5V10a4.5 4.5 0 0 1 9 0v1.5c0 1.9.7 3.3 1.5 4.5zM9.5 18a2.6 2.6 0 0 0 5 0zM11 4.2V3h2v1.2a5.8 5.8 0 0 1 2.4 1.3l-1.2 1.4A3.8 3.8 0 0 0 12 5.7c-.8 0-1.6.3-2.2.8L8.6 5.5A5.8 5.8 0 0 1 11 4.2z"/>',
moon:'<path fill="currentColor" d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.8 8.8 0 1 0 20 14.5z"/>',
x:'<path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
"chevron-down":'<path d="m5 9 7 7 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
back:'<path d="m14.5 5-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
more:'<circle cx="5" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="19" cy="12" r="1.8" fill="currentColor"/>',
"bot-menu":'<rect x="4" y="5" width="16" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 10h8M8 14h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
clip:'<path d="m19.5 12.5-8.6 8.1a5 5 0 0 1-7-6.6l8.9-8.4a3.3 3.3 0 1 1 4.6 4.5l-8.6 8a1.7 1.7 0 1 1-2.4-2.3l7.8-7.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
"smile-clock":'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M8.2 17.2c1 1 2.3 1.5 3.8 1.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
mic:'<rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
send:'<path fill="currentColor" d="M21.9 2.3 2.7 10.6c-.9.4-.9 1.7.1 2l6.8 2.2 2.2 6.8c.3 1 1.6 1.1 2 .1l8.2-19.2c.2-.8-.3-1.4-1.1-1.2zM11 13.2l8.4-8.3-6.5 13.2-1.9-4.9z"/>',
comment:'<path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1zM7 8h10M7 11h6" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>',
gift:'<path fill="currentColor" d="M4 10h16v10H4zM3 6h18v4H3zm9 4v10h-2V10zm2 0v10h-2zM12 6C9 6 7.5 4.8 7.5 3.4 7.5 2.2 8.5 1.5 9.6 1.8 11 2.1 12 3.8 12 6zm0 0c3 0 4.5-1.2 4.5-2.6 0-1.2-1-1.9-2.1-1.6C13 2.1 12 3.8 12 6z"/>',
gallery:'<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10" r="1.7" fill="currentColor"/><path d="m5 17 5-5 3 3 2.5-2.5L19 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
file:'<path fill="currentColor" d="M6 2h8l5 5v15H6zM14 2v6h6z"/>',
location:'<path fill="currentColor" d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12zm0-9.5A2.6 2.6 0 1 1 12 7a2.6 2.6 0 0 1 0 5.2z"/>',
poll:'<path fill="currentColor" d="M5 20V10h3v10zm5.5 0V4h3v16zM16 20v-7h3v7z"/>',
globe:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.7 2.6 4 5.7 4 9s-1.3 6.4-4 9c-2.7-2.6-4-5.7-4-9s1.3-6.4 4-9zM5.5 6.5c2 1.3 4.2 2 6.5 2s4.5-.7 6.5-2M5.5 17.5c2-1.3 4.2-2 6.5-2s4.5.7 6.5 2" fill="none" stroke="currentColor" stroke-width="1.5"/>',
backspace:'<path d="M9 5h11v14H9l-6-7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m12 9.5 5 5m0-5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
forward:'<path fill="currentColor" d="M13 5V2l8 6-8 6v-3C7 11 4.5 13 3 16c.2-5.4 3.4-10 10-11z"/>',
caption:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8.5 16 12 8l3.5 8M9.8 13.5h4.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>',
list:'<path d="M8 6h13M8 12h13M8 18h13" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><circle cx="4" cy="6" r="1.3" fill="currentColor"/><circle cx="4" cy="12" r="1.3" fill="currentColor"/><circle cx="4" cy="18" r="1.3" fill="currentColor"/>',
trash:'<path fill="currentColor" d="M4 7h16l-1 14H5zM9 7V4h6v3h5v2H4V7h5zM9.5 11v7M14.5 11v7" stroke="#000" stroke-width=".6"/>',
contacts:'<circle cx="12" cy="12" r="9.2" fill="currentColor"/><circle cx="12" cy="9.3" r="3.4" fill="#fff"/><path fill="#fff" d="M5.8 19.1c1-3.3 3.3-5 6.2-5s5.2 1.7 6.2 5c-1.8 1.4-3.9 2.1-6.2 2.1s-4.4-.7-6.2-2.1z"/>',
chats:'<path fill="currentColor" d="M9.2 4A5.6 5.6 0 0 0 5 12.6L4 16l3.6-1A5.6 5.6 0 1 0 9.2 4z"/><path fill="currentColor" opacity=".72" d="M15.5 3.5a6.8 6.8 0 0 1 4 12.6l1 3.4-3.8-1a6.8 6.8 0 0 1-6.3-2.2 7.1 7.1 0 0 0 2.2.3 7 7 0 0 0 2.9-13.1z"/>',
gear:'<g fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></g>',
mute:'<path fill="currentColor" d="M4 10v4h3l5 4V6l-5 4z"/><path d="m16 9 5 6M21 9l-5 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
pin:'<path fill="currentColor" d="M15.5 3.5 20.5 8.5l-2.3.7 1 4.5-1.8 1.8-3.2-3.2-4.4 4.3-.4 3-1.7.4.4-3.9 4.4-4.4-3.1-3.1 1.8-1.8 4.5 1 .8-2.3z"/>',
play:'<path fill="currentColor" d="M8 5v14l11-7z"/>',
lock:'<rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"/>',
video:'<rect x="3" y="7" width="12" height="10" rx="2" fill="currentColor"/><path fill="currentColor" d="m16 10.5 5-3v9l-5-3z"/>',
check:'<path d="m4.5 12.5 5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3" fill="currentColor"/>',
copy:'<rect x="9" y="9" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="4" width="11" height="11" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/>',
reply:'<path fill="currentColor" d="M11 5V2L3 8l8 6v-3c6 0 8.5 2 10 5-.2-5.4-3.4-10-10-11z"/>',
edit:'<path d="M12 20h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16.7 3.9a2.4 2.4 0 0 1 3.4 3.4L8 19.4l-4.2 1.1L4.9 16.3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
star:'<path fill="currentColor" d="m12 2.5 3 6.2 6.8 1-4.9 4.8 1.1 6.8-6-3.2-6 3.2 1.1-6.8L2.2 9.7l6.8-1z"/>',
instagram:'<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>',
music:'<path fill="currentColor" d="M9 18.5V6l10-2v11.5a3.5 3.5 0 1 1-2-3.2V7L11 8.5v10a3.5 3.5 0 1 1-2-3.2z"/>',
clock:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3.5 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>'
};
const icon=name=>`<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||""}</svg>`;
function fillIcons(root=document){$$("[data-icon]",root).forEach(el=>{if(!el.dataset.filled){el.innerHTML=icon(el.dataset.icon);el.dataset.filled="1";}});}

const AV={dino:"img/avatar-dino.jpg",cat:"img/avatar-cat.jpg",dog:"img/avatar-dog.jpg",pepe:"img/avatar-pepe.jpg",dolphin:"img/avatar-dolphin.jpg",penguin:"img/avatar-penguin.jpg",leo:"img/avatar-leo.jpg",news:"img/avatar-news.jpg",nomads:"img/avatar-nomads.jpg",strawberry:"img/avatar-strawberry.jpg",pavel:"img/avatar-pavel.jpg",catLarge:"img/avatar-cat-large.jpg",dinoLarge:"img/avatar-dino-large.jpg"};
let chats=[
{id:"saved",name:"Saved Messages",avatar:"saved",preview:"IMG_420.png",file:true,time:"Fri",category:"work",status:"Saved Messages",wall:"wall-green"},
{id:"cat",name:"Cat",premium:true,avatar:AV.cat,preview:"Pepe says hi.",time:"9:41",ticks:true,online:true,ring:"ring",category:"work",status:"last seen just now",wall:"wall-green",backCount:8},
{id:"pepe",name:"Pepe",statusEmoji:"🫐",avatar:AV.pepe,preview:"Say hello to Cat.",time:"9:40",unread:1,ring:"ring",category:"work",status:"online",wall:"wall-green"},
{id:"team16",name:"16Bit Team",muted:true,avatar:AV.strawberry,preview:"16Bit Team started a Live Stream",time:"9:41",unread:1,unreadGrey:true,live:true,category:"groups",status:"live stream",wall:"wall-green"},
{id:"nomads",name:"Digital Nomads",muted:true,avatar:AV.nomads,sender:"Pepe",preview:"We just reached 2,500 members! WOO!",time:"9:22",category:"groups",status:"2,503 members, 736 online",wall:"wall-green",backCount:8,type:"group"},
{id:"dog",name:"Dog",statusEmoji:"🍇",avatar:AV.dog,preview:"Table for four, 2 PM be there",time:"9:12",ring:"ring-blue",category:"work",status:"online",statusOnline:true,wall:"wall-orange"},
{id:"penguin",name:"Penguin",avatar:AV.penguin,preview:"Check these out!",time:"8:28",unread:1,category:"work",status:"online",statusOnline:true,wall:"wall-green"},
{id:"wallet",name:"Wallet",verified:true,avatar:"wallet",preview:"Welcome to Crypto Wallet!",time:"8:12",ticks:true,unread:1,open:true,category:"bots",status:"bot",wall:"wall-green",type:"bot"},
{id:"pavel",name:"Pavel Durov",verified:true,statusEmoji:"📚",avatar:AV.pavel,preview:"Telegram has fully repaid the bonds we issued 5 years ago.",time:"9:41",category:"channels",status:"10,288,126 subscribers",wall:"wall-green",backCount:8,type:"channel"},
{id:"dolphin",name:"Dolphin",secret:true,avatar:AV.dolphin,preview:"I needed proof this was your idea! 😭🤨",time:"9:41",category:"work",status:"last seen just now",wall:"wall-photo",type:"secret"},
{id:"catch",name:"Catch News",avatar:AV.news,preview:"Welcome to Catch News! 📣",time:"9:41",category:"bots",status:"bot",wall:"wall-blue",type:"bot"},
{id:"news",name:"News",avatar:AV.news,preview:"Top trends and global news",time:"8:00",category:"channels",status:"channel",wall:"wall-blue",type:"channel"},
{id:"leo",name:"Leo",avatar:AV.leo,preview:"Hi",time:"7:58",category:"work",status:"last seen recently",wall:"wall-green"}
];
const archivedIds=["pepe","team16","nomads","dog","penguin","wallet"];
const stories=[
{name:"My Story",avatar:AV.dino,plus:true},{name:"16Bit Team",avatar:AV.strawberry,live:true,ring:"ring"},{name:"Dog",avatar:AV.dog,ring:"ring-blue"},{name:"Pepe",avatar:AV.pepe,ring:"ring"},{name:"Cat",avatar:AV.cat,ring:"ring"},{name:"Dolphin",avatar:AV.dolphin,ring:"ring"}
];
const searchStoriesData=[
{name:"Dog",avatar:AV.dog,ring:"ring-blue"},{name:"Digital Noma…",avatar:AV.nomads},{name:"Pepe",avatar:AV.pepe,ring:"ring"},{name:"News",avatar:AV.news},{name:"Leo",avatar:AV.leo}
];
const contacts=[
{name:"Penguin",avatar:AV.penguin,status:"online",online:true,statusEmoji:"🐸",chat:"penguin"},
{name:"Dolphin",avatar:AV.dolphin,status:"online",online:true,statusEmoji:"🌙",chat:"dolphin"},
{name:"Dog",avatar:AV.dog,status:"last seen 3 minutes ago",chat:"dog"},
{name:"Cat",avatar:AV.cat,status:"last seen 4 minutes ago",chat:"cat"},
{name:"Elephant",initial:"E",color:"linear-gradient(145deg,#5aa9ff,#2878e8)",status:"last seen 15 minutes ago",profile:"elephant"},
{name:"Pepe",avatar:AV.pepe,status:"last seen recently",chat:"pepe"},
{name:"Giraffe",initial:"G",color:"linear-gradient(145deg,#ff9de2,#e85bb5)",status:"last seen recently",profile:"giraffe"}
];
const calls=[
{name:"Dog",avatar:AV.dog,time:"9:41",kind:"in",label:"Incoming Call (1 minute)",chat:"dog"},
{name:"Cat",avatar:AV.cat,time:"9:38",kind:"out",label:"Outgoing Call",chat:"cat"},
{name:"Pepe",avatar:AV.pepe,time:"9:20",kind:"missed",label:"Missed Call",chat:"pepe"}
];

let currentScreen="chats",navStack=["chats"],currentChatId="cat",currentProfileId="cat";
let chatEditMode=false,suppressClick=false,replyText="",contextTarget=null,attachSelection=[];
const screenId=id=>({chats:"scr-chats",contacts:"scr-contacts",calls:"scr-calls",settings:"scr-settings",search:"scr-search",archived:"scr-archived",chat:"scr-chat",profile:"scr-profile"}[id]);
function showScreen(id,push=true){
  if(push&&navStack[navStack.length-1]!==id)navStack.push(id);
  currentScreen=id;
  $$(".screen").forEach(s=>s.classList.toggle("active",s.id===screenId(id)));
  const withNav=["chats","contacts","calls","settings"].includes(id);
  $("#mainNav").classList.toggle("hidden",!withNav||(id==="chats"&&chatEditMode));
  $$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.nav===id));
  if(id!=="chat"){closePanels();}
}
function goMain(id){navStack=[id];showScreen(id,false);}
function goBack(){navStack.pop();const prev=navStack[navStack.length-1]||"chats";showScreen(prev,false);}
function toast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove("show"),1900);}
function avatarHTML(c,size=58){
  if(c.avatar==="saved")return `<span class="saved-avatar" style="width:${size}px;height:${size}px">${icon("bookmark")}</span>`;
  if(c.avatar==="wallet")return `<span class="wallet-avatar" style="width:${size}px;height:${size}px">${icon("wallet")}</span>`;
  if(c.initial)return `<span class="initial-avatar" style="width:${size}px;height:${size}px;background:${c.color||""};font-size:${Math.round(size*.38)}px">${c.initial}</span>`;
  const cls=c.ring?`avatar-wrap ${c.ring}`:"avatar-wrap";
  const imgSize=c.ring?size-9:size;
  return `<span class="${cls}"><img src="${c.avatar}" alt="" style="width:${imgSize}px;height:${imgSize}px">${c.online?'<i class="online"></i>':""}${c.live?'<i class="live-badge">LIVE</i>':""}</span>`;
}
function nameHTML(c){return `${c.secret?'<span style="color:#35a852">🔒 </span>':""}${c.name}${c.premium?'<span class="premium-star">★</span>':""}${c.statusEmoji?` <span class="status-emoji">${c.statusEmoji}</span>`:""}${c.verified?'<span class="verified"> ☑</span>':""}${c.muted?`<span class="muted-ic">${icon("mute")}</span>`:""}`;}
function chatRowHTML(c){
  const preview=c.file?`<img class="file-thumb" src="img/photo-01.jpg" alt="">${c.preview}`:(c.sender?`<span class="sender">${c.sender}</span><br>${c.preview}`:c.preview);
  return `<button class="chat-row" data-chat-row="${c.id}">
    <span class="select-dot">✓</span>${avatarHTML(c,58)}
    <span class="chat-main"><span class="chat-name">${nameHTML(c)}</span><span class="chat-preview ${c.sender?"two-line":""}">${preview}</span></span>
    <span class="chat-meta"><span class="chat-time">${c.ticks?'<span class="ticks">✓✓</span>':""}${c.time}</span>${c.open?'<span class="unread open">OPEN</span>':""}${c.unread?`<span class="unread ${c.unreadGrey?"grey":""}">${c.unread}</span>`:""}</span>
  </button>`;
}
function renderChats(filter="all"){
  let list=chats;
  if(filter==="groups")list=chats.filter(c=>c.category==="groups");
  if(filter==="work")list=chats.filter(c=>c.category==="work");
  if(filter==="bots")list=chats.filter(c=>c.category==="bots");
  $("#chatList").innerHTML=list.map(chatRowHTML).join("");
}
function renderStories(){
  $("#storyRow").innerHTML=stories.map(s=>`<button class="story" data-story="${s.name}"><span class="avatar-wrap ${s.ring||""}"><img src="${s.avatar}" alt="">${s.plus?'<i class="plus-badge">+</i>':""}${s.live?'<i class="live-badge">LIVE</i>':""}</span><span>${s.name}</span></button>`).join("");
  $("#searchStories").innerHTML=searchStoriesData.map(s=>`<button class="story" data-story="${s.name}"><span class="avatar-wrap ${s.ring||""}"><img src="${s.avatar}" alt=""></span><span>${s.name}</span></button>`).join("");
}
function contactRowHTML(c,mode="contact"){
  const av=c.initial?`<span class="initial-avatar" style="width:47px;height:47px;background:${c.color}">${c.initial}</span>`:`<img src="${c.avatar}" alt="">`;
  return `<button class="${mode==="recent"?"recent-row":"contact-row"}" data-contact="${c.chat||c.profile||""}" data-contact-kind="${c.chat?"chat":"profile"}">${av}<span class="contact-main"><span class="contact-name">${c.name}${c.statusEmoji?` ${c.statusEmoji}`:""}</span><span class="contact-status ${c.online?"online":""}">${c.status}</span></span></button>`;
}
function renderContacts(){
  $("#contactList").innerHTML=contacts.map(c=>contactRowHTML(c)).join("");
  $("#recentList").innerHTML=contacts.slice(0,5).map(c=>contactRowHTML(c,"recent")).join("");
  $("#callList").innerHTML=calls.map(c=>`<button class="call-row" data-call="${c.chat}"><img src="${c.avatar}" alt=""><span class="contact-main"><span class="contact-name">${c.name}</span><span class="call-kind ${c.kind==="missed"?"missed":c.kind==="in"?"in":""}">${c.kind==="missed"?"↙":c.kind==="in"?"↗":"↗"} ${c.label}</span></span><span class="call-side">${c.time}<br><span style="color:#1685f8;font-size:19px">ⓘ</span></span></button>`).join("");
  $("#archivedList").innerHTML=archivedIds.map(id=>chatRowHTML(chats.find(c=>c.id===id))).join("");
}
function getChat(id){return chats.find(c=>c.id===id)||chats[1];}
function meta(time="9:41",ticks=false){return `<span class="msg-meta">${time}${ticks?'<span class="ticks">✓✓</span>':""}</span>`;}
function reactions(list){return `<span class="reactions">${list.map(r=>`<span class="reaction ${r[2]||""}">${r[0]} ${r[1]}</span>`).join("")}</span>`;}
function msgIn(html,{time="9:41",avatar="",sender="",senderClass="blue",role="",react=null,cls=""}={}){
  const hideMeta=cls.includes("channel-post");
  return `<div class="msg-row in ${avatar?"with-avatar":""}">${avatar?`<img class="msg-avatar" src="${avatar}" alt="">`:""}<div class="bubble ${cls}" data-bubble>${role?`<span class="role-badge">${role}</span>`:""}${sender?`<div class="sender-name ${senderClass}">${sender}</div>`:""}${html}${hideMeta?"":meta(time)}${react?reactions(react):""}</div></div>`;
}
function msgOut(html,{time="9:41",react=null,quote=null,cls=""}={}){
  return `<div class="msg-row out"><div class="bubble ${cls}" data-bubble>${quote?`<div class="quote-block"><b>${quote[0]}</b>${quote[1]}</div>`:""}${html}${meta(time,true)}${react?reactions(react):""}</div></div>`;
}
const service=t=>`<div class="service-row"><span class="service-pill">${t}</span></div>`;
function waveHTML(){let h=[8,14,20,10,17,24,12,19,8,16,22,11,18,9,15,21,10,17,13,20,8,14,18,11,16,9,13,17];return `<span class="wave">${h.map(x=>`<i style="height:${x}px"></i>`).join("")}</span>`;}
function mapCard(){return `<div class="msg-row in"><div class="map-card"><div class="map-graphic"><svg viewBox="0 0 310 145" preserveAspectRatio="none"><rect width="310" height="145" fill="#edf3df"/><path d="M0 92 C70 75 100 38 130 0 L178 0 C145 48 116 96 62 145 L0 145Z" fill="#b9dcf3"/><path d="M0 42 H118 M25 145 C50 100 85 58 150 20 M128 145 C155 95 200 45 264 0 M180 76 H310 M220 145 C238 96 260 48 292 0" stroke="#fff" stroke-width="10" fill="none"/><path d="M0 42 H118 M25 145 C50 100 85 58 150 20 M128 145 C155 95 200 45 264 0 M180 76 H310" stroke="#ddd6c8" stroke-width="2" fill="none"/><rect x="12" y="52" width="58" height="34" fill="#f3d5ca"/><rect x="92" y="96" width="58" height="36" fill="#f3d5ca"/><rect x="225" y="22" width="60" height="38" fill="#f3d5ca"/><text x="88" y="78" font-size="9" fill="#9a958a" transform="rotate(-48 88 78)">HERRENGRABEN</text><circle cx="166" cy="107" r="7" fill="#8e44ad"/><text x="178" y="102" font-size="10" fill="#7d3c98">Hotel Motel</text><text x="178" y="114" font-size="10" fill="#7d3c98">One Hamburg-</text><text x="178" y="126" font-size="10" fill="#7d3c98">Fleetinsel</text><circle cx="139" cy="72" r="8" fill="#1685f8" stroke="#fff" stroke-width="3"/></svg></div><div class="map-foot"><div class="map-foot-main"><b>Live Location</b><span>updated just now</span></div><span class="live-count">14</span></div></div></div>`;}
function diceHTML(){return `<div class="dice-wrap"><div class="dice"><i></i><i class="off"></i><i></i><i class="off"></i><i></i><i class="off"></i><i></i><i class="off"></i><i></i></div><span class="time-chip">9:41</span></div>`;}
function chatContent(id){
  if(id==="cat")return mapCard()+msgOut("Send a dice emoji to roll a die!")+diceHTML()+msgOut("Advance to Illinois Ave. If you pass Go, collect coffee")+msgIn("Passed!")+`<div class="round-video"><img src="img/cat-round-video.jpg" alt="Cat video message"><span class="time-chip duration">0:04 •</span><span class="mute-dot">${icon("mute")}</span><span class="time-chip rv-time">9:41</span></div>`+msgOut("Okay")+msgOut("Wait for me there.");
  if(id==="nomads")return service("Dog joined the group")+`<div class="msg-row in with-avatar"><img class="msg-avatar" src="${AV.leo}" alt=""><div class="sticker-croc"><span class="hi">Hi</span><span class="croc">🐊</span></div><span class="time-chip" style="align-self:flex-end">9:41</span></div>`+msgOut("Do you have any idea what time it is?",{quote:["Penguin","Good morning! 👋"],react:[["😄",5,"grey"],["🫡",2,"grey"]]})+msgIn(`<div class="poll-q">is it still morning? 🤔</div><div class="poll-type">Anonymous Poll</div><div class="poll-option"><div>67%&nbsp; <b>Sure!</b></div><span class="poll-check">✓</span><div class="poll-bar" style="width:67%"></div></div><div class="poll-option"><div>33%&nbsp; <b>Not Sure</b></div><div class="poll-bar" style="width:33%"></div></div><div class="poll-votes">345 votes</div>`,{avatar:AV.pepe,sender:"Pepe",cls:"poll-bubble"})+msgIn(`<div class="voice-row"><button class="play-btn" data-toast="Playing voice message">${icon("play")}</button>${waveHTML()}<span class="voice-side"><span class="transcribe">→A</span><span>0:21 •</span></span></div>`,{avatar:AV.cat,sender:'Cat <span class="premium-star">★</span>',role:"Owner"});
  if(id==="dog")return service("Today")+`<div class="sticker-hamster"><span class="hi a">Hi</span>🐹<span class="hi b">Hi</span></div><div style="margin-left:190px" class="time-chip">9:41</div>`+`<div class="msg-row in"><button class="bubble photo-bubble" data-view-photo="img/dog-cats-album.jpg"><img src="img/dog-cats-album.jpg" alt="Cats album"></button></div>`+msgOut("No limits on the size of your cats.")+msgIn(`<span class="call-bubble"><span>Incoming Call<small>↗ 9:41 (1 minute)</small></span><span class="call-ic">${icon("phone")}</span></span>`);
  if(id==="dolphin")return msgIn("Any gift ideas for mom?")+service("You set the self-destruct timer to 1 minute")+msgOut("A dog!")+`<div class="msg-row in"><div class="self-destruct"><span class="sd-count">↻ 1</span><span class="flame">🔥</span><span class="time-chip" style="position:absolute;right:7px;bottom:7px;z-index:1">9:41</span></div></div>`+msgOut("I'm serious. Let's get her a puppy. 🐶")+service("Dolphin took a screenshot!")+msgOut("I saw this!")+`<div class="sticker-msg" style="margin-left:190px">🍑</div>`+msgIn("I needed proof this was your idea! 😭🤨");
  if(id==="pavel")return msgIn(`📝 All Telegram chatbots can now stream responses to users in real time — great for AI assistants.`,{cls:"channel-post",react:[["⭐",563,"warm"],["❤️",312],["🏆",98],["🔥",65],["😄",51],["🤡",12]]}).replace("</div></div>",`<span class="post-views">👁 3,1M&nbsp;&nbsp;Pavel Durov&nbsp;&nbsp;9:41</span><span class="forward-arrow">${icon("forward")}</span></div></div>`)+service("March 23")+msgIn(`💸 Telegram has fully repaid the bonds we issued 5 years ago. 🌌<br><br>💰 Since 2021, we’ve built an innovative monetization strategy and reached profitability in 2024. As a result, our new bond issuance last year was oversubscribed. 💪<br><br>🙏 Thank you for your support!`,{cls:"channel-post",react:[["⭐","39,4K","warm"],["❤️","72K"],["🏆","19,4K"],["🔥","18,6K"],["😄","8,4K"]]}).replace("</div></div>",`<span class="post-views">👁 1,6M&nbsp;&nbsp;Pavel Durov&nbsp;&nbsp;9:41</span><span class="forward-arrow">${icon("forward")}</span></div></div>`);
  if(id==="wallet")return `<div class="bot-hero"><div class="hero-emoji">🪙👛🪙</div><h2>What can this bot do?</h2><p>With Wallet you can buy, sell and transfer cryptocurrencies instantly to your contacts.</p></div><button class="bot-start" id="btnWalletStart">Start</button>`;
  if(id==="catch")return msgOut("/Start")+msgIn(`Welcome to <b>Catch News!</b> 📣<br><br>The world is changing every second, and we're here to make sure you don't miss a thing. Only the most important, interesting, and relevant stories. 🚀<br><br>📸 World events<br>🔝 Top trends<br>🌐 Global news`)+`<div class="bot-buttons"><button class="wide" data-toast="Write">✍️ Write</button><button class="about" data-toast="About Catch News">ℹ️ About ↗</button><button class="unsub" data-toast="Unsubscribed">⛔ Unsubscribe</button></div>`;
  if(id==="saved")return service("Saved Messages")+`<div class="msg-row out"><button class="bubble photo-bubble" data-view-photo="img/photo-01.jpg"><img src="img/photo-01.jpg" alt="IMG_420.png"></button></div>`+msgOut("IMG_420.png");
  if(id==="penguin")return msgIn("Check these out!")+`<div class="msg-row in"><button class="bubble photo-bubble" data-view-photo="img/photo-08.jpg"><img src="img/photo-08.jpg" alt="Shared photo"></button></div>`+msgOut("Nice!");
  if(id==="team16")return service("16Bit Team started a Live Stream")+msgIn("We are live! 🍓",{react:[["❤️",12],["🔥",4]]});
  if(id==="news")return msgIn("Top trends and global news",{cls:"channel-post",react:[["⭐",24,"warm"],["❤️",18]]});
  const c=getChat(id);return service("Today")+msgIn(c.preview)+msgOut("Okay");
}
function openChat(id){
  const c=getChat(id);currentChatId=id;
  const scr=$("#scr-chat");scr.className=`screen chat-screen ${c.wall||"wall-green"}`;
  $("#chatName").innerHTML=nameHTML(c);
  const st=$("#chatStatus");st.textContent=c.status||"";st.classList.toggle("online",!!c.statusOnline);
  const avatarBtn=$("#chatAvatarBtn");
  if(c.avatar==="saved"||c.avatar==="wallet")avatarBtn.innerHTML=avatarHTML(c,39);
  else avatarBtn.innerHTML=`<img id="chatAvatar" src="${c.avatar}" alt="">`;
  $("#backCount").style.display=c.backCount?"grid":"none";$("#backCount").textContent=c.backCount||"";
  $("#messages").innerHTML=chatContent(id);
  const isChannel=c.type==="channel";
  $("#composer").hidden=isChannel;$("#channelBar").hidden=!isChannel;
  $("#btnBotMenu").hidden=!(id==="catch");$("#btnAttach").hidden=(id==="catch");
  if(id==="catch")$("#btnAttach").hidden=false;
  $("#secretTimer").hidden=c.type!=="secret";
  $("#replyPreview").hidden=true;replyText="";
  $("#msgInput").value="";updateComposer();
  showScreen("chat");
  requestAnimationFrame(()=>{$("#messages").scrollTop=$("#messages").scrollHeight;});
  const start=$("#btnWalletStart");if(start)start.addEventListener("click",()=>{start.remove();appendMessage(msgOut("/start"));setTimeout(()=>appendMessage(msgIn("Welcome to Crypto Wallet!")),350);});
}
function appendMessage(html){const m=$("#messages");m.insertAdjacentHTML("beforeend",html);m.scrollTop=m.scrollHeight;}
function updateComposer(){
  const ta=$("#msgInput"),btn=$("#btnSend"),ic=$("#sendIcon");
  ta.style.height="auto";ta.style.height=Math.min(96,ta.scrollHeight)+"px";
  const ready=ta.value.trim().length>0;btn.classList.toggle("ready",ready);ic.innerHTML=icon(ready?"send":"mic");
}
function profileActions(kind){
  if(kind==="group")return `<div class="profile-actions"><button class="profile-action" data-open-chat="nomads">${icon("chats")}message</button><button class="profile-action" data-toast="Notifications muted">${icon("bell")}mute</button><button class="profile-action" data-toast="Search">${icon("search")}search</button><button class="profile-action" data-toast="More">${icon("more")}more</button></div>`;
  return `<div class="profile-actions"><button class="profile-action" data-toast="Calling…">${icon("phone")}call</button><button class="profile-action" data-toast="Starting video call…">${icon("video")}video</button><button class="profile-action" data-toast="Notifications muted">${icon("bell")}mute</button><button class="profile-action" data-toast="Search">${icon("search")}search</button><button class="profile-action" data-toast="More">${icon("more")}more</button></div>`;
}
function mediaGrid(){return `<div class="media-grid">${[2,8,10,1,5,7,3,11,12].map(n=>`<button data-view-photo="img/photo-${String(n).padStart(2,"0")}.jpg"><img src="img/photo-${String(n).padStart(2,"0")}.jpg" alt=""></button>`).join("")}</div>`;}
function giftGrid(){const gifts=[["💖",25],["🔔",25],["🎁",50],["⭐",100],["🦔",25],["🍑",15],["🐸",30],["💎",250]];return `<div class="gift-grid">${gifts.map(g=>`<button class="gift-card" data-toast="Gift details"><span class="gift-emoji">${g[0]}</span><br><span class="gift-price">★ ${g[1]}</span></button>`).join("")}</div>`;}
function infoCard(rows){return `<div class="info-card">${rows.map(r=>`<div class="info-row"><div class="info-label">${r[0]}</div><div class="info-value ${r[2]?"blue":""}">${r[1]}</div></div>`).join("")}</div>`;}
function openProfile(id){
  currentProfileId=id;let html="";
  if(id==="cat"){
    html=`<div class="profile-head cat-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-pill" data-toast="Edit">Edit</button></div><img class="profile-avatar ringed" src="${AV.catLarge}" alt=""><div class="profile-name">Cat ★</div><div class="profile-status"><span class="back-count" style="display:inline-grid;vertical-align:-4px">8</span> last seen just now</div>${profileActions()}<div class="profile-music">♫ project x <span style="opacity:.75">- halfadedd</span> ›</div></div>
    <div class="profile-body"><div class="channel-label"><span>CHANNEL</span><span>17 173 subscribers</span></div><div class="channel-card"><button class="channel-mini" data-toast="Open channel"><img src="img/cat-round-video.jpg" alt=""><span class="channel-mini-main"><b>Cats's head 🔗</b><span>Voice Message</span></span><span style="color:#999">9:41<br><span class="unread">12</span></span></button></div>
    ${infoCard([["mobile","+888 888 888",1],["username","@cat",1],["birthday","6 Jul"]])}
    <div class="profile-tabs"><button class="active" data-profile-tab="posts">Posts</button><button data-profile-tab="gifts">Gifts</button><button data-profile-tab="media">Media</button><button data-profile-tab="files">Files</button><button data-profile-tab="music">Music</button></div>
    <div data-profile-pane="posts">${mediaGrid()}</div><div data-profile-pane="gifts" hidden><div class="gift-filters"><button class="active">All Gifts</button><button data-toast="Craft Gift">Craft</button><button data-toast="Friends">Friends</button></div>${giftGrid()}<button class="profile-primary" data-toast="Send Gift">Send Gift</button></div><div data-profile-pane="media" hidden>${mediaGrid()}</div><div data-profile-pane="files" hidden>${infoCard([["IMG_420.png","2.4 MB"],["Design.pdf","1.1 MB"]])}</div><div data-profile-pane="music" hidden>${infoCard([["project x","halfadedd"]])}</div></div>`;
  }else if(id==="dino"){
    html=`<div class="profile-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-pill" data-toast="Edit">Edit</button></div><img class="profile-avatar" src="${AV.dinoLarge}" alt=""><div class="profile-name">Dinosaur ★</div><div class="profile-status">+888 888 888 • @dino</div><div style="height:18px"></div></div>
    <div class="profile-body"><div class="profile-tabs"><button data-profile-tab="posts">Posts</button><button class="active" data-profile-tab="gifts">Gifts</button><button data-profile-tab="media">Media</button></div><div data-profile-pane="posts" hidden>${mediaGrid()}</div><div data-profile-pane="gifts"><div class="gift-filters"><button class="active">All Gifts</button><button data-toast="Craft Gift">Craft</button><button data-toast="Friends">Friends</button></div>${giftGrid()}<button class="profile-primary" data-toast="Send Gifts to Friends">Send Gifts to Friends</button></div><div data-profile-pane="media" hidden>${mediaGrid()}</div></div>`;
  }else if(id==="nomads"){
    const members=[["Penguin",AV.penguin,"online",""],["Dolphin",AV.dolphin,"online",""],["Dog",AV.dog,"last seen 3 minutes ago",""],["Cat",AV.cat,"last seen 4 minutes ago","Owner"],["Elephant","","last seen 15 minutes ago",""],["Pepe",AV.pepe,"last seen recently",""],["Giraffe","","last seen recently",""]];
    html=`<div class="profile-head white-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-pill" data-toast="Edit">Edit</button></div><img class="profile-avatar" src="${AV.nomads}" alt=""><div class="profile-name" style="font-size:22px">Digital Nomads</div><div class="profile-status" style="color:#888">2,503 members, 736 online</div>${profileActions("group")}</div>
    <div class="profile-body"><div class="profile-tabs"><button class="active">Members</button><button data-toast="Media">Media</button><button data-toast="Files">Files</button><button data-toast="Music">Music</button></div><div class="profile-card"><button class="member-row" data-toast="Add Members"><span class="setting-ic blue">${icon("person-plus")}</span><span class="member-main"><span class="member-name" style="color:#1685f8">Add Members</span></span></button>${members.map(m=>`<button class="member-row" data-toast="${m[0]}">${m[1]?`<img src="${m[1]}" alt="">`:`<span class="initial-avatar" style="width:45px;height:45px">${m[0][0]}</span>`}<span class="member-main"><span class="member-name">${m[0]}</span><br><span class="member-status">${m[2]}</span></span>${m[3]?`<span class="member-role">${m[3]}</span>`:""}</button>`).join("")}</div></div>`;
  }else if(id==="wallet"){
    html=`<div class="profile-head white-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-round" data-toast="More">${icon("more")}</button></div><span class="wallet-avatar" style="width:88px;height:88px;margin:8px auto 6px">${icon("wallet")}</span><div class="profile-name" style="font-size:23px">Wallet ☑</div><div class="profile-status" style="color:#888">bot</div>${profileActions("group")}</div>
    <div class="profile-body">${infoCard([["@wallet","Buy and send USDT, Gold, Bitcoin, TON and other crypto.<br>Trusted by 150M users<br>24/7 support: @wallet_support"]])}<button class="profile-primary" data-open-chat="wallet">Open App</button><div class="wallet-preview"><div class="wallet-mini"><b>Wallet</b><span>Balance</span><strong>$0.00</strong></div><div class="wallet-mini"><b>TON</b><span>Price</span><strong>$5.42</strong></div><div class="wallet-mini"><b>USDT</b><span>Price</span><strong>$1.00</strong></div></div></div>`;
  }else if(id==="pavel"){
    html=`<div class="profile-head dark-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-round" data-toast="More">${icon("more")}</button></div><img class="profile-avatar" src="${AV.pavel}" alt=""><div class="profile-name" style="font-size:23px">Pavel Durov 📚 ☑</div><div class="profile-status">10,288,126 subscribers</div>${profileActions("group")}</div>
    <div class="profile-body">${infoCard([["share link","https://t.me/durov",1],["description","Founder of Telegram."]])}<div class="profile-tabs"><button class="active">Posts</button><button data-toast="Media">Media</button><button data-toast="Files">Files</button><button data-toast="Links">Links</button></div>${mediaGrid()}</div>`;
  }else{
    const c=contacts.find(x=>x.profile===id)||getChat(id);
    const img=c.avatar&&c.avatar.startsWith("img/")?c.avatar:AV.dino;
    html=`<div class="profile-head"><div class="profile-nav"><button class="glass-round" data-back>${icon("back")}</button><span class="spacer"></span><button class="glass-pill" data-toast="Edit">Edit</button></div>${c.avatar==="saved"||c.avatar==="wallet"?`<span style="display:block;width:100px;margin:8px auto 6px">${avatarHTML(c,100)}</span>`:c.initial?`<span class="initial-avatar" style="width:100px;height:100px;margin:8px auto 6px;font-size:38px;background:${c.color}">${c.initial}</span>`:`<img class="profile-avatar" src="${img}" alt="">`}<div class="profile-name">${c.name}</div><div class="profile-status">${c.status||"last seen recently"}</div>${profileActions()}</div><div class="profile-body">${infoCard([["mobile","+888 888 888",1],["username","@"+String(c.name).toLowerCase().replace(/\s+/g,""),1]])}<div class="profile-tabs"><button class="active">Posts</button><button data-toast="Gifts">Gifts</button><button data-toast="Media">Media</button><button data-toast="Files">Files</button><button data-toast="Music">Music</button></div>${mediaGrid()}</div>`;
  }
  $("#profileContent").innerHTML=html;
  $("#profileContent").scrollTop=0;
  showScreen("profile");
}
function renderAttach(){
  const items=[1,2,3,4,5,6,7,8,9,10,11,12,1,5,8,3,10,12];
  $("#attachGrid").innerHTML=items.map((n,i)=>`<button class="attach-tile" data-attach="${i}" data-src="img/gallery-${String(n).padStart(2,"0")}.jpg"><img src="img/gallery-${String(n).padStart(2,"0")}.jpg" alt="">${i===0?`<span class="attach-insta">${icon("instagram")}</span>`:`<span class="attach-select"></span>`}</button>`).join("");
}
function renderEmojiPanel(type="emoji"){
  const el=$("#emojiContent");
  if(type==="emoji"){
    const recent=["🫡","🐸","🥲","😗","😱","🥴","😓","🚽","✅","⛔"];
    const all="😀 😃 😄 😁 😆 🥹 😅 😂 🤣 🥲 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤨 🧐 🤓 😎 🥸 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🫣 🤔 🫢".split(" ");
    el.innerHTML=`<div class="emoji-section">RECENTLY USED</div><div class="emoji-grid">${recent.map(e=>`<button data-emoji="${e}">${e}</button>`).join("")}</div><div class="emoji-section">ANIMATED EMOJI</div><div class="emoji-grid">${all.map(e=>`<button data-emoji="${e}">${e}</button>`).join("")}</div>`;
  }else if(type==="stickers"){
    el.innerHTML=`<div class="emoji-section">FAVORITE STICKERS</div><div class="sticker-grid">${["🍒","🦆","🐊","🐻","🐹"].map(e=>`<button data-sticker="${e}">${e}</button>`).join("")}</div><div class="emoji-section">RECENTLY USED</div><div class="sticker-grid"><button class="create-sticker" data-toast="Create Sticker"><b>+</b>Create<br>Sticker</button>${["🎁","🍑","🔥","🍎","🐊","🐻"].map(e=>`<button data-sticker="${e}">${e}</button>`).join("")}</div><div class="emoji-section">LIFE’S A PEACH</div><div class="sticker-grid">${Array.from({length:20},()=>`<button data-sticker="🍑">🍑</button>`).join("")}</div>`;
  }else{
    el.innerHTML=`<div class="gif-grid">${[1,2,3,4,5,6].map(n=>`<button data-gif="img/photo-${String(n).padStart(2,"0")}.jpg"><img src="img/photo-${String(n).padStart(2,"0")}.jpg" alt=""><span>GIF</span></button>`).join("")}</div>`;
  }
  $$("#emojiTabs button").forEach(b=>b.classList.toggle("active",b.dataset.panel===type));
}
function renderEmojiPacks(){
  $("#emojiPackRow").innerHTML=`<button data-toast="Recent">${icon("clock")}</button><button data-toast="Emoji">😄</button><button data-toast="Ducks">🦆</button><button data-toast="Crocodile">🐊</button><button data-toast="Hamster">🐹</button><button data-toast="Peach">🍑</button><button data-toast="Bear">🐻</button><button data-toast="More packs">👾</button>`;
}
function openAttach(){closePanels();$("#attachBackdrop").hidden=false;$("#attachSheet").hidden=false;}
function openEmoji(){closePanels();$("#emojiPanel").hidden=false;renderEmojiPanel($("#emojiTabs .active")?.dataset.panel||"emoji");}
function closePanels(){$("#attachBackdrop").hidden=true;$("#attachSheet").hidden=true;$("#emojiPanel").hidden=true;}
function openContext({reactions:showR=true,items=[],target=null,text=""}={}){
  contextTarget=target;
  $("#reactionBar").hidden=!showR;
  $("#reactionBar").innerHTML=["❤️","👍","👎","🔥","🥰","👏","😁","🤔"].map(e=>`<button data-reaction="${e}">${e}</button>`).join("");
  $("#contextMenu").innerHTML=items.map(i=>`<button data-context-action="${i.action}" class="${i.danger?"danger":""}"><span>${i.label}</span>${icon(i.icon||"more")}</button>`).join("");
  $("#contextMenu").dataset.text=text;
  $("#contextBackdrop").hidden=false;
}
function closeContext(){$("#contextBackdrop").hidden=true;contextTarget=null;}
function openMessageContext(bubble){
  const own=bubble.closest(".msg-row")?.classList.contains("out");
  const items=[{label:"Reply",action:"reply",icon:"reply"},{label:"Pin",action:"pin",icon:"pin"},{label:"Copy",action:"copy",icon:"copy"},{label:"Forward",action:"forward",icon:"forward"}];
  if(own)items.push({label:"Edit",action:"edit",icon:"edit"});
  items.push({label:"Delete",action:"delete",icon:"trash",danger:true});
  openContext({items,target:bubble.closest(".msg-row"),text:bubble.innerText.trim()});
}
function openChatContext(id){
  openContext({reactions:false,items:[{label:"Add to Folder",action:"folder",icon:"archive"},{label:"Mark as Unread",action:"unread",icon:"comment"},{label:"Pin",action:"pin",icon:"pin"},{label:"Mute",action:"mute",icon:"mute"},{label:"Delete",action:"delete-chat",icon:"trash",danger:true}],text:id});
}
function addReactionToTarget(emoji){
  if(!contextTarget)return;
  const bubble=contextTarget.querySelector(".bubble");if(!bubble)return;
  let box=bubble.querySelector(".reactions");
  if(!box){box=document.createElement("span");box.className="reactions";bubble.appendChild(box);}
  const pill=document.createElement("span");pill.className="reaction";pill.textContent=`${emoji} 1`;box.appendChild(pill);
}
function openViewer(src,name="Dolphin",date="Feb 6 at 9:41"){
  $("#viewerImg").src=src;$("#viewerName").textContent=name;$("#viewerDate").textContent=date;
  const thumbs=["img/viewer-london.jpg","img/photo-02.jpg","img/photo-08.jpg"];
  $("#viewerThumbs").innerHTML=thumbs.map((t,i)=>`<button class="${t===src?"active":""}" data-thumb="${t}"><img src="${t}" alt=""></button>`).join("");
  $("#photoViewer").hidden=false;$("#iosStatus").classList.add("on-dark");
}
function closeViewer(){$("#photoViewer").hidden=true;$("#iosStatus").classList.remove("on-dark");}

function bind(){
  fillIcons();renderStories();renderChats();renderContacts();renderAttach();renderEmojiPacks();renderEmojiPanel();
  $$(".nav-item").forEach(b=>b.addEventListener("click",()=>goMain(b.dataset.nav)));
  $("#btnOpenSearch").addEventListener("click",()=>{showScreen("search");setTimeout(()=>$("#searchInput").focus(),80);});
  $("#btnCloseSearch").addEventListener("click",()=>goMain("chats"));
  $("#btnCompose").addEventListener("click",()=>goMain("contacts"));
  $("#btnScan").addEventListener("click",()=>toast("Scan QR code"));
  $("#btnArchived").addEventListener("click",()=>showScreen("archived"));
  $("#folderRow").addEventListener("click",e=>{const b=e.target.closest("[data-folder]");if(!b)return;$$("#folderRow .folder").forEach(x=>x.classList.toggle("active",x===b));renderChats(b.dataset.folder);});
  $("#chatListScroll").addEventListener("scroll",e=>{$("#chatsHeader").classList.toggle("collapsed",e.target.scrollTop>46);});
  $("#btnEditChats").addEventListener("click",()=>{chatEditMode=!chatEditMode;$("#scr-chats").classList.toggle("edit-mode",chatEditMode);$("#btnEditChats").textContent=chatEditMode?"Done":"Edit";$("#mainNav").classList.toggle("hidden",chatEditMode);if(!chatEditMode)$$(".chat-row.selected").forEach(r=>r.classList.remove("selected"));});
  $("#btnReadAll").addEventListener("click",()=>{chats.forEach(c=>delete c.unread);renderChats($("#folderRow .active")?.dataset.folder||"all");renderContacts();toast("All chats marked as read");});
  $("#btnArchiveSel").addEventListener("click",()=>toast("Archived"));
  $("#btnDeleteSel").addEventListener("click",()=>{const ids=$$(".chat-row.selected").map(r=>r.dataset.chatRow);if(!ids.length)return toast("Select chats first");chats=chats.filter(c=>!ids.includes(c.id));renderChats();toast("Deleted");});
  document.addEventListener("click",e=>{
    const back=e.target.closest("[data-back]");if(back){goBack();return;}
    const go=e.target.closest("[data-go]");if(go){goMain(go.dataset.go);return;}
    const oc=e.target.closest("[data-open-chat]");if(oc){openChat(oc.dataset.openChat);return;}
    const op=e.target.closest("[data-open-profile]");if(op){openProfile(op.dataset.openProfile);return;}
    const story=e.target.closest("[data-story]");if(story){toast(story.dataset.story==="My Story"?"Add to Story":`${story.dataset.story}’s story`);return;}
    const contact=e.target.closest("[data-contact]");if(contact&&contact.dataset.contact){contact.dataset.contactKind==="chat"?openChat(contact.dataset.contact):openProfile(contact.dataset.contact);return;}
    const call=e.target.closest("[data-call]");if(call){toast("Calling…");return;}
    const tab=e.target.closest("[data-profile-tab]");if(tab){const wrap=tab.closest(".profile-body");$$("[data-profile-tab]",wrap).forEach(b=>b.classList.toggle("active",b===tab));$$("[data-profile-pane]",wrap).forEach(p=>p.hidden=p.dataset.profilePane!==tab.dataset.profileTab);return;}
    const view=e.target.closest("[data-view-photo]");if(view){openViewer(view.dataset.viewPhoto,getChat(currentChatId).name);return;}
    const thumb=e.target.closest("[data-thumb]");if(thumb){openViewer(thumb.dataset.thumb,$("#viewerName").textContent,$("#viewerDate").textContent);return;}
    const t=e.target.closest("[data-toast]");if(t){toast(t.dataset.toast);return;}
  });
  let pressTimer=null;
  document.addEventListener("pointerdown",e=>{
    const row=e.target.closest("[data-chat-row]"),bubble=e.target.closest("[data-bubble]");
    pressTimer=setTimeout(()=>{suppressClick=true;if(bubble)openMessageContext(bubble);else if(row)openChatContext(row.dataset.chatRow);},560);
  });
  ["pointerup","pointercancel","pointerleave"].forEach(ev=>document.addEventListener(ev,()=>clearTimeout(pressTimer),{passive:true}));
  document.addEventListener("contextmenu",e=>{const b=e.target.closest("[data-bubble]"),r=e.target.closest("[data-chat-row]");if(b||r){e.preventDefault();suppressClick=true;b?openMessageContext(b):openChatContext(r.dataset.chatRow);}});
  document.addEventListener("click",e=>{
    const row=e.target.closest("[data-chat-row]");if(!row)return;
    if(suppressClick){suppressClick=false;return;}
    if(chatEditMode&&currentScreen==="chats"){row.classList.toggle("selected");return;}
    openChat(row.dataset.chatRow);
  });
  $("#chatAvatarBtn").addEventListener("click",()=>openProfile(currentChatId));
  $("#chatTitlePill").addEventListener("click",()=>openProfile(currentChatId));
  $("#btnAttach").addEventListener("click",openAttach);
  $("#btnCloseAttach").addEventListener("click",closePanels);
  $("#attachBackdrop").addEventListener("click",closePanels);
  $("#btnEmoji").addEventListener("click",()=>$("#emojiPanel").hidden?openEmoji():closePanels());
  $("#emojiTabs").addEventListener("click",e=>{const b=e.target.closest("[data-panel]");if(b)renderEmojiPanel(b.dataset.panel);});
  $("#btnEmojiDelete").addEventListener("click",()=>{const ta=$("#msgInput");ta.value=ta.value.slice(0,-1);updateComposer();});
  $("#emojiContent").addEventListener("click",e=>{
    const em=e.target.closest("[data-emoji]");if(em){const ta=$("#msgInput");ta.value+=em.dataset.emoji;updateComposer();ta.focus();return;}
    const st=e.target.closest("[data-sticker]");if(st){appendMessage(`<div class="msg-row out"><div class="sticker-msg" style="margin:4px 4px 2px 0">${st.dataset.sticker}</div></div>`);closePanels();return;}
    const gif=e.target.closest("[data-gif]");if(gif){appendMessage(`<div class="msg-row out"><button class="bubble photo-bubble" data-view-photo="${gif.dataset.gif}"><img src="${gif.dataset.gif}" alt="GIF"></button></div>`);closePanels();}
  });
  $("#attachGrid").addEventListener("click",e=>{
    const tile=e.target.closest("[data-attach]");if(!tile)return;
    if(tile.classList.contains("selected")){
      appendMessage(`<div class="msg-row out"><button class="bubble photo-bubble" data-view-photo="${tile.dataset.src}"><img src="${tile.dataset.src}" alt="Photo"></button></div>`);
      tile.classList.remove("selected");tile.querySelector(".attach-select")&&(tile.querySelector(".attach-select").textContent="");closePanels();return;
    }
    tile.classList.add("selected");const badge=tile.querySelector(".attach-select");if(badge)badge.textContent=$$(".attach-tile.selected").length;
    toast("Photo selected — tap it again to send");
  });
  const ta=$("#msgInput");
  ta.addEventListener("input",updateComposer);
  ta.addEventListener("focus",closePanels);
  ta.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();$("#composer").requestSubmit();}});
  $("#composer").addEventListener("submit",e=>{
    e.preventDefault();const text=ta.value.trim();
    if(!text){toast("Hold to record a voice message");return;}
    const quote=replyText?["Reply to",replyText]:null;
    appendMessage(msgOut(text.replace(/</g,"&lt;").replace(/\n/g,"<br>"),{quote}));
    const c=getChat(currentChatId);c.preview=text;c.time="9:41";c.ticks=true;renderChats($("#folderRow .active")?.dataset.folder||"all");
    ta.value="";replyText="";$("#replyPreview").hidden=true;updateComposer();
  });
  $("#btnCancelReply").addEventListener("click",()=>{replyText="";$("#replyPreview").hidden=true;});
  $("#btnBotMenu").addEventListener("click",()=>{
    openContext({reactions:false,items:[{label:"/Write — write to the editor",action:"bot-write",icon:"edit"},{label:"/About — about the channel",action:"bot-about",icon:"caption"},{label:"/Unsub — unsubscribe",action:"bot-unsub",icon:"x"}]});
  });
  $("#btnChannelMute").addEventListener("click",e=>{const b=e.currentTarget;b.textContent=b.textContent==="Mute"?"Unmute":"Mute";toast(b.textContent==="Mute"?"Channel unmuted":"Channel muted");});
  $("#contextBackdrop").addEventListener("click",e=>{if(e.target.id==="contextBackdrop")closeContext();});
  $("#reactionBar").addEventListener("click",e=>{const b=e.target.closest("[data-reaction]");if(b){addReactionToTarget(b.dataset.reaction);closeContext();}});
  $("#contextMenu").addEventListener("click",e=>{
    const b=e.target.closest("[data-context-action]");if(!b)return;const a=b.dataset.contextAction,text=$("#contextMenu").dataset.text||"";
    if(a==="reply"){replyText=text.split("\n")[0].slice(0,80);$("#replyPreviewBody").textContent=replyText;$("#replyPreview").hidden=false;$("#msgInput").focus();}
    else if(a==="copy"){navigator.clipboard?.writeText(text).catch(()=>{});toast("Copied");}
    else if(a==="delete"){contextTarget?.remove();toast("Message deleted");}
    else if(a==="edit"){$("#msgInput").value=text.replace(/\s*9:41.*$/,"");updateComposer();$("#msgInput").focus();}
    else if(a==="delete-chat"){chats=chats.filter(c=>c.id!==text);renderChats();renderContacts();toast("Chat deleted");}
    else if(a==="unread"){const c=getChat(text);c.unread=1;renderChats();toast("Marked as unread");}
    else if(a.startsWith("bot-")){toast(a==="bot-unsub"?"Unsubscribed":"Catch News command");}
    else toast(b.textContent.trim());
    closeContext();
  });
  $("#messages").addEventListener("dblclick",e=>{const b=e.target.closest("[data-bubble]");if(b){contextTarget=b.closest(".msg-row");addReactionToTarget("❤️");contextTarget=null;}});
  $("#btnCloseViewer").addEventListener("click",closeViewer);
  $("#searchInput").addEventListener("input",e=>{
    const q=e.target.value.trim().toLowerCase(),box=$("#searchResults");
    if(!q){box.innerHTML="";$("#recentList").style.display="";return;}
    $("#recentList").style.display="none";
    const found=chats.filter(c=>c.name.toLowerCase().includes(q)||c.preview.toLowerCase().includes(q));
    box.innerHTML=found.length?`<div class="recent-head"><span>RESULTS</span></div>`+found.map(chatRowHTML).join(""):`<div class="no-results">No results for “${q}”</div>`;
  });
  $("#btnClearRecent").addEventListener("click",()=>{$("#recentList").innerHTML="";toast("Recent cleared");});
  $("#searchFilters").addEventListener("click",e=>{const b=e.target.closest("button");if(b)$$("#searchFilters button").forEach(x=>x.classList.toggle("active",x===b));});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closePanels();closeContext();closeViewer();}});
}
document.addEventListener("DOMContentLoaded",bind);
