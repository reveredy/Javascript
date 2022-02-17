/* Console.log joga informações na tela do console */
console.log('Carlos')

/* Variáveis - use a palavra reservada let para declarar a variavel*/

let idade = 32;

console.log(idade);

console.log("Carlos " + idade);

/* Constantes - Use a palavra reservada const para declarar uma variável*/

const valorIngressoAdulto = 30;

/* tipos valor - Referencia = String - Number - boolean - Undefined - null */

let nome = "Carlos"; // String
let idade2 = 32; // Number
let aprovacao = true //Boolean
let sobrenome = undefined // undefined - Porem não se usa esse tipo
let corSelecionada = null // null - usada para redefinir valores

// Tipagem dinamica - O programa descobre sozinho em tempo de execuçao qual o tipo da variavel

//Podemos usar o typeof para descobrir o tipo de um objeto
console.log(typeof nome);

// Objetos

let pessoas = {
    nome: "Rafael", //Key = value x per
    idade: 32,
    cidade: "Camboriu",
    emprego: true
}

// acessar o objeto usamos o nome do objeto

console.log(pessoas);

// e para acessa algum atributo desse objeto usamos o .

console.log(pessoas.idade);

//Arrays

let familia = [true, 24, "Tairini", 26];

console.log(familia[2]);

console.log(familia.length);

//Funções - functions

// Para criar uma função devemos usar um verbo + adjetivo
//ex: resetaCor

let corSite = "Azul";

//sem parametros
function resetaCor() {
    corSite = "";
};

resetaCor();

// funcao com parâmetro

function alteraCor(cor, tonalide) {
    corSite = cor + ' ' + tonalide;
}

alteraCor("cinza", "claro");

console.log(corSite);

// tipos de funçoes
// Realiza uma tarefa e nao retorna nada

function dizerNome() {
    console.log("Carlos");
}

//funcao que me retorna algo

function multiplicarPorDois(valor) {
    return valor * 2;
}

let resultado = multiplicarPorDois(5);

console.log(resultado);

// Operadores Aritméticos: + - * / **(exponencial)
// Operadores de incremento: ++ --

let salario = 4500;

salario += 100;

console.log(salario);

console.log(salario - 100);

// Atribuição: = += -= /= *=

salario *= 2;

//Operadores de igualdade: === ou ==
// == compara somentes os valores
// === compara os valores e tambem os tipos

let numero = 1;

console.log(numero == "1"); //True pq é o mesmo valor 1
console.log(numero === "1"); //False pq n sao 2 tipos number

// Operador ternário - sintaxe - condição ? se sim : senao
let pontos = 100;

let tipo = pontos > 100 ? 'premium' : 'comum';

//Operadores lógicos - (&&) E: retorna true se os dois operadores forem true
// (||) OU: retorna true se um dos operadores forem true
// (!) Não: inverte o valor

// Comparadores não booleanos

// valores falsy são os valores padrões ex:
// 0 - null - false - ' ' - NaN(not a number) - undefined
// valores truthy são todos os outros

let corPersonalizada = "Vermelho";
let corPadrao = 'Azul';

console.log(corPadrao || corPersonalizada); //Retorna o azul pq ele encontrou truthy na primeira

let a = 'vermelho';
let b = 'azul';

console.log(a);
console.log(b);

//Exercício: Invertendo valores de variáveis

let aux = a;
a = b;
b = aux;

console.log(a);
console.log(b);

//IF e ELSE
//obtendo data e hora local

let now = new Date();
let dataEHora = now.getHours() + ":" + now.getMinutes();

console.log(dataEHora);

