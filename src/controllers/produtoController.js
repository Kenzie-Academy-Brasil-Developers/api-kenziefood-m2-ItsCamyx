

class VitrineController{

    static BASEURL = 'https://kenzie-food-api.herokuapp.com'

    


    static async listarProdutos(){
        const response = await fetch(`${this.BASEURL}/products`)
        const data = await response.json() 
       
        return data
    }

    static async listarMeusProdutos(){
        const response = await fetch(`${this.BASEURL}/my/products`,{
            method: 'GET',
            headers: {
                'Content-Type': 'aplication/json',
                'Authorization': `Bearer ${localStorage.getItem('Token')}`
            }
        })
        const data = await response.json() 
  
        return data
    }

    static async adicionarProduto(dataProduto){
        const response = await fetch(`${this.BASEURL}/my/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(dataProduto)

        })
        const data = await response.json()
        
      
        return data 
    }

    static async editarProduto(data, id){
        const response = await fetch(`${this.BASEURL}/my/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${localStorage.getItem('Token')}`
            },
            body: JSON.stringify(data)

        })

        
        const responseData = await response.json()
       
        return responseData


    }

    static async deletarProduto(id){
        const response = await fetch(`${this.BASEURL}/my/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('Token')}`
            },           

        })
       
       
        return response


    }

    static async filtrarProdutos(evento){
        evento.preventDefault()
        // const vitrine = document.querySelector("#div-produtos-carrinho")
        const categoria = evento.target.attributes[1].nodeValue
        const itens = await VitrineController.listarMeusProdutos()
       
        console.log(itens)
        console.log(categoria)

        if(categoria === "Panificadora" || "Fruta" || "botaoBebida") {
             // vitrine.innerHTML = ``
            const listaFiltrada = itens.filter((obj)=> obj.categoria === categoria)
            //function de fazer template aqui (listaFiltrada)
            console.log(listaFiltrada)
            
        }else{
            // vitrine.innerHTML = ``
            //function de fazer template aqui (itens)
            console.log(itens)
            

        }

        
    }



    
}





VitrineController.listarProdutos()



// VitrineController.adicionarProduto(objDeCriacao)
// VitrineController.adicionarProduto(segundoObj)

// VitrineController.listarProdutos()
// VitrineController.listarMeusProdutos()
// // VitrineController.adicionarProduto(terceiroObj)
// VitrineController.editarProduto(objDeEdicao,2340)
// VitrineController.deletarProduto(2347)




export {VitrineController}