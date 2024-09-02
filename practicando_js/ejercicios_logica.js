/* 
 * Los primeros dispositivos móviles tenían un teclado llamado T9
 * con el que se podía escribir texto utilizando únicamente su
 * teclado numérico (del 0 al 9).
 *
 * Crea una función que transforme las pulsaciones del T9 a su
 * representación con letras.
 * - Debes buscar cuál era su correspondencia original
 * - Cada bloque de pulsaciones va separado por un guión.
 * - Si un bloque tiene más de un número, debe ser siempre el mismo.
 * - Ejemplo:
 *     Entrada: 6-666-88-777-33-3-33-888
 *     Salida: MOUREDEV */
  
 
function transformar_teclado_t9(palabra){
    let palabra_descubierta=""
    const tecla_t9={
        3:"d",
        33: "e",
        888: "v",
        6: "m",
        666:"o",
        88:"u",
        777:"r",}
    palabra_nueva= palabra.split("-")
    for(let i= 0; i< palabra_nueva.length; i++){
        if (palabra_nueva[i] in tecla_t9){
            palabra_descubierta+= tecla_t9[palabra_nueva[i]]       
        }     
    }return palabra_descubierta.toUpperCase()
}
//console.log(transformar_teclado_t9("6-666-88-777-33-3-33-888"))


function ordenamiento(lista){
    let dato
    let tamaño=lista.length
    for(let j= 0;j<tamaño;j++){
        for(let i= 0; i < lista.length; i++){
            if(lista[i]> lista[i+1]){
                dato= lista[i+1]
                lista[i+1]=lista[i]
                lista[i]=dato
            }
        }tamaño-=1

}return lista
}
//console.log(ordenamiento([1,5,7,8,0,12,4]))



//// recursiviad

function fibonacci(n){
    if(n==0){
        return n
    }if(n==1){
        return n
    }
    else{
        return fibonacci(n-2) + fibonacci(n-1)
    }
}
console.log(fibonacci(10))