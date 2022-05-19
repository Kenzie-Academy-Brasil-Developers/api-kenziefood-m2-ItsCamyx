import { VitrineController } from "../controllers/produtoController.js";

  
  
  async function receberProdutosAPI(){
     const allPosts= await VitrineController.listarProdutos();
     percorrerArrayProd(allPosts);
     
 }
 
 const containerProdutos= document.getElementById("lista-produtos");
 
 async function percorrerArrayProd(prodAPI){
    await prodAPI.forEach(cadaProd=> produtoNaTela(cadaProd));  
 }
 

 function produtoNaTela(cadaProd){
   
   const li= document.createElement("li");
   li.classList.add("lista-produtos--itens");

     li.innerHTML=  `
                    <img class="imagem-produto" src="${cadaProd.imagem}" alt="Panquecas">
                    <h2 class="nome-produto" id=${cadaProd.id}>${cadaProd.nome}</h2>
                    <p class="descricao-produto">${cadaProd.descricao}</p>
                    <div class="div-categorias">
                        <span class="categoria-produto">${cadaProd.categoria}</span>
                    </div>
                    <div class="div-preco-botao">
                        <span class="preco-produto">R&#36;${cadaProd.preco.toFixed(2)}</span>
                        <button id="${cadaProd.id}" name="botao-carrinho" class="botao-adicionar-carrinho" type="button">
                          <img id="${cadaProd.id}" class="img-adicionar-carrinho" src="../img/botao-carrinho.png"></img>
                        </button>
                    </div>  `;
                    //BC: Linha 32 -> adicionei o id="${cadaProd.id}" 
                    //BC: Obs -> mudei o segundo id para classe
                    //BC: acidioneu uma classe a imagem

     containerProdutos.appendChild(li);
 }

receberProdutosAPI();


//BUSCAR CONTEÚDO PELO NOME
const buscaPorNome= document.querySelector('.vitrine-formulario--input')
buscaPorNome.addEventListener("keydown",buscarConteudo)

async function buscarConteudo(){
   
  const produtosVindosDaAPI= await  VitrineController.listarProdutos();
  
  const textToSearch= buscaPorNome.value;
  
  const filtedName= produtosVindosDaAPI.filter((letra)=>{
    return letra.nome.toLowerCase().includes(textToSearch.toLowerCase()) || letra.descricao.toLowerCase().includes(textToSearch.toLowerCase()) || letra.categoria.toLowerCase().includes(textToSearch.toLowerCase())
  })
  containerProdutos.innerHTML=''
  percorrerArrayProd(filtedName)
}

//FILTRAR POR CATEGORIA//
const catPanificadora= document.querySelector(".navbar-lista__categoria--panificadora");
const catFrutas= document.querySelector(".navbar-lista__categoria--frutas");
const catBebidas= document.querySelector(".navbar-lista__categoria--bebidas");
const catTodos= document.querySelector(".navbar-lista__categoria--todos");
catBebidas.addEventListener("click",filterContentClicked);
catPanificadora.addEventListener("click",filterContentClicked);
catFrutas.addEventListener("click",filterContentClicked);
catTodos.addEventListener("click",receberProdutosAPI);

async function filterContentClicked(e){
  const  botaoClicado= e.target; 
  const  produtosVindosDaAPI= await  VitrineController.listarProdutos();

  
  
  const filtedCat= produtosVindosDaAPI.filter((produto)=>{
  return produto.categoria == botaoClicado.innerHTML;
  })

  containerProdutos.innerHTML=''
  percorrerArrayProd(filtedCat)
}