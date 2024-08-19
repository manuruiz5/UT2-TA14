const boton = document.getElementById("añadirElemento");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");

boton.addEventListener("click", function() {
  //Obtener el valor del input
  const texto = input.value;
  if (texto !== "") {
    const nuevoElemento = document.createElement("li");
    //Asignar el texto ingresado al nuevo <li>
    nuevoElemento.textContent = texto;
    //Añadir el nuevo elemento a la lista <ul>:
    lista.appendChild(nuevoElemento);
    //Borrar el texto del input: 
    input.value = "";
  }
 
});
