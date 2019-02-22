function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio;
	var cantidad;

	while(cantidad < 5){
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador= acumulador + numero;
		contador= contador + 1;
	}
	promedio = acumulador / 5 ;

	document.getElementById("suma").value = cumulador;
    document.getElementById("promedio").value = promedio / 5;
} 





