let nome
let sobre
let idade
nome = prompt("Digite seu primeiro nome: ")
sobre = prompt("Digite seu segundo nome: ")
idade = prompt("Digite sua idade: ")
if (idade >= 18){
    alert(`${nome} ${sobre} você tem ${idade} de idade, e é maior de idade.`)
}
else if (idade > 0 && idade < 18){
    alert(`${nome} ${sobre} você tem ${idade} de idade, e é menor de idade.`)
}
else{
    alert("Insira uma idade válida.")
}

