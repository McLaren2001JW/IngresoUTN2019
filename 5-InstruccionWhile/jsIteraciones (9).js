function Mostrar()
{

	var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var cantidad = 0
	var respuesta ='si';

	while(respuesta!='no')
	{
		numero = prompt("ingrese un numero");
		if(cantidad == 0)
			{
				maximo = numero;
			    minimo = numero;
			}
			else
			{
			if (numero > maximo)

		{
			maximo = numero;
		}
		if (numero<minimo)
		{
			minimo = numero
		}
	
	}
	cantidad ++;
	respuesta = prompt("desea ingresar otro numero");
	document.getElementById("minimo").value= minimo;
	document.getElementById("maximo").value= minimo; 
	
}


var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var cantidad = 0
	var respuesta ='si';
	var flag = flase;

while(respuesta!='no')
	{
		numero = prompt("ingrese un numero");
		if (flag== false || numero>maximo)
		{
			maximo= numero;
		}
		if(flag== false || numero<minimo)
		{
			minimo=numero;
			flag = true;
		}


}