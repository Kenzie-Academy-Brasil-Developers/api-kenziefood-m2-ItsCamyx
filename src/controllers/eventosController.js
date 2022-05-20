import {VitrineController} from './produtoController.js'
import { Modal } from './modalController.js'




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

//----------------------------------DASHBOARD------------------------/ 

const botaoMostrarModalCadastro = document.querySelector('#dashboard-botao-adicionar-produto')

botaoMostrarModalCadastro.addEventListener('click', Modal.mostrarModal)

const botaoFecharModalCadastro = document.querySelector('.modalCadastrarProdutos--fechar')

botaoFecharModalCadastro.addEventListener('click', Modal.fecharModal)

const botaoFecharModalEditar = document.querySelector('.dashboard--modalEditarProdutos--fechar')

botaoFecharModalEditar.addEventListener('click', Modal.fecharModal)

const botaoFecharModalExcluir = document.querySelector('.modalExcluir--fechar')

botaoFecharModalExcluir.addEventListener('click', Modal.fecharModal)

const modalCadastrarNovoProduto = document.querySelector('#modalCadastrarProdutos--infos')
modalCadastrarNovoProduto.addEventListener('submit', Modal.capturarDadosNovoProduto)

const botaoJaCadastrado = document.querySelector('.modalCadastrarProdutos--botao')
botaoJaCadastrado.addEventListener('click', Modal.fecharModal)







