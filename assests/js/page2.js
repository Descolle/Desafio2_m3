let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let valor3 = document.querySelector("#valor3")
const buton = document.querySelector('#suma')

//Ejercicio de los dulces/stickers/etc.
buton.addEventListener("click", function() {
    let valorTotal = Number(valor1.value) + Number(valor2.value) + Number(valor3.value);
  if (valorTotal >=10) {
    console.log('funciona')
    alert('todo ok')
  }
  });