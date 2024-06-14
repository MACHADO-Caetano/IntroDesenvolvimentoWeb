const num1 = document.getElementById('number1')
const num2 = document.getElementById('number2')
const resultado = document.getElementById('resultado')

function limpar() {
    num1.value = ""
    num2.value = ""
    num1.focus()
    resultado.innerText = "Resultado: "
}

function somar() {
    let soma = Number(num1.value) + Number(num2.value)
    resultado.innerText = 'Resultado: ' + soma
}

function diminuir() {
    let dimi = Number(num1.value) - Number(num2.value)
    resultado.innerText = 'Resultado: ' + dimi
}

function multi() {
    let mul = Number(num1.value) * Number(num2.value)
    resultado.innerText = 'Resultado: ' + mul
}

function divi() {
    let divi = Number(num1.value) / Number(num2.value)
    if (num2.value == 0) {
        alert("Valor inválido, insira outro.")
        num2.value = ""
        num1.focus()
        resultado.value = ''
    }
    else{
        resultado.innerText = 'Resultado: ' + divi
    }
    
}

function verificaAP1() {
    const numero1 = document.getElementById('numum')
    if (numero1.value < 0 || numero1.value > 1.5){
        alert('Nota de Ap1 inválida.')
    numero1.value = ''
    numero1.focus()}
}

function verificaAP2() {
    const numero2 = document.getElementById('numdois')
    if (numero2.value < 0 || numero2.value > 2.5){
        alert('Nota de Ap2 inválida.')
    numero2.value = ''
    numero2.focus()}
}

function verificaAS() {
    const numero3 = document.getElementById('numtres')
    if (numero3.value < 0 || numero3.value > 6){
        alert('Nota de AS inválida.')
    numero3.value = ''
    numero3.focus()}
}

const media1 = document.getElementById('numum')
const media2 = document.getElementById('numdois')
const media3 = document.getElementById('numtres')
const resultado2 = document.getElementById('resultado2')
function calcResult(){
    let mediatotal=Number(media1.value) + Number(media2.value) + Number(media3.value)
    resultado2.innerText = 'Resultado: Nota ' + mediatotal
    if (mediatotal >= 6){
        let aprovado='Aprovado'
        const aprova = document.getElementById('aprova')
        aprova.innerText = 'Status: ' + aprovado
    }else{
        let reprovado='Reprovado'
        const aprova = document.getElementById('aprova')
        aprova.innerText = 'Status: ' + reprovado
    }
}

function limpaNota(){
    media1.value = ""
    media2.value = ""
    media3.value = ""
    media1.focus()
    resultado2.innerText = "Resultado: "
    aprova.innerText = 'Status: '
}

// function alteraResultado(){
//     const resultado = document.getElementById('resultado')
//     resultado.innerText = 'Resultado: '
// }

