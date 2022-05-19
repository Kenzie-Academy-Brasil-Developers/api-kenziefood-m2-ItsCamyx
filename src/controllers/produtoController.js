class VitrineController {
  static BASEURL = "https://api-kenzie-food.herokuapp.com";

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
    return data;
  }

  // static filtrarProdutos(evento) {
  //   evento.preventDefault();
  //   const vitrine = document.querySelector("#div-produtos-carrinho");
  //   const categoria = evento.target.attributes[1].nodeValue;
  //   console.log(categoria);
  //   if (categoria === "Panificadora" || "Fruta" || "botaoBebida") {
  //     const produtosFiltrados = Busca.filtroCategoria(
  //       produtosApi,
  //       evento.textContent
  //     );
  //     vitrine.innerHTML = "";
  //     //function de listar produtos aqui
  //   }

  //   if (evento.id === "Todos") {
  //     vitrine.innerHTML = ``;
  //     //function de listar produtos aqui
  //   }
  // }

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

export { VitrineController };
