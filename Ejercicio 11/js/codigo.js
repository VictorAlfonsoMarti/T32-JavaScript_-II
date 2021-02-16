/*
 *  T32-Ejercicio 11
 *
 */

function lanzarDados() {
    // Función que imprime dos números aleatorios en los div dado1 y dado 2 y muestra el
    // resultado de la suma en el div resultado.
    // Después llama a la función guardarTirada() para sumar el contenido en la tablaResultados

    // ATRIBUTOS
    let tirada1;
    let tirada2;
    let resultado;

    // asignamos valor aleatorio entre 1 y 6 (inclusive) a las dos tiradas
    tirada1 = Math.floor(Math.random()*6)+1;
    tirada2 = Math.floor(Math.random()*6)+1;

    // sumamos los valores y guardamos
    resultado = tirada1 + tirada2;

    // printamos el contenido en los divs
    document.getElementById("dado1").innerHTML = tirada1;
    document.getElementById("dado2").innerHTML = tirada2;
    document.getElementById("resultado").innerHTML = resultado;

    // llamámos al método guardarTirada() para almacenar la estadística
    guardarTirada(resultado);
}

function guardarTirada(n){
    // Función para guardar el número n pasado por parámetro en una tabla según su valor.
    document.getElementById(n).innerHTML = +document.getElementById(n).innerText + 1;
}

function estadistica(){
    // función para realizar las 36.000 primeras tiradas para rellenar la tablaResultados
    // se llama en el body onload

    for (x = 0; x <= 36000; x++){
        lanzarDados();
    }

}