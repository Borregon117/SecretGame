//CODIGO PAGINA

let numeroSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroSecreto === numeroDeUsuario) {
        textoElemento('p', `Haz acertado en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto)
            textoElemento('p', 'El numero es menor');
        else {
            textoElemento('p', 'El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    textoElemento('h1', 'JUEGO SECRETO');
    textoElemento('p', `Elije un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generacionNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function textoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function generacionNumeroSecreto() {
    numeroGenerado = Math.floor(Math.random() * 10 + 1);
    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo) {
        textoElemento('p', 'Se han sorteado ya todos los numeros');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generacionNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
//CODIGO RETOS
/*
function funcionBienvenida (nameUser) {
    console.log(`Hola ${nameUser}`);
}

funcionBienvenida('Macario');

function duplicacionNumero (number) {
    let  numberNeto = number + number;
    parseInt(numberNeto);
    console.log(`Numero duplicado: ${numberNeto}`);
} 

duplicacionNumero(3);

function promedioNumeros (numberProm1, numberProm2, numberprom3) {
    preProm = numberProm1 + numberProm2 + numberprom3;
    Promedio = preProm / 3;
    parseFloat(Promedio);
    console.log(`Promedio de ${numberProm1}, ${numberProm2}, ${numberprom3}, es: ${Promedio}`);
}

promedioNumeros(5,5,5);

function mayorQue(a,b){
    if (a > b) {
        console.log(a)        
    }else{
        console.log(b)
    }
}
mayorQue(2,1);

function elevadoCuadrado(numeroCuadrado){
    let numberNeto = Math.pow(numeroCuadrado, 2);
    parseInt(numberNeto);
    console.log(`Numero elevado al cuadrado ${numberNeto}`);
}
elevadoCuadrado(5);
*/
