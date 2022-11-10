let skills = document.querySelectorAll(".item-figure");
let lista = document.querySelector(".lista-principal");

let all = document.querySelector(".nav__all");
all.addEventListener("click", function () {
    adicionarTodasSkills(skills);
});

let frontend = document.querySelector(".nav__frontend");
frontend.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-frontend")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

let backend = document.querySelector(".nav__backend");
backend.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-backend")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

let frameworks = document.querySelector(".nav__frameworks");
frameworks.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-frameworks")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

let cloud = document.querySelector(".nav__cloud");
cloud.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-cloud")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

let databases = document.querySelector(".nav__databases");
databases.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-databases")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

let environment = document.querySelector(".nav__environment");
environment.addEventListener("click", function () {
    adicionarTodasSkills(skills);
    skills.forEach(s => {
        if (s.classList.contains("skill-environment")) {
            return;
        }
        lista.removeChild(s.parentNode);
    });
});

function adicionarTodasSkills(skills) {
    skills.forEach(s => {
        s.classList.add("animacao");
        lista.appendChild(s.parentNode);
    });
}