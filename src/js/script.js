//DECLARAÇÃO E VARIAVEOS 

var nome = "Fiap";
console.log(nome)

let idade = "19";
console.log(idade)

const sobrenome = "spinola"
console.log(sobrenome)

//undefined 

let exemplo;
console.log(exemplo)

//nuk=la

let exemplo1 = null
console.log(exemplo1)

//TIPOS DE VARIAVEIS

let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 25
console.log(typeof ex2)

let ex3 = true
console.log(typeof ex3)

let ex4 = {};
console.log(typeof ex4)

let ex5 = [];
console.log(typeof ex5)

// CONVERSÕES

let numFloat = 123.456;
console.log(numFloat.toString())

//STRING => FLOAT

let numString = "12.963"
console.log(parseFloat(numString))

// INT = STRING

let numInt = 123
console.log( numInt.toString())

// STRING => INT

let numString1 = "123"
console.log(parseInt(numString1))

// METODOS

// METODO LENGTH - VERIFICA O TAMANHO DA STRING

let frase = "O mundo da Tecnologia";
console.log(frase.length)

// METODO indeof/lastIndexOF - RETORNA UM  TRECHO DO SEU CODIGO

let texto = "Programação Sustentável ão ";
console.log(texto.indexOf("ão"))

// METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL

let info = "Programação de ponta";
console.log(info.slice(14,20))

// OPEREADORES ARITMÉTICOS

const a = 10;
const b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// OPERADORES LÓGICOS

const c = 20;
const d = 30;

console.log(c > d);
console.log(c > d && c < 10);
console.log(c > d || d > c );
console.log(c == d || d <= c )

// OPERADORES DE COMPARAÇÃO 

const e = 10;
const f = 30;
console.log(e == f );
console.log(e === f);
console.log(e != f);