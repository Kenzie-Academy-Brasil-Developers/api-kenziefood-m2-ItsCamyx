import {VitrineController} from './produtoController.js'






 const arrayBotoesCategoria = []

 function convertendoNodeListDeBotoes(){
    const botaoCategoria = document.querySelectorAll('.navbar-lista__categoria')

    for(let i = 0; i < botaoCategoria.length; i++){
        const botao = botaoCategoria[i]
        arrayBotoesCategoria.push(botao)
    }
 }

convertendoNodeListDeBotoes()


function adicionarEventosAosBotoes(){

    for(let i = 0; i < arrayBotoesCategoria.length; i++){
        const botao = arrayBotoesCategoria[i]
        // console.log(botao)
        botao.addEventListener('click', VitrineController.filtrarProdutos)
    }
}

adicionarEventosAosBotoes()


//  botaoCategoria.addEventListener('click', VitrineController.filtrarProdutos)