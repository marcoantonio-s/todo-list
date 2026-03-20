let tareas = [
    {id: 1,tarea: "Estudiar JS", realizada: false},
    {id: 2,tarea: "Hacer ejercicio", realizada: false},
    {id: 3,tarea: "Leer un libro",realizada: false}  
]

const tareaList = document.getElementById("tareaList");
const renderList = () => {
    const cantTareas = document.getElementById("cantTareas");
    cantTareas.innerHTML = tareas.length;

    const cantRealizadas = document.getElementById("cantRealizadas");
    const realizadas = tareas.filter(tarea => tarea.realizada).length;
    cantRealizadas.innerHTML = realizadas;
    
    let template = "";
    for (let lista of tareas) {
        template += `
        <li class="list-group-item d-flex justify-content-between align-items-center"><span>${lista.id} - ${lista.tarea}</span>
        <div>
            <input class="form-check-input me-2" type="checkbox" onclick="modificarEstado(${lista.id})" ${lista.realizada ? "checked" : ""}>
            <button class="btn btn-danger btn-sm" onclick="borrarTarea(${lista.id})">Eliminar</button>
        </div>
        </li>
        `;
    }
    tareaList.innerHTML = template;
}

const modificarEstado = (id) => {
    const indiceTareaModificar = tareas.findIndex(el => el.id == id);
    tareas[indiceTareaModificar].realizada = !tareas[indiceTareaModificar].realizada;
    if (tareas[indiceTareaModificar].realizada) {
        alert("¡Muy bien! tarea realizada: " + tareas[indiceTareaModificar].tarea);  
    }
    renderList();
}
 
const borrarTarea = (id) => {
    const indiceTareaEliminar = tareas.findIndex(el => el.id == id)
    tareas.splice(indiceTareaEliminar, 1)
    renderList();
}

renderList()

const newTarea = document.getElementById("newTarea");
const addTarea = document.getElementById("addTarea");

addTarea.addEventListener("click", () => {
    let nuevaTarea = {
        id: tareas.length + 1,
        tarea: newTarea.value,
        realizada: false,
    }
    tareas.push(nuevaTarea);
    renderList();
    newTarea.value = "";
})