const contraseña = document.getElementById("contraseña");
const contraseñaConfirmada = document.getElementById("confirmar-contra");
const nombre = document.getElementById("nombre");

contraseñaConfirmada.addEventListener('input',validarContraseña)

function validarContraseña (){
    if(contraseña.value !== contraseñaConfirmada.value){
        console.log("hola");
        contraseñaConfirmada.setCustomValidity("Las contraseñas no coinciden")
    }else{
        contraseñaConfirmada.setCustomValidity("");
    }
}