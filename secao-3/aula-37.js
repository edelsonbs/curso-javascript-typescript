// for clássico -> Geralmente com interáveis (array ou strings)
// for in -> Retorna o índice ou chave (string, array ou objetos)
// for of -> Retorna o valor em si (iteráveis, arrays ou strings)

const nome = 'Luiz Otávio';
const nomes = ['Luiz', 'Otávio', 'Henrique'];

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda'
};

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// for (let i in nome) {
//   console.log(nome[i]);
// }

// for (let valor of nome) {
//   console.log(valor);
// }

// for (let valor of nomes) {
//   console.log(valor);
// }

// nomes.forEach(function(valor, indice, array){
//   console.log(valor, indice, array);
// });

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
