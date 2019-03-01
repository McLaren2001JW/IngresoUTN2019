//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
 {
     var notas;
     var sexo;

     notas = parseInt(prompt("ingrese nota "));
     sexo = parseInt(prompt("ingrese sexo"));

     for(i = 1; i <= 6; i++)
     {
        notas = parseInt(prompt("ingrese nota "));
        sexo = parseInt(prompt("ingrese sexo"));

        while !(notas >= 0 && notas <= 10 ||isNaN(notas))
        {

        }
     }
	
}

