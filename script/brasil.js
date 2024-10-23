document.getElementById("seta").addEventListener("click", function () {
  var texto = document.getElementById("texto");
  var seta = document.getElementById("seta");

  if (texto.classList.contains("escondido")) {
    texto.classList.remove("escondido");
    seta.classList.add("rotacionada");
  } else {
    texto.classList.add("escondido");
    seta.classList.remove("rotacionada");
  }
});