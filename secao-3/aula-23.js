/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// console.log('Luiz Otávio' && 0 && 'Maria');
// console.log('Luiz Otávio' && 'Maria');
// console.log('Luiz Otávio' && '' && 'Maria');

// function falaOi() {
//   return 'Oi';
// }

// let vaiExecutar = false;

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true);

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
