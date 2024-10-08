// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome;
  }
  
  Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
  };
  
  // Instância
  const pessoa1 = new Pessoa('Luiz', 'O.');  // <- Pessoa = Função construtora
  const pessoa2 = new Pessoa('Maria', 'A.');  // <- Pessoa = Função construtora
  const data = new Date();  // <- Date = Função construtora
  
  console.log(pessoa1);
  // console.log(pessoa2);
  console.log(data);
  