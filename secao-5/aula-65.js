// filter -> Sempre reorna um array com a mesma quantidade de elementos ou menos.

// Retorne os números amiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callFilter(valor) {
//     return valor > 10;     
// }

// const numerosFiltrados = numeros.filter(callFilter);
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);


/*  Exemplo 2  */

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com 
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(pessoa => pessoa.idade >= 50);
const nomeTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));

// console.log(pessoasComNomeGrande);
// console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);
