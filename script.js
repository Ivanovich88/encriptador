const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.getElementsByClassName.backgroundImage = "none";
}

function encriptar(stringEncriptar){
    console.log(stringEncriptar);
let  matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"], ["o","ober"],["u","ufat"]]
stringEncriptada = stringEncriptar.toLowerCase()

for (let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
}

function desencriptar(stringDesencriptar){
    console.log(stringDesencriptar);
let  matrizCodigo = [["e", "enter"], ["i", "imes"],["a","ai"], ["o","ober"],["u","ufat"]]
stringDesencriptar = stringDesencriptar.toLowerCase()

for (let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptar.includes(matrizCodigo[i][1])){
        stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
}
return stringDesencriptar;


}