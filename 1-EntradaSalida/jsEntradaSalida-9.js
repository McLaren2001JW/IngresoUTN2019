/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var Sueldo;
var NuevoSueldo;
var Aumento;

Sueldo = parseInt(document.getElementById("sueldo").value);

Aumento = Sueldo * 10 / 100;
NuevoSueldo = Sueldo + Aumento;
 
Alert("Aumento: " + Aumento);

document.getElementById("resultado").value = NuevoSueldo;


}
