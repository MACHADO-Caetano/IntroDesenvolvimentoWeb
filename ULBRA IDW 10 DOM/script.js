const foto = document.querySelector('img')
foto.style.margin = 'auto'
function trocarFoto(){
    foto.setAttribute('src', 'pikrepoT.jpg')
}
function voltaFoto(){
    foto.setAttribute('src', 'pikrepoS.jpg')
}

const a = document.querySelector('a')
a.href = 'https://images.app.goo.gl/p9j3o57RVSq7eGo96'
a.target = '_blank'

// elementos por ID
const titulo = document.getElementById('titulo')
titulo.innerHTML = 'Novo <br> título'
titulo.style.color = 'green'
titulo.style.textAlign = 'center'
titulo.style.fontSize = '125px'

// elementos pela Tag
const paragrafos = document.getElementsByTagName('p')
// paragrafos[0].style.color = 'green'
// paragrafos[1].style.color = 'red'
// paragrafos[2].style.color = 'yellow'

// como estilizar mais de uma tag simultâneo
for (let i= 0; i < paragrafos.length; i++){
    paragrafos[i].style.color = 'red'
    paragrafos[i].fontSize = '20px'
}
//  elementos por Classe
const quadrados = document.getElementsByClassName('quadrado')

quadrados[0].style.width = '200px'
quadrados[0].style.height = '200px'
quadrados[1].style.backgroundColor = 'pink'

// elementos por Seletor
const titulo2 = document.querySelector('h1')
titulo2.innerText = 'Título pelo Seletor'

const quadrado1 = document.querySelector('.quadrado')
quadrado1.style.backgroundColor = 'purple'

const todosQuadrados = document.querySelectorAll('.quadrado')
todosQuadrados[2].style.backgroundColor = 'violet'

// criar elementos
const meuElemento = document.createElement('h2')
meuElemento.innerText = 'Meu elemento!'

// adicionar elementos no html
const elementoPai = document.getElementById('pai')
elementoPai.appendChild(meuElemento)

// adicionar classes no html
meuElemento.classList.add('titulo')

function darkhorse(){
    const body = document.querySelector('body')
    body.classList.add('darkhorsetheme')
}

function lightYagami(){
    const body = document.querySelector('body')
    body.classList.remove('darkhorsetheme')
}

