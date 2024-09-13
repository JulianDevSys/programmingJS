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


console.log(palindromo("reconlcer"))