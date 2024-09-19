// valor por referência
//                 0         1        2        3         4
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Rafael', 'Rosana'];
// const novo = [...nomes];

/*  Construtor Array  */
// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// nomes[2] = 'João';

/*  Deletar item  */
// delete nomes[2];
// novo.pop();
// console.log(novo);

/*  Remove item do fim do array  */
// const removido = nomes.pop();

/*  Remove item do começo do array  */
// const removido = nomes.shift();

/*  Adiciona item no fim do array  */
// nomes.push('João');
// nomes.push('Wallace');

/*  Adiciona item no começo do array  */
// nomes.unshift('João');
// nomes.unshift('Wallace');

// console.log(nomes, removido);
// console.log(nomes.length);

// const novo = nomes.slice(1, 3);

/*  Remover de trás pra frente  */
// const novo = nomes.slice(0, -2);

// console.log(nomes);
// console.log(novo);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');

// console.log(nomes);
console.log(nome);
