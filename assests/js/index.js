const panda = document.querySelector("#img_panda");

panda.addEventListener("click", function () {
  console.log("funciona");
  if (panda.style.border === 'none') {
     panda.style.border = '2px solid red';
  } else {
    panda.style.border = 'none';
  };
});



// Aca va el de clave de seguridad