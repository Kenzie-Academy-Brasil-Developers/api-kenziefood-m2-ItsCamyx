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

    static capturarDadosNovoProduto(){
        // evento.preventDefault()
       

    let valores = [];
    console.log(valores)
    inputs.forEach((input) => {
      if (input.value !== "") {
        valores.push(input.value);
      }
    });
    const obj = {
        nome: valores[0],
        descricao: valores[1],
        categoria: valores[2],
        preco: valores[3],
        imagem: valores[4]
      };

      console.log(obj)

      const novoProduto = new Produto(obj.nome, obj.descricao, obj.categoria, obj.preco, obj.imagem);
     VitrineController.adicionarProduto(novoProduto)

     console.log(novoProduto)

     botaoCadastro.addEventListener('click',(evento)=>{
         evento.preventDefault();
         console.log(evento);
         Modal.capturarDadosNovoProduto();
        //  alert("Produto cadastrado com sucesso!");
        //   window.location = "/src/pages/Dashboard.html";

     })
        
        
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