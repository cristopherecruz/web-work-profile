let form = document.querySelector(".principal__form");
let botaoSubmit = document.querySelector(".enviar");
let personalName = document.querySelector("#nome-sobrenome");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#telefone");
let message = document.querySelector("#mensagem");

botaoSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    Email.send({
        SecureToken : "974459ee-c235-4b12-863b-d25c14452813",
        To : 'cristopher@cristopher.dev.br',
        From : 'cristopher@cristopher.dev.br',
        Subject : "Message from web work profile",
        Body : `Personal Name: ${personalName.value}, email: ${email.value}, Phone number: ${phoneNumber.value}, Message: ${message.value}`
    }).then(
        message => alert("e-mail sent successfully!"),
        form.reset()
    );
});