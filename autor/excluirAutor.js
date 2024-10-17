// const {autores} = require("./autores");

// function excluirAutor(nome) {
//     autores.forEach(autor => {

//     })
// }

// autores.splice()
const prompt = require('prompt-sync')();
const dados = ["joao", "ze"];

const index = dados.indexOf("joao");

const elementoExluido = dados.splice(index, 1);

console.log(dados);
console.log(elementoExluido);
