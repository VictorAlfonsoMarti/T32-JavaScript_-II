/*
 *  T32-Ejercicio 13
 *
 */


function mostrar(panel){
    // función que cambia el contenido del h1 para indicar qué panel se ha pulsado
    
    if (panel == "panel"){
        document.getElementById("expositor").innerHTML = "Se presionó un párrafo del documento";
    }
    if (panel == "t1c1"){
        document.getElementById("expositor").innerHTML = "Se presionó la columna 1 de la primera tabla";
    }
    if (panel == "t1c2"){
        document.getElementById("expositor").innerHTML = "Se presionó la columna 2 de la primera tabla";
    }
    if (panel == "t2c1"){
        document.getElementById("expositor").innerHTML = "Se presionó la celda 1 de la segunda tabla";
    }
    if (panel == "t2c2"){
        document.getElementById("expositor").innerHTML = "Se presionó la celda 2 de la segunda tabla";
    }
}