import { ApiUsuario } from "/src/controllers/usuarioController.js";

class Login {
  static loginUser() {
    const inputs = document.querySelectorAll("input");

    let valores = [];
    inputs.forEach((input) => {
      if (input.value !== "") {
        valores.push(input.value);
      }
    });
    const obj = {
      email: valores[0],
      password: valores[1],
    };
    ApiUsuario.loginUsuario(obj).then(() => {
      this.verificaLogin();
    });
  }
  static verificaLogin() {
    const token = localStorage.getItem("token");
    if (
      token !== "undefined" &&
      token !== null &&
      token !== "" &&
      token !== "[object Object]"
    ) {
      return (window.location = "/src/pages/Dashboard.html");
    } else {
      alert("Usuário ou senha inválidos!");
      window.location = "/src/pages/Login.html";
      return false;
    }
  }
}

const botaoLogin = document.getElementById("login-formulario__botao--login");
botaoLogin.addEventListener("click", (e) => {
  e.preventDefault();
  Login.loginUser();
});
export { Login };
