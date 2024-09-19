// defineProperty
// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;  

//   Object.defineProperty(this, 'estoque', {
//     enumerable: true,  // mostra a chave
//     value: estoque,  // valor da chave
//     writable: true,  // pode alterar o valor
//     configurable: false  // configurável
//   });
// }


// defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
      enumerable: true,  // mostra a chave
      value: estoque,  // valor da chave
      writable: true,  // pode alterar o valor
      configurable: false  // configurável
    });
  
    Object.defineProperties(this, {
      nome: {
        enumerable: true,  // mostra a chave
        value: nome,  // valor da chave
        writable: true,  // pode alterar o valor
        configurable: false  // configurável
      },
      preco: {
        enumerable: true,  // mostra a chave
        value: preco,  // valor da chave
        writable: true,  // pode alterar o valor
        configurable: false  // configurável
      }
    });
  }
  
  const p1 = new Produto('Camiseta', 20, 3);
  p1.estoque = 5000;
  // delete p1.estoque;
  console.log(p1);
  // console.log(Object.keys(p1));
  
  for (let chave in p1) {
    console.log(chave);
  }
  