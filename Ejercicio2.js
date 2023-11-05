const estudiantes = [{nombre: "Juan",notas: [98, 96, 87, 88],},{nombre: "María",notas:[94, 95, 86, 87]}]

function calcularPromedioNotas(estudiantes){
    var promedios = []
    estudiantes.forEach(estudiante => {
        var sum = 0 
        for(let i = 0; i<estudiante.notas.length; i++){
            sum = sum + estudiante.notas[i]
        }
        const prom = sum/estudiante .notas.length
        promedios.push({'nombre':estudiante.nombre, 'Promedio':prom})
    });
    console.log(promedios)
}

calcularPromedioNotas(estudiantes)