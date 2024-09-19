//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, ...);
// const removidos = nomes.splice(3, 2);

/*  Da posição específica até o último elemento  */
// const removidos = nomes.splice(3, Number.MAX_VALUE);

// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');

/*  Simular o pop()  */
// const removidos = nomes.splice(-1, 1);

/*  Simular o shift()  */
// const removidos = nomes.splice(0, 1);

/*  Simular o push()  */
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');

/*  Simular o unshift()  */
nomes.splice(0, 0, 'Luiz', 'Otávio');

// console.log(nomes, removidos);
console.log(nomes);
