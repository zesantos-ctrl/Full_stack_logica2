/*Aula 01:


let numeroSecreto = gerarNumeroSecreto();

function exibirTextoNaTela(tag, texto) {
    let campo = documet.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 100");

function verificarChute() {
    let chute =  document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}

function gerarNumero() {
    return  parseInt(Math.random() * 10 + 1);
}
*/



/*
//Desafio 01:
//1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

//2
let clicado = "clicado";
function verificarChute() {
    console.log("clicado");    
    alert(clicado);
}
    
//3
function verificarChute() {
    alert("Amo js");
}

//4 
function verificarChute() {
    let cidade = prompt("Digite um nome de uma cidade: ");
    alert(`Estive em ${cidade} lembrei de você`)
} 

//5
function verificarChute() {
    let numeroInteiro = parseInt(prompt("Insira um número: "));
    let numeroInteiro2 = parseInt(prompt("Insira outro número: "));
    let resultado = numeroInteiro + numeroInteiro2; 
    alert("Resultado é " + resultado);
}
*/


/*Aula 02:
Desafio 02:
//1
function verificarChute() {
    console.log("ola, mundo");
}

//2
function verificarChute() {
    let nome = prompt("Digite um nome de uma cidade: ");
    console.log(`Olá ${nome} lembrei de você`);
}
exibirNaTela();
//3
function verificarChute() { 
    let n =  document.querySelector("input").value;
    let resultado = n * 2;
    console.log(resultado);
}
*/
//4
function verificarChute(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
let media = verificarChute(10, 10, 10);
console.log(media);

//5
function verificarChute(n1, n2) {
    let maior = n1 < n2 ?  console.log(n2) : console.log(n1);
}
verificarChute(1,2);




//6
function retornarNumero(n) {
    let resultado = n * n;
    console.log(resultado);
}
retornarNumero(5);