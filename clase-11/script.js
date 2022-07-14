class Tarea {
    constructor(nombreTarea, textoTarea) {
        this.nombre = nombreTarea
        this.texto = textoTarea
    }
}

let tareas = []

if(localStorage.getItem('storageTareas')) {
    tareas = JSON.parse(localStorage.getItem('storageTareas'))
} else {
    localStorage.setItem('storageTareas', JSON.stringify(tareas))
}

const form = document.getElementById('idForm')
const botonTareas = document.getElementById('idBotonTarea')
const divTareas = document.getElementById('divTareas')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e)
    let datForm = new FormData(e.target)
    //console.log(`${datForm.get('nombre')} - ${datForm.get('texto')}`)
    const tarea = new Tarea(datForm.get('nombre'),datForm.get('texto'))
    tareas.push(tarea)
    localStorage.setItem('storageTareas', JSON.stringify(tareas))
    form.reset()
})

botonTareas.addEventListener('click', () => {
    let tareasStorage = JSON.parse(localStorage.getItem('storageTareas'))
    divTareas.innerHTML = ""
    tareasStorage.forEach((tarea,indice) => {
        divTareas.innerHTML += `
            <div class="card border-primary mb-3" id="tarea${indice}" style="max-width: 20rem;margin:4px;">
                <div class="card-header">${tarea.nombre}</div>
                <div class="card-body">
                <h4 class="card-title">${tarea.texto}</h4>
                <button class="btn btn-danger">Eliminar Tarea</button>
                </div>
            </div>
        `
    })
    
    tareasStorage.forEach((tarea, indice) => {
        document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild.addEventListener('click', () => {
            document.getElementById(`tarea${indice}`).remove()
            tareas.splice(indice, 1)
            localStorage.setItem('storageTareas', JSON.stringify(tareas))
            console.log(`${tarea.nombre} eliminada`)
            console.log(tareas)
        })
    })
})
