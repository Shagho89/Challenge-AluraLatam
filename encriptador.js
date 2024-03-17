function encriptar(texto, desplazamiento) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    texto = texto.toLowerCase();
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];
        var posicion = alfabeto.indexOf(caracter);
        if (posicion !== -1) {
            var nuevaPosicion = (posicion + desplazamiento) % alfabeto.length;
            textoEncriptado += alfabeto[nuevaPosicion];
        } else {
            textoEncriptado += caracter;
        }
    }
    return textoEncriptado;
}

function desencriptar(textoEncriptado, desplazamiento) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz";
    textoEncriptado = textoEncriptado.toLowerCase();
    var textoDesencriptado = "";

    for (var i = 0; i < textoEncriptado.length; i++) {
        var caracter = textoEncriptado[i];
        var posicion = alfabeto.indexOf(caracter);
        if (posicion !== -1) {
            var nuevaPosicion = (posicion - desplazamiento + alfabeto.length) % alfabeto.length;
            textoDesencriptado += alfabeto[nuevaPosicion];
        } else {
            textoDesencriptado += caracter;
        }
    }
    return textoDesencriptado;
}

function encriptartexto() {
    var textoOriginal = document.getElementById("cajatexto").value;
    var desplazamiento = 3;
    var textoEncriptado = encriptar(textoOriginal, desplazamiento);
    document.getElementById("resultadocaja").value = textoEncriptado;
}

function desencriptartexto() {
    var textoEncriptado = document.getElementById("resultadocaja").value;
    var desplazamiento = 3;
    var textoOriginal = desencriptar(textoEncriptado, desplazamiento);
    document.getElementById("resultadocaja").value = textoOriginal;
}

function copiar() {
    var texto = document.getElementById("resultadocaja").value;
    document.getElementById("copiar").value = texto;
    document.getElementById("copiar").select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
function borrartexto(){
    document.getElementById("cajatexto").value ="";
    document.getElementById("resultadocaja").value="";
    document.getElementById("copiar").value = "";
}