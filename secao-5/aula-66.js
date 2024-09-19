// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

/*  Exemplo 2  */

// Para cada elemento
// Retorne apenas uma string com o nome da pesssoa
// Remova apenas a chave "nome" da pessoa
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => ({ idade: pessoa.idade }));
const comIds = pessoas.map(function(pessoa, indice) {  
  const newObj = { ...pessoa };
  newObj.id = indice;
  return newObj;
});

// console.log(nomes);
// console.log(idades);
console.log(comIds);
