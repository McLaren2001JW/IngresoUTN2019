function Mostrar()
{
	var respuesta;
	var numero;
	var maximo;
	var minimo;
	var contador = 0;

	do{
		numero = parseInt(prompt("ingrese un numero: "));
		if(contador == 0)
		{ 
			maximo = numero;
			minimo = numero;
		}

		if(numero > maximo)
		{
			maximo = numero;
		}

		if(numero < minimo)
		{
			minimo = numero;
		}
		contador++;
		respuesta = prompt("Quiere continuar? ");

	} while(respuesta == "s");

	 document.getElementById("minimo").value = minimo;
	 document.getElementById("maximo").value = maximo; 
}