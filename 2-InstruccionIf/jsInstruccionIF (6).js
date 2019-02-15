function Mostrar()
{
var edad;
 edad = parseInt(document.getElementById("edad").value);

 if (edad >= 18){ 
     alert("adulto");
 }
 else{
     if (edad < 13){
         alert("niño");
     }
 
else{
    alert("adolecente");
}
}




}//FIN DE LA FUNCIÓN
