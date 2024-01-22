(() => {
    const elements = [{
        form: document.formContacto,
        btn: document.querySelector("#formc_btn"),
        btn_confirm: document.querySelector(".btn-confirm-msm"),
        btn_load: document.querySelector(".btn-load-msm"),
        btn_error: document.querySelector(".btn-error-msm"),
        inputs: document.querySelectorAll('[data-tipo]')
    }]; 

    elements.forEach((element) => {
        async function senEmail(event) {
    
            event.preventDefault();
    
            var data = new FormData(event.target);
            //INPUTS - MENSAJE CARGANDO
            element.inputs.forEach(input => {
                input.disabled = true;
            });
            element.btn.style.display = 'none';
            element.btn_load.style.display = 'block';
    
            //RESPUESTA
            fetch(event.target.action, {
                method: element.form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
    
                if (response.ok) {
                    element.form.reset();
                    element.inputs.forEach(input => {
                        input.disabled = false;
                    });
                    element.btn_load.style.display = 'none';
                    element.btn_confirm.style.display = 'block';
                    setTimeout(() => {
                        element.btn_confirm.style.display = 'none';
                        element.btn.style.display = 'block';
                    }, 2500);
                } else {
                    element.btn_error.style.display = 'block';
                    element.btn_load.style.display = 'none';
                    setTimeout(() => {
                        element.btn_error.style.display = 'none';
                        element.btn.style.display = 'block';
                    }, 2500);
                }
    
            })
        }    
        element.form.addEventListener("submit", senEmail);   
    
    })
})();