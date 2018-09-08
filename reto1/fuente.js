// Se procede a integrar las fases anteriores
// Daniel Collazos

var start = false; // bandera inicio del juego
var bandera = false; // bandera estado del juego pausado o no

var pos_ayuda = 0; // index de letra a mostrar
var num_ayudas = 0; // numero de pistas segun nivel de dificultad nivel 1->2,nivel 2->1,nivel 3->0

var contadorError = 1; // Intentos fallidos

var minutos = 1; // Minutos de duracion del juego
var segundos = 60; // Segundos de duracion del juego

var canvas = document.getElementById("mi_ahorcado");
var ctx = canvas.getContext("2d");
canvas.width = 0.5 * window.innerWidth;
canvas.height = 0.6 * window.innerHeight;
var w = canvas.width;
var h = canvas.height;

var pos_x = 0; // posicion inicial en x del trazo
var pos_y = 0; // posicion inicial en y  del trazo
var final_x = 0; // posicion final en x del trazo
var final_y = 0; // posicion final en y del trazo


/**
 * Niveles de Dificultad
 * Nivel 1: 70% de la palabra se muestra
 * Nivel 2: 50% de la palabra se muestra
 * Nivel 3: 30% de la palabra se muestra
 */
var niveles_dificultad = [0.3, 0.5, 0.7];

var palabra = ""; // Palabra seleccionada para el juego
var palabraJuego = ""; // La palabra mostrada al usuario

var numero_ocultar; // numero de letras a ocultar segun nivel de dificultad
var posiciones = []; // posiciones dentro de la palabra a ocultar
var letrasJuego = [];
var letrasOcultas = [];
var letrasIngresadas = [];

var nombres_nivel_dificultad = ["Básico", "Intermedio", "Experto"];
var palabras = ['abeja','águila','araña','avispa','ballena','bisonte','búfalo','burro','caballo','camello','canario','cangrejo','canguro','caracol','cebra','cerdo','chimpancé','ciervo','cisne','cocodrilo','elefante','escarabajo','escorpión','foca','gallina','gallo','gato','golondrina','hipopótamo','hormiga','jabalí','jirafa','león','loro','mosca','mosquito','oso','oveja','perdiz','perro','pingüino','pollo','saltamontes','serpiente','tigre','topo','toro','tortuga','vaca'];
var letrasPermit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','á','é','í','ó','ú','ü'];


