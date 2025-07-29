/***************************************************************************************** 
*Objetivo: Iniciar os primeiros comandos em Node.JS
*Autor: Enzo 
*Data: 29/07/2025
*Versão: 1.0
*****************************************************************************************/

/* comentário em bloco */
//Comentário em linha

//Import da biblioteca para fazer entrada de dados via terminal
//(Iremos utilizar ela de forma provisória)
var readline = require('readline')

//Criando um objeto de entradaDeDados para captar ou printar dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome:', function(nome){
    var nomeUsuario = nome

    if(nomeUsuario == ''){
        console.log('Não foi possível processar a solicitação')
    }
    else{
    //String() -> converte oum objeto em String
    //toUpperCase() -> Converte o conteudo de uma string em MAIUSCULO    
    console.log('O nome digitado foi ' + String(nomeUsuario).toUpperCase())
    console.log(nome)
    }

    entradaDeDados.close() //Fecha a interface de entrada de dados do readline
})

/*
console.log('Aula 01 de Node.JS')

//Declarando uma variável 
var nome = 'Enzo'

//Exemplo de concatenação de dados (símbolo de (+))
console.log('O nome digitado foi ' + nome)

//Exemplo de concatenação de método reduzido
console.log(`O nome digitado foi ${nome}`)

//typeof -> permite mostrar o tipo de dados de um objeto ou variável
console.log(typeof(nome))
*/