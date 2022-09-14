// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function nome() {
//     console.log(`Olá, ${digiteNome}!`)
// }
// let digiteNome = prompt("digite seu nome")
// console.log (nome(digiteNome))


// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuada(num1) {
//     for (let i=1 ; i<11 ; i++){
//     console.log(`${i} x ${num1} = ${(num1*i)}`)
//     }
// }
// console.log (tabuada(6))


// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função,
//  ou __arrow functions__ 

let nome = () => {
    console.log(`Olá, ${digiteNome}!`)
    return
}
let digiteNome = prompt("digite seu nome")
console.log (nome(digiteNome))


let tabuada = (num1) => {
    for (let i=1 ; i<11 ; i++){
    console.log(`${i} x ${num1} = ${(num1*i)}`)
    }
return
}
console.log (tabuada(6))
