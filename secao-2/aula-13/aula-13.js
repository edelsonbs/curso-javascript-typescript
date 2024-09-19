// let umaString = "Um \"texto\""; // \ caractere de escape

//               01234567
let umaString = "Um texto";

console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf("o", 3));
console.log(umaString.lastIndexOf("m", 3));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.replace("Um", "Outra"));
console.log(umaString.replace(/Um/, "Outra"));

let texto = "O rato roeu a roupa do rei de Roma.";

console.log(texto.replace(/r/g, "#"));
console.log(texto.length);
console.log(texto.slice(2, 6));
console.log(texto.slice(-3));
// console.log(texto.slice(32));
console.log(texto.slice(-5, -1));
console.log(texto.substring(texto.length - 5, texto.length - 1));
console.log(texto.split(' '));
console.log(texto.split(' ', 3));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
