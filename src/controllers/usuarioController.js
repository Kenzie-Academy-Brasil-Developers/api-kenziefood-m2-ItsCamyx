class Usuario{

    static BASEURL = 'https://kenzie-food-api.herokuapp.com'

    static async criarUsuario(data){
        const response = await fetch(
          `${this.BASEURL}/auth/register`,
          {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(data), 
          })
          
          const user = await response.json()
        
  
       
        return user
      }

    static async loginUsuario(data){

        const response = await fetch(
            `${this.BASEURL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify(data),
            })
            .then(resp => resp.json())
            .then(data =>{
                if(typeof data === 'object'){
                window.alert('erro')
                }else{
                    localStorage.setItem('Token', data)
                }
            })
                
            // const token = await response.json()
            // localStorage.setItem('Token', token)
            // return token 
    }
}

const amanda = {
    name: "Amanda",
    email: "amanda@kenzie.com",
    password: "2222"
}

const amandaLogin = { 
    email: 'amanda@kenzie.com',
    password:'2222'
}

// Usuario.criarUsuario(amanda)

// Usuario.loginUsuario(amandaLogin)







