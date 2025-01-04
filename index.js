/* *************** VARIABLES *************** */
let contrastToggle = false;
const cElem = document.querySelector(".model__exit");
let pElem = document.querySelector(".model__contact");

/* *************** MATRIX BACKGROUND *************** */
// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.height = screen.height;
canvas.width = screen.width;

// Setting up the letters
const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

var letters = katakana + latin + nums;
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = contrastToggle ? 'rgba(0, 0, 0, .1)' : 'rgba(255, 255, 255, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = contrastToggle ? '#fff8' : '#0008';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 33);

/* *************** DARK THEME *************** */
function toggleContrast() {
  contrastToggle = !contrastToggle;
  document.querySelector("body").classList.toggle("dark-theme");
}

/* ************* SENDING EMAILS ************* */
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".model__overlay--loading");
  const success = document.querySelector(".model__overlay--success");
  loading.classList += " model__overlay--visible";

  emailjs
    .sendForm(
      "service_5278xg6",
      "template_a2r3mve",
      event.target,
      yTPfzYegc13VQRv6S
    )
    .then(() => {
      loading.classList.remove("model__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("model__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on edvargas1817@gmail.com"
      );
    });
}

/* ********** OPENING/CLOSING MODEL ********** */
function toggleModel() {
    document.querySelector("body").classList.toggle("model--open");
    document.documentElement.scrollTop = 0;
}

/* ****** CHANGING MODEL EXIT POSITION ****** */
function modelExitPosition (width) {
  pElem.removeChild(cElem)
  if(width.matches) {
    pElem = document.querySelector(".model__about");
  }
  else {
    pElem = document.querySelector(".model__contact");
  }
  pElem.prepend(cElem);
}

var mediaWidth = window.matchMedia("(max-width: 768px)");
console.log(mediaWidth)

modelExitPosition(mediaWidth);

mediaWidth.addEventListener("change", function() {
  modelExitPosition(mediaWidth);
})