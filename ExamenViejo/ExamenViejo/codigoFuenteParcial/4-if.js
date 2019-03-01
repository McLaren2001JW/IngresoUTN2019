//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

    numero1 = parseInt(prompt("Ingrese un numero"));
    numero2 = parseInt(prompt("Ingrese otro numero"));

    if ( numero1 == numero2)
    {
        resultado = numero1 * numero2;
        mesaje = ("la multiplicaion es " + resultado);
    }
    else if( nuemro > numero2)
    {
        resultado = numero1 - numero2;
        mesaje = ("la resta es " + resultado);
    }
    else 
    {
        resultado = numero1 * numero2;
        mesaje = ("la multiplicion es " + resultado);
    }
    document.write(mensaje);

}

