const edad = 19;
const secundario = false;
const curso = false

if (edad >= 18 && (secundario == true || curso == true)) {
    console.log("Postulante Apto");
} else if (edad<18) {
    console.log(" Ofrecemos Jornadas");
}
else {
    console.log("Postulante no Apto");
}
