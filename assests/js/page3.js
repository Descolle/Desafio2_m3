const validar = document.querySelector("#validar");
let mensaje = document.querySelector("#answer");

validar.addEventListener("click", function () {
  let numero1 = document.querySelector("#option1").value;
  let numero2 = document.querySelector("#option2").value;
  let numero3 = document.querySelector("#option3").value;
  let clave = numero1 + numero2+ numero3;

  if (clave === "911") {
    mensaje.innerHTML = "Password 1 correcta";
  } else if (clave === "714") {
    mensaje.innerHTML = "Password 2 correcta";
  } else if (clave === "007") {
    mensaje.innerHTML = "Bienvenido agente Bond";
  } else {
    mensaje.innerHTML = "Password incorrecta";
  }
});
