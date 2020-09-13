// Petición de datos del JSON
let request = new XMLHttpRequest();
let jsonDatos = '';

request.open('GET',"https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json");
request.onload = function(){
    if(request.status == 200)
    {
        jsonDatos = this.response
        console.log(this.response)
    }
    else{
        console.warn("F")
    }
}

// Punto A
let par = document.createElement('p');
par.textContent = jsonDatos;
document.body.appendChild(par);

/*para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}*/