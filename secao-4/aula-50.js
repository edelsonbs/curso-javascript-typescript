// function funcao() {
//   console.log(arguments[2]);
// }
// funcao('Valor', 1, 2, 3);


// arguments que sustenta todos os argumentos enviados
// function funcao() {
//   let total = 0;
//   for (let argumento of arguments) {
//     total += argumento;
//   }

//   console.log(total);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);


// function funcao(a, b, c, d, e, f) {
//   console.log(a, b, c, d, e, f);
// }

// funcao(1, 2, 3);

// Valores padrão
// function funcao(a, b = 2, c = 4) {
//   console.log(a + b + c);
// }
// funcao(2, undefined, 20);


// Desestruturação
// function funcao({nome, sobrenome, idade}) {
//   console.log(nome, sobrenome, idade);
// }
// funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 30});


// Desestruturação de array
// function funcao([valor1, valor2, valor3]) {
//   console.log(valor1, valor2, valor3);
// }
// funcao(['Luiz', 'Otávio', 30]);

// function conta(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '/') acumulador /= numero;
//     if (operador === '*') acumulador *= numero;
//   }

//   console.log(acumulador);
// }

// const conta = function(operador, acumulador, ...numeros) {
//   for (let numero of numeros) {
//     if (operador === '+') acumulador += numero;
//     if (operador === '-') acumulador -= numero;
//     if (operador === '/') acumulador /= numero;
//     if (operador === '*') acumulador *= numero;
//   }

//   console.log(acumulador);
// };

const conta = (...args) => {
    console.log(args);
  };
  
  conta("*", 1, 20, 30, 40, 50);
  