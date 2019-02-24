function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;
	var respuesta = "si";
	var cantidad = 0;

	while(respuesta == "si") 
	{
		numero = (prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		respuesta = (prompt("¿Desea Continuar?"));
		cantidad = cantidad + 1;
	}
	promedio = acumulador / cantidad ++ ;

 document.getElementById('suma').value = acumulador;
 document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN