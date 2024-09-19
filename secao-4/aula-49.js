// Declaração de função (Fuction hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();

// First-class objects (Ojetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

// function executaFuncao(funcao) {
//     funcao();
// }
// executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

// Dentro de um objeto
// const obj = {
//   falar: function() {
//     console.log('Estou falando...');
//   }
// }

const obj = {
  falar() {
    console.log('Estou falando...');
  }
}
obj.falar();
