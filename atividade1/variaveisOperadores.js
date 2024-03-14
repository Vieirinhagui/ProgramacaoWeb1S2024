let num_A = 1;
let num_B = 2;
const operacoes = ["soma", "subtração", "divisão", "multiplicação"];


operacoes.map((operacao) => {
    if (operacao === "soma") {
        console.log(`Resultado da ${operacao} entre ${num_A} e ${num_B} é ${num_A + num_B}`)
    }
    if (operacao === "subtração") {
        console.log(`Resultado da ${operacao} entre ${num_A} e ${num_B} é ${num_A - num_B}`)
    }
    if (operacao === "divisão") {
        console.log(`Resultado da ${operacao} entre ${num_A} e ${num_B} é ${num_A / num_B}`)
    }
    if (operacao === "multiplicação") {
        console.log(`Resultado da ${operacao} entre ${num_A} e ${num_B} é ${num_A * num_B}`)
    }
})