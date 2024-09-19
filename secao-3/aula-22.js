/*
Operadores Lógicos
&& -> AND -> E -> Todas as expresões devem ser verdadeiras para que a expressão seja verdadeira
|| -> OR -> OU
! -> NOT -> NÃO
*/
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';

console.log(true && true);
console.log(false || true);
console.log(vaiLogar);
console.log(!!true);
