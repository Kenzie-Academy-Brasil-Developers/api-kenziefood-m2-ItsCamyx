//ADICIONAR NO CARRINHO
import { VitrineController } from "../controllers/produtoController.js"

let qtdProduto = 0
let somaPrecos = 0

const carrinho = document.querySelector(".carrinho")
const carrinhoTotal = document.querySelector(".carrinho-total")
carrinho.appendChild(carrinhoTotal)

const carrinhoTotalQuantidade = document.querySelector(".carrinho-total-quantidade")
const carrinhoTotalPreco = document.querySelector(".carrinho-total-preco")
carrinhoTotal.append(carrinhoTotalQuantidade, carrinhoTotalPreco)

const quantidadeValor = document.createElement("span")
quantidadeValor.innerHTML = qtdProduto
carrinhoTotalQuantidade.append(quantidadeValor)

const precoValor = document.createElement("span")
precoValor.innerHTML = somaPrecos.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
carrinhoTotalPreco.append(precoValor)


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
           let prod=[]
           prod.push(produtoSelecionado)
           localStorage.setItem("Produtos", JSON.stringify(prod));
let pegarproduto = JSON.parse(localStorage.getItem("Produtos"));
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
            <span class="carrinho__lista-preco">R$ ${produto.preco.toFixed(2)}</span>
        </div>
            <button id=${produto.id} class="botao-remover-produto">
                <img id=${produto.id} class="img-lixeira" src="../img/lixeira.png" />
            </button>
        `
    produtosCart.appendChild(itensCarrinho)
    

    somarPrecos(produto.preco)
    qtdProduto++
    atualizarQuantidade()
}

const carrinhoProdutos = document.querySelector(".carrinho__lista");
carrinhoProdutos.addEventListener("click", async (e) => {
    const item = e.target;
    if(item.tagName === "BUTTON"){
        removerProdutoCarrinho(item.parentNode)
    } else if (item.className === 'img-lixeira') {
        removerProdutoCarrinho(item.parentNode.parentNode)
    }
})

async function removerProdutoCarrinho(produto){
    if(produto.id){
        produto.remove()
    }

    const spans = produto.childNodes[3].outerText
    let preco = spans.split('').filter(function(ele){
        return !isNaN(ele) || ele==='.'
    }).join('');
    
    let precoNum = Number(preco)
    somaPrecos-=precoNum
    precoValor.innerHTML = somaPrecos.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
    qtdProduto--
    atualizarQuantidade()
}

function somarPrecos(precoProduto) {
    precoValor.innerHTML = ''
    somaPrecos+=precoProduto
    atualizarPreco(somaPrecos)
}

function atualizarPreco(total) {
    precoValor.innerHTML = total.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });
}

function atualizarQuantidade(){
    quantidadeValor.innerHTML = qtdProduto
}