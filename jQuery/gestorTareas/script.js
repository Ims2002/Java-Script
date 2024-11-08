$(document).ready(function () {
    // Agregación de proyectos al gestor

    $('#project-form').on('submit', function (event) {
        // Evita que se procese el formulario
        event.preventDefault();
        // Tratamos el input del formulario
        const nombreProyecto = $('#project-input').val().trim();

        if (nombreProyecto) {
            const proyectoCreado = $(`
                <div class="project">
                    <h2 class="project-name" contenteditable="false">${nombreProyecto}</h2>
                    <button class="delete-project">Eliminar Evento</button>
                    <form class="task-form">
                        <input type="text" class="task-input" placeholder="Nueva Tarea">
                        <button type="submit">Agregar Tarea</button>
                    </form>
                    <ul class="tasks-list"></ul>
                </div>
            `)
            // Añadir el bloque creado al div vacío del HTML
            $('#projects-container').append(proyectoCreado);
            // Reset del input
            $('#project-input').val('');
        }

    });

});

// Funcionalidad para eliminar proyectos
$('#projects-container').on('click', '.delete-project', function () {
    // Buscamos el elemento más cercano (él mismo) y lo eliminamos
    $(this).closest('.project').remove();
});

// Agregar tareas
$('#projects-container').on('submit', '.task-form', function (event) {

    event.preventDefault();

    // Busca el input más cercano (él mismo) y obtenemos su valor
    // Input de uno de los proyectos creados
    const inputTareas = $(this).find('.task-input');

    // Tarea Creada
    const contenidoTarea = inputTareas.val().trim();

    // Si la tarea existe
    if (contenidoTarea) {
        const tareaCreada = $(`
            
            <li class="task">
                <span class="task-name">${contenidoTarea}</span>
                <button class="delete-task">Eliminar</button>
                <button class="mark-important">Importante</button>
                <button class="mark-completed">Completada</button> 
            </li>

        `)
        // Selecciona todos los elementos hermanos de $(this)
        // que también tienen la clase (lista de tareas)

        $(this).siblings('.tasks-list').append(tareaCreada);
        inputTareas.val('');

    }

});

// Eliminar tareas
$('#projects-container').on('click', '.delete-task', function () {
    // Eliminar la tarea 
    $(this).closest('.task').remove();
});

// Editar el nombre del proyecto con doble click
$('#projects-container').on('dblclick', '.project-name', function () {
    // Hacer que el nombre del proyecto sea editable al hacer doble clic
    $(this).attr('contenteditable', 'true').focus();
});

// Guardar los cambios con enter o click fuera
$('#projects-container').on('keypress blur', '.project-name', function (event) {
    // Si se presiona Enter (código 13) o se hace clic fuera del campo
    if (event.which === 13 || event.type === 'blur') {
        // Desactivar la edición para guardar el cambio
        $(this).attr('contenteditable', 'false');
    }
});

// Resaltar tareas al pasar el ratón
$('#projects-container').on('mouseenter', '.task', function () {
    // Agregar la clase 'hovered' para cambiar el estilo al pasar el ratón
    $(this).addClass('hovered');
}).on('mouseleave', '.task', function () {
    // Quitar la clase 'hovered' al salir el ratón del área
    $(this).removeClass('hovered');
});


// En las dos siguientes se añade una clase que ya
//  tiene estilo predefinido en CSS

// Marcar tareas como importantes
$('#projects-container').on('click', '.mark-important', function () {
    // Alternar la clase 'important' para resaltar la tarea como importante
    // Si no es importante la hace y si lo es la elimina
    $(this).closest('.task').toggleClass('important');
});

$('#projects-container').on('click', '.mark-completed', function () {
    // Alternar la clase 'completed' para marcar la tarea como completada (tachada)
    $(this).closest('.task').toggleClass('completed');
});
 
