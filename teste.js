'use strict';

// define my_fav como uma constante e atribui o valor 7
const my_fav = 7;

// isto falha
my_fav = 20;

// retorna 7
console.log(`Meu número favorito: ${my_fav}`);

// tentar redeclarar a constante emite um erro 
const my_fav = 20;

// o nome my_fav está reservado para a constante acima, logo também irá falhar
var my_fav = 20; 

// const deve ser inicializada
const foo; // SyntaxError: missing = in const declaration

// const também funciona com objetos
const myObject = {"key": "value"};

console.log(`Minha key é: ${myObject.key}`);

// Sobrescrever o objeto também falha
myObject = {"otherKey": "value"};

// Entretando, atributos de objetos não estão protegidos,
// logo a seguinte instrução é executada sem problemas 
myObject.key = "otherValue";

console.log(`Troquei minha key para: ${myObject.key}`);