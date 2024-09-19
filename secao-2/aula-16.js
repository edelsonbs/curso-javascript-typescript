//                0         1         2
const alunos = ["Luiz", "Maria", "João"];

// alunos[0] = 'Eduardo';
// alunos[3] = 'Mariana';
// alunos[alunos.length] = 'Luíza';
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';
// alunos.push("Luíza");
// alunos.push("Fábio");
// alunos.push("Otávio");
alunos.unshift("Luíza");
alunos.unshift("Fábio");
// const removido = alunos.pop();
// const removido = alunos.shift();
// delete alunos[1];

console.log(typeof alunos);
console.log(alunos instanceof Array);
console.log(alunos);
// console.log(removido);
// console.log(alunos[0]);
// console.log(alunos[2]);
// console.log(alunos.length);
// console.log(alunos[50]);
console.log(alunos.slice(0, -2));
