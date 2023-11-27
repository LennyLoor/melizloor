
import { validacion } from './validaciones.js' 

(() => {

    /* FORM | VALIDACIONES */
    const inputs = document.querySelectorAll('[data-tipo]');

    inputs.forEach(input => {
        input.addEventListener('blur', (input) => {
            validacion(input.target);
        });
    }) 
    
})();

