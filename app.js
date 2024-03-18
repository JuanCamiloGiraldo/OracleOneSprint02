let palabra =  ["HTML","OSO", "PANDA","CORAZON", "PERRO", "AGUACATE", "TELEFONO", "PAPAS","LEON", "GATO", "TIGRE",
"PELICULA" ,"PERDON" ,"ALFABETO", "FE","PERSONA","HUMANO"];

console.log(palabra);
let secretaString = palabra[Math.floor(Math.random() * (palabra.length))];
let secreta = [];
let correcta = [];
let incorrecta = [];
let indice = [];
let numero = 1;
let li = document.createElement("li");
let invisible;
console.log(secreta);   
let fondo = `./imagenes/${numero}.png`; 
document.querySelector('#imagen').style.backgroundImage = `url("./imagenes/${numero}.png")`;

function secretaArray(){
    
    for (let i = 0; i < secretaString.length; i++) {
        secreta[i] = secretaString[i];
    }
} 


function cambiarFondo(entrada){
    if(secreta.includes( entrada) ){
    }else if (numero<8 && !incorrecta.includes(entrada)){
        let ulincorrecta = document.getElementById("incorrecto");
        let li = document.createElement("li");
        li.textContent = (entrada);
        ulincorrecta.appendChild(li);    
        
        numero = numero + 1;
        incorrecta.push(entrada);
        document.querySelector('#imagen').style.backgroundImage = `url("./imagenes/${numero}.png")`;
        if (numero == 8) {
            let reiniciar = document.getElementById("finDelJuego");
            reiniciar.removeAttribute("hidden");
        }
    }
}
function palabraSecreta(){
    invisible = new Array(secreta.length);
    invisible.fill("\u00A0\u00A0 ");
    console.log(invisible);
    let ulpalabra = document.getElementById("palabra");
    for (let i = 0; i < secreta.length; i++) {
        let li = document.createElement("li");
        li.textContent = (invisible[i]);
        ulpalabra.appendChild(li);        
    }
    return invisible;

}

function crearGuiones(){
    let guiones = new Array(secreta.length);
    guiones.fill("_");
    let ulguiones = document.getElementById("guiones");
    for (let i = 0; i < secreta.length; i++) {
        let li = document.createElement("li");
        li.textContent = (guiones[i]);
        ulguiones.appendChild(li);        
    }
    return;
}

    function indicesCorrectos(entrada){
    if (correcta.includes(entrada)) {
    }
    else if(secreta.includes(entrada)){
        for(let i = 0; i < secreta.length; i++){
            if(entrada == secreta[i]){
                indice.push(i);
            }
        }

    }
}

function letrasCorrectas(entrada){
    indicesCorrectos(entrada);
    let ulpalabra = document.getElementById("palabra");
    if(correcta.includes(entrada)){
        console.log("es");
    }else if(secreta.includes(entrada)){
        
        
        for (let i = 0; i < indice.length; i++) {
            let letra = document.createElement("li");
            letra.textContent = secreta[secreta.indexOf(entrada)]
            ulpalabra.replaceChild(letra, ulpalabra.children[indice[i]]);       
            invisible[indice[i]] = entrada;
        }
        console.log(invisible);
     correcta.push(entrada);
    }
indice = [];
}
function comprobar(palabra, invisible){

    let cadena1 = JSON.stringify(palabra);
    let cadena2 = JSON.stringify(invisible);
    if (cadena1 === cadena2) {
        let reiniciar = document.getElementById("ganaste");
        reiniciar.removeAttribute("hidden");
    } else {
        console.log("Los arreglos son diferentes.");
    }
  
   
}
document.addEventListener("keydown", function(event) {
    let entrada = event.key;
    entrada = entrada.toUpperCase();
  if (/^[a-zA-Z]$/.test(event.key)) {
    cambiarFondo(entrada);
    
    letrasCorrectas(entrada);
    comprobar(secreta, invisible);
  }
    
});

window.onload = function(){
    secretaArray();
    palabraSecreta();
    crearGuiones();
}
function reiniciarJuego(){

    let ulerrores = document.getElementById('incorrecto');
    let ulguiones = document.getElementById('guiones');
    let ulpalabra = document.getElementById('palabra')
    while (ulguiones.firstChild) {
        ulguiones.removeChild(ulguiones.firstChild);
    } 
    ulpalabra.removeChild(ulpalabra.firstChild);
    while (ulerrores.firstChild) {
        ulerrores.removeChild(ulerrores.firstChild);
    }
    while (ulpalabra.firstChild) {
        ulpalabra.removeChild(ulpalabra.firstChild);
    }
    
    secretaString = palabra[Math.floor(Math.random() * (palabra.length))];
    let reiniciar = document.getElementById("finDelJuego");
    let reiniciar2 = document.getElementById("ganaste");
   /* if (numero == 8) {
        reiniciar.setAttribute("hidden",true);
    }else{
        reiniciar2.setAttribute("hidden",true);
    }*/

    secreta = [];
    correcta = [];
    incorrecta = [];
    indice = [];
    check = 0;
    numero = 1;
    secretaArray();
    crearGuiones();
    palabraSecreta();
    document.querySelector('.elemento').style.backgroundImage = `url("./imagenes/${numero}.png")`;
   
}