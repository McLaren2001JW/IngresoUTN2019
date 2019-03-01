
function Mostrar()
{
    var i;
    var cantidadPares = 0;
    var numero;

    numero = prompt("ingrese un numero par ");

    for(i =1; i <= numero ; i++)
    {
         if(i % 2 == 0)
        {
            cantidadPares++;
            console.log(i);        
        }
        
    } 

        console.log(cantidadPares);

    /* 
   Si en numero es par : el numero/2 = cantidad de pares
   si es impar         : el numero - 1/2 = cantidad de pares

   si numero % 2 == 0 entonces es par
   sino es impar

   mostrar todos los numeros pares encontrados

   mostrar el numero total de pares encontrados */




}//FIN DE LA FUNCIÓN