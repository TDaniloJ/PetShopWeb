const valor1 = Number(document.getElementById("valor1").textContent);
const valor2 = Number(document.getElementById("valor2").textContent);

const Total = valor1 + valor2;

document.getElementById("Total").innerHTML = Total;