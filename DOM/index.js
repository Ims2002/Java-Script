window.onload = function() {

    // EjDom1

    console.log("Ultims Elements Llistes");
    let ultimsElements = document.querySelectorAll("li:last-child");
    for (let i = 0; i<ultimsElements.length - 1; i++) {
        console.log(ultimsElements[ultimsElements.length-1].textContent);
    }

    // EjDom2
    let contenidor = document.querySelectorAll("#contenidor");
    console.log("Hay", contenidor.length, " nodos Hijo");
    
    for(let i = 0 ; i<contenidor.length;i++)  {
        let elemento = contenidor[i];       
    
        console.log("Nodo "+(i+1)+ ":"+elemento.textContent);
        
        if (elemento.hasChildNodes()) {
            console.log("Nodo con hijos");
            for (let j = 0; j < elemento.childNodes.length; j++) {
                let hijo = elemento.childNodes[j];
                console.log(" - Hijo"+ hijo.textContent);
            }
        }

    }





}