if (dataEHora >= 6 && dataEHora <= 12) {
    console.log("Bom dia");
} else if (dataEHora > 12 && dataEHora <= 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

//switch case

let permissao;
console.log(typeof(permissao))

switch (permissao) {
    case 'comum':
        console.log("Usuario comum");
        break;
    case "gerente":
        console.log("Gerente");
        break;
    case "diretor":
        console.log("Diretor");
        break;
    default:
        console.log("Usuário não reconhecido");
}

// Loops
// For - While - do..while - for..In - for..of

//for

for(let i = 0; i < 5; i++){
    if(i % 2 != 0){
        console.log("ímpar = ", i);
    }
}

//While

let i = 0;

let i2 = 0;

while(i < 5){
    console.log(i);
    i++;
}

//do..While

do{
    console.log("Digitando", i2);
    i2++;
}while(i2 < 5);

//For..in

const pessoa = {
    nome: "Jonathan",
    idade: 25
};

//key-value

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

const cores =['vermelho', 'azul', 'verde', 'roxo'];

for(let indice in cores){
    console.log(indice, cores[1]);
}

//for..of

let carros = ["chevette", 'opala', 'range rover']

for(let carro of carros){
    console.log(carro);
}

//Exercício de funções - retornar o maior

function retornaMaiorNumero(n1, n2){
    return n1 > n2 ? n1 : n2;
}

console.log(retornaMaiorNumero(-3, 2));

//Exercício fizbuzz
//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 -> FizzBuss
//Não divisível por 3 e 5 = entrada
//Não é um número => Não é um número

function fizBuzz(entrada){
    let saida;
    
    if(typeof entrada != 'number'){
        saida = 'Não é um número';
    }else if(entrada % 3 === 0 && entrada % 5 === 0){
        saida = 'FizzBuzz';
    }else if(entrada % 3 === 0){
        saida = 'Fizz';
    }else if(entrada % 5 === 0){
        saida = 'Buzz';
    }else{
        saida = entrada;
    }

    return saida;
}

console.log(fizBuzz(15));

// Exercício radarDeVelocidade

function radarDeVelocidade(velocidade){
    const velocMaxima = 70;
    const kmPorPonto = 5;

    if(velocidade <= velocMaxima){
        console.log('ok');
    }else{
        const pontos = Math.floor((velocidade - velocMaxima) / kmPorPonto);

        if(pontos > 11){
            console.log("Carteira Suspensa");
        }else{
            console.log('pontos: ', pontos);
        }
    }

}

radarDeVelocidade(130);

//Par ou Ímpar

function parEImpar(number){
    for(let i = 0; i <= number; i++){
        if(i % 2 === 0){
            console.log(i, "Par");
        }else{
            console.log(i, "Ímpar")
        }
    }
}

parEImpar(5);

// Encontrar String em objetos

const filmes = {titulo: "Vingadores",
                ano: 2018,
                Cidade: "Sapucaia",
                diretor: 'Robin',
                personagem: 'Thor'};

function exibirPropriedades(obj){
    for(chave in obj){
        if(typeof(obj[chave]) == 'string'){
            console.log(obj[chave]);
        }
    }
    
}

exibirPropriedades(filmes)

//Somar numeros multiplos de 3 e 5 depois mostrar o resultado

function somarMultiplos(limite){
    let soma = 0;
    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0 || i % 5 === 0){
            soma += i;
        }
    }
    return soma;
}

console.log(somarMultiplos(10));

//Calcular media de notas dentro de um array

let notas = [70, 70, 80];

function calcularMedia(array){
    let soma = 0;

    for (let valor of array) {
        soma += valor;
    }

    return soma / array.length;
}


function notaAluno(notas){
    const media = calcularMedia(notas);
    
    if(media < 59){
        return 'F';
    }else if(media < 69){
        return 'D';
    }else if(media < 79){
        return 'C';
    }else if(media < 89){
        return 'B'
    }

    return'A';
}

console.log(notaAluno(notas));

//Exibir asteriscos

function geradorDeAsteriscos(quantidade){
    for(let i = 0; i < quantidade; i++){
        let padrao = '';
        for(let j = 0; j <= i; j++){
            padrao += '*';
        }
        console.log(padrao);
    }
}

geradorDeAsteriscos(5);

// Criar função para exibir numeros primos

function exibirPrimos(limite){
    for(let i = 2; i <= limite; i++){
        
        if(i % 2 == 0 || i % 3 == 0){
            if(i == 2 || i == 3){
                console.log(i)
            }
        }else{
            console.log(i);
        }
    }
}

exibirPrimos(15);

//Factory function (Funções de fábrica)

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}


const celular1 = criarCelular('Samsung', 6.9, 7500);

console.log(celular1);

// Construtor function

//Pascal case - A primeira letra sempre maiúscula
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular;
    this.tamanhoTela = tamanhoTela;
    this.capacidadeBateria = capacidadeBateria;
    this.ligar = function(){
        console.log("Fazendo ligação...");
    }
}

const celular = new Celular('Asus', 5.5, 5000);

console.log(celular);

// Exercicio de constructor function

function Carro(marcaCarro, modeloCarro, corCarro){
    this.marcaCarro = marcaCarro;
    this.modeloCarro = modeloCarro;
    this.corCarro = corCarro;
}

const carro1 = new Carro('Ford', 'Mustang', 'Vermelho');

console.log(carro1);

//Natureza dinamica de Objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.dpi = 5000;

mouse.trocandoVelocidade = function(){
    console.log('Mudando velocidade...');
}

console.log(mouse);

delete mouse.dpi;

console.log(mouse);

// Clonando objetos

const novoObjeto = Object.assign({}, celular);

console.log(novoObjeto);

const objeto2 = {...celular};

console.log(objeto2);

// Math function
console.log(Math.random());

console.log(Math.max(3, 10, 16, 32)); // Math.min tbm

//String
// tipo primitivo do string
const mensagem = 'minha primeira mensagem';

//tipo Objeto
const mensagem1 = 'minha segunda mensagem';

