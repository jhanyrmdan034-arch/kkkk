/* Telegram Android UI Kit — UI demo logic */
(function(){
"use strict";
if(location.search.indexOf("androidapp")>-1) document.body.classList.add("inapp");

/* ---------- Icons (outline, Telegram/Material style) ---------- */
var P={
menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.2-4.2"/>',
back:'<path d="M19.5 12h-14M11 6l-6 6 6 6"/>',
more:'<g fill="currentColor" stroke="none"><circle cx="12" cy="5" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="12" cy="19" r="1.75"/></g>',
phone:'<path d="M21.5 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.6 4.2 2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L7.6 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05z"/>',
clip:'<path d="m21.3 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 17.86 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
mic:'<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.8 21h6.4"/>',
send:'<path d="M21.5 2.5 11 13"/><path d="M21.5 2.5 14.8 21.5 11 13 2.5 9.2z"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8.3 14.2s1.3 1.9 3.7 1.9 3.7-1.9 3.7-1.9"/><g fill="currentColor" stroke="none"><circle cx="9" cy="9.6" r="1.2"/><circle cx="15" cy="9.6" r="1.2"/></g>',
edit:'<path d="M17 3.5a2.6 2.6 0 1 1 3.7 3.7L8 19.9 3 21l1.1-5z"/>',
lock:'<rect x="5" y="11" width="14" height="9.5" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
bookmark:'<path d="M6.5 3.5h11V21L12 16.8 6.5 21z"/>',
users:'<circle cx="9" cy="8.5" r="3.4"/><path d="M3 19.8c.7-3.2 3.1-4.9 6-4.9s5.3 1.7 6 4.9"/><path d="M15.8 5.5a3.4 3.4 0 0 1 0 6.2M17.9 15.2c1.7.8 2.7 2.3 3.1 4.6"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4.6 20.2c.9-3.7 3.8-5.5 7.4-5.5s6.5 1.8 7.4 5.5"/>',
mega:'<path d="M4 10.5v3c0 .4.3.8.7.9L7 15V9L4.7 9.6A.9.9 0 0 0 4 10.5z"/><path d="M7 9.8 19 5v13.5L7 13.8"/><path d="M9 14.8v3a2.2 2.2 0 0 0 4.4 0v-1.9"/>',
bell:'<path d="M6 10a6 6 0 0 1 12 0c0 4 1.6 5.2 1.6 5.2H4.4S6 14 6 10z"/><path d="M10.2 18.8a2 2 0 0 0 3.6 0"/>',
belloff:'<path d="M6 10a6 6 0 0 1 12 0c0 4 1.6 5.2 1.6 5.2H4.4S6 14 6 10z"/><path d="M10.2 18.8a2 2 0 0 0 3.6 0"/><path d="M4 3.5 20 20"/>',
video:'<rect x="2.5" y="6.5" width="13" height="11" rx="2.5"/><path d="m15.5 10.8 6-3.6v9.6l-6-3.6"/>',
image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9.5" r="1.7"/><path d="m4.5 18 5-5 2.8 2.8L16 12l3.5 4.2"/>',
file:'<path d="M6 2.8h7.5L19 8.3V21a.8.8 0 0 1-.8.8H6A.8.8 0 0 1 5.2 21V3.6A.8.8 0 0 1 6 2.8z"/><path d="M13.3 3v5.5H19"/>',
camera:'<path d="M4 7.5h2.6L8.7 4h6.6l2.1 3.5H20a1.6 1.6 0 0 1 1.6 1.6v8.8a1.6 1.6 0 0 1-1.6 1.6H4a1.6 1.6 0 0 1-1.6-1.6V9.1A1.6 1.6 0 0 1 4 7.5z"/><circle cx="12" cy="13.2" r="3.5"/>',
pinloc:'<path d="M12 21.3S5.2 15.7 5.2 9.9a6.8 6.8 0 0 1 13.6 0c0 5.8-6.8 11.4-6.8 11.4z"/><circle cx="12" cy="9.9" r="2.5"/>',
poll:'<path d="M5.5 20v-9.5M12 20V4.5M18.5 20v-6.5"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
close:'<path d="M6 6l12 12M18 6 6 18"/>',
chev:'<path d="m9.5 5 7 7-7 7"/>',
chevdown:'<path d="m5 9.5 7 7 7-7"/>',
check:'<path d="m4.5 12.6 5 5L19.5 6.8"/>',
moon:'<path d="M20.4 13.4A8.7 8.7 0 1 1 10.6 3.6a7 7 0 0 0 9.8 9.8z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19"/>',
settings:'<circle cx="12" cy="12" r="3.1"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09c0 .68.4 1.3 1 1.51.6.22 1.28.1 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.21.6.83 1 1.51 1.08H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2A2.8 2.8 0 1 1 12 13.8v.7"/><g fill="currentColor" stroke="none"><circle cx="12" cy="17.4" r="1.25"/></g>',
grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
chat:'<path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.6A8.5 8.5 0 1 1 21 11.5z"/>',
block:'<circle cx="12" cy="12" r="8.8"/><path d="M6 6l12 12"/>',
monitor:'<rect x="3" y="4" width="18" height="12.5" rx="2"/><path d="M9.5 20.3h5M12 16.5v3.8"/>',
folder:'<path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H10l2 2.5h7.5A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"/>',
data:'<ellipse cx="12" cy="5.5" rx="7.8" ry="2.9"/><path d="M4.2 5.5v13c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9v-13M4.2 12c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9"/>',
palette:'<path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.1 0 1.8-.9 1.8-1.8 0-.8-.6-1.3-.6-2.1 0-.9.8-1.6 1.9-1.6h1.8a4 4 0 0 0 4-4c0-4.5-4-8.1-8.9-8.1z"/><g fill="currentColor" stroke="none"><circle cx="7.6" cy="10.2" r="1.2"/><circle cx="11" cy="7.4" r="1.2"/><circle cx="15" cy="8.6" r="1.2"/><circle cx="8.2" cy="14.4" r="1.2"/></g>',
globe:'<circle cx="12" cy="12" r="9"/><path d="M3.2 12h17.6M12 3.2c2.6 2.5 3.9 5.4 3.9 8.8s-1.3 6.3-3.9 8.8c-2.6-2.5-3.9-5.4-3.9-8.8S9.4 5.7 12 3.2z"/>',
star:'<path d="m12 3.4 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.6l5.9-.9z"/>',
play:'<g fill="currentColor" stroke="none"><path d="M8.5 5.5v13l11-6.5z"/></g>',
download:'<path d="M12 3.5v11m0 0 4-4m-4 4-4-4"/><path d="M4 17.5V19a1.8 1.8 0 0 0 1.8 1.8h12.4A1.8 1.8 0 0 0 20 19v-1.5"/>',
archive:'<rect x="3" y="4" width="18" height="4.5" rx="1"/><path d="M4.8 8.5V19a1.5 1.5 0 0 0 1.5 1.5h11.4a1.5 1.5 0 0 0 1.5-1.5V8.5M10 12.5h4"/>',
mute:'<path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="m16.2 9.6 4.8 4.8m0-4.8-4.8 4.8"/>',
pin:'<path d="M14.5 4 20 9.5l-2.6.7-2 4.3-2.2 1.2-1.2-4.9-4.4-1.9 1-2.3 4.4-1.9z"/><path d="M9.8 14.2 4 20"/>',
arrowIn:'<path d="M6 5.5v7h7M6 12.5 17 2.8" transform="translate(1.5,3)"/>',
arrowOut:'<path d="M7 17.5 17.5 7m0 0H10m7.5 0v7.5"/>',
plane:'<g fill="currentColor" stroke="none"><path d="M21.9 3.1 2.7 10.6c-.9.35-.86 1.6.05 1.9l4.7 1.55 1.8 5.6c.23.72 1.14.92 1.66.37l2.4-2.55 4.62 3.4c.7.52 1.72.13 1.86-.7l2.6-15.5c.17-1-.77-1.83-1.5-1.57zM8.6 13.2l9.5-6c.2-.13.4.17.22.32l-7.9 7.2-.3 3z"/></g>'
};
function svg(name,cls){return '<svg class="'+(cls||"")+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(P[name]||"")+'</svg>';}
document.querySelectorAll("[data-icon]").forEach(function(el){ el.innerHTML=svg(el.getAttribute("data-icon")); });

function tickSVG(n){
  var attrs='fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  var paths = (n===1)
    ? '<path d="m3.2 7.4 3.3 3.1L13.2 3.8" '+attrs+'/>'
    : '<path d="m1.2 7.4 3.3 3.1L11.3 3.8" '+attrs+'/><path d="m7.9 7.1 3.3 3.4L18 3.8" '+attrs+'/>';
  return '<svg viewBox="0 0 20 13" aria-hidden="true">'+paths+'</svg>';
}
function verifiedSVG(){
  return '<svg class="verified" viewBox="0 0 24 24" aria-hidden="true"><polygon fill="currentColor" points="12,1.2 14.1,3.6 17.1,3 18.2,5.9 21.2,6.9 20.6,10 22.8,12 20.6,14 21.2,17.1 18.2,18.1 17.1,21 14.1,20.4 12,22.8 9.9,20.4 6.9,21 5.8,18.1 2.8,17.1 3.4,14 1.2,12 3.4,10 2.8,6.9 5.8,5.9 6.9,3 9.9,3.6"/><path d="m8.4 12.3 2.5 2.5 4.7-5.1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/* ---------- Data ---------- */
var chats=[
{id:"saved",name:"Saved Messages",type:"personal",special:"bookmark",preview:"UI Kit — design tokens and components",time:"12:40",pinned:true,status:"",username:"",grad:"grad-saved"},
{id:"telegram",name:"Telegram",type:"channel",special:"plane",verified:true,preview:"New update: stories, custom wallpapers and more inside.",time:"11:24",unread:3,status:"16.4M subscribers",username:"@telegram",grad:"grad-tg"},
{id:"maria-design",name:"Maria Garcia",type:"personal",online:true,preview:"The new Android UI kit looks perfect!",time:"10:58",unread:2,status:"online",username:"@Maria Garcia",phone:"+34 612 34 56 78",grad:"grad-6",initials:"MG"},
{id:"designers",name:"Designers Chat",type:"group",preview:"shared the latest mockups in Figma",sender:"Sarah Lee",time:"10:31",unread:12,status:"248 members, 37 online",username:"@designerschat",grad:"grad-2",initials:"DC"},
{id:"james-smith",name:"James Smith",type:"personal",preview:"Let's ship the build on Friday",mine:true,ticks:2,time:"09:17",status:"last seen recently",username:"@james smith",phone:"+1 415 555 0132",grad:"grad-5",initials:"JW"},
{id:"botfather",name:"BotFather",type:"bot",verified:true,preview:"Success! The bot is ready. Use /help",time:"08:46",status:"bot",username:"@BotFather",grad:"grad-4",initials:"BF"},
{id:"Anna Kim",name:"Anna Kim",type:"personal",muted:true,preview:"Voice message (0:42)",time:"Yesterday",unread:5,status:"last seen 1 hour ago",username:"@Anna Kim",phone:"+82 10 5550 1234",grad:"grad-0",initials:"AS"},
{id:"mobilekit",name:"Mobile Chat UI Kits",type:"group",preview:"We just reached 2,500 members! WOO!",sender:"Emma Davis",time:"Yesterday",status:"2,500 members",username:"@mobilechatkits",grad:"grad-3",initials:"MC"},
{id:"durov",name:"Durov's Channel",type:"channel",verified:true,preview:"Every month, hundreds of new features…",time:"Tue",status:"9.8M subscribers",username:"@durov",grad:"grad-1",initials:"DC"},
{id:"lucas-miller",name:"Lucas Miller",type:"personal",preview:"Photo",mine:true,ticks:1,time:"Tue",status:"last seen yesterday",username:"@lucas-miller",phone:"+49 171 555 0192",grad:"grad-4",initials:"LM"},
{id:"ton",name:"Ton Community",type:"channel",preview:"Mini Apps are taking off on Telegram",time:"Mon",unread:1,status:"1.2M subscribers",username:"@toncoin",grad:"grad-5",initials:"TC"},
{id:"emma-davis",name:"Emma Davis",type:"personal",online:true,preview:"Table for four, 2 PM. Be there.",time:"Mon",status:"online",username:"@emma-davis",phone:"+44 7700 900123",grad:"grad-3",initials:"VB"}
];
var messages={
saved:[{date:"Today"},{from:"out",text:"Telegram Android UI Ilya Grishin — components checklist",time:"12:38"},{from:"out",text:"Buttons · List Items · Tabs · Tabbar · Text Field · Main Button",time:"12:39"},{from:"out",kind:"file",file:"design-tokens.json",size:"4.2 KB",time:"12:40"}],
telegram:[{date:"Today"},{from:"in",text:"New update is here: stories, custom wallpapers for chats, and many other improvements.",time:"11:20"},{from:"in",kind:"photo",text:"Set a different wallpaper for every chat — or create your own with colors and patterns.",time:"11:22"},{from:"in",text:"Read more on our blog and update the app to try all the new features.",time:"11:24"}],
"maria-design":[{date:"Today"},{from:"in",text:"Hi! Did you see the updated Android UI kit?",time:"10:52"},{from:"out",text:"Yes! I built the whole interface from its components — buttons, list items, tabs…",time:"10:55",ticks:2},{from:"in",text:"That was fast. The colors match the original Telegram perfectly.",time:"10:57"},{from:"in",text:"The new Android UI kit looks perfect!",time:"10:58"}],
designers:[{date:"Today"},{from:"in",name:"Sarah Lee",color:"#8a4fd3",text:"Morning everyone! I shared the latest mockups in Figma",time:"10:12"},{from:"in",name:"Tom",color:"#dd6a2d",kind:"photo",text:"New chat screen variants",time:"10:15"},{from:"out",text:"Looks great — the bubbles and list items are spot on.",time:"10:20",ticks:2,reply:{who:"Tom",text:"New chat screen variants"}},{from:"in",name:"Maria Garcia",color:"#dd3d7d",kind:"voice",dur:"0:24",time:"10:31"},{from:"in",name:"Sarah Lee",color:"#8a4fd3",kind:"file",file:"Telegram Android UI Kit.fig",size:"70.7 MB",time:"10:31"}],
"james-smith":[{date:"Today"},{from:"in",text:"The APK builds fine on my side.",time:"09:10"},{from:"out",text:"Great — zero changes to the UI, just compiled it.",time:"09:15",ticks:2},{from:"out",text:"Let's ship the build on Friday",time:"09:17",ticks:2}],
botfather:[{date:"Today"},{from:"out",text:"/newbot",time:"08:44",ticks:2},{from:"in",text:"Alright, a new bot. How are we going to call it?",time:"08:44"},{from:"out",text:"UI Kit Bot",time:"08:45",ticks:2},{from:"in",text:"Success! The bot is ready. Use /help to see all commands.",time:"08:46"}]
};
function defaultMessages(c){
  return [{date:"Today"},{from:"in",text:"Hello! This is a UI demo of the Telegram Android kit.",time:"09:00"},{from:"out",text:"Hi! Everything here is built from the kit's components.",time:"09:02",ticks:2},{from:"in",text:c.preview||"Nice to see you here.",time:c.time||"09:05"}];
}
var contacts=[
{name:"Maria Garcia",seen:"online",on:true,grad:"grad-6",initials:"MG",chat:"maria-design"},
{name:"Emma Davis",seen:"online",on:true,grad:"grad-3",initials:"VB",chat:"emma-davis"},
{name:"James Smith",seen:"last seen recently",grad:"grad-5",initials:"JW",chat:"james-smith"},
{name:"Anna Kim",seen:"last seen 1 hour ago",grad:"grad-0",initials:"AS",chat:"Anna Kim"},
{name:"Lucas Miller",seen:"last seen yesterday",grad:"grad-4",initials:"LM",chat:"lucas-miller"},
{name:"Sarah Lee",seen:"last seen 2 hours ago",grad:"grad-2",initials:"SK"},
{name:"Noah Wilson",seen:"last seen recently",grad:"grad-1",initials:"NP"},
{name:"Min-Jun Park",seen:"last seen 3 days ago",grad:"grad-4",initials:"YJ"},
{name:"Olivia Chen",seen:"last seen last week",grad:"grad-6",initials:"DC"}
];
var calls=[
{name:"Maria Garcia",dir:"in",meta:"Today at 10:32 · 12 min",grad:"grad-6",initials:"MG"},
{name:"James Smith",dir:"out",meta:"Yesterday at 18:04 · 3 min",grad:"grad-5",initials:"JW"},
{name:"Anna Kim",dir:"missed",meta:"Yesterday at 09:15 · Missed",grad:"grad-0",initials:"AS"},
{name:"Emma Davis",dir:"in",meta:"Monday at 21:47 · 26 min",grad:"grad-3",initials:"VB"},
{name:"Lucas Miller",dir:"out",meta:"Sunday at 14:20 · Canceled",grad:"grad-4",initials:"LM"}
];
var stories=[{name:"My Story",grad:"grad-1",initials:"A",mine:true}];
contacts.slice(0,6).forEach(function(c){stories.push({name:c.name.split(" ")[0],grad:c.grad,initials:c.initials,seen:Math.random()<.35});});

/* ---------- Helpers ---------- */
function $(id){return document.getElementById(id);}
var toastTimer=null;
function toast(msg){var t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(function(){t.classList.remove("show");},2100);}
function initialsOf(name){return name.split(" ").map(function(w){return w[0];}).slice(0,2).join("").toUpperCase();}
function nowStr(){var d=new Date(),h=d.getHours(),m=("0"+d.getMinutes()).slice(-2);return h+":"+m;}
function avatarHTML(c,size){
  var inner;
  if(c.special==="bookmark") inner=svg("bookmark");
  else if(c.special==="plane") inner=svg("plane");
  else inner=(c.initials||initialsOf(c.name));
  var dot=c.online?'<span class="online-dot"></span>':"";
  return '<div class="avatar '+(size||"")+' '+(c.grad||"grad-5")+'">'+inner+dot+'</div>';
}

/* ---------- Router ---------- */
var stack=["chats"], currentChat=null;
function go(id){
  if(stack[stack.length-1]===id) return;
  stack.push(id); show(id);
}
function back(){
  if(stack.length<=1) return false;
  stack.pop(); show(stack[stack.length-1]); return true;
}
function show(id){
  document.querySelectorAll(".screen").forEach(function(s){s.classList.remove("active");});
  $("scr-"+id).classList.add("active");
  if(id==="search") setTimeout(function(){$("searchInput").focus();},260);
  if(id==="chats") renderChats(currentFilter);
}

/* ---------- Overlays ---------- */
function openDrawer(){ $("drawer").classList.add("open"); $("scrim").classList.add("open"); }
function closeDrawer(){ $("drawer").classList.remove("open"); $("scrim").classList.remove("open"); }
function closeSheet(){ $("attachSheet").classList.remove("open"); $("sheetScrim").classList.remove("open"); }
function closeAllOverlays(){
  var any=false;
  [["drawer"],["attachSheet"],["popupMenu"],["storyViewer"]].forEach(function(x){
    var el=$(x[0]); if(el.classList.contains("open")){el.classList.remove("open");any=true;}
  });
  if($("scrim").classList.contains("open")||$("sheetScrim").classList.contains("open")){any=true;}
  $("scrim").classList.remove("open"); $("sheetScrim").classList.remove("open");
  return any;
}
window.onAndroidBack=function(){ if(closeAllOverlays()) return true; return back(); };

/* ---------- Chat list ---------- */
var currentFilter="all";
function chatRowHTML(c){
  var ticks=c.mine?'<span class="tick '+(c.ticks===2?"read":"sent")+'">'+tickSVG(c.ticks||1)+'</span>':"";
  var preview=(c.sender?'<span class="sender">'+c.sender+': </span>':"")+(c.mine?'<b>You: </b>':"")+c.preview;
  var right="";
  if(c.unread) right='<span class="badge'+(c.muted?" gray":"")+'">'+c.unread+'</span>';
  else if(c.pinned) right='<span class="pin-ic">'+svg("pin")+'</span>';
  return '<div class="chat-row'+(c.pinned?" pinned":"")+'" data-chat="'+c.id+'">'+avatarHTML(c)+
    '<div class="chat-main"><div class="chat-line1"><span class="chat-name">'+c.name+'</span>'+
    (c.verified?verifiedSVG():"")+(c.muted?'<span class="mute-ic">'+svg("mute")+'</span>':"")+
    '<span class="chat-time">'+ticks+c.time+'</span></div>'+
    '<div class="chat-line2"><span class="chat-preview">'+preview+'</span>'+right+'</div></div></div>';
}
function renderChats(filter){
  var html="";
  if(filter==="all"){
    html+='<div class="chat-row" data-toast="Archived Chats"><div class="avatar" style="background:linear-gradient(135deg,#a8b6c1,#8b9ba8)">'+svg("archive")+'</div><div class="chat-main"><div class="chat-line1"><span class="chat-name">Archived Chats</span><span class="chat-time"></span></div><div class="chat-line2"><span class="chat-preview">Design Leaks, Crypto News, Study Group</span><span class="badge gray">3</span></div></div></div>';
  }
  chats.filter(function(c){return filter==="all"||c.type===filter||(filter==="personal"&&c.id==="saved");})
       .forEach(function(c){html+=chatRowHTML(c);});
  $("chatList").innerHTML=html||'<div class="list-caption">No chats here yet</div>';
  var total=chats.reduce(function(s,c){return s+(!c.muted&&c.unread?c.unread:0);},0);
  $("allBadge").textContent=total?total:"";
}
function renderStories(){
  $("stories").innerHTML=stories.map(function(s,i){
    return '<button class="story'+(s.seen?" seen":"")+'" data-story="'+i+'"><span class="ring"><span class="avatar sm '+s.grad+'" style="width:56px;height:56px;font-size:20px">'+s.initials+'</span></span><span>'+s.name+'</span></button>';
  }).join("");
}

/* ---------- Chat screen ---------- */
function msgHTML(m){
  if(m.date) return '<div class="date-pill"><span>'+m.date+'</span></div>';
  var inner="";
  if(m.name) inner+='<div class="sender-name" style="color:'+(m.color||"var(--accent)")+'">'+m.name+'</div>';
  if(m.reply) inner+='<div class="reply-quote"><b>'+m.reply.who+'</b><span>'+m.reply.text+'</span></div>';
  if(m.kind==="photo") inner+='<div class="photo-msg"></div>';
  if(m.kind==="voice"){
    var bars=[8,14,20,12,22,16,9,18,24,13,19,10,16,21,11,15,8,13];
    inner+='<div class="voice"><span class="play">'+svg("play")+'</span><span><span class="wave">'+bars.map(function(h){return '<i style="height:'+h+'px"></i>';}).join("")+'</span><span class="vtime">'+(m.dur||"0:12")+'</span></span></div>';
  }
  if(m.kind==="file") inner+='<div class="file"><span class="f-ic">'+svg("download")+'</span><span><b>'+m.file+'</b><span>'+m.size+'</span></span></div>';
  if(m.text) inner+=m.text.replace(/</g,"&lt;");
  var tick=(m.from==="out")?'<span class="tick">'+tickSVG(m.ticks||1)+'</span>':"";
  inner+='<span class="msg-time">'+m.time+tick+'</span>';
  return '<div class="msg '+m.from+'"><div class="bubble">'+inner+'</div></div>';
}
function renderMessages(id){
  var list=messages[id]||(messages[id]=defaultMessages(getChat(id)));
  $("messages").innerHTML=list.map(msgHTML).join("");
  requestAnimationFrame(function(){var el=$("messages");el.scrollTop=el.scrollHeight;});
}
function getChat(id){ return chats.filter(function(c){return c.id===id;})[0]; }
function openChat(id){
  var c=getChat(id); if(!c) return;
  currentChat=c; c.unread=0;
  $("chatAvatar").outerHTML=avatarHTML(c,"sm").replace('class="avatar','id="chatAvatar" class="avatar');
  $("chatName").innerHTML=c.name+(c.verified?verifiedSVG():"");
  var st=$("chatStatus"); st.textContent=c.status||""; st.classList.toggle("online",c.status==="online"); st.classList.remove("typing");
  renderMessages(id);
  go("chat");
}
function setProfile(c){
  $("profileName").textContent=c.name;
  var st=c.id==="me"?"online":(c.status||"last seen recently");
  $("profileStatus").textContent=st;
  $("profilePhone").textContent=c.phone||"+1 555 010 1234";
  $("profileUser").textContent=c.username||("@"+c.name.toLowerCase().replace(/[^a-z0-9]+/g,""));
  var head=$("profileHead");
  head.className="profile-head "+(c.grad&&c.grad.indexOf("grad-")===0&&/grad-\d/.test(c.grad)?c.grad:"");
}
function renderMedia(){
  var h=""; for(var i=1;i<=9;i++) h+='<i class="mg'+i+'"></i>';
  $("mediaGrid").innerHTML=h;
}

/* ---------- Contacts / calls / search ---------- */
function renderContacts(q){
  $("contactList").innerHTML=contacts.filter(function(c){return !q||c.name.toLowerCase().indexOf(q)>-1;}).map(function(c){
    return '<div class="contact-row" data-contact="'+c.name+'"><div class="avatar '+c.grad+'">'+c.initials+(c.on?'<span class="online-dot"></span>':"")+'</div><div><div class="c-name">'+c.name+'</div><div class="c-seen'+(c.on?" on":"")+'">'+c.seen+'</div></div></div>';
  }).join("");
}
function renderCalls(){
  $("callList").innerHTML=calls.map(function(c){
    var arrow=c.dir==="out"?svg("arrowOut"):svg("arrowIn");
    return '<div class="call-row" data-toast="Calling '+c.name+'…"><div class="avatar '+c.grad+'">'+c.initials+'</div><div style="flex:1"><div class="c-name"'+(c.dir==="missed"?' style="color:var(--destructive)"':"")+'>'+c.name+'</div><div class="call-meta"><span class="call-dir '+c.dir+'">'+arrow+'</span>'+c.meta+'</div></div><span class="iconbtn" style="color:var(--accent)">'+svg("phone")+'</span></div>';
  }).join("");
}
function resultRow(c){
  return '<div class="chat-row" data-chat="'+c.id+'">'+avatarHTML(c)+'<div class="chat-main"><div class="chat-line1"><span class="chat-name">'+c.name+'</span>'+(c.verified?verifiedSVG():"")+'</div><div class="chat-line2"><span class="chat-preview">'+(c.username||c.status||"")+'</span></div></div></div>';
}
function renderSearch(q){
  var list=q?chats.filter(function(c){return c.name.toLowerCase().indexOf(q)>-1;}):chats.slice(1,6);
  $("searchCaption").textContent=q?"Chats and contacts":"Recent";
  $("searchResults").innerHTML=list.length?list.map(resultRow).join(""):'<div class="list-caption">No results found</div>';
}

/* ---------- Events ---------- */
document.addEventListener("click",function(e){
  var t;
  if((t=e.target.closest("[data-openchat]"))){ closeAllOverlays(); openChat(t.getAttribute("data-openchat")); return; }
  if((t=e.target.closest("[data-chat]"))){ openChat(t.getAttribute("data-chat")); return; }
  if((t=e.target.closest("[data-contact]"))){
    var name=t.getAttribute("data-contact");
    var ct=contacts.filter(function(x){return x.name===name;})[0];
    if(ct&&ct.chat){ openChat(ct.chat); }
    else{
      var id="c-"+name.toLowerCase().replace(/[^a-z0-9]+/g,"-");
      if(!getChat(id)) chats.unshift({id:id,name:name,type:"personal",preview:"Say hello to "+name.split(" ")[0],time:nowStr(),status:ct?ct.seen:"",online:ct&&ct.on,grad:ct?ct.grad:"grad-5",initials:ct?ct.initials:initialsOf(name),username:"@"+name.toLowerCase().replace(/[^a-z0-9]+/g,"")});
      openChat(id);
    }
    return;
  }
  if((t=e.target.closest("[data-story]"))){
    var s=stories[+t.getAttribute("data-story")];
    $("storyName").textContent=s.name==="My Story"?"Your story":s.name;
    var av=$("storyAvatar"); av.className="avatar sm "+s.grad; av.textContent=s.initials;
    var gradMap={"grad-0":"linear-gradient(160deg,#ff9a76,#c23a35)","grad-1":"linear-gradient(160deg,#f2b25c,#dd6a2d)","grad-2":"linear-gradient(160deg,#cf9bf2,#60379c)","grad-3":"linear-gradient(160deg,#8fe095,#2a7433)","grad-4":"linear-gradient(160deg,#7fd8e8,#20689c)","grad-5":"linear-gradient(160deg,#5d9cec,#2f6fd6)","grad-6":"linear-gradient(160deg,#f79bc0,#a8255a)"};
    $("storyViewer").style.background=gradMap[s.grad]||gradMap["grad-5"];
    $("storyViewer").classList.add("open"); return;
  }
  if((t=e.target.closest("[data-go]"))){ closeAllOverlays(); go(t.getAttribute("data-go")); return; }
  if(e.target.closest("[data-back]")){ closeAllOverlays(); back(); return; }
  if((t=e.target.closest("[data-pm]"))){ closeAllOverlays(); if(t.getAttribute("data-pm")==="profile"&&currentChat){ setProfile(currentChat); go("profile"); } return; }
  if((t=e.target.closest("[data-toast]"))){ closeAllOverlays(); toast(t.getAttribute("data-toast")); return; }
  if((t=e.target.closest("#profileHead [data-profile]"))){}
});
$("btnDrawer").addEventListener("click",openDrawer);
$("scrim").addEventListener("click",closeDrawer);
$("sheetScrim").addEventListener("click",closeSheet);
$("btnStoryClose").addEventListener("click",function(){$("storyViewer").classList.remove("open");});
$("storyViewer").addEventListener("click",function(e){ if(e.target.id==="storyViewer") $("storyViewer").classList.remove("open"); });
$("btnTheme").addEventListener("click",function(){
  var dark=document.body.classList.toggle("dark");
  $("themeIcon").innerHTML=svg(dark?"sun":"moon");
  toast(dark?"Dark theme on":"Light theme on");
});
document.querySelector('[data-profile="me"]').addEventListener("click",function(){
  setProfile({name:"Alex Morgan",id:"me",status:"online",phone:"+1 555 010 1234",username:"@Alex Morgan",grad:"grad-1"});
});
$("chatbarId").addEventListener("click",function(){ if(currentChat){ setProfile(currentChat); go("profile"); }});
$("btnProfileMsg").addEventListener("click",function(){ back(); });
$("btnCall").addEventListener("click",function(){ toast("Calling "+(currentChat?currentChat.name:"")+"…"); });
$("btnChatMore").addEventListener("click",function(e){ e.stopPropagation(); $("popupMenu").classList.toggle("open"); });
$("btnProfileMore").addEventListener("click",function(e){ e.stopPropagation(); $("popupMenu").classList.toggle("open"); });
document.addEventListener("click",function(e){ if(!e.target.closest("#popupMenu")) $("popupMenu").classList.remove("open"); });
$("btnAttach").addEventListener("click",function(){ $("attachSheet").classList.add("open"); $("sheetScrim").classList.add("open"); });
$("btnEmoji").addEventListener("click",function(){ var i=$("msgInput"); i.value+="😊"; i.dispatchEvent(new Event("input")); i.focus(); });

/* Folder + generic tabs */
$("folderTabs").addEventListener("click",function(e){
  var tab=e.target.closest(".tab"); if(!tab) return;
  this.querySelectorAll(".tab").forEach(function(x){x.classList.remove("active");});
  tab.classList.add("active"); currentFilter=tab.getAttribute("data-filter"); renderChats(currentFilter);
});
document.querySelectorAll(".tabs.underline").forEach(function(nav){
  nav.addEventListener("click",function(e){
    var tab=e.target.closest(".tab"); if(!tab) return;
    nav.querySelectorAll(".tab").forEach(function(x){x.classList.remove("active");});
    tab.classList.add("active");
  });
});
document.querySelectorAll(".chip").forEach(function(ch){
  ch.addEventListener("click",function(){
    ch.parentElement.querySelectorAll(".chip").forEach(function(x){x.classList.remove("active");});
    ch.classList.add("active");
  });
});
document.querySelectorAll(".tb-item").forEach(function(it){
  it.addEventListener("click",function(){
    it.parentElement.querySelectorAll(".tb-item").forEach(function(x){x.classList.remove("active");});
    it.classList.add("active");
  });
});

/* Search + contacts filter */
$("searchInput").addEventListener("input",function(){ renderSearch(this.value.trim().toLowerCase()); });
$("contactSearch").addEventListener("input",function(){ renderContacts(this.value.trim().toLowerCase()); });

/* Send message */
var replies=["Got it!","Sounds good to me.","Perfect — let's do it.","Nice! Exactly like the design.","Okay, sending the files now."],replyIdx=0;
$("msgInput").addEventListener("input",function(){
  var has=this.value.trim().length>0;
  $("sendIcon").innerHTML=svg(has?"send":"mic");
  $("btnSend").classList.toggle("sending",has);
});
$("inputForm").addEventListener("submit",function(e){
  e.preventDefault();
  var input=$("msgInput"),text=input.value.trim();
  if(!text){ toast("Voice messages are disabled in this UI demo"); return; }
  if(!currentChat) return;
  var id=currentChat.id;
  var list=messages[id]||(messages[id]=defaultMessages(currentChat));
  var m={from:"out",text:text,time:nowStr(),ticks:1};
  list.push(m); input.value=""; input.dispatchEvent(new Event("input"));
  currentChat.preview=text; currentChat.mine=true; currentChat.ticks=1; currentChat.time=nowStr();
  renderMessages(id);
  setTimeout(function(){ m.ticks=2; currentChat.ticks=2; if(stack[stack.length-1]==="chat"&&currentChat&&currentChat.id===id) renderMessages(id); },900);
  if(currentChat.type!=="channel"&&id!=="saved"&&id!=="telegram"){
    var st=$("chatStatus");
    setTimeout(function(){ if(currentChat&&currentChat.id===id){ st.textContent="typing…"; st.classList.add("typing"); } },1100);
    setTimeout(function(){
      list.push({from:"in",text:replies[replyIdx++%replies.length],time:nowStr()});
      st.textContent=getChat(id).status||""; st.classList.remove("typing");
      getChat(id).preview=list[list.length-1].text; getChat(id).mine=false;
      if(stack[stack.length-1]==="chat"&&currentChat&&currentChat.id===id) renderMessages(id);
    },2300);
  }
});

/* Keyboard: Android/Desktop back emulation */
document.addEventListener("keydown",function(e){ if(e.key==="Escape") window.onAndroidBack(); });

/* Status bar clock */
function clock(){ var d=new Date(),h=d.getHours()%12||12; $("sbTime").textContent=h+":"+("0"+d.getMinutes()).slice(-2); }
clock(); setInterval(clock,30000);

/* Init */
renderStories(); renderChats("all"); renderContacts(""); renderCalls(); renderSearch(""); renderMedia();
})();
