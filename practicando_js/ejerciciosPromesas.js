//////////////////////////////////Simulación de una API de Usuario////////////////////////////////////////////////////////
/* Crea una promesa que simule una llamada a una API para obtener la información de un 
usuario después de 2 segundos. 
La promesa debe resolverse con un objeto que contenga un nombre y un correo electrónico, o rechazarse con un error si ocurre un problema. */

function get_info_users(){
    return new Promise((resolve,reject)=>{
        console.log("obteniendo la información del usuario")
        setTimeout(()=>{
            let exito= Math.random()*0.2
            if(exito){
                resolve({name: "julian castro", email:"jucastrohenao@gmail.com"})
            }reject("hubo un problema no se pudo traer la informacion del usuario")
        },2000)
    })
}

/* get_info_users()
.then((mensaje)=>{
    console.log(mensaje)
})
.catch((e)=>{
    console.log(e)
})
 */


////////////////////////////////////////Promesas Encadenadas///////////////////////////////////////////////
/* Crea dos promesas. La primera promesa debe simular una consulta
 a una base de datos para obtener el ID de un producto (después de 1 segundo), 
 y la segunda promesa debe usar ese ID para obtener el nombre del producto (después de 2 segundos). */


function consulta_baseDatos_id(){
    return new Promise((resolve)=>{
        console.log("obteniedo la id del producto")
        setTimeout(()=>{
            resolve(8)
        },1000)
    })
}

function consulta_baseDatos_name(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(id==8){
                resolve("iphone 15 pro max")
            }else{
                reject("no se pudo obtener el nombre del producto")
            }
        },2000)
    })
}

async function obetener_datos() {
    try{
        let id= await consulta_baseDatos_id()
        let nombre= await consulta_baseDatos_name(id)
        console.log("producto obtenido:",nombre)
    }catch(e){
        console.log(e)
    }
}

obetener_datos()

//llamamos a la funcion obtenemos la id

//si se hubiera hecho sin un async await

/* consulta_baseDatos_id()
// si la obtuvimos pasarla a la funcion
.then((id)=>{
    return consulta_baseDatos_name(id)
})
.then((name)=> {
    console.log(name)
})
.catch((e)=>{
    console.log(e)
}) */

