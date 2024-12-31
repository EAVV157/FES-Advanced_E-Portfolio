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

let isModelOpen = true;
function toggleModel() {
    isModelOpen = !isModelOpen;
    if(isModelOpen){
        return document.body.classList.remove("model--open")
    }
    document.body.classList += " model--open"
}