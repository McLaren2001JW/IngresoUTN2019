//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var iva;
    var importeFinal;

    importe = parseFloat(prompt(document.getElementById("Ingrese el precio ").value));

    iva = importe * 21/100;
    importeFinal = importe

    document.getElementById("importe").value = importeFinal;




    
    

    




}

