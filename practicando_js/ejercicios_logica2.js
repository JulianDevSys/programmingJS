/* Inversión de una Cadena
Escribe una función que tome una cadena de texto como argumento y devuelva la cadena invertida. */

function invertir_cadena(cadena){
    let invertir=""
    for(let i= cadena.length-1; i >=0 ;i--){
        invertir += cadena[i]
    }
    return invertir
}
//console.log(invertir_cadena("julian"))
//nailuj


//inversion de cadena con recursividad
function cadena_invertida(palabra){
    if (palabra.length==0){
        return palabra
    }
    else{
        return cadena_invertida(palabra.slice(1)) + palabra[0]
    }
}
console.log(cadena_invertida("julian"))


//factorial con recursividad
function factorial(n){
    if(n== 1){
        return n
    }else{
        return n* factorial(n-1)
    }
}
console.log(factorial(5))


//Contar Palabras en una Cadena
//Escribe una función que cuente el número de palabras en una cadena de texto.

function contador_palabras(cadena){
    let nueva_palabra= cadena.trim().split(" ")
    let cantidad_palabras= nueva_palabra.length
    return cantidad_palabras
}
console.log(contador_palabras("   haceindo ejercicios en js  "))