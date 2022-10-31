let cabecalho = document.querySelector(".frase");
let frase = "Talk is cheap, show me the code.";

for (let i = 0; i < frase.length; i++) {
    let span = document.createElement("span");
    cabecalho.appendChild(span);
}

let char = 0
let spans = document.querySelectorAll(".frase span");

let timer = setInterval(function() {

    if (char === frase.length) {
        timerEnd();
        return;
    }

    spans[char].classList.add("animacao");
    spans[char].textContent = frase[char];

    char++;

}, 100);

function timerEnd() {
    clearInterval(timer);
}