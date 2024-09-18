
//VARIABLES (se pueden modificar)

var numero = (20); //con var, establezco la variable numero
console.log (numero);

numero = (25); // llamo a la variable numero con otro valor, piso el valor anterior
console.log (numero); //en terminal, me muestra el 25


var resultado = (numero * 2);
console.log (resultado);


var prueba;
console.log (prueba); //esto me marca undefined, posiblemente me olvide ed asignar valor a la variable prueba

prueba = "amanecer";
console.log (prueba); //ahora si, al asigar amanecer a prueba, me lomuesrta en consola

var puntaje = (null); //aqui es mas adrede, le asigno NULL para crear l variable y asignarle valor luego
console.log (puntaje);


//CONSTANTES (no se pueden modificar)

var resultado = 40 + 2;
var resultado2 = resultado * 40;
var coeficiente = 40 - resultado2;

// a 40 por ejemplo le podemos asignar un numbre yaqe siempre el lo mismo

//var pi = (40);
//var resultado = pi + 2;
//var resultado2 = resultado * pi;
//var coeficiente = pi - resultado2;
 
//pero para evitar pisar pui con otro numero, lo ponemos como constante

const pi = (40);
var resultado = pi + 2;
var resultado2 = resultado * pi;
var coeficiente = pi - resultado2;














