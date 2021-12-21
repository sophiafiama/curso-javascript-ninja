/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arrayItens = ["Sophia", "Pamela", "Gabi", "Bibi", "Tais", "Rafael"]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

function listarArray(array) {
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(listarArray(arrayItens)[1])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

function listarIndice(array, num) {
    return array[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

let arrayList = ["Gabi", 28, "Jornalismo", "Marketing", "Musa Fit"];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?, 
console.log(listarIndice(arrayList, 0))
console.log(listarIndice(arrayList, 1))
console.log(listarIndice(arrayList, 2))
console.log(listarIndice(arrayList, 3))
console.log(listarIndice(arrayList, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(bookName) {
    var allBooks = {
        'livro2': {
            quantidadePaginas:150,
            autor: 'Sophia Fiama',
            editora: 'Editora Sophia'
        },
        'livro3': {
            quantidadePaginas:220,
            autor: 'Pamela Godoy',
            editora: 'Editora Pamela'
        },
        'livro1': {
            quantidadePaginas: 354,
            autor: 'Dulce Martins',
            editora: 'Editora Martins'
        },
    }
return !bookName ? allBooks : allBooks[bookName]
}


console.log(book('livro1'));
console.log(book('livro2'));
console.log(book('livro3'));

var nomeLivro = 'livro1'
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
*/
console.log(`O ${nomeLivro} tem ${book(nomeLivro).quantidadePaginas} páginas`)


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
*/
console.log(`O autor do ${nomeLivro} é ${book(nomeLivro).autor} !`)



/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
*/

console.log(`O  ${nomeLivro} foi publicado pela editora ${book(nomeLivro).editora}.`)

