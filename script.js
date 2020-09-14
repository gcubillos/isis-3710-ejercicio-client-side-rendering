// Petición de datos del JSON
let request = new XMLHttpRequest();
let jsonDatos = '';


function pedirJSON(url) {
    return new Promise(function (resolve, reject) {
        request.open('GET', url);
        request.onload = function () {
            if (request.status == 200) {
                resolve(this.responseText)
            }
            else {
                console.warn("F")
            }
        };
        request.send();
    })
}

pedirJSON("https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json").then(
    function (response) {
        jsonDatos = JSON.parse(response)
        // Punto A Creación de tabla
        let tituloEventsA = document.createElement('h1')
        let tituloA = document.createTextNode("Events")
        tituloEventsA.appendChild(tituloA)
        document.body.appendChild(tituloEventsA)
        let tablaA = document.createElement('table')

        // Crear el header de la tabla
        let tHeadPuntoA = tablaA.createTHead();
        let rowHeaderA = tHeadPuntoA.insertRow();
        let thA = document.createElement("th");
        let textoHeaderA = document.createTextNode("#");
        thA.appendChild(textoHeaderA);
        rowHeaderA.appendChild(thA);


        // Utilizar los datos del JSON para crear los otros headers de la tabla
        for (let key of Object.keys(jsonDatos[0])) {
            thA = document.createElement("th");
            textoHeaderA = document.createTextNode(key)
            thA.appendChild(textoHeaderA);
            rowHeaderA.appendChild(thA);
        }

        // Introducir datos en la tabla
        for (let index = 0; index < jsonDatos.length; index++) {
            // Agregar numeración de tabla
            let tr = tablaA.insertRow();
            let datoColumna = tr.insertCell();
            let texto = document.createTextNode(index + 1);
            datoColumna.appendChild(texto);
            // Insertar datos de tabla
            for (let key of Object.keys(jsonDatos[index])) {
                datoColumna = tr.insertCell();
                texto = document.createTextNode(jsonDatos[index][key]);
                datoColumna.appendChild(texto);
                // Resaltar la fila
                if (jsonDatos[index][key] === true) {

                    tr.style.backgroundColor = 'red';
                }

            }

        }


        // Agrega la tabla
        document.body.appendChild(tablaA);

        /*
        // Punto B Creación de tabla
        let tituloEvents = document.createElement('h1')
        let titulo = document.createTextNode("Correlation of Events")
        tituloEvents.appendChild(titulo)
        document.body.appendChild(tituloEvents)
        let tabla = document.createElement('table')

        // Crear el header de la tabla
        let tHeadPuntoB = tabla.createTHead();
        let rowHeader = tHeadPuntoB.insertRow();
        let th = document.createElement("th");
        let textoHeader = document.createTextNode("#");
        th.appendChild(textoHeader);
        rowHeader.appendChild(th);


        // Utilizar los datos del JSON para crear los otros headers de la tabla
        for (let key of Object.keys(jsonDatos[0])) {
            th = document.createElement("th");
            textoHeader = document.createTextNode(key)
            th.appendChild(textoHeader);
            rowHeader.appendChild(th);
        }
        for (let index = 0; index<jsonDatos.length; index++)
        {
            for(value in jsonDatos[index])
            {

            }
            
        }

        // Agrega la tabla B
        document.body.appendChild(tabla);*/

        

        
            
        

    }
)