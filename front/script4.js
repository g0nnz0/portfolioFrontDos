function cambiar_parrafo() {
  document.getElementById("edit-acercade").style.display = "block";
  let texto = document.getElementById("texto-acercade").innerText;
  console.log(texto);
}

function cambio(valor) {
  document.getElementById("texto-acercade").innerText = valor;
}

/*
//Para cerrar el text area al tocar enter.
//no funciona el logMessage, todo apunta a que no está definida, pero no se donde definirla y el profe no lo mostró.

let textarea = document.getElementById("edit-acercade");
textarea.addEventListener("keyup", (e) => {
  logMessage(`key "${e.key}" released [event: keyup]`);
  if (e.key == "Enter") {
    document.getElementById("edit-acercade").style.display = "none";
  }
});
*/
