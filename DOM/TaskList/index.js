let tareas, prioridades = [];

function crearTareas() {
    if (tareas.length > 0) {
        alert("Ya se han creado tareas");
        return;
    }

    for (let i = 0; i < 5; i++) {
        let tarea = prompt(`Tarea num: ${i+1}:`);
        if (tarea) { // Existe
            tareas.push(tarea);
            prioridades.push("");
        }
    }

    mostrarTareas();

}

function mostrarTareas() {
    let listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = "";

    let ul = document.createElement("ul");

    tareas.forEach((tarea,index) => {
        let li = document.createElement("li");
        li.textContent = tarea;

        if (prioridades[index]) {
            li.classList.add(prioridades[index]);
        }

        ul.appendChild(li);

    });

    listaDiv.appendChild(ul);
}


function prioridadTarea() {

    if (tareas.length === 0) {
        alert("No hay tareas agendadas.");
        return;
    }


    let tarea = parseInt(prompt("Qué tarea quieres modificar? [1-5]"));
    if (tarea > 0 && tarea <= tareas.length) {
        let prioridad = prompt("Selecciona una prioridad: red, orange, green, delete")
    
        let listaDiv = document.getElementById("lista");
        let items = document.getElementsByTagName("li");
        items[tarea-1].classList.remove("prioridad-red", "prioridad-orange", "prioridad-green");
    
        if (prioridad === "red") {
            items[tarea - 1].classList.add("prioridad-red");
            prioridades[tarea - 1] = "prioridad-red"; // Guardamos la prioridad en el array prioridades
        } else if (prioridad === "orange") {
            items[tarea - 1].classList.add("prioridad-orange");
            prioridades[tarea - 1] = "prioridad-orange";
        } else if (prioridad === "green") {
            items[tarea - 1].classList.add("prioridad-green");
            prioridades[tarea - 1] = "prioridad-green";
        } else if (prioridad === "delete") {
            // Si se elige "delete", quitar la prioridad
            prioridades[tarea - 1] = ''; // Limpiar la prioridad
        } else {
            alert("Prioridad no válida.");
        }

        mostrarTareas();
    
    } else {
        alert("Carácter no válido");
    }
}


function borrarTareas() {
    if (!tareas.length == 0) {

        let listaDiv = document.getElementById("lista");
        listaDiv.innerHTML = "";

    } else {

        prompt(`No hay tareas a borrar.`);
    
    }
}


function cambiarTareaNombre() {

    if (tareas.length == 0) {
        alert("No hay tareas agendadas.");
        return;
    }

    let posicionPalabra = parseInt(prompt("Cuál de tus tareas deseas cambiar de nombre [1-5]"));

    if (posicionPalabra>0&&posicionPalabra<=tareas.length) {
        let nuevaTarea = prompt("Nombre de la nueva tarea");
        tareas[posicionPalabra-1] = nuevaTarea;
        mostrarTareas(tareas);
    }else {
        alert("Carácter no válido");
        return;
    }

}

function cambiarTareaPos() {

    if (tareas.length == 0) {
        alert("No hay tareas agendadas.");
        return;
    }

    let posicionOrigen = parseInt(prompt("Cuál de tus tareas deseas cambiar de posición? [1-5]"));
    let posicionDestino = parseInt(prompt("A que posicion deseas cambiar la tarea? [1-5]"));

    
    mostrarTareas(swap(posicionOrigen-1,posicionDestino-1,tareas));

}





// Función de StackOverflow
let swap = (index1, index2, arr) => {
    if (index1 >= arr.length || index2 >= arr.length || index1 < 0 || index2 < 0) return;
  
    // Intercambiamos los elementos en las posiciones index1 e index2
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}