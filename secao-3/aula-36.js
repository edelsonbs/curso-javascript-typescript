// for in -> lê os índices ou chaves do objeto

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let indice in frutas) {
  console.log(frutas[indice]);
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30
};

// for (let chave in pessoa) {
//   console.log(chave);
// }

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);
