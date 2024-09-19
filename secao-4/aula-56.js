// Factory Faunction (Função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
      nome,
      sobrenome,
      // Getter
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
      },
      fala(assunto = 'falando sobre nada.') {
        return `${this.nome} está ${assunto}.`;
      },
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');      
      },
      altura: altura,
      peso: peso,
      // Getter
      get imc() {
        const indice = this.peso / (this.altura * this.altura);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  const p2 = criaPessoa('João', 'Moraes', 1.75, 60);
  const p3 = criaPessoa('Pedro', 'Silva', 1.6, 75);
  // console.log(p1.imc());
  // console.log(p1.nome);
  // console.log(p1.sobrenome);
  p1.nomeCompleto = 'Maria Oliveira Silva';
  console.log(p1.nomeCompleto);
  
  console.log(p1.imc);
  console.log(p2.imc);
  console.log(p3.imc);
  
  // const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
  // console.log(p2.imc());
  // console.log(p2.fala('falando sobre JS'));
  
  // Constructor Faunction (Função construtora)
  