// funcion para inicar o continuar el ahorcado
function banderaTrue() {
    if (!start) {
        dibujar(1);
        start = true;
        bandera = true;
        generar_palabra();
        document.getElementById("palabra").innerHTML = palabraJuego;
        document.getElementById("nivel_dificultad").innerHTML = nombres_nivel_dificultad[indice_dificultad];
        banderaTrue();
    } else {
        bandera = true;
    }
}
// funcion para pausar el juego
function banderaFalse() {
    bandera = false;
}
// Funcion principal para validar los datos ingresados por teclado y progreso del juego
function validar() {
    if (bandera) {
        var l = document.getElementById("letra");
        var recibido = l.value;
        if (recibido.length == 1) {
            if (letrasPermit.includes(recibido)) {
                if (letrasOcultas.includes(recibido)) {
                    for (let index = 0; index < letrasOcultas.length; index++) {
                        if (letrasOcultas[index] == recibido) {
                            actualizarPalabra(recibido);
                            letrasOcultas[index] = "_";
                            letrasIngresadas.push(recibido);
                        }
                    }
                } else {
                    if (letrasIngresadas.includes(recibido)) {
                        mensaje("Letra ya ingresada, pruebe otra");
                    } else {
                        mensaje("Letra Incorrecta");
                        document.getElementById("letra").value = "";
                        // Contador de fallos para ir dibujando al ahorcado
                        contadorError = contadorError + 1;
                        dibujar(contadorError);
                        // Se llego al tope, es decir, ahorcado
                        if (contadorError == 8) {
                            alert("Fin del Juego");
                            reiniciar();
                        }
                    }
                }
            } else {
                mensaje("El caracter es incorrecto");
            }
        } else {
            mensaje("ingrese una sola letra");
        }
    } else {
        mensaje("Juego en pausa... Pulse Continuar.");
    }
    document.getElementById("letra").value = "";
}
// Funcion que lleva el tiempo de juego
function tiempoDeJuego() {
    if (bandera) {
        if (segundos == 0) {
            if (minutos == 0) {
                alert("¡Fin del Juego!, la palabra era: " + palabra);
                reiniciar();
            }
            minutos = minutos - 1;
            segundos = 60;
        }
        segundos = segundos - 1;
        var segundosString = "";
        if (segundos < 10) {
            segundosString = "0" + segundos;
        } else {
            segundosString = "" + segundos;
        }
        document.getElementById("contador").innerHTML = minutos + ':' + segundosString;
    }
}
// Cuando cambia la dificultad
function generar_palabra() {
    palabraJuego = "";
    posiciones = [];
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    letrasJuego = palabra.split('');
    indice_dificultad = document.getElementById("nivel_dificultad_select").value - 1;
    numero_ocultar = Math.floor(niveles_dificultad[indice_dificultad] * palabra.length);
    if (numero_ocultar == 0) {
        numero_ocultar = 1;
    }
    var contador = 0;
    while (contador < numero_ocultar) {
        var x = Math.floor((Math.random() * palabra.length));
        if (!posiciones.includes(x)) {
            posiciones.push(x);
            contador++;
        }
    }
    for (let index = 0; index < posiciones.length; index++) {
        letrasOcultas[index] = letrasJuego[posiciones[index]];
        letrasJuego[posiciones[index]] = " __ ";
    }
    for (let index = 0; index < letrasJuego.length; index++) {
        palabraJuego = palabraJuego + letrasJuego[index];
    }
    minutos = 1;
    segundos = 59;
    bandera = true;
    document.getElementById("palabra").innerHTML = palabraJuego;
    document.getElementById("nivel_dificultad").innerHTML = nombres_nivel_dificultad[indice_dificultad];
    document.getElementById("contador").innerHTML = minutos + ':' + segundos;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujar(1);
}
// Funcion que actualiza la palabra mostrada
function actualizarPalabra(letraRecibida) {
    for (let index = 0; index < palabra.split('').length; index++) {
        if (palabra.split('')[index] == letraRecibida && letrasJuego[index] == " __ ") {
            letrasJuego[index] = "<strong>" + letraRecibida + "</strong>";
        }
    }
    palabraJuego = "";
    for (let index = 0; index < letrasJuego.length; index++) {
        palabraJuego = palabraJuego + letrasJuego[index];
    }
    document.getElementById("palabra").innerHTML = palabraJuego;
    document.getElementById("letra").value = "";
    if (!letrasJuego.includes(" __ ")) {
        reiniciar();
        alert("Ganaste!!! Fin del Juego, palabra: " + palabra);
    }
}
// Funcion para dibujar al ahorcado
function dibujar(etapa) {
    switch (etapa) {
        // Base
        case 1:
            pos_x = 0.1 * w;
            pos_y = 0.9 * h;
            final_x = 0.9 * w;
            final_y = 0.9 * h;
            break;
        // Barra
        case 2:
            pos_x = 0.15 * w;
            pos_y = 0.9 * h;
            final_x = 0.15 * w;
            final_y = 0.1 * h;
            break;
        // Barra lateral
        case 3:
            pos_x = 0.15 * w;
            pos_y = 0.1 * h;
            final_x = 0.6 * w;
            final_y = 0.1 * h;
            break;
        // Barra vertical corta
        case 4:
            pos_x = 0.6 * w;
            pos_y = 0.1 * h;
            final_x = 0.6 * w;
            final_y = 0.2 * h;
            break;
        // Cara del ahorcado
        case 5:
            pos_x = 0.6 * w;
            pos_y = 0.3 * h;
            break;
        case 6:
            // Cuerpo del Ahorcado
            pos_x = 0.6 * w;
            pos_y = 0.4 * h;
            final_x = 0.6 * w;
            final_y = 0.5 * h;
            break;
        // Brazos del ahorcado
        case 7:
            pos_x = 0.55 * w;
            pos_y = 0.45 * h;
            final_x = 0.65 * w;
            final_y = 0.45 * h;
            break;
        // Piernas del ahorcado
        case 8:
            pos_x = 0.45 * w;
            pos_y = 0.5 * h;
            final_x = 0.75 * w;
            final_y = 0.5 * h;
        default:
            break;
    }
    if (etapa != 5) {
        ctx.beginPath();
        ctx.moveTo(pos_x, pos_y);
        ctx.lineTo(final_x, final_y);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.arc(pos_x, pos_y, 0.1 * h, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }


}
// Cuando finalice el juego
function reiniciar() {
    location.reload();
}
// Funcion pista
function ayuda() {
    if (bandera) {
        if (num_ayudas < (2 - indice_dificultad)) {
            pos_ayuda = posiciones[Math.floor((Math.random() * (posiciones.length)))];
            actualizarPalabra(palabra.split('')[pos_ayuda]);
            num_ayudas++;
            document.getElementById("letra").value = "";
        }
    } else {
        mensaje('Juego en Pausa...');
        document.getElementById("letra").value = "";
    }
}
// Funcion para atender cambio de tamanio de pantalla
window.onresize = function () {
    canvas.width = 0.5 * window.innerWidth;
    canvas.height = 0.6 * window.innerHeight;
    w = canvas.width;
    h = canvas.height;
    dibujo();
}
// Funcion para manejar el tiempo del juego
window.onload = function () {
    setInterval(tiempoDeJuego, 1000);
    dibujar(1);
}
// Funcion para saber que tanto del ahorcado dibujar
function dibujo() {
    for (let index = 0; index < contadorError; index++) {
        dibujar(index + 1);
    }
}
// Funcion para manejo de mensajes
function mensaje(texto) {
    var x = document.getElementById("snackbar");
    x.innerHTML = texto;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
}