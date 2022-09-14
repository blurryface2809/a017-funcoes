// # Exercício 3

// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor 
// uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com 
// esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console 
// o resultado das operações

function somar (num1,num2) {
    return num1+num2
}

function diminuir (num1,num2) {
    return num1-num2
}

function multiplicar (num1,num2) {
    return num1*num2
}

function dividir (num1,num2) {
    return num1/num2
}

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite um número"))

console.log(`${numero1} + ${numero2} = ${somar(numero1,numero2)}`)
console.log(`${numero1} - ${numero2} = ${diminuir(numero1,numero2)}`)
console.log(`${numero1} x ${numero2} = ${multiplicar(numero1,numero2)}`)
console.log(`${numero1} / ${numero2} = ${dividir(numero1,numero2)}`)