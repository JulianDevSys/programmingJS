
//promesas: permiten manejar operaciones asincronicas
// Las romesas permiten ejecutar código que puede completarse ahora, en el futuro o nunca.

/* ESTADOS DE UNA PROMESA
*pendiente
*cumplida
*rechazada
*/
//////////////////////////////////////////////////////////////////////////////////////////////
//ejemplos:

/* const mi_promesa= new Promise((resolve,reject)=>{

    if(exito){
        resolve("la operacion fue un exito")
    }else{
        reject("hubo un error en la operacion")
    }

}) */

/*  
fetch('https://api.ejemplo.com/datos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error)); */


///////////////////////////////////////////////////////////////////////////////////////////////////
/// crear una promesa simple

// simulando la creacion de una promesa
/* const promesa= new Promise((response,reject)=>{
    proseso_exitoso= true
    setTimeout(()=>{
        if(proseso_exitoso){
            response("el trabajo se cumplio con exito")
        }else{
            reject("lo siento, intentalo mas tarde")
        }
    },2000)
})

promesa
.then((mensaje)=>{
    console.log(mensaje)
})
.catch((error)=>{
    console.log(error)
}) */

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// simulacion de datos usuario
/* function obtener_datos_usuario(){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const simular_exito= Math.random() > 0.5  
            if(simular_exito){
                const usuario={
                    "nombre": "Juan",
                    "edad": 19,
                    "estado": "soltero"
                }
                resolve(usuario)
            }else{
                reject("hubo un error al traer los datos del usuario")
            }

        },2000)
    })
}

obtener_datos_usuario()
.then((mensaje)=>{
    console.log(mensaje)
})
.catch((e)=>{
    console.log(e)
}) */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function archivos(archivo_url){
    return new Promise((resolve,reject)=>{
        console.log("empezando con el proceso de descarga")
        setTimeout(()=>{
            const exito= Math.random() > 0.20
            if (exito){
                resolve(`archivo descargado correctamente ${archivo_url}`)
            }else{
                reject(`archivo no pudo ser descargado correctamente ${archivo_url}`)               
            }
        },3000)
    })
}

async function descarga_archivos(){
    const urls = [
        "https://example.com/archivo1.zip",
        "https://example.com/archivo2.zip",
        "https://example.com/archivo3.zip"
      ]
    for(let i =0; i< urls.length;i++){
        try{
            const respuesta= await archivos(urls[i])
            console.log(respuesta)
        }catch(e){
            console.log(e)
        }
    }
}

descarga_archivos() */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//simulacion procesamiento de datos en lote

 function preocesamiento_datos(datos){
    return new Promise((resolve,reject)=>{
        console.log("porcesando información de datos ")
        const tiempo= Math.floor(Math.random() * 5000) + 1000
        setTimeout(()=>{
            const exito= Math.random() >0.30
            if(exito){
                resolve(`termino de procesesar los datos ${datos}`)
            }else{
                reject(`hubo un error en el procesado de datos ${datos}`)
            }
        },tiempo)
    })
}

//vamos procesando cada dato de la url uno por uno con el bucle for 
 async function procesar_lote(urls){
  const promises = urls.map(u => preocesamiento_datos(u)) 
        
 try {
  console.log(await Promise.race(promises))
 } catch (error) {
  console.log(error);
 }
}

const urls = [
    "https://example.com/datos1",
    "https://example.com/datos2",
    "https://example.com/datos3"
  ];

//procesar_lote(urls) 





///////////////////////////////////////////////////////////////////////////////////////////////


