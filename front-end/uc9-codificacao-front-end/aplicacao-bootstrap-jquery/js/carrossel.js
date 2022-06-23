let listaServices = document.querySelectorAll('.card-service')
let botaoServiceEsquerdo = document.querySelector('.botao-service-esquerdo')
let botaoServiceDireito = document.querySelector('.botao-service-direito')
let slideAtual = 0

botaoServiceDireito.addEventListener('click', proximoSlide)
botaoServiceEsquerdo.addEventListener('click', slideAnterior)

function verificaSlideAtual(){
    for(let i = 0; i < listaServices.length; i++){
        if(listaServices[i].classList.contains('ativo')) {
            slideAtual = i
        }
    }
}

function proximoSlide(){
    verificaSlideAtual()
    removeClass(listaServices[slideAtual], 'ativo')
    slideAtual++
    if(slideAtual == listaServices.length){
        slideAtual = 0
    }
    adicionaClass(listaServices[slideAtual], 'ativo')
}

function slideAnterior(){
    removeClass(listaServices[slideAtual], 'ativo')
    slideAtual--
    if(slideAtual == -1){
        slideAtual = listaServices.length-1
    }
    adicionaClass(listaServices[slideAtual], 'ativo')
}

function removeClass(tag, classe){
    tag.classList.remove(classe)
}

function adicionaClass(tag, classe){
    tag.classList.add(classe)
}

// let listaUl = document.querySelector('.menu-departamentos')
// listaUl.addEventListener('click', function(event){
//     console.log(event.target)
// });