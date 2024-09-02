/* 
Control de concurrencia
Crea un escenario en el que se simule la carga de 10 imágenes de un servidor remoto.
 Cada descarga de imagen debería representarse por una función descargarImagen que toma
  un número de imagen como argumento y devuelve una promesa que se resuelve después de un tiempo
   aleatorio. Dado que el servidor solo permite un máximo de 3 descargas simultáneas, utiliza
 Promise.all junto con alguna lógica para limitar el número de descargas concurrentes a 3. */

const fs =  require('fs')

const downloadImage  = async (url)=>{
    const response = await fetch(url)  
    if(response.ok){
        const blob =await response.blob()
        return blob
    }
    throw new Error('Error al traer imagen')
}


const obtainImages = async (urlImages)=>{
    const promises = []
    let responses = []
    steps = 3
    lote = 1
    for (let i = 0; i < urlImages.length; i+=steps) { 
        const s = urlImages.slice(i,i+steps)
        const resp = await Promise.all(s.map(u=>downloadImage(u)))  
        console.log(`LOTE ${lote}`, resp);
        lote+=1
        responses= responses.concat(resp) 
    }  
}


const  imagesToDownload = [
    `https://via.placeholder.com/100`,
    `https://via.placeholder.com/200`,
    `https://via.placeholder.com/300`,
    `https://via.placeholder.com/400`,
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
    
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
    `https://via.placeholder.com/700`,
]



obtainImages(imagesToDownload)