//ADICIONAR NO CARRINHO
import { VitrineController } from "../controllers/produtoController.js"

const listaProdutos = document.getElementById("lista-produtos");
listaProdutos.addEventListener("click", (e) => {
    const item = e.target;

    if(item.tagName === "BUTTON"){
    pegarProdutos(item.id)
    }else if(item.className === 'img-adicionar-carrinho'){
        pegarProdutos(item.id)
    }
})

async function pegarProdutos(idProduto){
    const listaProdutos = await VitrineController.listarProdutos()
    listaProdutos.forEach((produtoSelecionado) => {
        if(produtoSelecionado.id === idProduto){
            adicionarProdutoCarrinho(produtoSelecionado)
        }
    })
}

const produtosCart = document.querySelector('.carrinho__lista')
function adicionarProdutoCarrinho(produto){

    const itensCarrinho = document.createElement("li");
    itensCarrinho.classList.toggle("carrinho__lista--itens");
    itensCarrinho.id = produto.id

    itensCarrinho.innerHTML=  `
        <img class="carrinho__lista-img" src="${produto.imagem}" alt="Panquecas"/>
        <div class="div-carrinho">
            <span class="carrinho__lista-nome-produto">${produto.nome}</span>
            <span class="carrinho__lista-categoria-produto">${produto.categoria}</span>
            <span class="carrinho__lista-preco">R&#36; ${produto.preco.toFixed(2)}</span>
        </div>
            <button id="botao-remover-produto">
                <img class="img-lixeira" src="../img/lixeira.png" />
            </button>`

    produtosCart.appendChild(itensCarrinho)
}

const carrinhoProdutos = document.querySelector(".carrinho__lista");
carrinhoProdutos.addEventListener("click", (e) => {
    const item = e.target;
    if(item.tagName === "BUTTON"){
        removerProdutoCarrinho(item.parentNode)
    } else if (item.className === 'img-lixeira') {
        removerProdutoCarrinho(item.parentNode.parentNode)
    }
})

function removerProdutoCarrinho(produto){
    if(produto.id){
        produto.remove()
    }
}