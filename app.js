/*aula

let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número 1 e 10"; 

function verificarChute() {
    console.log("O botão foi clicado!");
}
*/

/*
//desafio01
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
*/



//5
function verificarChute() {
    let numeroInteiro = parseInt(prompt("Insira um número: "));
    let numeroInteiro2  = parseInt(prompt("Insira outro número: "));
    let resultado = numeroInteiro + numeroInteiro2; 
    alert("Resultado é " + resultado);
}