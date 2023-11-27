(() => {
    const form = document.formContacto;
    const formBtn = document.querySelector("#formc_btn");
    const formBtnConfirm = document.querySelector(".btn-confirm-msm");
    const formBtnLoad = document.querySelector(".btn-load-msm");
    const formBtnError = document.querySelector(".btn-error-msm");
    const inputElements = document.querySelectorAll('[data-tipo]');

    async function senEmail(event) {

        event.preventDefault();

        var data = new FormData(event.target);
        //INPUTS - MENSAJE CARGANDO
        inputElements.forEach(inputElement => {
            inputElement.disabled = true;
        });
        formBtn.style.display = 'none';
        formBtnLoad.style.display = 'block';

        //RESPUESTA
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {

            if (response.ok) {
                form.reset();
                inputElements.forEach(inputElement => {
                    inputElement.disabled = false;
                });
                formBtnLoad.style.display = 'none';
                formBtnConfirm.style.display = 'block';
                setTimeout(() => {
                    formBtnConfirm.style.display = 'none';
                    formBtn.style.display = 'block';
                }, 2500);
            } else {
                formBtnError.style.display = 'block';
                formBtnLoad.style.display = 'none';
                setTimeout(() => {
                    formBtnError.style.display = 'none';
                    formBtn.style.display = 'block';
                }, 2500);
            }

        })
    }

    form.addEventListener("submit", senEmail);
})();