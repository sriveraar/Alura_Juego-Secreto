let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoelemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoelemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        // El usuario no acertó.
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoelemento('p','El número secreto es menor');
            }else{
                asignarTextoelemento('p','El número secreto es mayor');
            }
            intentos++;
            limpiarcaja();
        }
    return;
}

function limpiarcaja() {
    document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    // Si ya sorteamos todos los números.
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoelemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        // Si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }
}

function condicionesIniciales() {
    asignarTextoelemento('h1', 'Juego del número secreto');
    asignarTextoelemento('p', `Indica un número del 1 al 10 ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja.
    limpiarcaja();

    // Indicar mensaje de intervalo de número.
    // Generar el número aleatorio.
    // inicializar el número de intentos.
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled',true);

}

condicionesIniciales();