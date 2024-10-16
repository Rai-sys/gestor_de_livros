// const { livros } = require("./livros");

// function criarLivro(titulo, autor, genero) {
//     const novoLivro = { titulo, autor, genero};
//     livros.push(novoLivro);
// };

// module.exports = { criarLivro };

const {livros} = require("./livros");

function criarLivro(titulo, autor, isbn) {
    const novoLivro = {titulo, autor, isbn};
    livros.push(novoLivro)
}

module.exports = {criarLivro};