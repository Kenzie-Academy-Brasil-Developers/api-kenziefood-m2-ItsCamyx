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
                        <button id="botao-adicionar-carrinho" type="button"><img src="../img/botao-carrinho.png"></img></button>
                    </div>  `;
   
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