// Escreva um a função que recebe dois números e retorne o maior deles.

// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }

// function max(x, y) {
//   if (x > y) return x;  
//   return y;
// }

function max(x, y) {  
    return x > y ? x : y;
  }
  
  // Arrow function
  
  // const maximo = (x, y) => {
  //   return x > y ? x : y;
  // }
  
  const maximo = (x, y) => x > y ? x : y;
  
  console.log(max(10, 2));
  console.log(max(1, 5));
  console.log(maximo(7, 5));
  