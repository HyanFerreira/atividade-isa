// Calculadora IMC

let calculateButtonIMC = document.getElementById("button-calculate");
// calculateButtonIMC.addEventListener("click", calculateIMC);

calculateButtonIMC.addEventListener("click", function () {
  // function calculateIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (peso == "" && altura == "") {
    document.getElementById("result").innerHTML =
      "Por favor, preencha todos os campos.";
    return;
  }

  let alturaMetros = altura / 100;
  let imc = peso / (alturaMetros * alturaMetros);
  let mensagem;

  if (imc < 18.5) {
    mensagem = "Abaixo do peso";
  } else if (imc < 25) {
    mensagem = "Peso normal";
  } else if (imc < 30) {
    mensagem = "Sobrepeso";
  } else if (imc < 35) {
    mensagem = "Obesidade grau I";
  } else if (imc < 40) {
    mensagem = "Obesidade grau II"
  } else {
    mensagem = "Obesidade grau III (Obesidade mórbida)"
  }

  document.getElementById("result").innerHTML =
    "Seu IMC é " + imc.toFixed(2) + "<br>" + mensagem;
});

// hamburguer

const hamburguer = document.querySelector(".hamburguer");
const navColors = document.querySelector(".header-index-hamburguer-relative");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navColors.classList.toggle("active");
});

// colors

btnColor1.addEventListener("click", () => {
  document.body.style.background =
    "linear-gradient(to bottom, #ffffff, #56595a)";
    hamburguer.classList.remove("active");
    navColors.classList.remove("active");
    btnColor1.classList.toggle("selected")
    btnColor2.classList.remove("selected")
    btnColor3.classList.remove("selected")
});

btnColor2.addEventListener("click", () => {
  document.body.style.background =
    "linear-gradient(to bottom, #841ec3, #a68ec6)";
    hamburguer.classList.remove("active");
    navColors.classList.remove("active");
    btnColor2.classList.toggle("selected")
    btnColor1.classList.remove("selected")
    btnColor3.classList.remove("selected")
});

btnColor3.addEventListener("click", () => {
  document.body.style.background =
    "linear-gradient(to bottom, #3399CC, #83b0c7)";
    hamburguer.classList.remove("active");
    navColors.classList.remove("active");
    btnColor3.classList.toggle("selected")
    btnColor2.classList.remove("selected")
    btnColor1.classList.remove("selected")
});
