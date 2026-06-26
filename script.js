/* ==========================================
   MADHURIMA CHOWDHURY PORTFOLIO
   script.js
========================================== */

// ============================
// SCROLL REVEAL
// ============================

const revealElements = document.querySelectorAll(
  ".about-card, .skill-card, .impact-card, .timeline-item, .project-card, .quote-card, .career-item, .contact-box"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ============================
// STICKY NAVBAR SHADOW
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 40) {

    header.style.background = "rgba(5,8,22,.92)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

  } else {

    header.style.background = "rgba(5,8,22,.75)";
    header.style.boxShadow = "none";

  }

});


// ============================
// ACTIVE NAV LINK
// ============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      current &&
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// ============================
// PARALLAX HERO IMAGE
// ============================

const heroImage = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {

  if (!heroImage) return;

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});


// ============================
// BUTTON RIPPLE EFFECT
// ============================

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .project-btn, .nav-btn"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-4px) scale(1.03)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "";

  });

});


// ============================
// SIMPLE COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (!entry.isIntersecting) return;

    const counter = entry.target;

    const text = counter.textContent;

    const target = parseInt(text);

    if (isNaN(target)) return;

    let current = 0;

    const step = Math.ceil(target / 60);

    const interval = setInterval(() => {

      current += step;

      if (current >= target) {

        counter.textContent = text;

        clearInterval(interval);

      } else {

        counter.textContent = current;

      }

    }, 25);

  });

});

counters.forEach(counter => {

  counterObserver.observe(counter);

});


// ============================
// CONSOLE SIGNATURE
// ============================

console.log(
"%cDesigned by Madhurima Chowdhury",
"font-size:18px;font-weight:bold;color:#4F8CFF;"
);

/* ==========================================
   PREMIUM INTERACTIONS
==========================================*/


/* ================================
   TYPING EFFECT
================================ */

const roles = [

"Senior Technical Writer",

"UX Writer",

"Content Strategist",

"Information Architect"

];

const roleElement = document.querySelector(".hero h2");

if(roleElement){

let roleIndex=0;

let charIndex=0;

let deleting=false;

function typeRole(){

const current=roles[roleIndex];

if(!deleting){

charIndex++;

roleElement.textContent=current.substring(0,charIndex);

if(charIndex===current.length){

deleting=true;

setTimeout(typeRole,1800);

return;

}

}else{

charIndex--;

roleElement.textContent=current.substring(0,charIndex);

if(charIndex===0){

deleting=false;

roleIndex=(roleIndex+1)%roles.length;

}

}

setTimeout(typeRole,deleting?45:90);

}

typeRole();

}



/* ================================
   MOUSE GLOW
================================ */

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



/* ================================
   PROJECT CARD TILT
================================ */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((rect.height/2-y)/rect.height)*12;

card.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});



/* ================================
   SCROLL PROGRESS BAR
================================ */

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const height=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=

(window.scrollY/height)*100;

progress.style.width=percent+"%";

});



/* ================================
   BACK TO TOP
================================ */

const topButton=document.createElement("button");

topButton.className="top-button";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("visible");

}else{

topButton.classList.remove("visible");

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



/* ================================
   PROJECT HOVER SHADOW
================================ */

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=

"0 40px 80px rgba(79,140,255,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});



/* ================================
   PRELOADER
================================ */

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},600);

}

});



/* ================================
   RANDOM FLOATING SHAPES
================================ */

for(let i=0;i<12;i++){

const bubble=document.createElement("span");

bubble.className="bubble";

bubble.style.left=Math.random()*100+"vw";

bubble.style.animationDuration=

12+Math.random()*12+"s";

bubble.style.animationDelay=

Math.random()*8+"s";

document.body.appendChild(bubble);

}
