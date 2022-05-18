let localStorageToken = localStorage.getItem("token");
if (!localStorageToken || localStorageToken === "undefined") {
  //não tenho um token válido, zerar variável
  localStorageToken = "";
}
class ApiUsuario {
  static token = localStorageToken;

  static async criarUsuario(data) {
    const response = await fetch(
      "https://api-kenzie-food.herokuapp.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    return response;
  }

  static async loginUsuario(data) {
    const token = await fetch(
      "https://api-kenzie-food.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        localStorage.setItem("token", res);

        Api.token = res;
      })
      .catch((error) => error);
  }
}

export { ApiUsuario };
