// 'continue' continua para a próxima iteração
// 'break' sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//   if (numero === 2) {
//     console.log("Pulei o número 2");
//     continue;
//   }

//   console.log(numero);
  
//   if (numero === 7) {
//     console.log("7 encontrado, saindo...");
//     break;
//   }
// }

// for (let i in numeros) {
//   let numero = numeros[i];
  
//   if (numero === 2) {
//     console.log("Pulei o número 2");
//     continue;
//   }

//   console.log(numero);
  
//   if (numero === 7) {
//     console.log("7 encontrado, saindo...");
//     break;
//   }
// }

// let i = 0;
// while (i < numeros.length) {
//   let numero = numeros[i];
  
//   if (numero === 2) {
//     console.log("Pulei o número 2");
//     i++;
//     continue;
//   }

//   console.log(numero);
  
//   if (numero === 7) {
//     console.log("7 encontrado, saindo...");
//     i++;
//     break;
//   }
// }

let i = 0;
do {
  let numero = numeros[i];
  
  if (numero === 2) {
    console.log("Pulei o número 2");
    i++;
    continue;
  }

  console.log(numero);
  
  if (numero === 7) {
    console.log("7 encontrado, saindo...");
    i++;
    break;
  }
} while (i < numeros.length);
