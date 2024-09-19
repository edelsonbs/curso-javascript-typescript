// const pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Otávio'
// }

// const chave = 'nome';

// // console.log(pessoa.nome);
// // console.log(pessoa['nome']);
// // console.log(pessoa.sobrenome);
// console.log(pessoa[chave]);

// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 30;
// pessoa1.falarNome = function() {
//   return `${this.nome} está falando seu nome.`;
// };
// pessoa1.getDataNascimento = function() {
//   const dataAtual = new Date();
//   return dataAtual.getFullYear() - this.idade;
// }

// delete pessoa1.nome;
// console.log(pessoa1);
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1) {
//   console.log(pessoa1[chave]);
// }


// Factory functions / Constructor functions / Classes
// function criaPessoa(nome, sobrenome) {
//   return {
//     nome,
//     sobrenome,
//     get nomeCompleto() {
//       return `${this.nome} ${this.sobrenome}`;
//     }
//   }
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  
  // {} <- this -> this
  // p1 = (ENDERECOMEMORIA) -> 'Valor'
  const p1 = new Pessoa('Luiz', 'Miranda');
  // Trava o objeto
  Object.freeze(p1);
  p1.nome = 'Outra coisa';
  const p2 = new Pessoa('Maria', 'Silva');
  console.log(p1);
  console.log(p2);
  