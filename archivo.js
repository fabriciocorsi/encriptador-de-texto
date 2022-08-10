var botonEncriptar = document.querySelector(".botonencriptar");
var botonDesencriptar = document.querySelector(".botondesencriptar");
var munieco = document.querySelector(".contenedor-imagen")
var h3 = document.querySelector(".contenedor-texto")
var parrafo = document.querySelector(".contenedor-parrafo")
var resultado = document.querySelector(".texto-resultado")
var botonCopiar = document.querySelector(".bcopiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar() {
    var area = recuperarTexto ()
    ocultarAdelante();
    resultado.textContent = encriptarTexto(area);
    document.getElementsByClassName("caja")[0].value = ""; /*borar caja */
}

function desencriptar() {
    var area = recuperarTexto()
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(area);
    document.getElementsByClassName("caja")[0].value = ""; /*borar caja */
}

function recuperarTexto() {
    var area = document.querySelector(".caja")
    return area.value
}

function ocultarAdelante() {
    munieco.classList.add("esconder");
    h3.classList.add("esconder");
    parrafo.classList.add("esconder");
}


function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }  
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }  
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }  
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }  
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }  
        else {
            textoFinal = textoFinal + texto[i];
        } 
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

 /* copiar resultado */
document.querySelector(".bcopiar").addEventListener("click", () => {
    copiar(resultado)
})

function copiar(resultado) {
    var textoOculto = document.createElement("input")
      

    textoOculto.setAttribute("value", resultado.innerText);

    document.body.appendChild(textoOculto);

    textoOculto.select();
    document.execCommand ("copy");
    document.body.removeChild(textoOculto);
    resultado.textContent = value ="" /*borar resultado o caja*/
}








