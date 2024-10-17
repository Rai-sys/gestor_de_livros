const prompt = require("prompt-sync")();
const { criarAutor } = require("./autor/criarAutor");
const {criarLivro} = require("./livros/criarLivro");
const {listarAutores} = require("./autor/listarAutor");
const {listarLivros} = require("./livros/listarLivro");
const {excluirAutor} = require("./autor/excluirAutor");

const autor1 = criarAutor("Zezinho","zezinho@email.com");
criarLivro("Livro De Fulano", autor1, "12345");

const autor2 = criarAutor("Joca","joca@email.com");
criarLivro("Livro De Siclano", autor2, "12345");
listarAutores();
listarLivros();
excluirAutor();

