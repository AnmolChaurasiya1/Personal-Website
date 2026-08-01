/*=====================================
        MOBILE MENU
======================================*/

const menu=document.querySelector(".menu");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

    nav.classList.toggle("active");

    if(menu.classList.contains("fa-bars")){
        menu.classList.replace("fa-bars","fa-times");
    }else{
        menu.classList.replace("fa-times","fa-bars");
    }

};

/*=====================================
        CLOSE MENU ON CLICK
======================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.onclick=()=>{

        nav.classList.remove("active");

        menu.classList.replace("fa-times","fa-bars");

    }

});

/*=====================================
        STICKY HEADER
======================================*/

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    header.classList.toggle("sticky",window.scrollY>40);

});

/*=====================================
        SCROLL TO TOP
======================================*/

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>500){

        scrollBtn.style.opacity="1";
        scrollBtn.style.visibility="visible";

    }

    else{

        scrollBtn.style.opacity="0";
        scrollBtn.style.visibility="hidden";

    }

});

/*=====================================
        ACTIVE NAVBAR
======================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.onscroll=()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.href.includes(current)){

            link.classList.add("active");

        }

    });

};

/*=====================================
        REVEAL ANIMATION
======================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(".fade-up,.zoom").forEach(el=>{

observer.observe(el);

});

/*=====================================
        TYPEWRITER
======================================*/

const roles=[

"Software Developer",

"Java Developer",

"Full Stack Developer",

"Backend Developer",

"AI Enthusiast"

];

let roleIndex=0;

let charIndex=0;

const typing=document.getElementById("typing");

function type(){

if(charIndex<roles[roleIndex].length){

typing.textContent+=roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex>0){

typing.textContent=roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}

else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(type,400);

}

}

document.addEventListener("DOMContentLoaded",()=>{

if(typing){

type();

}

});

/*=====================================
        COUNTER
======================================*/

const counters=document.querySelectorAll(".counter");

const speed=120;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});

/*=====================================
        CURRENT YEAR
======================================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}
