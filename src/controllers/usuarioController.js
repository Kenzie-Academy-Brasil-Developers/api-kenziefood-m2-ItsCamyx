let localStorageToken = localStorage.getItem("token");
if (!localStorageToken || localStorageToken === "undefined") {
  //não tenho um token válido, zerar variável
  localStorageToken = "";
}
class ApiUsuario {
  static BASEURL = "https://api-kenzie-food.herokuapp.com/";

  static async criarUsuario(data) {
    const response = await fetch(`${this.BASEURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = await response.json();
    console.log(user);

    return user;
  }

  static async loginUsuario(data) {
    const response = await fetch(`${this.BASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (typeof data === "object") {
          window.alert("erro");
        } else {
          localStorage.setItem("Token", data);
        }
      });
  }
}

export { ApiUsuario };
