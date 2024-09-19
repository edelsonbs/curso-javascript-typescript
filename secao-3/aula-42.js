// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem for uma paisagem, ou false caso contrário.

// function ePaisagem(largura, altura) {
//   return largura > altura ? true : false;
// }

// function ePaisagem(largura, altura) {
//   return largura > altura;
// }

// Arrow Function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920));
console.log(ePaisagem(1080, 920));
