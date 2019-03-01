function Mostrar()
{
    var i;
    var cantDivisores = 0;
    var numero;

    numero = parseInt(prompt("Ingrese un numero divisible "));

    for(i = 1; i <= numero ; i++)
    {
         if(numero % i == 0)
        {
            cantDivisores++;
            console.log(i);        
        }
        
    } 

        console.log("La cantidad es " +  cantDivisores);


}//FIN DE LA FUNCIÓN