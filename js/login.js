// Login

document
  .getElementById("form-login")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("text").value;
    let password = document.getElementById("password").value;

    if (usuario === "admin" && password === "admin") {
      window.location.href = "index.html";
    } else if (usuario === "" && password === "") {
      document.getElementById("massage-error").innerHTML =
        "Por favor, preencha todos os campos";
    } else {
      document.getElementById("massage-error").innerHTML =
        "Usuário ou senha incorreto!";
    }
  });
