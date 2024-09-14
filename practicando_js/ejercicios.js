//Filtrar números pares de un array

function even_numbers(){
    const array= [1,2,3,4,5,6,12,11,8,23,26,45,72,14]
    numbers=[]
    for(let i= 0; i < array.length; i++){
        if(array[i]%2== 0){
            numbers.push( array[i])
        }
    }
    return numbers
}
//console.log(even_numbers())
//---------------------------------------------------------------------------------------

// segunda forma Filtrar números pares de un array funciones agregadas
function filter_number(){
    const array= [1,2,3,4,5,6,12,11,8,23,26,45,72,14]
    number_pares= array.filter(x=> x%2==0 )
    return number_pares
}
//console.log(filter_number())
//-----------------------------------------------------------------------------------------

//Contar la cantidad de veces que se repite cada palabra en una cadena de texto

function word_counter(chain){
    dictionary= {}
    //quitamo los caracterss
    let clear_character= chain.replace(/[.,()?¡¿!]/g, "").toLowerCase()
    let new_chain= clear_character.split(" ")
    for(let i= 0; i< new_chain.length; i++){
        if (new_chain[i] in dictionary ){
            dictionary[new_chain[i]]+=1
        }
        else{
            dictionary[new_chain[i]]=1
        }
    }
    return dictionary
}
//console.log(word_counter("vamos a ver una pelicula o play o mejor vamos a jugar play, que pelicula es"))
//--------------------------------------------------------------------------------------------------------------------

function palindromo(word){
    let palabra_nueva=""
    for(let i= word.length-1; i > -1; i--){
        palabra_nueva+= word[i]
    }
    if(palabra_nueva== word){
        return "es un palindromo"
    }else{
        return "no es un palindromo"
    }
}

//console.log(palindromo("reconlcer"))

// determinar si es un numero o una cadena///

function recognize(chain){
    if(isNaN(parseInt(chain))){
        return "es una cadena"
    }else{
        if(chain%2== 0){
            return "es un numero par"
        }else{
            return "no es par"
        }
    }

}
//console.log(recognize("4"))


// verificar si un numero es primo

function primeNumber(number){
    if(number < 1){
        return "no es un numero valido"
    }else{
        for(let i= 2; i< number; i++){
            if(number% i== 0){
                return "no es numero primo"
            }
        }
    }return "es un numero primo"
    }
//console.log(primeNumber(17))


// Contar las vocales en una cadena//

function vowel_counter(chain){
    let dictionaryVowel={
        "a":0,
        "e":0,
        "i":0,
        "o":0,
        "u":0,
    }
    for(let i= 0; i< chain.length; i++){
        if(chain[i]in dictionaryVowel){
            dictionaryVowel[chain[i]]+=1
            }
        }return dictionaryVowel
    }
//console.log(vowel_counter("hellow my friend"))


// segunda forma de hacer el contador de vocales

function contador_vocales(chain){ 
    let contador= 0
    let new_chain= chain.toLowerCase()
    let vowel= "aeiou"
    for(let i of new_chain){
        if(vowel.includes(i)){
            contador+=1
        }
    }return `la canidad de vocales en la cadena es de ${contador}`
}

console.log(contador_vocales("hellow my friend"))