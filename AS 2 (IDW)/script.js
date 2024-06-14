function adicionar(){
    const work = document.getElementById('time').value
    const list = document.createElement('li')
    list.innerText = work
    const listagem = document.getElementById('tabelaTimes')
    listagem.appendChild(list)
    const button = document.createElement('button')
    const button2 = document.createElement('button')
    button2.innerText = 'Concluir'
    list.appendChild(button2)
    button2.addEventListener('click', function(){
        const itemtarefa = document.getElementById('time').value
        const itenslista = document.createElement('li')
        itenslista.innerText = itemtarefa
        const listagens = document.getElementById('conclusao')
        listagens.appendChild(list)
        list.removeChild(button2)
        var dataAtual = new Date()
        horario = document.createElement('p')
        horario.innerText = dataAtual.toLocaleString()
        list.appendChild(horario)
    })
    const buttonexcluir = document.createElement('button')
    buttonexcluir.innerHTML = 'Excluir'
    buttonexcluir.addEventListener('click', function(){
        listagem.appendChild(list)
        list.removeChild(buttonexcluir)
        listagem.removeChild(list)
    })
    list.appendChild(buttonexcluir)
}


// var dataAtual = new Date(2023, 0, 0)
// horario = dataAtual.toLocaleString()

