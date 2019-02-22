function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));


	 while(numero >= 0 && numero <= 9 ){
		numero = prompt("Numero correcto");
	}
		document.getElementById("Numero").value=numero;
	
	alert("numero imcorrecto");


}//FIN DE LA FUNCIÓN