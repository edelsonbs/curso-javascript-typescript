function teste() {
    console.log('Este é meu teste.')
  }
  
  class ControleRemoto {
    constructor(tv) {
      this.tv = tv;
      this.volume = 0;
      teste();
    }
    
    // Método de instância
    aumentarVolune() {
      this.volume += 2;
    }
    
    diminuirVolume() {
      this.volume -= 2;
    }
    
    // Método estático
    static trocaPilha() {
      console.log('Ok, vou trocar.');
    }
    
    // Método estático
    static soma(x, y) {
      return x + y;
    }
  }
  
  const controle1 = new ControleRemoto('LG');
  controle1.aumentarVolune();
  controle1.aumentarVolune();
  controle1.aumentarVolune();
  controle1.aumentarVolune();
  
  console.log(controle1);
  
  ControleRemoto.trocaPilha();
  console.log(ControleRemoto.soma(2, 4));
  