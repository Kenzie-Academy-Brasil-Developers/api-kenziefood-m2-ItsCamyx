// async function receberDadosUsuarioAPI(){
//     const dados= await VitrineController.listarProdutos()
// //    atualizarProdutos(dados)
//     console.log(dados)
//   }
 
//   function atualizarProdutos(dados){
//    const containerAvatar= document.getElementById("container_avatar")
   
//     containerAvatar.innerHTML= `
//    <img
//    id="container_avatar-img"
//    src="${dados.avatarUrl}"
//    alt="foto-user"
//  />
//  <p id="container_avatar-userName">${dados.username}</p>
//    `
//     header.append(containerAvatar)
//   }
  
  
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