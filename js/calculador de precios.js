


var precioInicial = parseFloat(window.prompt("Ingrese el precio")); // Convertimos el valor ingresado a número
var descuento = parseFloat(window.prompt("Ingrese el descuento")); // Convertimos el valor ingresado a número

if (descuento >= 0 && descuento <= 100) { // Validamos que el descuento esté entre 0 y 100
    var precioFinal = precioInicial - (precioInicial * descuento / 100); // Calculamos el precio final con el descuento
    window.alert("Precio original: $" + precioInicial + "\nDescuento aplicado: " + descuento + "%\nPrecio final: $" + precioFinal);
} else {
    window.alert("No es un descuento válido"); // Mostramos un mensaje si el descuento es inválido
}
