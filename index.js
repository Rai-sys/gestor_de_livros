const prompt = require("prompt-sync")();
const { criarAutor } = require("./autor/criarAutor");
const {criarLivro} = require("./livros/criarLivro");
const {listarAutores} = require("./autor/listarAutor");
const {listarLivros} = require("./livros/listarLivro");

criarAutor("Zezinho","zezinho@email.com");
criarLivro("Livro De Fulano","Zezinho","12345");
listarAutores();
listarLivros();

