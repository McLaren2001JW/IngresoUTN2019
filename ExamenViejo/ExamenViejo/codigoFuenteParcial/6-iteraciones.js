//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var mayor;
    var menor;
    var diaMayor;
    var diaMenor;
    var flag = 0;

    for(var i = 1 ; i <= 7 ; i++);
    {

    importe = parseInt(prompt("ingrese importe de ventas " + i));
    while(importe <=0 || isNaN(importe));
    {
        importe = parseInt(prompt("error reingrse de nuevo" ));
    }

    if (importe > mayor || flag == 0 )
    {
        mayor = importe;
    }

    if (importe < menor || flag == 0)
    {
        menor = importe;
        flag = 1;
    }
 }

document.write("el mayor importe fue " + mayor + "<br>");
document.write("el menor importe fue " + menor);
    
  
	
	

	
}

//Realizar el algoritmo que al presionar
 //el botón "Mostrar" pida el importe de las 
 //ventas (validar que sea mayor a 0,”cero”)
  //de los 7 días de la semana por prompt (una por día),
   //e informar cual fue el mayor importe y cuál fue el
    //menor importe de venta