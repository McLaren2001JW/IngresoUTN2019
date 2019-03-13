function mostrar()
{
  var continente = prompt("Ingresar continente");
  var cantidadDias = parseInt(prompt("Ingresar la cantidad de dias"));
  var metodoPago = prompt("Ingresar pago");
  var porcentaje = 0;
  var preciopordia = 100;
  var precioinicial = 0;
  var preciofinal = 0;
  var descuento = "porcentaje";

  precioinicial = preciopordia + cantidadDias;

  switch(continente)
  {
    case "America":
    porcentaje = 15;

    switch(metodoPago)
    {
      case "debito":
       porcentaje += 10;
       break
    }
    break;
    case "Africa":
    porcentaje = 30;

    switch(metodoPago)
    {
      case "MercadoPgo":
      case "Efectivo":
       porcentaje = porcentaje + 15;
       break
    }
    break;

    case "Europa":
    porcentaje = 20;

    switch(metodoPago)
    {
      case "Debito":
       porcentaje = porcentaje + 15;
       break;

       case "MercadoPago0":
       porcentaje = porcentaje + 10;
       break;

       default:
       porcentaje = porcentaje + 5;
       break;
    }
    default:
    porcentaje = porcentaje + 20;
    case "Cheque":
    porcentaje = porcentaje + 15;
    break;

  }
alert("El continente es " + continente + "Los dias son " + cantidadDias + "La forma de pago es " + metodoPago + "El descuento es " + porcentaje);





}
