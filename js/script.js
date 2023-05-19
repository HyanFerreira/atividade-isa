function calculateIMC() {
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value;

  if (peso == "" && altura == "") {
    document.getElementById("result").innerHTML =
      "Por favor, preencha todos os campos.";
    return;
  }

  let alturaMetros = altura / 100;
  let imc = peso / (alturaMetros * alturaMetros);
  let massage;

  if (imc < 18.5) {
    massage = "Abaixo do peso";
  } else if (imc < 25) {
    massage = "Peso normal";
  } else if (imc < 30) {
    massage = "Sobrepeso";
  } else {
    massage = "Obesidade";
  }

  document.getElementById("result").innerHTML =
    "Seu IMC é " + imc.toFixed(2) + "<br>" + massage;
}
