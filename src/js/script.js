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
console.log(numInt.toString())

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
console.log(info.slice(14, 20))

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
console.log(c > d || d > c);
console.log(c == d || d <= c)

// OPERADORES DE COMPARAÇÃO 

const e = 10;
const f = 30;
console.log(e == f);
console.log(e === f);
console.log(e != f);

// CONDICIONAL

//if sozinho só traz condição verdadeira

if (true) {
    console.log("andré lindo")
}
let exempl = 1
if (exempl == 1) {
    console.log("está correto")
}

//if/else

let nom = "fiap"

if (nom == "Fiap") {
    console.log("Nome correto")
    document.write("Nome certo")
}
else {
    console.log("Nome Errado")
    document.write("Nome Errado")
}

//IF encadeado ou Aninhado

let idadi = 17;
if (idadi <= 14) {
    console.log("Não pode entrar")
}
else if (idadi > 14 && idadi <= 18) {
    console.log("pode entrar e curtir")
}
else if (idadi > 18 && idadi <= 50) {
    console.log("Perigo seus pais estão na balada")
}
else {
    console.log("Você deve ficar no sofá assistindo")
}

//swit case

let time = "Corinthians";
switch(time){
    case "Corinthians":
        console.log("Melhor Time")
        break;
    case"São Paulo":
        console.log("É tão ruim que não conseguem em casa")
        break;
    case "Palmeiras":
        console.log("Simplesmente não tem mundial")
        break;
    default:
        console.log("Nenhuma das opções válidas (santos) ")
}

//Ternario

let valor=100;
let resultado = valor ==100 ? "Valor Certo" : "Valor Errado";
console.log(resultado);

let media = 6 ;
let result = media >= 6 ? "Aprovado" : "Reprovado";
console.log(result);

//ESTRUTURA DE REPETIÇÃO

for(let i = 0; i <10;i++){
    console.log("o valor de i é", i )
}    

//while

let v=0;
while(v <10){
    console.log("o valor de v é  ", v)
    v++;
}

//do while

let w=0;
do{
    console.log("Do while",w)
    w++;
}while(w <=20 )

//jogo de adivinhação

//declarando uma variavel indefinida

let palpite;

const sorteio = Math.floor(Math.random() * 10)+1;

do{
    palpite = parseInt(prompt("escolha um numero entre 1 e 10"))
}while(palpite !== sorteio)

    alert(`Parabéns Você Ganhou o Jogo ${palpite}`)


