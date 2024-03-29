const inputs = document.querySelectorAll("input");
const spanErrores = document.querySelectorAll("span");
const botonEnviar = document.querySelector("button");
const formulario = document.querySelector("form");
const mensajeAviso = document.getElementById("aviso");
const mensajeFormEnviado = document.querySelector(".modal");
const botonCerrarMensaje = document.querySelector(".modal button");

function validarInputs (input) {
    switch (input.id) {
        case "nombre":
            validarNombre(input);
            break;
        case "apellido":
            validarApellido(input);
            break;
        case "email":
            validarEmail(input);
            break;
        case "telefono":
            validarTelefono(input);
            break;
        case "contraseña":
            validarContraseña(input);
            validarContraseñaIgualdad(inputs[5])
            break;
        case "confirmar-contra":
            validarContraseñaIgualdad(input);
            break;
    }
}

function validarNombre (input){
    if(input.validity.patternMismatch){
        spanErrores[0].textContent = "Debes ingresar un nombre válido";
    }else{
        spanErrores[0].textContent = "";
    }

}

function validarApellido (input){
    if(input.validity.patternMismatch){
        spanErrores[1].textContent = "Debes ingresar un apellido válido";
    }else{
        spanErrores[1].textContent = "";
    }
}

function validarEmail (input){
    if(!input.validity.valid){
        spanErrores[2].textContent = "Debes ingresar un email válido";
    }else{
        spanErrores[2].textContent = "";
    }
}

function validarTelefono (input){
    if(input.validity.patternMismatch){
        spanErrores[3].textContent = "Debes ingresar un teléfono válido";
    }else{
        spanErrores[3].textContent = "";
    }
}

function validarContraseña (input){
    if(input.value.length < 8){
        spanErrores[4].textContent = "La contraseña debe tener al menos 8 caracteres";
    }else{
        spanErrores[4].textContent = "";
    }
}


function validarContraseñaIgualdad (input){
    const contraseña = document.getElementById("contraseña").value;
    if(input.value !== contraseña){
        spanErrores[5].textContent = "Las contraseñas no coinciden";
    }else{
        spanErrores[5].textContent = "";
    }
}

function resetearForm () {
    inputs.forEach((input) => input.value = "");
    mensajeFormEnviado.style.display = "none";
}

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validarInputs(input);
        mensajeAviso.textContent = "";
    })
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const resultadoVacios = Array.from(inputs).some(input => input.value === "");
    if(resultadoVacios){
        mensajeAviso.textContent = "*Debes completar todos los campos"
        return;
    }
    const resultadoErrores = Array.from(spanErrores).every(span => span.textContent === "");
    if(!resultadoErrores){
        mensajeAviso.textContent = "*Debes ingresar datos vàlidos"
        return;
    }
        mensajeFormEnviado.style.display = "flex";
})

botonCerrarMensaje.addEventListener("click",resetearForm);