// el for each se usa para iterar en un array
//de donde vamos a iterar.forEach(valor(el nombre que queramos i) funcion_flecha=>{
//    } d) 

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
        console.log(accordions);
    });
}); 