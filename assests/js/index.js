let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let valor3 = document.querySelector("#valor3")
let buton = document.querySelector('#suma')
let cantidad = document.querySelector("#cantidad")
const panda = document.querySelector("#img_panda");

panda.addEventListener("click", function () {
  console.log("funciona");
  if (panda.style.border === 'none') {
     panda.style.border = '2px solid red';
  } else {
    panda.style.border = 'none';
  };
});

//Ejercicio de los dulces/stickers/etc.
buton.addEventListener("click", function() {
  let valorTotal = Number(valor1.value) + Number(valor2.value) + Number(valor3.value);
if (valorTotal >=10) {
  console.log('funciona')
  alert('todo ok')
}
});

// Aca va el de clave de seguridad