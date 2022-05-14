// Este ejercico determina si un numero ingresado es par, impar o nunguno de los dos//
let btnEnviar = document.getElementById("enviar");

rotulo.innerHTML = "Introduce un numero:";

btnEnviar.addEventListener("click", () => {
  let numero: number = dato.value;
  if (numero === 0) {
    console.log("El" + numero + "no es Par ni Impar");
  } else if (numero % 2 === 0) {
    console.log("El" + numero + "es Par");
  } else {
    console.log("El" + numero + "es Impar");
  }
});
