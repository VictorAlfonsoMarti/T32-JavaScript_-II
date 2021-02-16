/*
 *  T32-Ejercicio 12
 *
 */

function alCargar(){

    // Expresión regular para validar una fecha "XX/XX/XXXX" pasada por prompt, donde X es un dígito.
    var fecha = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    var textoFecha = "Nací el 05/04/1982 en Donostia.";
    document.getElementById("fecha").innerHTML = textoFecha + " Expresión Regular: " + fecha.test(textoFecha.substring(8,18));


    // Expresión regular para validar una dirección de email
    var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var textoEmail = "victor.alfonso.marti@gmail.com"
    document.getElementById("email").innerHTML = textoEmail + " Expresión Regular: " + email.test(textoEmail.toLowerCase());

    // Corrige la funcion escapeHTML(text) para que use expresiones regulaes, permite imprimir contenido html
    var textoHTML = "Hello <strong>WOLRD</strong>!!";
    document.getElementById("reemplaza").innerHTML = textoHTML + " Expresión Regular: " + escapeHTML(textoHTML);

    // Da formato al nombre: poniendo el apellido primero separado por una coma:
    var textoNombre = "Víctor Alfonso";
    document.getElementById("nombre").innerHTML = textoNombre + " Expresión Regular: " + textoNombre.replace(/^(.+?) ([^\s,]+)(,? (?:[JS]r\.?|III?|IV))?$/i, "$2, $1$3");
    
    // Elimina todo el contenido html de un texto
    document.getElementById("etiquetas").innerHTML = textoHTML + " Expresión Regular: " +textoHTML.replaceAll(/<[^>]*>/g, "");

}

function escapeHTML(text){
    // FUNCION ORIGINAL
    //var replacements = [["&", "&amp;"], ["\"", "&quot;"],
    //                    ["<", "&lt;"], [">", "&gt;"]];
    //
    //forEach(replacements, function(replace) {
    //    text = text.replace(replace[0], replace[1]);
    //});
    //return text;

    text = text.replaceAll(/>/g, "&lt;");
    
    return text;
}

