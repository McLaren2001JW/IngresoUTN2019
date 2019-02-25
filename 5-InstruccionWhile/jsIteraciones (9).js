function Mostrar() {

	var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var respuesta="si";

	// declarar variables
	do {
		numero=parseInt(prompt("Ingrese su numero"));

		if (contador == o) {
			maximo = numero;
			minimo = numero;
		}
		if (numero > maximo) {
			maximo=numero;

		}
		if (numero < minimo) {
			minimo=numero;
		}
		contador++;
		respuesta=prompt("desea continuar?").toLowerCase();

	} while (respuesta == "si");

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN