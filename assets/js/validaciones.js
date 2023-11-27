/* VALIDACION */
export function validacion(input) {

    const tipoDeInput = input.dataset.tipo;
    const msmError = input.parentElement.querySelector('.msm-error');

    if (tipoDeInput != undefined) {

        if (input.validity.valid) {
            input.classList.remove('input-invalid');
            msmError.innerHTML = '';
            msmError.style.display = "none";
        } else {
            input.classList.add('input-invalid');
            msmError.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
            msmError.style.display = "block";
        }
    }

}

/* TIPO DE ERRORES */
const tipoDeErrores = [
    'valueMissing',
    'patternMismatch'
]

/* MENSAJE DE ERROR */
const mensajeDeError = {
    nombre: {
        valueMissing: 'Este campo no puede estar vacio',
    },
    email: {
        valueMissing: 'Este campo no puede estar vacio',
        patternMismatch: 'El correo no es valido',
    },
    asunto: {
        valueMissing: 'Este campo no puede estar vacio',
    },
    mensaje: {
        valueMissing: 'Este campo no puede estar vacio',
    }
}

/* CAMBIAR MENSAJE DE ERROR */
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensaje = mensajeDeError[tipoDeInput][error]
        }
    })
    return mensaje
}


/* FORM | VALIDACION DE TODOS LOS CAMPOS */
function validateAll() {
    const formElement = document.formContacto;
    const inputElements = formElement.querySelectorAll('[data-tipo]');
    const formBtn = document.getElementById('formc_btn');

    inputElements.forEach(inputElement => {

        inputElement.addEventListener('input', () => {

            const ArrayInput = Object.values(inputElements);

            const allInputs = ArrayInput.every((inputElement) =>
                inputElement.value
            );
            const validInputs = ArrayInput.every((inputElement) =>
                inputElement.validity.valid
            );

            if (allInputs && validInputs) { 
                formBtn.disabled = false;

            } else {
                formBtn.disabled = true;
            }
        });
    });
} validateAll();