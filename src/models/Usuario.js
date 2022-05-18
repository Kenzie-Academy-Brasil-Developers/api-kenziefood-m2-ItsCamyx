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
