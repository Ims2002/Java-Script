/*
let tiempoRestante = 15;
        const display = document.getElementById('cuentaRegresiva');

        const idInterval = setInterval(function() {
            if (tiempoRestante >= 0) {
                display.innerText = `${tiempoRestante} segundos`;
                tiempoRestante--;
            } else {
                clearInterval(idInterval);
                display.innerText = '¡Tiempo agotado!';
            }
        }, 1000);

*/

// Abre una ventana con X segundos especificados, al terminar la cuenta
// de segundos se elimina el contador y se abre la página web especificada

document.getElementById('startButton').onclick = function() {
    let seconds = parseInt(document.getElementById('secondsInput').value);

    // Abrir una nueva ventana centrada
    const newWindow = window.open("", "Instituto", "width=400,height=200,left=" + 
        (window.screen.availWidth / 2 - 100) + ",top=" + 
        (window.screen.availHeight / 2 - 50) + ",toolbar=no");

    // Dentro de la nueva ventana iniciamos un contador
    const countdown = setInterval(() => {
        seconds--;
        // Cuando el contador llegue a 0 abrimos la URL especificada
        if (seconds <= 0) {
            clearInterval(countdown);
            newWindow.location.href = 'https://portal.edu.gva.es/ieslamar/es/'; 
            setTimeout(() => {
                newWindow.close();
            }, 10000); // Cierra la ventana después de 10 segundos
        } else {
            newWindow.document.body.innerHTML = "<h1>" + seconds + "</h1>"; // Muestra el contador
        }
    }, 1000);
};
