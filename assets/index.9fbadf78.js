var ee=Object.defineProperty;var F=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var j=(e,t,s)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,N=(e,t)=>{for(var s in t||(t={}))te.call(t,s)&&j(e,s,t[s]);if(F)for(var s of F(t))ne.call(t,s)&&j(e,s,t[s]);return e};import{a as A,o as l,c,b as r,d as z,r as x,e as L,f as G,g as w,u as se,h as ae,i as D,j as oe,t as ie,F as H,k as O,l as V,n as re,m as le,p as ce,q as he}from"./vendor.a38c31af.js";const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};ue();const v=({a:e,b:t,c:s,svg:a,id:o})=>{const n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttributeNS(null,"id",o),n.setAttributeNS(null,"d",`M ${e.x} ${e.y} Q ${t.x} ${t.y} ${s.x} ${s.y}`),n.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;opacity:0;"),a.appendChild(n),n},U=e=>{const t=document.getElementById("svg-overlay"),s=document.createElementNS("http://www.w3.org/2000/svg","circle");s.setAttributeNS(null,"cx",0),s.setAttributeNS(null,"cy",0),s.setAttributeNS(null,"id",e),s.setAttributeNS(null,"r","5px"),s.setAttributeNS(null,"style","fill:#000000;opacity:0;"),t.appendChild(s)},E=(e,t,s)=>({x:e.x+(t.x-e.x)/2,y:e.y-s}),C=(e,t)=>({left:t.left-e.left,right:t.right-e.left,top:t.top-e.top,bottom:t.bottom-e.top}),de=()=>{const e=document.getElementById("flag"),t=document.getElementById("outer-box").getBoundingClientRect(),s=document.getElementsByClassName("grow-bottom-container")[0].getBoundingClientRect(),a={left:0,top:0,bottom:t.bottom-t.top,right:t.right-t.left},o=C(t,s),n=a.bottom-o.bottom;e.setAttributeNS(null,"height",n)},ye=()=>{const e=document.getElementById("outer-box").getBoundingClientRect(),t=document.getElementById("0-perk").getBoundingClientRect(),s=document.getElementById("0-negative").getBoundingClientRect(),a={left:0,top:0,bottom:e.bottom-e.top,right:e.right-e.left},o=C(e,t),n=C(e,s),i=t.width;let h=Math.round((o.top-a.top)/2),f=a.top+h;h<t.height&&(h=o.top-a.top,f=a.top);const _={x:Math.round(a.left),y:Math.round(f)},m={x:Math.round(o.right-i*1/3),y:Math.round(o.top)},d={x:Math.round(n.right-i*1/3),y:Math.round(n.top)},p={x:Math.round(a.right+20),y:Math.round(d.y-80)},B=E(_,m,0),S=E(m,d,h),b=E(p,d,0),g=document.getElementById("svg-overlay");g.style.height=e.height,v({a:_,b:B,c:m,svg:g,id:"first-path"}),v({a:m,b:S,c:d,svg:g,id:"second-path"}),v({a:d,b,c:p,svg:g,id:"third-path"}),U("ball")},fe=()=>{const e=document.getElementById("svg-overlay"),t=document.getElementById("outer-box").getBoundingClientRect(),s=document.getElementsByClassName("last-negative")[0].getBoundingClientRect(),a=document.getElementById("flag").getBoundingClientRect(),o=C(t,a),n={left:0,top:0,bottom:t.bottom-t.top,right:t.right-t.left},i=C(t,s),h=4/7*t.width,f=n.bottom-i.bottom+20,_={x:n.right,y:i.bottom+20},m={x:n.right-2/5*h,y:n.bottom},d={x:n.right-4/5*h,y:n.bottom},p={x:n.right-h,y:n.bottom-5},B={x:o.left+a.width*.3,y:n.bottom-5},S={x:o.left+a.width*.2,y:n.bottom+10},b=E(_,m,0),g=E(m,d,3/4*f),$=E(d,p,1/2*f),k=E(B,S,0);v({a:_,b,c:m,svg:e,id:"fourth-path"}),v({a:m,b:g,c:d,svg:e,id:"fifth-path"}),v({a:d,b:$,c:p,svg:e,id:"sixth-path"}),v({a:p,b:p,c:B,svg:e,id:"seventh-path"}),v({a:B,b:k,c:S,svg:e,id:"eighth-path"}),U("ball-2")},me=()=>{const e=document.getElementById("svg-overlay"),t=document.getElementById("outer-box").getBoundingClientRect(),s=document.getElementById("flag").getBoundingClientRect(),a=C(t,s),o={left:0,top:0,bottom:t.bottom-t.top,right:t.right-t.left},n=4/7*t.width,i={x:o.right-n,y:o.bottom-5},h=i.x-a.left,f={x:a.left+h/2,y:o.bottom-5};v({a:i,b:i,c:f,svg:e,id:"ninth-path"})},pe=()=>{ye(),fe(),me()},u=e=>{const t=document.querySelector(e);t.style.opacity=1},P=e=>{const t=document.querySelector(e);t.style.opacity=0},J=["#first-path","#second-path","#third-path","#ball"],K=["#fourth-path","#fifth-path","#sixth-path","#seventh-path","#eighth-path","#ball-2"],Q=["#fourth-path","#fifth-path","#sixth-path","#ninth-path","#ball-2"],ge=()=>{J.forEach(P)},ve=()=>{K.forEach(P)},we=()=>{Q.forEach(P)},be=()=>{J.forEach(A.remove)},ke=()=>{K.forEach(A.remove)},xe=()=>{Q.forEach(A.remove)},_e=()=>{be(),ke(),xe()},Be=()=>{ge(),ve(),we()},y=(e,t,s)=>()=>{const a=A(N({targets:e,strokeDashoffset:[A.setDashoffset,0]},s)),o=A.path(e),n=A(N({targets:t,translateX:o("x"),translateY:o("y"),angle:o("angle")},s));return[a,n]},Ae=[y("#first-path","#ball",{duration:800,easing:"easeInCubic"}),y("#second-path","#ball",{duration:1200,easing:"cubicBezier(0.010, 0.25, 0.70, 0.010)"}),y("#third-path","#ball",{duration:500,easing:"easeOutCubic"})],M=async(e,t)=>{const s=[];for(let a=0;a<e.length;a+=1){const o=e[a]();s.push(...o);const n=t[a];await Promise.all(o.map(i=>i.finished)),n==null||n()}return s},Ee=async(...e)=>{u("#ball"),u("#first-path");const s=[()=>u("#second-path"),()=>u("#third-path"),void 0].map((a,o)=>()=>{var n;a==null||a(),(n=e==null?void 0:e[o])==null||n.call(e)});return M(Ae,s)},Se=[y("#fourth-path","#ball-2",{duration:300,easing:"easeInQuad"}),y("#fifth-path","#ball-2",{duration:400,easing:"cubicBezier(0, 0.42, 1, 0.58)"}),y("#sixth-path","#ball-2",{duration:200,easing:"cubicBezier(0, 0.42, 1, 0.58)"}),y("#seventh-path","#ball-2",{duration:1300,easing:"cubicBezier(0.2, 0.5, 0.2, 1)"}),y("#eighth-path","#ball-2",{duration:200,easing:"easeInQuad"})],Ce=[y("#fourth-path","#ball-2",{duration:400,easing:"easeInQuad"}),y("#fifth-path","#ball-2",{duration:700,easing:"cubicBezier(0, 0.42, 1, 0.58)"}),y("#sixth-path","#ball-2",{duration:350,easing:"cubicBezier(0, 0.42, 1, 0.58)"}),y("#ninth-path","#ball-2",{duration:1e3,easing:"easeOutQuad"})],Re=async(...e)=>{u("#ball-2"),u("#fourth-path");const s=[()=>u("#fifth-path"),()=>u("#sixth-path"),()=>u("#seventh-path"),()=>u("#eighth-path"),void 0].map((a,o)=>()=>{var n;a==null||a(),(n=e==null?void 0:e[o])==null||n.call(e)});return M(Se,s)},$e=async(...e)=>{u("#ball-2"),u("#fourth-path");const s=[()=>u("#fifth-path"),()=>u("#sixth-path"),()=>u("#ninth-path"),void 0].map((a,o)=>()=>{var n;a==null||a(),(n=e==null?void 0:e[o])==null||n.call(e)});return M(Ce,s)};var R=(e,t)=>{const s=e.__vccOpts||e;for(const[a,o]of t)s[a]=o;return s};const Ne={},Le={class:"header italic"},Pe=r("div",null,[r("span",{class:"font-bold"},"RED"),z(" FLAGS")],-1),Me=r("div",null,[r("span",{class:"font-bold"},"GREEN"),z(" FLAGS")],-1),Fe=[Pe,Me];function je(e,t){return l(),c("div",Le,Fe)}var Te=R(Ne,[["render",je]]);const qe=["GAME","MENU"],Ie=x(qe[0]),W=L(()=>Ie.value),ze=L(()=>W.value==="GAME");L(()=>W.value==="MENU");const Ge={},De={id:"flag",height:"1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172.2 276.22"},He=G('<defs></defs><ellipse class="cls-1" cx="33.5" cy="266.84" rx="33.5" ry="9.38"></ellipse><rect class="cls-2" x="29.5" y="6.72" width="7" height="266"></rect><rect class="cls-3" x="29.5" y="6.72" width="7" height="266"></rect><rect class="cls-3" x="29.5" y="6.72" width="7" height="266"></rect><path class="cls-4" d="M632.9,1637c-2.09,8.93-6.94,23.46-19.28,35.6-19.39,19.08-46.56,21.73-51.92,22.25-19.72,1.93-34.26-3.15-54.88,6.68a72.39,72.39,0,0,0-7.42,4.08v-69.33c8.75-3.88,21.81-8,36.34-5.21,14.8,2.82,21,10.82,31.89,15.57C579.92,1652,599.88,1654,632.9,1637Z" transform="translate(-462.9 -1628.69)"></path>',6),Oe=[He];function Ve(e,t){return l(),c("svg",De,Oe)}var Ue=R(Ge,[["render",Ve]]);const Je={},Ke={id:"Ebene_1","data-name":"Ebene 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 49.16 49.16"},Qe=G('<defs></defs><circle class="cls-1" cx="24.58" cy="24.58" r="19"></circle><line class="cls-2" x1="24.58" y1="24.58" x2="24.58" y2="24.58"></line><line class="cls-3" x1="24.58" x2="24.58" y2="49.16"></line><line class="cls-3" x1="49.16" y1="24.58" y2="24.58"></line><line class="cls-3" x1="41.96" y1="7.2" x2="7.2" y2="41.96"></line><line class="cls-3" x1="7.2" y1="7.2" x2="41.96" y2="41.96"></line><circle class="cls-4" cx="24.58" cy="24.58" r="17.23"></circle>',8),We=[Qe];function Ye(e,t){return l(),c("svg",Ke,We)}var Ze=R(Je,[["render",Ye]]);const Xe={class:"footer flex items-end justify-between italic"},et={key:1},tt={setup(e){return(t,s)=>(l(),c("div",Xe,[w(Ue,{style:{"margin-bottom":"-0.75em","margin-left":"1.5em"}}),se(ze)?(l(),ae(Ze,{key:0,style:{width:"2em"}})):(l(),c("button",et,"Back"))]))}};const nt={class:"cont h-full p-2"},st=r("svg",{id:"svg-overlay",class:"svg-overlay absolute"},null,-1),at={id:"outer-box",class:"outer-box relative h-full w-full p-2"},ot={class:"grow-bottom-container"},it={setup(e){return D(()=>{de()}),(t,s)=>{const a=oe("router-view");return l(),c("div",nt,[st,r("div",at,[w(Te),r("div",ot,[w(a)]),w(tt,{class:"mt-16"})])])}}};var rt=`Has a magic bag that contains unlimited cheese
always defends you
always gives the perfect amount of physical affection
always gives you perfect gifts
always knows how to stop you from crying
always makes time for you
believes you are the most attractive person they've ever seen
can cure cancer
can fire your most hated co-worker or boss
can fly
can get you a table at any 5-star restaurant. Any time, any place.
can get you both into literally anywhere
can get you free drinks forever at any bar in the world
can multiply themselves
can talk to animals
cooks all your favorite foods
creates shelters for the homeless
gives billions to your favorite charity
gives great massages
gives the best hugs
gives you multiple orgasms
has a donkey that poops gold
has a mansion
has a twin
has all the same hobbies as you
has an 8-pack
has an onlympic gold medal
has beautiful eyes
has contant food catering 
has enough money so you don't have to work
has front row tickets to every concert
has front row tickets to every sporting event
has the best hair ever
has the hottest friends
has the voice of an angel
is a CEO
is a Lumberjack
is a YouTube celebrity
is a bestselling author
is a brain surgeon
is a college English professor
is a famous artist
is a famous fashion designer
is a famous movie star
is a famous musician
is a famous rapper
is a firefighter
is a genie that grants you three wishes
is a good listener
is a great conversationalist
is a lawyer
is a merperson
is a millionaire
is a night person and a morning person
is a park ranger
is a photographer
is a porn star
is a professional chef
is a professional football player
is a professional surfer
is a professional wrestler
is a rocket scientist
is a rodeo champion
is a ski instructor
is a spin instructor
is a stunt double
is a superhero
is a supermodel
is a vampire. Yes, the sexy kind
is a yoga instructor
is adventurous
is affectionate
is an actual genius
is an airline pilot
is an amazing dancer
is an astronaut
is an rganic farmer
is completely blind to all of your flaws
is courteous
is driven
is fiercely loyal
is generous
is great with your parents 
is honest
is in the marines
is in touch with their feelings
is never gonna give you up / let you down / run around / or desert you
is patient
is really into wine
is reliable
is respectful
is royalty
is spontaneous and fun
is supportive
is the President
is the best sex you've ever had
is the best-smelling person in the world
is the funniest person in the world
is the hot barista
is the lead singer of your favorite band
is the most physically attractive person you have ever seen
is the perfect communicator
is the world's best advertising executive
is the world's best hair stylist
is trusting
knows all the words to your favorite children's TV theme songs
lives in a castle
lives off the grid
lives on 100 beachfront acres
loves cats
loves children
loves dogs
loves sports
loves staying in
loves the '80s
loves the outdoors
loves theater
loves their job
loves to cuddle
loves to laugh
loves video games
loves you unconditionally
makes friends and enemies jealous
makes scented candles
makes you feel secure
never arrives prematurely
never blames you for anything
never farts
own a castle
owns 100 horses
owns Mars
owns a 500-foot yacht
owns a goose that lays designer clothing
owns a magic carpet
owns a penthouse suite in your favorite city
owns a solid gold private jet
owns a successful startup
owns a time machine
owns a unicorn
owns a vineyard
owns an adorable coffee shop
owns an island in the Bahamas
owns one of every car
owns real dinosaurs
owns your favorite museum
owns your favorite sports team
speaks every romantic language
their farts smell like flowers
their morning breath smells like fresh-baked cookies
travels a lot
volunteers at an animal shelter
volunteers with elderly people
was on the news for rescuing a kitten
will make you immortal while you date them
won the medal of honor
Always smells like chocolate
Always smells like flowers
Always smells like home
Always smells like honey
Always smells like lavendar
Always smells like vanilla
Always smells like your favorite food
Always smells like your favorite plushie
Has the most attractive ass you've ever seen
Has the most attractive back you've ever seen
Has the most attractive chest you've ever seen
Has the most attractive hands you've ever seen
Has the most attractive nose you've ever seen
Has the most attractive shoulders you've ever seen
Has the most attractive thighs you've ever seen
Looks exactly like Adam Driver
Looks exactly like Beyonce
Looks exactly like Chris Evans
Looks exactly like Chris Hemsworth
Looks exactly like Harry Styles
Looks exactly like J Lo
Looks exactly like Jake Gyllenhaal
Looks exactly like Jason Momoa
Looks exactly like Jennifer Aniston
Looks exactly like Jennifer Lawrence
Looks exactly like Kenau Reeves
Looks exactly like Micheal B Jordan
Looks exactly like Mila Kunis
Looks exactly like Rihanna
Looks exactly like Ryan Reynolds
Looks exactly like Timothee Chalamet
Looks exactly like Tom Hiddleston
Looks exactly like Zendaya
drives a Bentley
drives a Ferrari
drives a Lamborghini
drives a Porsche
drives a Rolls Royce
drives a SUV
drives a Toyota Supra
drives a motorcycle
drives a old timer convertable
has a basement full of bdsm equipment
has a basement full of crystals
has a basement full of diamonds
has a basement full of dried fruit
has a basement full of glowing moss
has a basement full of gold
has a basement full of lego
has a basement full of mushrooms
has a basement full of quirky childrens toys
has a basement full of wine
has the same favourite bands
has the same favourite books
has the same favourite caf\xE9s
has the same favourite movies
has the same favourite series
has the same favourite videogames
is a professional astrophysicist
is a professional brain surgeon
is a professional doctor
is a professional firefighter
is a professional hair dresser
is a professional masseur/masseuse
knows everything about USA's state secrets
knows everything about animals
knows everything about anime
knows everything about astrology
knows everything about computers
knows everything about emotions
knows everything about football
knows everything about history
knows everything about kamasutra
knows everything about men
knows everything about philosophy
knows everything about politics
knows everything about psychology
knows everything about the FBI
knows everything about the dark arts
knows everything about the human body
knows everything about the human brain
knows everything about the law
knows everything about the roman empire
knows everything about videogames
knows everything about vladimir putin
knows everything about witchcraft
knows everything about women
knows everything about you and your family
volunteers for africa
volunteers for animal shelter
volunteers for childrens hospital
volunteers for old people's home
volunteers for orphanage
volunteers for refugee camp`,lt=`50 Shades of Grey is the only book they've read
Body type: Dumpster
Keeps changing the subject to talk about how not racist they are
adds you as an emergency contact on the first date
always dresses like a clown
always picks their nose
always takes the joke three steps too far
always wears a Bluetooth headset
always wears a luchador mask
as long as you date them you can only eat food off the dollar menu
begins every sentence with "actually"
brings ex to first date
brings mom to first date
burps and blows in your face
calls their pets their children
calls you a "4" to your face
calls you by exe's name every time
can only eat out of someone else's hand
can only have conversations through puppets
can only speak in lines from Animal Crossing
can only speak in lines from Disney lyrics
can only speak in lines from One Direction lyrics
can only speak in lines from binary numbes
can only speak in lines from dad jokes
can only speak in lines from morse code
can only speak in lines from poems
can only speak in lines from the bible
can't keep a job longer than twenty minutes
can't stand animals
charges you a quarter every time you say a curse word
collects human skulls and says they're "practically free!"
compulsively licks doorknobs
constantly beatboxes
constantly takes selfies
constantly tries to bang your friends
conveniently forgets wallet every date night.
counts your calories
cries themself to sleep every night
dabbles in torture
demands to pop all of your zits for you
describes all food as "yummy yummers"
doesn't believe in oral sex
doesn't know or understand any word that starts with the letter "D"
doesn't know the difference between your and you're
doesn't like any music
doesn't think women should vote
doesn't understand your jokes
eats crayons
ends every conversation with "you're dismissed"
every time you think about them you dry heave
farts every time they kiss you
for as long as you date them all your friends will hate you
greets people by sniffing their butts
greets you with a headbutt
has 3-foot fingernails
has a basement full of abducted girls
has a basement full of bdsm equipment
has a basement full of children
has a basement full of creepy dolls
has a basement full of dead stuffed animals
has a basement full of guns
has a basement full of nazi items
has a basement full of skeletons
has a dalmatian fetish
has a diaper fetish
has a dozen kids from a dozen partners
has a ghost fetish
has a humiliation fetish
has a knife fetish
has a obscure bdsm fetish
has a permanent fedora
has a resting dumb face
has a schoolgirl fetish
has a superpower. It's seeing through people's clothes
has a used socks fetish
has a voyeur fetish
has a watersports fetish
has been stalking you since middle school
has dildos for hands
has half a beard and absolutely refuses to shave
has hot dogs for hands
has never spelled a word correctly
has nineteen kids and counting
has permanent markers without the cap for hands
has plexiglass cheeks so that you can see inside their mouth
has scissor hands
has scissors for hands
has screw drivers for hands
has slept with literally everyone you know
has tentacles for hands
has the names of all of their exes tattooed on their face
has the nickname: Cum Rag
has the nickname: Dr. Whet Faartz
has the nickname: No Faxx
has the nickname: Sam Sung
has the nickname: Sloppynuts
has the nickname: Yung Cash Register aka Lil Broomstick
has the nickname: big choppa
has the nickname: big dick dan
has the nickname: lil deeck
has to pee every five minutes for five minutes
has toes for hands
has two other spouses
has usb drives for hands
hits on every server
ia always bragging about past sexual conquests
ia incapable of all emotion
immediately tries to kill you with a fork
is 40 years older than they were in their profile picture
is Nickelback
is a 60 year old virgin
is a backseat driver
is a compulsive liar
is a death row inmate
is a hobbit
is a men's rights activist
is a merperson
is a revenge porn mogul
is a serial killer
is a sleep-puncher
is a train wreck
is a vampire. And not the sexy kind
is a zombie
is actually two children stacked on top of each other in a trench coat
is addicted to crack
is addicted to prescription drugs
is afraid of stoplights
is afraid of sunlight
is allergic to all of your favorite foods
is always always drunk
is always covered in ants
is always naked
is an amateur alpha male self-help guru
is an amateur beatboxer
is an amateur bird watcher
is an amateur cannibal
is an amateur cannibal
is an amateur dancer
is an amateur make-up artist
is an amateur pick-up artist
is an amateur poet
is an amateur porn director
is an amateur prostitute
is an amateur rapper
is an amateur stamps collector
is an amateur stripper
is basic
is building an ark
is constantly plotting to kill you
is dead
is eligible for the Make-A-Wish Foundation
is in a fried group called "Atlanta Alphas"
is in a fried group called "Big Boys"
is in a fried group called "Crypto Crew"
is in a fried group called "Dumpster Dudes"
is in a fried group called "Grind Gang"
is in celibate
is jealous of your pet
is literally always on a Segway
is literally always watching porn
is on every diet at the same time
is physically incapable of asking a question
is really stupid
is related to you
is rigged to a time bomb
is sexist
is six years old
is still in fourth grade
is still really into Myspace
is super clingy
is super super racist
is the oldest living person
is the person you hated the most in high school and literally hasn't changed
is the worst-smelling person in the world
is totally married
is wanted in every state except Florida. Because Florida doesn't want them.
is your clone
is zero percent sexually attractive to you
isn't potty trained
just got out of prison but won't tell you what they were in for
keeps asking if your best friend is "down"
keeps talking about someone who looks just like you. Only better!
keeps talking about their "hot cousin"
kicks every animal they see
knocks things out of strangers' hands while walking down the street
laughs incessantly during sex
literally can't make decisions
literally has the face of a pug
literally only talks about themselves
literally won't stop talking about their mother
live-tweets your entire date
lives in a one-bedroom with eight dudes.
lives off the grid
looks and smells just like your dad
melts if they get wet
name drops during dirty talk
narrates everything they do out loud
never stops playing the ukulele
never stops talking
only communicates with you via fax
only eats deep-fried food
only has eyes for you. They literally can't see anyone in the world except you
only laughs at their own jokes
only responds to texts with "k"
only speaks Klingon
only speaks in business buzzwords
only speaks in hashtags
only speaks in horrible puns
only speaks in motivational quotes
only speaks in sarcasm
only speaks in yelling
only wears clothing made of human hair
open mouth kisses their pets
open mouth kisses their siblings
owes the government one million dollars
plays War
plays loud music outside
posts all of your texts and emails online
puts "air quotes" around "every word" they say
reads over your shoulder (out loud)
really really hates children
recites all the lines from "Titanic" in their sleep
refers to their genitals as their "no-no"
refuses to cover face while sneezing
refuses to delete online dating profile
refuses to put away phone
refuses to wash their hands
regularly hosts tea parties for dolls
repeats your jokes but louder
responds to everything to say with "that's what she said"
says "Can you not" while you cry at a funeral
says "like", like all the time
sees the ghost of everyone who has ever died
sells home-made pubic hair wigs
slept with one of your parents
snorts pre-workout and really wants you to try it
sold your pets on Craigslist
speaks with a constantly changing foreign accent
spends every date using dating apps
static shocks you every time you touch
steals locks of your hair
steals something from every store they enter
still uses a flip phone
swears they're eighteen
swears you look exactly like their sister but says "that's a good thing"
takes you to McDonalds on the first date
takes you to a funeral on the first date
takes you to a strip club on the first date
takes you to a subway station on the first date
takes you to couples therapy on the first date
takes you to their marriage councelor on the first date
takes you to their mom's place on the first date
takes you to their parole officer on the first date
talks dirty to all of their food
talks exclusively in emojis
teleports to the North Pole every time they say the word "love"
tells you to calm down after everything you say
the two halves of their face don't match. Both are attractive but look totally different
their first name is "Poop"
their hair is transplanted from cadaver butts
their kisses taste like poop
their pet name for you is "trash bag"
their sex tape with Cardi B just went viral
their sex tape with Elon Musk just went viral
their sex tape with Jeffrey Epstein just went viral
their sex tape with Kim Kardashian just went viral
their sex tape with Lady Gaga just went viral
their sex tape with Mark Zuckerberg just went viral
their sex tape with Miley Cyrus just went viral
their sex tape with R. Kelly just went viral
they think they're smarter than you
thinks Twilight deserved an Oscar
thinks they're a Jedi
thinks you're ugly
throws up every time they see your face
tinders during sex
tries to negotiate the price of everything
uses the word "chillax" in every sentence
uses way way way too much tongue
wears a backpack full of books during sex
wears a backpack full of bread during sex
wears a backpack full of dead relatives ashes during sex
wears a backpack full of empty bottles during sex
wears a backpack full of marbles during sex
wears a backpack full of old fruit during sex
wears a backpack full of pokemon cards during sex
wears a backpack full of stuffed animals during sex
wears a backpack full of their fishing gear during sex
wears diapers because it's "more convenient"
will only eat if you play airplane with their food
winks at you after everything they say ;)
won't allow wi-fi in the house
won't stop juggling
won't talk to you if you're part of the wrong Hogwarts house
writes erotic Spongebob fan fiction
yawns every time you start a sentence
yells "ear muffs!" whenever they hear a bad word
you are allergic to them`;const T=e=>e[Math.floor(Math.random()*e.length)],ct=rt.split(`
`),ht=lt.split(`
`),Y=(e,t)=>{const s=Array.from([...Array(t).keys()]);return s.map(()=>{let a=T(e);for(;s.includes(a);)a=T(e);return a})},ut=e=>Y(ct,e),dt=e=>Y(ht,e);const yt={class:"box flex w-full items-center italic"},Z={props:{text:String,visible:Boolean},setup(e){const t=e;return(s,a)=>(l(),c("div",yt,ie(e.visible?t.text:""),1))}},ft=r("span",{class:"italic"},"YOUR DATE",-1),mt={key:0,class:"italic"},q={props:{perks:Array,visible:Array},setup(e){const t=e;return(s,a)=>(l(),c("div",null,[ft,(l(!0),c(H,null,O(e.perks,(o,n)=>(l(),c("div",{key:n},[w(Z,{text:o,id:`${n}-perk`,visible:t.visible[n]},null,8,["text","id","visible"]),n!==e.perks.length-1?(l(),c("span",mt,"AND")):V("",!0)]))),128))]))}},pt=r("span",{class:"italic"},"(BUT)",-1),gt={key:0,class:"italic"},vt={props:{negatives:Array,visible:Array},setup(e){const t=e;return(s,a)=>(l(),c("div",null,[pt,(l(!0),c(H,null,O(e.negatives,(o,n)=>(l(),c("div",{key:n},[w(Z,{class:re(["black-box",{"last-negative":n===e.negatives.length-1}]),text:o,id:`${n}-negative`,visible:t.visible[n]},null,8,["text","class","id","visible"]),n!==e.negatives.length-1?(l(),c("span",gt,"AND")):V("",!0)]))),128))]))}},wt={class:"flex"},bt={class:"flex w-1/2 flex-col pr-1"},kt=r("span",{style:{visibility:"hidden"}},"AND",-1),xt={class:"flex"},_t=["disabled"],Bt=["disabled"],At={class:"w-1/2 pl-1"},I={setup(e){const t=x(!0),s=x([]),a=x([]),o=x(2),n=x(1),i=x([]),h=x([]),f=()=>{s.value=ut(o.value),a.value=dt(n.value),i.value=Array(o.value).fill(!1),h.value=Array(n.value).fill(!1)};f();const _=()=>{h.value=h.value.map(()=>!0)},m=()=>{i.value=i.value.map(()=>!0)},d=()=>{Ee(m,_,()=>{t.value=!1})},p=()=>{_e(),Be(),g()},B=()=>{t.value=!0;const k=[];k[3]=()=>{p(),f()},$e(...k)},S=()=>{t.value=!0;const k=[];k[4]=()=>{p(),f()},Re(...k)},b=()=>{d(),$()},g=()=>{window.addEventListener("click",b),window.addEventListener("touchstart",b)},$=()=>{window.removeEventListener("click",b),window.removeEventListener("touchstart",b)};return D(()=>{pe()}),g(),(k,jt)=>(l(),c("div",wt,[r("div",bt,[w(q,{perks:s.value,visible:i.value},null,8,["perks","visible"]),kt,r("div",xt,[r("button",{onClick:S,disabled:t.value,class:"box mr-1 grow"}," DATE ",8,_t),r("button",{onClick:B,disabled:t.value,class:"black-box grow"}," (NEXT) ",8,Bt)])]),r("div",At,[w(q,{style:{visibility:"hidden"},visible:i.value,perks:s.value},null,8,["visible","perks"]),w(vt,{negatives:a.value,visible:h.value},null,8,["negatives","visible"])])]))}},Et={},St={class:"flex"},Ct=r("div",null,"Anzahl",-1),Rt=r("div",null,"Add new",-1),$t=r("div",null,"History",-1),Nt=[Ct,Rt,$t];function Lt(e,t){return l(),c("div",St,Nt)}var Pt=R(Et,[["render",Lt]]);const Mt=[{path:"/",component:I,meta:{title:"Game"}},{path:"/menu",component:Pt},{path:"/:path(.*)",component:I}],X=le(it),Ft=ce({history:he(),routes:Mt});X.use(Ft);X.mount("#app");
