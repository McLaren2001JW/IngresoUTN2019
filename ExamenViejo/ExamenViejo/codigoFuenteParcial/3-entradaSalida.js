//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var alambre;
    var perimetro;

    ancho = parseFloat(document.getElementById("ancho").value);
    largo = parseFloat(document.getElementById("largo").value);

    perimetro = largo + largo + ancho + ancho;
    
    alambre = perimetro * 6;

    alert("Comprar " + alambre + "metros de alambre");





	
	
}

