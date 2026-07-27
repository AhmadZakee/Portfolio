/* =====================================================
   CURSOR
===================================================== */

const cursor =
document.getElementById("cursor");

const ring =
document.getElementById("cursorRing");

const ambient =
document.getElementById("ambient");

document.addEventListener(
"mousemove",
(e) => {

cursor.style.left =
e.clientX + "px";

cursor.style.top =
e.clientY + "px";

ring.style.left =
e.clientX + "px";

ring.style.top =
e.clientY + "px";

ambient.style.left =
e.clientX + "px";

ambient.style.top =
e.clientY + "px";

});


/* =====================================================
   SCROLL PROGRESS
===================================================== */

window.addEventListener(
"scroll",
() => {

const scrollTop =
window.scrollY;

const height =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(scrollTop / height) * 100;

document.getElementById(
"progress"
).style.width =
progress + "%";

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menu =
document.getElementById("menu");

const navLinks =
document.getElementById("navLinks");

menu.addEventListener(
"click",
() => {

navLinks.classList.toggle(
"active"
);

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(
(entry) => {

if(entry.isIntersecting) {

entry.target.classList.add(
"show"
);

}

});

},
{
threshold:.12
});


document
.querySelectorAll(".reveal")
.forEach(
(el) =>
observer.observe(el)
);


/* =====================================================
   PROJECT FILTER
===================================================== */

const filters =
document.querySelectorAll(
".filter"
);

const projects =
document.querySelectorAll(
".project"
);

filters.forEach(
(filter) => {

filter.addEventListener(
"click",
() => {

filters.forEach(
(f) =>
f.classList.remove(
"active"
)
);

filter.classList.add(
"active"
);

const category =
filter.dataset.filter;

projects.forEach(
(project) => {

if(
category === "all" ||
project.dataset.category === category
) {

project.style.display =
"flex";

} else {

project.style.display =
"none";

}

});

});

});


/* =====================================================
   RANDOM FACTS
===================================================== */

const facts = [

"Every bug is a tiny teacher. Sometimes a very annoying one.",

"Your first version doesn't need to be perfect. It needs to exist.",

"Good developers Google things. Great developers know what to Google.",

"Consistency beats motivation when learning to code.",

"The best way to learn programming is to build something you actually care about.",

"One day your 'I don't understand this' becomes 'Oh... that's it?'"

];

const fact =
document.getElementById("fact");

const factBtn =
document.getElementById("factBtn");

function randomFact() {

const random =
Math.floor(
Math.random() * facts.length
);

fact.textContent =
facts[random];

}

randomFact();

factBtn.addEventListener(
"click",
randomFact
);


/* =====================================================
   COPY EMAIL
===================================================== */

const emailBox =
document.getElementById(
"emailBox"
);

emailBox.addEventListener(
"click",
async () => {

const email =
"ahmadzakee43@gmail.com";

try {

await navigator.clipboard.writeText(
email
);

emailBox.innerHTML =
"<span>Copied to clipboard ✓</span>";

setTimeout(
() => {

emailBox.innerHTML =
"<span>ahmadzakee43@gmailcom</span><span>📋</span>";

},
2000
);

} catch(error) {

alert(
"Email: " + email
);

}

});


/* =====================================================
   COMMAND PALETTE
===================================================== */

const palette =
document.getElementById(
"palette"
);

const commandBtn =
document.getElementById(
"commandBtn"
);

const paletteInput =
document.getElementById(
"paletteInput"
);

function openPalette() {

palette.classList.add(
"active"
);

paletteInput.focus();

}

function closePalette() {

palette.classList.remove(
"active"
);

paletteInput.value = "";

}

commandBtn.addEventListener(
"click",
openPalette
);

document.addEventListener(
"keydown",
(e) => {

if(
(e.ctrlKey || e.metaKey) &&
e.key.toLowerCase() === "k"
) {

e.preventDefault();

openPalette();

}

if(
e.key === "Escape"
) {

closePalette();

}

});


palette.addEventListener(
"click",
(e) => {

if(
e.target === palette
) {

closePalette();

}

});


document
.querySelectorAll(".palette-item")
.forEach(
(item) => {

item.addEventListener(
"click",
() => {

const target =
document.getElementById(
item.dataset.target
);

closePalette();

target.scrollIntoView({
behavior:"smooth"
});

});

});


/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
() => {

if(
window.scrollY > 600
) {

topBtn.classList.add(
"show"
);

} else {

topBtn.classList.remove(
"show"
);

}

});


topBtn.addEventListener(
"click",
() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
"year"
).textContent =
new Date().getFullYear();


/* =====================================================
   MAGNETIC BUTTON EFFECT
===================================================== */

document
.querySelectorAll(".btn")
.forEach(
(btn) => {

btn.addEventListener(
"mousemove",
(e) => {

const rect =
btn.getBoundingClientRect();

const x =
e.clientX -
rect.left -
rect.width / 2;

const y =
e.clientY -
rect.top -
rect.height / 2;

btn.style.transform =
`translate(${x*.15}px,${y*.15}px)`;

});

btn.addEventListener(
"mouseleave",
() => {

btn.style.transform =
"translate(0,0)";

});

});


/* =====================================================
   EASTER EGG
   TYPE: MATRIX
===================================================== */

let secret = "";

document.addEventListener(
"keydown",
(e) => {

secret +=
e.key.toLowerCase();

if(
secret.length > 20
) {

secret =
secret.slice(-20);

}

if(
secret.includes("matrix")
) {

document.body.style.background =
"#001a00";

document.body.style.color =
"#00ff41";

alert(
"Welcome to developer mode. 🟢"
);

secret = "";

}

});


/* =====================================================
   INTERACTIVE SKILL NODES
===================================================== */

document
.querySelectorAll(".skill-node")
.forEach(
(node) => {

node.addEventListener(
"mouseenter",
() => {

document
.querySelector(".skill-center")
.style.transform =
"translate(-50%,-50%) scale(1.1)";

});

node.addEventListener(
"mouseleave",
() => {

document
.querySelector(".skill-center")
.style.transform =
"translate(-50%,-50%) scale(1)";

});

});
