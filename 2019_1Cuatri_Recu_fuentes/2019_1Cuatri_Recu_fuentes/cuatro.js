function mostrar()
{
var numero1 = parseInt(prompt("Ingrese un numero"));
var numero2 = parseInt(prompt("Ingrese un numero"));
var resto;
var numero1es;
var resta;


if (numero1 == numero2)
{
 numero1es = numero1 = numero2 * 2;

  alert("El numero es " + numero1es);
}
if(numero1 % numero2 == 0)
{
resta = numero1 - numero2;
  alert("La resta es " + resta);
}
if(numero1 % numero2 == 0)
{
  resto = numero1 / numero2;
  alert("El resto es " + resto);
}
if(resto > 3)
{
  alert("El resto es mayor a 3");
}
}
