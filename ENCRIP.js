
document.getElementById("textoDesencriptado").style.display = "none";

function encriptar() {
    var frase = document.getElementById("textoEncriptado").value;
    var special_chars = /[!@#$%^&*(),.?":+º'¡/´`{}|áéíóúÁÉÍÓÚ<>\u00D1]/;
    var upper_case = /[A-Z]/;

  if (special_chars.test(frase) || upper_case.test(frase)) {
    alert("El texto contiene caracteres no permitidos (mayúsculas o caracteres especiales).");
    return;
  }
  
    var textoEncriptado = frase.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
  
    document.getElementById("muneco").style.display = "none";
    document.getElementById("mensaje-no-encontrado").style.display = "none";
    document.getElementById("ingresa-encriptar").style.display = "none";
    document.getElementById("textoDesencriptado").style.display = "block";
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value;
    var textoEncriptado = frase.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
  }
  
  function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
  }
  