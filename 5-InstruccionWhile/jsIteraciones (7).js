function Mostrar() {

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta;

	do {
		numero = parseInt(prompt("Ingrese su numero"));
		respuesta = prompt("Desea continuar?").tolowercase();
		acumulador = acumulador + numero;
		contador++;

	} while (respuesta == "Si");
		promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN