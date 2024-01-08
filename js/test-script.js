function suma(a, b){
    return a+b;
}

console.log("Hola Mundo" + suma(2, 3));

function initializePage() {
    // Mensajes de la función initializePage()
    var mensajes = [
        "********** Onload completed **********",
        "****** Onload completed ****",
        "User Agent: " + navigator.userAgent,
        "Language: " + navigator.language,
        "Languages: " + navigator.languages.join(', ')
    ];

    // Concatenar mensajes y obtener el elemento de textarea
    var mensajesTexto = mensajes.join('\n');
    var textareaPegado = document.getElementById("textoPegado");

    // Mostrar mensajes en el textarea
    textareaPegado.value = mensajesTexto;

    // Obtener el elemento de entrada de texto
    var inputTexto = document.getElementById("texto");

    // Concatenar el texto predefinido al textarea
    textareaPegado.value += '\n\nTexto predefinido: ' + inputTexto.value;
}

function copiarTexto() {
    // Obtener el elemento de entrada de texto
    var inputTexto = document.getElementById("texto");

    // Seleccionar el texto dentro del elemento de entrada de texto
    inputTexto.select();
    
    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Obtener el elemento de textarea para pegar el texto copiado
    var textareaPegado = document.getElementById("textoPegado");

    // Obtener el texto actual del textarea
    var textoActual = textareaPegado.value;

    // Mostrar el texto copiado en el textarea
    textareaPegado.value = textoActual + '\n\nTexto copiado: ' + inputTexto.value;
}