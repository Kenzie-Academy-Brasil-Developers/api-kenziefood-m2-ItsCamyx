class Usuario {
  constructor(name, email, password) {
    this.name = this.verificaUser(name);
    this.email = this.verificaEmail(email);
    this.password = password;
  }

  verificaUser(user) {
    if (user !== "" && user !== undefined && user.length >= 1) {
      return user;
    }
  }
  verificaEmail(email) {
    if (email !== "" && email !== undefined && email.includes("@")) {
      return email;
    } else {
      alert("Email inválido");
    }
  }
}
export { Usuario };



import { VitrineController } from "../controllers/produtoController.js";

const listaAdmin = document.querySelector("#dashboard-lista")
console.log(listaAdmin)
  
  
  async function postarProdutosAPI(){
     const allPosts= await VitrineController.listarProdutos();
     console.log(allPosts)
    //  const resultado = percorrerArrayProd(allPosts)
     percorrerArrayProd(allPosts)
 }

 
 

 
 async function percorrerArrayProd(prodAPI){
    await prodAPI.forEach(cadaProd=> produtoNaTela(cadaProd));  
 }
 


 function produtoNaTela(cadaProd){
   
   const li= document.createElement("li");
   li.classList.add("dashboard-lista__itens");

     li.innerHTML=  `
                    <div class="div-imagem-nome">
                        <img class="dashboard-imagem-produto" src="${cadaProd.imagem}" alt="${cadaProd.nome}">
                        <h2 class="dashboard-nome-produto">${cadaProd.nome}</h2>
                    </div>
                    <div class="div-dashboard-categorias">
                        <span class="dashboard-categoria-produto">${cadaProd.categoria}</span>
                    </div>
                    <p class="dashboard-descricao-produto">${cadaProd.descricao}</p>   
                    <div class="div-botoes-editar-deletar">
                        <button id="${cadaProd.id}"class="dashboard-editar"><img src="../img/botao-editar.png"/></button>
                        <button id="${cadaProd.id}" class="dashboard-deletar"><img src="../img/lixeira.png"/></button>
                    </div>`;
   
     listaAdmin.appendChild(li);
 }

 postarProdutosAPI()

