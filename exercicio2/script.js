// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a 
// soma das duas entradas e imprima o resultado. Invoque a função e imprima no console 
// o resultado.

const letraA = (num1,num2) => {
    let soma = num1+num2
    return soma
}
console.log(letraA(1,2))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro 
// número é **maior ou igual** ao segundo.

const letraB = (num1,num2) => {
    let bool =  (num1 >= num2)
    return bool
}
console.log(letraB(1,2))


// c) Uma função que receba um número e imprima se ele é par ou não

const letraC = (num1) => {
    if (num1%2===0){
        return 
    }
}
console.log (letraC(4))


// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho 
// dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function tamanhoString(string) {
    console.log("o tamanho da string é: ", string.length)
    console.log("a string maiúscula é: ", string.toUpperCase())
    
}
tamanhoString(prompt("digite uma frase"))
    
