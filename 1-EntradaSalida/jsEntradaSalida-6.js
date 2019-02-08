/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num1;
var num2;
var suma;
num1=parseInt(document.getElementById("numeroUno").value);
num2=parseInt(document.getElementById("numeroDos").value);
suma=num1+num2;
alert("la suma es  " + suma);



}

