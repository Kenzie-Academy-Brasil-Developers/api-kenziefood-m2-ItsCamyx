class VitrineController {
    static BASEURL = 'https://api-kenzie-food.herokuapp.com';

    static async listarProdutos() {
    const response = await fetch(`${this.BASEURL}/products`);
    const data = await response.json();
    
    return data;
  }

  static async listarMeusProdutos() {
    const response = await fetch(`${this.BASEURL}/my/products`, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
    const data = await response.json();
    return data
  }

    static filtrarProdutos(evento){
        evento.preventDefault()
        const vitrine = document.querySelector("#div-produtos-carrinho")
        const categoria = evento.target.attributes[1].nodeValue
        console.log(categoria)
        if (categoria === "Panificadora" || "Fruta" || "botaoBebida") {
            const produtosFiltrados = Busca.filtroCategoria(produtosApi, evento.textContent)
            vitrine.innerHTML = ''
            //function de listar produtos aqui
        }

        if (evento.id === "Todos") {

            vitrine.innerHTML = ``
            //function de listar produtos aqui
            
        }
    }


  static async adicionarProduto(dataProduto) {
    const response = await fetch(`${this.BASEURL}/my/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify(dataProduto),
    });
    const data = await response.json();

    return data;
  }

  static async editarProduto(data, id) {
    const response = await fetch(`${this.BASEURL}/my/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    return responseData;
  }

  static async deletarProduto(id) {
    const response = await fetch(`${this.BASEURL}/my/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });

    return response;
  }
}

export { VitrineController }




// const objDeEdicao = {
//   nome: "Mousse de chocolate branco",
// };

// const objDeCriacao = {
//   nome: "Chocolate Especial",
//   preco: 5,
//   categoria: "Doce",
//   imagem:
//     "https://s2.glbimg.com/2VfrzL0whSt0DzS2nJvZpi60V3w=/0x0:1239x846/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/l/n/kGHCQpTwuYTkdqsdau0A/chocolate.jpg",
//   descricao: "Este é um chocolate saboroso que não engorda",
// };

// const segundoObj = {
//   nome: "Chocolate Comum",
//   preco: 2,
//   categoria: "Doce",
//   imagem:
//     "https://s2.glbimg.com/2VfrzL0whSt0DzS2nJvZpi60V3w=/0x0:1239x846/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/l/n/kGHCQpTwuYTkdqsdau0A/chocolate.jpg",
//   descricao: "Este é um chocolate saboroso, porém engorda bastante",
// };

// const terceiroObj = {
//   nome: "Chocolate Premium",
//   preco: 10,
//   categoria: "Doce",
//   imagem:
//     "https://s2.glbimg.com/2VfrzL0whSt0DzS2nJvZpi60V3w=/0x0:1239x846/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/l/n/kGHCQpTwuYTkdqsdau0A/chocolate.jpg",
//   descricao:
//     "Este é um chocolate saboroso que quanto mais você come mais emagrece!",
// };



// VitrineController.adicionarProduto(objDeCriacao)
// VitrineController.adicionarProduto(segundoObj)

// VitrineController.listarProdutos()
// VitrineController.listarMeusProdutos()
// // VitrineController.adicionarProduto(terceiroObj)
// VitrineController.editarProduto(objDeEdicao,2340)
// VitrineController.deletarProduto(2347)

