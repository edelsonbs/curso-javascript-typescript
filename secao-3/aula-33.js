const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
      rua: 'Av Brasil',
      numero: 320
    }
  };
  
  // Atribuição via desestruturação
  // const { nome = '', sobrenome, idade } = pessoa;
  // const { nome: n, sobrenome, idade } = pessoa;
  // const { nome, sobrenome, idade } = pessoa;
  // const { endereco: {rua: r = 1234, numero}, endereco } = pessoa;
  const { nome, ...resto } = pessoa;
  
  // console.log(n, sobrenome);
  // console.log(nome, sobrenome);
  // console.log(rua, numero);
  console.log(nome, resto);
  