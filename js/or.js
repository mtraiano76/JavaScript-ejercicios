const edad = 18;
const secundario = false;
const curso = true

if (edad >= 18 && (secundario == true || curso == true)) {
    console.log("Postulante Apto");
} else {
    console.log("Postulante no Apto");
}


//if (edad >= 18 && secundario == true || curso == true) {
    //console.log("El postulante cumple al menos un requisito"); El codigo escrito asi, me deja pasar al postulante por mas que tenga 15 años
    // o si no tiene el secundario completo porque resuelve en base a && o sea, no tien 18 pero si el secundario por ejemplo.
    // como se resuelve? if (edad >= 18 && (secundario == true || curso == true)) { encerrando entre parentecis secundario y curso
    // Java primero resuelve la edad y luego lo demas, si la edad no es de 18, no pasa

    // otra opcion es quesolo pase si tiene 18 y secundario completo por mas que no haya hecho el curso
    //if (edad >= 18 && secundario == true)  {