// Tipos de funções em JavaScript

const { exec } = require("node:child_process");

// 1. Função Declarada (Tradicional)
function saudacao(nome) {

    return `Olá, ${nome}!`;
}

console.log(saudacao("Maria")); // Saída: Olá, Maria!


// 2. Função Anônima (Função sem nome atribuída a uma variável) 
const soma = function(a, b) {
    return a + b;
}
console.log(soma(6, 3)); // Saída: 9

const sub = function(a, b) {
    return a - b;
}

console.log("tipo do soma: " + typeof soma); // Saída: function
console.log("tipo do sub: " + typeof sub); // Saída: function
function executarOperacao(funcao, x, y) {
    return funcao(x, y);
}
console.log(executarOperacao(soma, 10, 5)); // Saída: 15
console.log(executarOperacao(sub, 10, 5)); // Saída: 5

// 3. Função Arrow (Função de seta, sintaxe mais curta)
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 2)); // Saída: 8

// const multiplicar = (a, b) => console.log('O resultado da multiplicação entre ${a} e ${b} é: ' + (a * b));

// A função acima é equivalente a:
// function multiplicar(a, b) {  
//     return a * b;
// }


function numero (numero = 10) {
    return `O número ${numero} é um número par`;
}

// console.log(numero());
console.log(numero(26));


// (function() {
//     let segredo = "Este é um segredo!";
//     console.log("Executando");
// }())

// console.log(segredo); // Erro: segredo is not defined


function processar(valor, callback) {
    console.log("Processando...")
    callback(valor);
}

processar(10, (num)=> console.log(`Resultado: ${num * 2}`)); // Dois valores: o número 10 e a função de callback que multiplica o número por 2 e imprime o resultado.


function dobrar(num) {
    console.log(`O dobro do número ${num} é: ${num * 2}`);
}

processar(10, dobrar); // Dois valores: o número 5 e a função de callback dobrar que multiplica o número por 2 e imprime o resultado.

async function exemplo(params){
    console.log("Antes");

    await new Promise(resolve => setTimeout(resolve, 10000))

    console.log("Depois");
}

exemplo();

function pegarNumero(){
    return Promise.resolve(10)
}

async function executar(){
    let num = await pegarNumero();
    console.log(num)
}

executar();

