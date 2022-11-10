let cabecalho = document.querySelector(".banner__frase");
let frase = "Talk is cheap, show me the code.";

for (let i = 0; i < frase.length; i++) {
    let span = document.createElement("span");
    span.setAttribute("class", "letra")
    cabecalho.appendChild(span);
}

let char = 0
let spans = document.querySelectorAll(".letra");

let timer = setInterval(function() {

    if (char === frase.length) {
        timerEnd();
        return;
    }

    spans[char].classList.add("letra--animacao");
    spans[char].textContent = frase[char];

    char++;

}, 100);

function timerEnd() {
    clearInterval(timer);
}