const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
  ];
  
  // const novasPessoas = {};
  // for (const pessoa of pessoas) {
  //   const { id } = pessoa;
  //   novasPessoas[id] = { ...pessoas };
  // }
  
  const novasPessoas = new Map();
  for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
  }
  
  // console.log(novasPessoas);
  // console.log(novasPessoas.get(2));
  
  // for (const [identifier, {id, nome}] of novasPessoas) {
  //   console.log(identifier, id, nome);
  // }
  
  // for (const pessoas of novasPessoas) {
  //   console.log(pessoas);
  // }
  
  // Pegando as chaves
  // for (const chave of novasPessoas.keys()) {
  //   console.log(chave);
  // }
  
  // Pegando os valores
  // for (const valor of novasPessoas.values()) {
  //   console.log(valor);
  // }
  
  novasPessoas.delete(2)
  console.log(novasPessoas)
  