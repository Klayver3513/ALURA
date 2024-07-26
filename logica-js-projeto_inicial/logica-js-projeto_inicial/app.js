alert("boas vindas ao jogo do numero secreto! ");

let numeroMaximo=1000;
//vai gerar um numero aleatorio entre 1 e 9,mas como tem o +1 fica entre 1 e 10
//parseInt pega so o primeiro numero e descarta o resto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroChute;
let tentativa = 1;

// enquanto o chi=ute n for igual faça
while (numeroChute != numeroSecreto) {
    numeroChute = prompt("Escolha um numero entre 1 e "+numeroMaximo);
    //se o chute for igual ao numero secreto 
    if (numeroChute == numeroSecreto) {
        //acerta de primeira PARAAAA
        break;
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O numero secreto é menor que ${numeroChute}`);
        } else {
            alert(`O numero secreto é maior que ${numeroChute}`);
        }
        //tentativa=tentativa+1;
        tentativa++;

    }
}
let palavraTentantiva = tentativa > 1 ? "tentativas" : "tentativa";
alert(`isso ai! Voce ganhou! achou o numero ${numeroSecreto} com ${tentativa} ${palavraTentantiva}`);