console.log(mensagem.length);
console.log(mensagem[2]);
console.log(mensagem.includes('primeira'));
console.log(mensagem.includes('vermelho'));
console.log(mensagem.startsWith('minha'));
console.log(mensagem.endsWith('verde'));
console.log(mensagem.indexOf('primeira'));
console.log(mensagem.replace('minha', 'sua'));
console.log(mensagem.trim());
console.log(mensagem.split(' '));

//Template literal ``

const nome2 = 'rafael';

const mensagens = `Ola ${nome2} ${2+2} isso é a minha 'primeira' mensagem usando o template literal
Achei uma forma muito mais fácil para lidar com Strings que precisam de uma formatação`;

console.log(mensagens);

//Date

const data1 = new Date();
const data2 = new Date(2020, 03, 22, 22,30);
const date3 = new Date('March 06 2019 15:22')
console.log(data1);
console.log(data2);
console.log(date3);

// Criar um objeto endereço que contém
//Rua - cidade - CEP - e uma função exibirEndereço(endereço)

let endereco = {
    rua: 'Casdsad',
    cidade: 'camboriu',
    cep: 'cadssd'
}
function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}
exibirEndereco(endereco);

function Endereco2(rua2, cidade2, cep2){
    this.rua2= rua2;
    this.cidade2 = cidade2;
    this.cep2 = cep2;
}

const end1 = new Endereco2('a', 'b', 'c');
const end2 = new Endereco2('a', 'b', 'c');

function saoEnderecosIguais(end1, end2){
    for(let end in end1){
        if(end1[end] == end2[end]){
            console.log(end1[end])
        }
    }
}

saoEnderecosIguais(end1, end2);

function temEnderecoDeMemoriaIguais(end1, end2){
    return end1 === end2;
}

console.log(temEnderecoDeMemoriaIguais(end1, end2));

// Objeto postagem de Blog (Exercício)
let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 100000,
    comentarios: [
        {autor: 'a', mensagem: 'b'},
        {autor: 'b', mensagem: 'c'}
    ],
    estaAoVivo: true
}

console.log(postagem);

//function Constructor

function PostagemO(title, message, author){
    this.title = title,
    this.message = message,
    this.author = author,
    this.comments = [],
    this.live = true
}

let post1 = new PostagemO('A', 'B', 'C');

console.log(post1);

//Exercício faixa de preço
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999999}
]

function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

// Introdução a arrays
// Add elementos
// Encontrar elementos
// Remover elementos
// Dividir elementos
// Combinar elementos

const numeros1 = [1, 2, 3, 4, 2, 0];
// Inserir no inicio
// Inserir no meio
// Inserir no fim

//adiciona no fim
numeros1.unshift(0);
console.log(numeros1)

//inserir no meio do array(sintaxe= splice(indice, quantas casas vao ser apagadas, valor pra adicionar))
numeros1.splice(2, 0, 'A');
console.log(numeros1);

numeros1.push(10);
console.log(numeros1);

// Encontrando um elemento no array do tipo primitivo
console.log(numeros1.indexOf(2));
console.log(numeros1.lastIndexOf(2))

console.log(numeros1.includes(2));

const marcas = [{id: 1, nome: 'A'},
                {id: 2, nome: 'B'}]

const marca = marcas.find(function(marca){
    return marca.nome == 'A'});

console.log(marca);

//Arrow functions
//COM APENAS 1 PARÂMETRO

console.log(marcas.find((marca) => marca.nome === 'a'));

//REMOVENDO ELEMENTOS DO ARRAY

let numeros2 = [1, 2, 3, 4, 2, 0, 10, 5];
//Final
const ultimo = numeros2.pop();
console.log(numeros2);

//Primeiro
numeros2.shift();
console.log(numeros2);

//Meio
numeros2.splice(2, 1);
console.log(numeros2);

//ESVAZIANDO UM ARRAY
// primeira maneira
numeros2 = [];

//Segunda maneira
numeros2.length = 0;
console.log(numeros2);

//Terceira solução
numeros2.splice(0, numeros2.length);


numeros2 = [1, 2, 3, 4, 2, 0, 10, 5];
let numeros3 = [11, 15, 19, 32, 27];

const combinado = numeros2.concat(numeros3);

console.log(combinado);

const cortado = combinado.slice(0, 6);
console.log(cortado);

//OPERADOR SPREAD
let primeiro =[1, 2, 3, 4, 5, 6];
let segundo = [7, 8, 9, 10]

const combinar = [...primeiro, ...segundo]

console.log(combinar);

// FOREACH
const n1 = [1, 2, 3, 5, 6, 0];
n1.forEach(element => {
    console.log(element)
});

//COMBINANDO ARRAYS

const comb = primeiro.join(".");
console.log(comb);

const frase = "Olá bem vindo ao curso";
const resul = frase.split(' ');
console.log(resul);

console.log(resul.join('-'));

let corFavorita = prompt("Olá, qual a sua cor preferida? ");

let idadeC = prompt("Qual a sua idade? ");

if(idadeC >= 18){
    alert('Maior de idade')
}else{
    alert('Menor de idade')
}