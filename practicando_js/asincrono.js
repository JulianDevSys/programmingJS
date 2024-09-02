// usamos el setTimeout aparece despues de dos segundos una sola vez
console.log("inicio")
setTimeout(()=>{
    console.log("algun dia sere un grna progrmador")
},2000)
console.log("fin")


//un intervalo infinito que va a aparecer cada 2 segundos
const intervalo= setInterval(()=>{
    console.log("soy el mejor")
},2000)

//para parar la funcion
setTimeout(()=>{
clearInterval(intervalo)
},10000)


function decir_teamo(){
    const repetir= setInterval(()=>{
        console.log("amo a mi novia")
    },2000)

    setTimeout(()=>{
        clearInterval(repetir)
    },10000)
}
decir_teamo()

///// funciones asyn con un fetch

////////////////////////////////////////////////////////
async function fetchData(){
    try{
        const mensaje= await fetch("")
        console.log(mensaje)
    }catch(e){
        console.log(e)
    }
}

//////////////////////////////////////////////////////

//uso de finally

async function fetchData1(){
    try{
        const mensaje= await fetch("hola")
        console.log(mensaje)
    }catch(e){
        console.log(e)
    }finally{
        console.log("gracias por usar el programa")
    }
}

/////// uso de promise.all

/* async function alldata(){
    try{
        let[dato1,dato2,dato3]= await Promise.all([
            fetch("").then()
        ])
    }
} */