// const multiplicacao = require('./mod')
const Cachorro = require('./Z/mod2');
const path = require('path');

const cachorrinho = new Cachorro('Rex');

// console.log(multiplicacao(2, 2));
// cachorrinho.latir();
// console.log(Cachorro);

// console.log(__filename);
console.log(__dirname);
// console.log(path.resolve(__dirname, '..', '..', 'arquivos',  'imagens'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos',  'imagens'));
