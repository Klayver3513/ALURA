alert("Boas vindas ao nosso site!");

let nome="lua";

let idade=24;

let numeroDeVendas = 50;

let saldoDisponivel = 1000; 

let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);

let nomePessoa = prompt("digite seu nome");
let idadePessoa = prompt("digite sua idade");

if (idadePessoa >= 18) {
    alert('Pode tirar a habilitação!'); 
}