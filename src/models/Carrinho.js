//ADICIONAR NO CARRINHO
import { VitrineController } from "../controllers/produtoController.js"

const listaProdutos = document.getElementById("lista-produtos");
listaProdutos.addEventListener("click", (e) => {
    const item = e.target;
    if(item.tagName === "BUTTON" || item.className === 'img-adicionar-carrinho'){
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

    itensCarrinho.innerHTML=  `
        <img class="carrinho__lista-img" src="${produto.imagem}" alt="Panquecas"/>
        <div class="div-carrinho">
            <span class="carrinho__lista-nome-produto">${produto.nome}</span>
            <span class="carrinho__lista-categoria-produto">${produto.categoria}</span>
            <span class="carrinho__lista-preco">R&#36; ${produto.preco.toFixed(2)}</span>
        </div>
            <button id="botao-remover-produto"><img src="../img/lixeira.png" /></button>`

    produtosCart.appendChild(itensCarrinho)
}

const carrinhoProdutos = document.querySelector(".carrinho__lista");
carrinhoProdutos.addEventListener("click", (e) => {
    const item = e.target;
    if(item.tagName === "BUTTON"){
        removerProdutoCarrinho()
    }
})

function removerProdutoCarrinho(){
    console.log('teste carrinho')
}
