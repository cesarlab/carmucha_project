const usuarioBD = "cesar"
const passBD = "test123"

var usuario = prompt("Ingresa tu usuario")
var pass = prompt("Ingresa tu contraseña")

if((usuario==usuarioBD)&&(pass==passBD)){
    document.write("Correctamente loggeado")
}else{
    document.write("Usuario o contraseña estan mal :/")
}
