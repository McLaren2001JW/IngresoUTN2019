function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;

	for(contador = 0; contador < 5; contador++)
	{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
	}
	promedio = acumulador / 5 ;

	document.getElementById("suma").value = acumulador;
    document.getElementById("promedio").value = promedio / 5;
} 





