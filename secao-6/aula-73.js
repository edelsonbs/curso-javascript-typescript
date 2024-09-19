/*
Object.values -> Retorna um array com os valores de um objeto
Object.entries -> Retorna um array com as chaves e os valores de um objeto
Object.assing(des, any) -> Copia um objeto para outro
Object.getOwnPropertyDescriptor(o, 'prop') -> Retorna o descriptor de uma propriedade
... (spread)

Object.keys -> Retorna um array com as chaves de um objeto
Object.freeze -> Trava o objeto
Object.defineProperties -> Define propriedades de um objeto
Object.defineProperty -> Define uma propriedade de um objeto
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
// const caneca = { 
//   ...produto,
//   material: 'porcelana'
// };

// Copiar objeto
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// Object.defineProperty(produto, 'nome', {
//   writable: false,
//   configurable: false,
//   value: 'Qualquer outra coisa'
// });

// produto.nome = 'Luiz Otávio';
// delete produto.preco;
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(caneca);
// console.log(Object.keys(produto));
// console.log(produto);
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

// Outra forma de percorrer um objeto (não muito comum)
// for (let valor of Object.entries(produto)) {
//   console.log(valor[0], valor[1]);
// }
