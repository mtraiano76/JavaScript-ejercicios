var starWars = [
    {
        id: 1,
        nombre: "Luke Skywalker",
        edad: 22,
        familia: {
            padre: "Anakin Skywalker",
            madre: "Padmé Amidala",
            hermanos: [
                {
                    nombre: "Leia Skywalker",
                    edad: 22,
                },
            ]
        }

    },

    {
        id: 1,
        nombre: "Leia Organa",
        edad: 22,
        familia: {
            padre: "Anakin Skywalker",
            madre: "Padmé Amidala",
            hermanos: [
                {
                    nombre: "Luke Skywalker",
                    edad: 22,
                },
            ]
        }

    },


]

var video = {
    titulo: "Episodio VI: Return of the Jedi",
    canal: "StarWars",
    descripcion: "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star",
    imagenCanal: "http://starwars.com",
    visitas: 5000
}

var listaVideos = [
    {
        titulo: "Episodio VI: Return of the Jedi",
        canal: "StarWars",
        descripcion: "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star",
        imagenCanal: "http://starwars.com",
        visitas: 5000,
        _comentarios: [
            {
                nombre: "Juan",
                comentario: "Muy Bueno",
                mostrar: true
            },
            {
                nombre: "Juan",
                comentario: "Muy malo",
                mostrar: false
            },
            {
                nombre: "Juan",
                comentario: "Muy Bueno",
                mostrar: true
            },
        ],
        get comentarios() {
            return this._comentarios
        },
        set comentarios(value) {
            this._comentarios = value
        },
    },

    {
        titulo: "Episodio VI: Return of the Jedi",
        canal: "StarWars",
        descripcion: "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star",
        imagenCanal: "http://starwars.com",
        visitas: 5000
    },

    {
        titulo: "Episodio VI: Return of the Jedi",
        canal: "StarWars",
        descripcion: "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star",
        imagenCanal: "http://starwars.com",
        visitas: 5000
    },

    {
        titulo: "Episodio VI: Return of the Jedi",
        canal: "StarWars",
        descripcion: "In the epic conclusion of the saga, the Empire prepares to crush the Rebellion with a more powerful Death Star",
        imagenCanal: "http://starwars.com",
        visitas: 5000
    }

]

console.log(listaVideos[0].comentarios[1]) // me muestra de la lista, el primer video (posicion 0) y el segundo comentario (posicion 1)


console.log(listaVideos[0].comentarios[1].comentario) //aca me muestra solo el comentario (comentarios[1].comentario)
