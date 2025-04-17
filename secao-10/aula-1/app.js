// const falaNome = require('./mod1').falaNome;
// const { nome, sobrenome, falaNome } = require('./mod1');
const mod1 = require('./mod1');
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

// console.log(mod1);
// console.log(mod1.falaNome());
// console.log(nome, sobrenome);
// console.log(falaNome());

// const p1 = new Pessoa('Luiz');
// console.log(p1);

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

const p1 = new Pessoa('Jão');
console.log(p1);
console.log(mod1.nome);
