function alo(nome){

    alert("Alô " + nome)
}

function saudacao(){
    const nome = document.getElementById("Nome").value
    alert(nome + " Seja Bem-Vindo ao site!")
}

function mouseCima(){
    alert('Mouse em cima')
}

function mouseFora(){
    alert('Mouse fora')
}

function verificaTexto(){
    alert('Texto alterado!')
}

function recebeFoco(){
    console.log('Em foco.')
}
function perdeFoco(){
    console.log('Perdeu foco.')
}

function verificaTeclado(event){
    event = event||window.event;
if (event.keycode === 13){
    alert("Tecla enter pressionada!")
}
}