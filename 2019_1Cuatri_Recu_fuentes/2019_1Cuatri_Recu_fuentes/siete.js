function mostrar()
{
  var bolsa;
  var kilos;
  var contadorK = 0;
  var kilosprom;
  var masLiviano;
  var maslivsabor;
  var cantidadcarne;

  for(var contador = 1; contador > 11; contador++)
  {
    bolsa = prompt("Ingrese los kilos de la bolsa " + contador);
    while( bolsa < 0 || bolsa > 500 || isNaN(bolsa))
    {
      bolsa = parseFloat(prompt("Error. Ingrese de nuevo" + contador)
    }
  }


}
