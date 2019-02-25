function Mostrar()
{
 var numero;
 var acumuladorNeg = 0;
 var acumuladorPos = 0;
 var contadorNeg = 0;
 var contadorPos = 0;
 var contadorCeros = 0;
 var contadorPares = 0;
 var promedioPos;
 var promedioNeg;
 var diferencia;
 var respuesta;

 do {
	 numero = parseInt(prompt("Ingrese un numero "));
	 if(contadorNeg > 0)
	 {
		 acumuladorNeg += numero;
		 contadorNeg++;
	 }
	 else if(numero == 0)
	 {
		 contadorCeros++;
	 }

	 else
	 {
		 acumuladorNeg += numero;
		 contadorNeg++;
	 }

	 if(numero % 2==0)
	 {
		 contadorPares++;
	 }
	 respuesta = prompt("Quiere continuar? ");

	} while(respuesta == "s");

	promedioNeg = acumuladorNeg / contadorNeg;
	promedioPos = acumuladorPos / contadorPos;
	diferencia = contadorPos - contadorNeg;

	document.write("1-Suma de los negativos. " + acumuladorNeg + "<br>");
	document.write("2-Suma de los positivos. " + acumuladorPos + "<br>");
	document.write("3-Cantidad de positivos. " + contadorPos + "<br>");
	document.write("4-Cantidad de negativos. " + contadorNeg + "<br>");
	document.write("5-Cantidad de ceros. " + contadorCeros + "<br>");
	document.write("6-Cantidad de números pares. " + contadorPares + "<br>");
	document.write("7-Promedio de positivos. " + promedioPos + "<br>");
	document.write("7-Promedio de negativos. " + promedioNeg + "<br>");
	document.write("Diferencia entre positivos y negativos. " + diferencia + "<br>");



}//FIN DE LA FUNCIÓN