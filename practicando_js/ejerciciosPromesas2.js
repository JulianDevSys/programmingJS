//////////////////////////Ejercicio 3: Promesas en Paralelo////////////////////////////////////////////////////
/* Simula dos llamadas de red diferentes, una para obtener datos de un servidor y otra para obtener datos de una API de terceros.
Ambas llamadas deben ejecutarse en paralelo, y el resultado debe ser mostrado solo cuando ambas promesas se hayan resuelto. */

function obtenerDatos_servidor(){
    return new Promise((resolve)=>{
        console.log("obteniendo los datos del servidor")
        setTimeout(() => {
                resolve("datos obtenidos servidor")
        }, 2000);
    })
}

function obtenerDatos_Api(){
    return new Promise((resolve)=>{
        console.log("obteniendo los datos de la API")
        setTimeout(() => {
                resolve("datos obtenidos de la api")
        }, 2000);
    })
}

Promise.all([obtenerDatos_servidor(),obtenerDatos_Api()])
.then((men)=>{

    console.log("resultados:", men)
})
.catch((e)=>{
    console.log(e)
})

////////////////////////////////////////////////////ejercicio 4 promise.all/////////////////
///////////////////////////////////////////////Ejercicio 1: Consultas a múltiples APIs

/* Escribe dos funciones, obtenerDatosDeAPI1 y obtenerDatosDeAPI2, que simulen la obtención de datos de dos APIs diferentes
 utilizando setTimeout. Ambas funciones deben devolver promesas que se resuelvan después de 1 y 2 segundos, 
 respectivamente, con los datos ficticios "datos API 1" y "datos API 2".
 Luego, utiliza Promise.all para esperar a que ambas promesas se resuelvan y muestra los resultados combinados en la consola. */


function obtenerDatos_API1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("datos API1")
        },1000)
    })
}

function obtnerDatos_API2(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("datos API2")
        }, 2000);
    })
}
function obtenerDatos_APIS(){
    return Promise.all([obtenerDatos_API1(),obtnerDatos_API2()])
}
obtenerDatos_APIS()
.then(([datos_ap1, datos_api2])=>{
    console.log(datos_ap1)
    console.log(datos_api2)
})

.catch((e)=>{
    console.log("error en obtener:", e)
})



/////////////////////////Descargar múltiples archivos en paralelo///////////////////////

/* Crea tres funciones: descargarArchivo1, descargarArchivo2 y descargarArchivo3, que simulen la descarga de tres archivos diferentes 
con tiempos aleatorios de descarga (usando setTimeout con un tiempo aleatorio entre 1000 ms y 3000 ms).
Cada función debe devolver una promesa que se resuelva con un mensaje como "Archivo 1 descargado", "Archivo 2 descargado", etc */

function descargarArchivo1(){
    return new Promise((resolve,reject)=>{
        const time= Math.floor(Math.random()* 3000)+1000
        setTimeout(()=>{
           let exito= Math.floor(Math.random()* 5000)+1000
           if(exito){
            resolve("archivo uno descargado")
           }else{
            reject("no se pudo descargar el archivo")
           }
        },time)
    })
}

function descargarArchivo2(){
    return new Promise((resolve,reject)=>{
        const time= Math.floor(Math.random()* 3000)+1000
        setTimeout(()=>{
           let exito= Math.floor(Math.random()* 5000)+1000
           if(exito){
            resolve("archivo2 descargado")
           }else{
            reject("no se pudo descargar el archivo")
           }
        },time)
    })
}

function descargarArchivo3(){
    return new Promise((resolve,reject)=>{
        const time= Math.floor(Math.random()* 3000)+1000
        setTimeout(()=>{
           
           let exito= Math.floor(Math.random()* 5000)+1000
           if(exito){
            resolve("archivo3  descargado")
           }else{
            reject("no se pudo descargar el archivo")
           }
        },time)
    })
}

async function obtener_datos_descargas(){
    try{
        let [archivo1,archivo2,archivo3]= await Promise.all([descargarArchivo1(),descargarArchivo2(),descargarArchivo3()])
        console.log(archivo1)
        console.log(archivo2)
        console.log(archivo3)
    }catch(e){
        console.log(e)
    }
}
obtener_datos_descargas()