var starWars = {
    Marca: "Kenner",
    Personaje: "Boba Fett",
    Pelicula: "ESB",
    Precio: "150",
    Stock: "True",
}

//console.log (starWars) me muestra la lista del objeto//

console.log (starWars.Personaje) // me muestra solo el item Personaje
starWars.Precio = 170; // ACTUALIZAMOS PRECIO
console.log (starWars) 

starWars.Distribuidor = "Hasbro"; // Agrego item Distribuidor

console.log (starWars)

8