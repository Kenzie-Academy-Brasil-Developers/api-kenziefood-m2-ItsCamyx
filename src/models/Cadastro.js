import { Usuario } from "/src/models/Usuario.js";

import { ApiUsuario } from "/src/controllers/usuarioController.js";
const inputs = document.querySelectorAll("input");
const botaoCadastrar = document.getElementById(
  "cadastro-formulario__botao--cadastrar"
);
class NovoUsuario {
  static criarUsuario() {
    let valores = [];
    inputs.forEach((input) => {
      if (input.value !== "") {
        valores.push(input.value);
      }
    });
    const obj = {
      name: valores[0],
      email: valores[1],
      password: valores[2],
    };
    const user = new Usuario(obj.name, obj.email, obj.password);
    ApiUsuario.criarUsuario(user);
  }
}
botaoCadastrar.addEventListener("click", (e) => {
  e.preventDefault();
  NovoUsuario.criarUsuario();

  alert("Usuário cadastrado com sucesso!");
  window.location = "/src/pages/Login.html";
});
