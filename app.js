


function btnEncriptar(){
    // let modificar = document.querySelector('#textoUsuario');
    // modificar.innerHTML="holas";
    let strUser = document.querySelector('#textoUsuario').value;
    strUser = strUser.toLowerCase();
    let textoCifrado = strUser.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    if (strUser == 0){
        document.querySelector('#textoUsuario').placeholder= 'Por favor, ingrese texto';
    }else{
        document.querySelector('#textoUsuario').placeholder = 'Texto encriptado';
        document.querySelector('#resultadoTexto').value= textoCifrado;
        document.querySelector('#textoUsuario').value="";
        let btnCopiarr = document.querySelector('#copiar');
        btnCopiarr.style.display="block";
    }
}


function btnDesencriptar(){
    let strUser = document.querySelector('#textoUsuario').value;
    strUser = strUser.toLowerCase();
    let textoDescifrado = strUser.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    if (strUser == 0){
        ocument.querySelector('#textoUsuario').placeholder= 'Por favor, ingrese texto';
    }else{
        document.querySelector('#resultadoTexto').value= textoDescifrado;
        document.querySelector('#textoUsuario').placeholder = 'Texto desencriptado';
        document.querySelector('#textoUsuario').value= '';
        let btnCopiarr = document.querySelector('#copiar');
        btnCopiarr.style.display="block";
    }
    
}


