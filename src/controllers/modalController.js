import {Produto} from '../models/Produtos.js'
import {VitrineController} from '../controllers/produtoController.js'

const inputs = document.querySelectorAll('.inputCad')
const botaoCadastro = document.querySelector('.modalCadastrarProdutos--botao')

class Modal{
    static mostrarModal(evento){
        console.log(evento.target)
        console.log(evento.target.id)
        const modalSelecionadoId = evento.target.id 
        const modalSelecionadoClass = evento.target.classList.value
        if(modalSelecionadoId === "dashboard-botao-adicionar-produto"){
            const modal = document.querySelector('#dashboard--modalCadastrarProdutos')
            modal.classList.remove('hidden')
        }

        if(modalSelecionadoClass === 'dashboard-editar'){
            const modal = document.querySelector('#dashboard--modalEditarProdutos')
            modal.classList.remove('hidden')
        }
        if(modalSelecionadoClass === 'dashboard-deletar'){
            const modal = document.querySelector('#containerModalExcluir')
            modal.classList.remove('hidden')
        }
        
    }

    static fecharModal(evento){
        console.log(evento.target)
        console.log(evento.target.classList.value)
        const botaoSelecionado = evento.target.classList.value 
        const botaoSelecionadoName = evento.target.name
        console.log(botaoSelecionadoName)
        
        if(botaoSelecionado === "modalCadastrarProdutos--fechar"){
            const modal = document.querySelector('#dashboard--modalCadastrarProdutos')
            modal.classList.add('hidden')
        }

        if(botaoSelecionadoName === 'botaoFecharModalEditar'){
            const modal = document.querySelector('#dashboard--modalEditarProdutos')
            modal.classList.add('hidden')
        }
        if(botaoSelecionadoName === 'botaoFecharModalExcluir'){
            const modal = document.querySelector('#containerModalExcluir')
            modal.classList.add('hidden')
        }

    }

    static async capturarDadosNovoProduto(evento){
        evento.preventDefault()
        const formulario = document.querySelector('#modalCadastrarProdutos--infos')
        const objetoCadastro = {}
        for (let i = 0; i < formulario.length; i++) {
            if(formulario[i].name != ''){
            objetoCadastro[formulario[i].name] = formulario[i].value
            }
        }
        VitrineController.adicionarProduto(objetoCadastro)
        console.log(objetoCadastro)
        }
}

export {Modal}




// const dados = [...evento.target]
       
//         const obj = {}
    
//    const objEditar = dados.forEach((info)=>{
//       if(info.name != ""){

//         obj[info.name] = info.value
//       }
//     })

//     console.log(dados)
//     console.log(objEditar)