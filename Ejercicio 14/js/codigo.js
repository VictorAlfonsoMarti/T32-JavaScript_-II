/*
 *  T32-Ejercicio 14
 *
 */
function Retr(){
    // botón para eliminar el último dígito insertado en el panel resultado
    let cont = document.getElementById("resultado").textContent;

    // controlamos si es un punto para poder printar nuevo
    if (cont.substring(cont.length-1,cont.length) == '.'){
        // modificamos el contenido del elemento punto para asiganrlo a false
        document.getElementById("punto").textContent = 'false';
    }  

    
    if(cont != "0"){
        // eliminar la última entrada
        document.getElementById("resultado").innerHTML = cont.substring(0,cont.length-1);
        if (cont.length == 1){
            // si el panel esta vacio, asigamos un 0
            document.getElementById("resultado").innerHTML = "0";
        }
    }
}

function CE(){
    // botón para eliminar toda la memoria de la caluladora
    document.getElementById("memoria").innerHTML = "";
    document.getElementById("resultado").innerHTML = "0";
    // modificamos el contenido del elemento punto para asiganrlo a false
    document.getElementById("punto").textContent = 'false';
}

function C(){
    // botón para eliminar el texto del panel del resultado
    document.getElementById("resultado").innerHTML = "0";
    // modificamos el contenido del elemento punto para asiganrlo a false
    document.getElementById("punto").textContent = 'false';
}

function InsertNumber(n){
    // botón para insertar número en el panel de resultado

    // guardamos el contenido
    let cont = document.getElementById("resultado").textContent;
    
    // si el contenido es 0, es el primer número insertado
    if(document.getElementById("resultado").textContent == "0")
    {   
        // imprimimos el número marcado
        document.getElementById("resultado").innerHTML = n;
    }
    // si no (ya hay número), pero menos que 30 números
    else if (cont.length < 31) 
    {
        // añadimos el numero al string del numero anterior
        document.getElementById("resultado").innerHTML = cont + n;
    }
}

function InsertDot(){
    // función para añadir un punto, si no existe

    // guardamos el contenido del panel
    let cont = document.getElementById("resultado").textContent;
    
    // si no hemos puesto un boton, añadimos
    if (document.getElementById("punto").textContent == 'false'){
        document.getElementById("resultado").innerHTML = cont + '.';
    }

    // modificamos el contenido del elemento punto para asiganrlo a true
    document.getElementById("punto").textContent = 'true';
}

function SetOperator(op){
    // botón para guardar el operador y el contenido del panel en memoria
    document.getElementById("memoria").innerHTML =  document.getElementById("resultado").textContent;
    document.getElementById("operador").innerHTML = op;
    // limpiamos el panel resultado
    C();
    // modificamos el contenido del elemento punto para asiganrlo a false
    document.getElementById("punto").textContent = 'false';
}

function MakeOp(){
    // botón para realizar la operación y lo printan en el panel de resultado

    // recogemos los valores y el operador
    let n1 = document.getElementById("memoria").textContent;
    let n2 = document.getElementById("resultado").textContent;
    let op = document.getElementById("operador").textContent;
    let resultado;
    
    // según el operador, calculamos
    switch(op){
        case "+":
            resultado = +n1 + +n2;
            break;
        case "-":
            resultado = +n1 - +n2;
            break;
        case "*":
            resultado = +n1 * +n2;
            break;
        case "/":
            resultado = +n1 / +n2;
            break;
        case "Raiz":
            resultado = Math.pow(+n1,+n2);
            break;
        case "%":
            resultado = +n1 % +n2;
            break;
        case "1/x":
            resultado = +n2 + (1/+n2);
            break;
    }

    // printamos el resultado
    document.getElementById("resultado").innerHTML = resultado;

}