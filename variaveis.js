const readline = require("readline")

/*  - Variáveis em javascript são Case-sensitive nome e NOME são variáveis diferentes
    - Variáveis em javascript tem suporte a UNICODE, ou seja, podem conter caracteres acentuados e emojis 
*/

// nome_completo snake_case
// nomeCompleto camelCase utilizado para variáveis e funções no javascript
// NomeCompleto PascalCase utilizado para classes no javascript

// Variáveis em javascript podem ser declaradas utilizando var, let ou const
// var é a forma mais antiga de declarar variáveis, não é recomendado utilizar var pois pode causar problemas de escopo
// let é a forma mais moderna de declarar variáveis, é recomendado utilizar let para variáveis que podem ser reatribuídas
// const é a forma mais moderna de declarar variáveis, é recomendado utilizar const para variáveis que não podem ser reatribuídas

// var nome = "Kaua"
// let sobrenome = "Sousa"
// idade = 20 

// if (true) {
//     var nome = "João"  // var tem escopo global ou de função, ou seja, pode ser acessada fora do bloco onde foi declarada
//     var nome = "Maria" // var pode ser redeclarada, o que pode causar problemas de escopo e bugs difíceis de encontrar
//     let sobrenome = "Silva" // let tem escopo de bloco, ou seja, só pode ser acessada dentro do bloco onde foi declarada, mão pode ser redeclarada mas pode ser reatribuída
//     const idade = 30 // const tem escopo de bloco, ou seja, só pode ser acessada dentro do bloco onde foi declarada, nãp pode ser redeclarada ou reatribuída
//     // idade = 40 // Uncaught TypeError: Assignment to constant variable. não é possível reatribuir uma variável declarada com const
// }

// console.log(nome) // João
// console.log(sobrenome) // Sousa
// console.log(idade) // 20


// console.log(x)
// var x = 10
// undefined, var é "içada" (hoisted) para o topo do escopo, ou seja, a declaração da variável é movida para o topo do escopo, mas a atribuição permanece no lugar onde foi escrita, por isso x é undefined e não 10

// function criar() {
//     let nome = "João"
//     return {
//         getNome() {return nome}
//     }
// }


// const cr = criar()
// console.log(cr.getNome()) // João

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// let nome = prompt ("Digite seu nome: ") // prompt é uma função que exibe uma caixa de diálogo para o usuário digitar um valor, o valor digitado é retornado como uma string
// alert("Bem vindo, " + nome) // alert é uma função que exibe uma caixa de diálogo com uma mensagem para o usuário

rl.question("Digite seu nome: ", (nome) => {
    console.log("Bem vindo, " + nome)
})

// nome = "Kaua"
// numero = 21
// numeroDecimal = 3.14
// booleano = true
// entrada = null
// valor = undefined
// usuario = {nome: "Kaua", idade: 21} // objetos em javascript são coleções de pares chave-valor, onde a chave é uma string e o valor pode ser qualquer tipo de dado, incluindo outros objetos
// lista = [1, 2, 3, 4, 5] // arrays em javascript são objetos que possuem uma propriedade length e métodos para manipular os elementos do array