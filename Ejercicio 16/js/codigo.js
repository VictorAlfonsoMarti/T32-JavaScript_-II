/*
 *  T32-Ejercicio 16
 *
 */

function reloj(){
    // función para printar un reloj a tiempo real

    // generamos el objeto date
    var hora = new Date();

    // printamos la hora
    document.getElementById("horas").innerHTML = hora.getHours();
    document.getElementById("minutos").innerHTML = hora.getMinutes();
    document.getElementById("segundos").innerHTML = hora.getSeconds();

    setTimeout(reloj, 1000);
    
}
reloj();