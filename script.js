/*const usuarioBD = "cesar"
const passBD = "test123"

var usuario = prompt("Ingresa tu usuario")
var pass = prompt("Ingresa tu contraseña")

if((usuario==usuarioBD)&&(pass==passBD)){
    document.write("Correctamente loggeado")
}else{
    document.write("Usuario o contraseña estan mal :/")
}
*/


/*
//Calculo del precio en base al pais
//Esta es una funcionalidad que voy a implementar pero por tema de tiempo no lo voy a incluir en esta entrega final, pero que si voy a seguir trabajando para incluirla en el proyecto y lanzarlo a producción pronto
let priceUSD = 50
//Pegandole a la API de $ en latinoamerica

//Chile
fetch('https://dolarapi.com/v1/dolares/oficial')
  .then(responseCLP => responseCLP.json())
  .then(dataCLP =>{console.log(dataCLP)
                    console.log(dataCLP.venta)
})

  function priceConvertion(priceUSD, priceCoin ){
let result = priceUSD * priceCoin
    console.log(result)
    return result
  }
*/

  //----TIENDA----- Crear tarjetas de productos en base a la información de los objetos 'producto' desde un JSON guardado localmente

let productsContainer = document.getElementById("tienda")
console.log(productsContainer)

fetch('./products.json')
.then(response => response.json())
.then(data => {
    data.forEach((elemento) => {
        
        const productContainerCreated = document.createElement("div")
        productContainerCreated.classList.add("card")
        productContainerCreated.innerHTML = `
        <div class="card-container">
        <img src="${elemento.image}">
        <div class="card-body">
                        <h5 class="card-title">${elemento.name}</h5>
                        <p class="card-text">${elemento.symbol + elemento.price}</p>
                        <a href="#contacto" class="btn">Comprar</a>
        </div>
        `      
        
        
        ;
        productsContainer.append(productContainerCreated)
    })

})