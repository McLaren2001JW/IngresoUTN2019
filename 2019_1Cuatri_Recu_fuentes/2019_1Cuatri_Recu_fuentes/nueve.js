function mostrar()
{
var nombre;
var edad;
var sexo;
var notaFinal;
var aprobadosVaro = 0;
var menordeedad = 0;
var promedioadolecentes;
var adolecentes = 0;
var promedioMayores;
var mayores = 0;
var promemasculino;
var promediofemenino;
var masculino = 0;
var femenino = 0;
var sumamenores = 0;
var sumamayores = 0;
var sumaadolentes = 0;
var sumamasculino = 0;
var sumafemenino = 0;

do{
  nombre = prompt("Ingrese un nombre");
  edad = parseInt(prompt("Ingrese una edad"));
  while(edad < 1||isNaN(edad))
  {
    edad = parseInt(prompt("Error.Ingrese una edad validad"));
  }
  sexo = prompt("Ingrese el sexo ");
  sexo = sexo.toLowerCase();
  while(isNaN(sexo||sexo == "f" || sexo == "m" ))


notaFinal = parseInt(prompt("Ingrese una nota"));
while(isNaN(notaFinal||notaFinal < 0 || notaFinal > 10 ))
{
notaFinal = parseInt(prompt("Error.Ingrese de nuevo"));
}

if(notaFinal > 6 && sexo == "m"){
  aprobadosVaro++;
  masculino++;
  sumamasculino = sumamasculino + notaFinal;
}
else
{
  femenino++
  sumafemino = sumafemino + notaFinal++;
}

if ( edad > 17){
  mayores++;
  sumamayores = sumamayores + notaFinal;
}
else if (edad > 12){
  menordeedad++;
  sumamenores = sumamenores + notaFinal;
}


}while(confirm("Quiere continuar"));

menordeedad = sumamenores / menoresedad;
promedioadolecentes = sumaadolentes / adolecentes;
promedioMayores = sumamayores / mayores;
promemasculino = sumamasculino / masculino;
promediofemenino = sumafemenino / femenino;

document.write("La contidad de varones aprobados es " + aprobadosVaro + "<br>" + "El promedio de los menores de edad es " + menordeedad + "<br>" + "El promedio de los adolecntes es " + promedioadolecentes + "<br>" + "El promedio de los mayores es " + promedioMayores + "<br>" + "El promedio de hombres es " + promemasculino + "<br>" + "EL promedio de mujeres es " + promediofemenino);

}
