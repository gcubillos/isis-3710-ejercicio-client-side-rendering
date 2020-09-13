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
        let tituloEvents = document.createElement('h1')
        let titulo = document.createTextNode("Events")
        tituloEvents.appendChild(titulo)
        document.body.appendChild(tituloEvents)
        let tabla = document.createElement('table')

        // Crear el header de la tabla
        let tHeadPuntoA = tabla.createTHead();
        let rowHeader = tHeadPuntoA.insertRow();
        let th = document.createElement("th");
        let textoHeader = document.createTextNode("#");
        th.appendChild(textoHeader);
        rowHeader.appendChild(th);

        console.log(jsonDatos[0])

        // Utilizar los datos del JSON para crear los otros headers de la tabla
        for (let key of Object.keys(jsonDatos[0])) {
            th = document.createElement("th");
            textoHeader = document.createTextNode(key)
            th.appendChild(textoHeader);
            rowHeader.appendChild(th);
        }

        // Introducir datos en la tabla
        for (let index = 0; index < jsonDatos.length; index++) {
            // Agregar numeración de tabla
            let tr = tabla.insertRow();
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


        // Append la tabla
        document.body.appendChild(tabla);

    }
)


// Punto A

/*para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}*/