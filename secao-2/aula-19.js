/*
 Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

 Referência (mutável) - array, obect, function - Valores passados por referência
*/

// //          0123
// let nome = 'Luiz';
// // nome = 'Otávio';
// console.log(nome[0]);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b);

// a = 'Outra coisa';
// console.log(a, b);

// let a = [1, 2, 3];
// // let b = a;
// let b = [...a]; // Cópia
// let c = b;

// console.log(a, b);

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// a.push('Luiz');
// console.log(a, c);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
  };
  
  // const b = a;
  const b = {...a};
  
  a.nome = 'João';
  console.log(a);
  console.log(b);
  