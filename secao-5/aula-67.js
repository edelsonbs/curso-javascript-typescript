// Some todos os números (reduce)
// Retorne um array com os pares (filter)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const total = numeros.reduce(function(acumulador, valor) {
//   if(valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);

// const total = numeros.reduce(function(acumulador, valor) {
//   acumulador.push(valor * 2);
//   return acumulador;
// }, []);

const total = numeros.reduce(function(acumulador, valor) {
 if (valor % 2 === 0) {
   acumulador += valor;
 }

  return acumulador;
}, 0);

// const total = numeros.reduce(function(acumulador, valor) {
//   acumulador += valor;
//   return acumulador;
// });

// console.log(total);

/*  Exemplo 2 */

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
