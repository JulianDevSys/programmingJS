

const job =   (time,name)=>{
    console.log(`resolviendo trabajo ${name}`);
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`trabajo  ${name} hecho`);
            resolve(name)
        },time)
    }) 
    return promise
}

const main = async ()=>{
    //const resp = await Promise.all([job(1000,'1'), job(5000,'2'), job(10000,'3'),job(2000,'4')])
    const resp2 = await Promise.race([job(1000,'1'), job(5000,'2'), job(10000,'3'),job(2000,'4')])
    console.log(resp2);
}


main()