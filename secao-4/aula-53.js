// Global
function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function() {
      return nome;
    }
  }
  
  const funcao = retornaFuncao('Luiz');
  const funcao2 = retornaFuncao('João');
  console.dir(funcao);
  console.log(funcao2);
  
  console.log(funcao(), funcao2());
  