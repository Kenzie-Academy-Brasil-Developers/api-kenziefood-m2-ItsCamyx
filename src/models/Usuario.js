import { Modal } from '../controllers/modalController.js'

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

  
  
  async function postarProdutosAPI(){
     const allPosts= await VitrineController.listarProdutos();
     
    listaAdmin.innerHTML=''
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
     adicionarEventosAosProdutos()
 }

 function adicionarEventosAosProdutos(){
  const botaoDeletar = document.querySelector('.dashboard-editar')
  botaoDeletar.addEventListener('click', Modal.mostrarModal)
  const botaoExcluir = document.querySelector('.dashboard-deletar')
  botaoExcluir.addEventListener('click', Modal.mostrarModal)
 }

 postarProdutosAPI()
//FILTRAR POR CATEGORIA//
const catPanificadora= document.querySelector(".navbar-lista__categoria--panificadora");
const catFrutas= document.querySelector(".navbar-lista__categoria--frutas");
const catBebidas= document.querySelector(".navbar-lista__categoria--bebidas");
const catTodos= document.querySelector(".navbar-lista__categoria--todos");
catBebidas.addEventListener("click",filterContentClicked);
catPanificadora.addEventListener("click",filterContentClicked);
catFrutas.addEventListener("click",filterContentClicked);
catTodos.addEventListener("click",postarProdutosAPI);

async function filterContentClicked(e){
  const  botaoClicado= e.target; 
  const  produtosVindosDaAPI= await  VitrineController.listarProdutos();

  
  
  const filtedCat= produtosVindosDaAPI.filter((produto)=>{
  return produto.categoria == botaoClicado.innerHTML;
  })

  listaAdmin.innerHTML=''
  percorrerArrayProd(filtedCat)
}

//BUSCAR CONTEÚDO PELO NOME
const buscaPorNome= document.querySelector('.dashboard-formulario--input')
buscaPorNome.addEventListener("keydown",buscarConteudo)

async function buscarConteudo(){
   
  const produtosVindosDaAPI= await  VitrineController.listarProdutos();
  
  const textToSearch= buscaPorNome.value;
  
  const filtedName= produtosVindosDaAPI.filter((letra)=>{
    return letra.nome.toLowerCase().includes(textToSearch.toLowerCase()) || letra.descricao.toLowerCase().includes(textToSearch.toLowerCase()) || letra.categoria.toLowerCase().includes(textToSearch.toLowerCase())
  })
  listaAdmin.innerHTML=''
  percorrerArrayProd(filtedName)
}
