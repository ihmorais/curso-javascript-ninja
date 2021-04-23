/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var numbers = [1,2.98,true,null,'igor'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function showArray(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// 
console.log(showArray(numbers)[1]); 

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
//
function indiceArray(arr, indice ) {
    return arr[indice];
}  


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
//
 var myArray = [1,null,[1,2,3],{nome: 'igor',idade:'24'},true,];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// 
console.log(indiceArray(myArray,0)); // 1
console.log(indiceArray(myArray,1)); // null
console.log(indiceArray(myArray,2)); // [1,2,3]
console.log(indiceArray(myArray,3)); // {nome: 'igor',idade:'24'}
console.log(indiceArray(myArray,4)); // true

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
// 
var book = function(bookName) {
    var bookCollection = {
        'American kingpin': {
            quantidadePaginas: 352, 
            autor: 'Nick Bilton', 
            editora: 'Virgin Books'
        },
        'Torto arado': {
            quantidadePaginas: 264,
            autor: 'Itamar Vieira Junior',
            editora: 'Todavia'
        },
        'A vida não me assusta': {
            quantidadePaginas: 48,
            autor: 'Maya Angelou',
            editora: 'Darkside'
        }
    };    
    return !bookName ? bookCollection : bookCollection[bookName];
}; 


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( 'O livro Torto Arado tem ' + book('Torto arado').quantidadePaginas + ' páginas!')

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Torto Arado é ' + book('Torto arado').autor + '.')

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Torto Arado foi publicado pela editora ' + book('Torto arado').editora + '.')
// evitar duplicacoes desnecessarias, poderia ter colocado o nome do livro em uma variavel  