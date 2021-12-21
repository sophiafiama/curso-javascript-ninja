// # Desafio Semana #1


// Declarar uma variável chamada `myvar`, sem valor.
 var myVar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myVar =10;
console.log(myVar)

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;
console.log(soma)
// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.

++soma;
console.log(soma)

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma = 3*soma;
soma *= 3;
console.log(soma)
// Qual é o valor da variável `soma` até aqui?
// soma = 75

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souNinja;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ["arroz", "feijão", "ovo"]; 

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1])

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log(soma === myVar)

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log(myVar<=soma)

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
// Invoque a função criada acima, passando os parâmetros 10 e 2.

function divisao (a,b){
    return a/b;
}

function multiplicacao(a, b) {
    return a * b;
}

console.log(divisao(10,2));
console.log(multiplicacao(10,2));


