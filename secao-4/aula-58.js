// Função construtora - > objetos
// Função fábrica -> objetos
// Construtora -> instanciar - Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
  
    const metodoInterno = function() {
      console.log('Metodo interno');
    };
  
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    this.metodo = function () {
      console.log(this.nome + ": sou um método");
    };
  }
  
  const p1 = new Pessoa("Luiz", "Otávio");
  const p2 = new Pessoa("Maria", "Oliveira");
  
  console.log(p1.nome);
  console.log(p2.nome);
  p2.metodo();
  