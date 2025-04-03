// export const nome = 'Luiz'
// export const sobrenome = 'Miranda'
// export const idade = 30;

const nome = 'Luiz'
const sobrenome = 'Miranda'
const idade = 30;

// export default function soma(x, y) {
//     return x + y;
// }

function soma(x, y) {
    return x + y;
}

// export default (x, y) => x * y

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade, soma }

// export { nome, sobrenome, idade, soma as default}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome as nome2, sobrenome, idade, soma };
