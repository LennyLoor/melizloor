/* Inicializar Muuri */
const list = new Muuri('.list', {
	layout: {
		rounding: false
	}
});

/* Transición Imágenes*/
window.addEventListener('load', () => {
	list.refreshItems().layout();
	document.getElementById('list').classList.add('loaded-images');

	/* Filtrar por Categoría */
	const enlaces = document.querySelectorAll('#categories a');
	enlaces.forEach( (elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('active'));
			event.target.classList.add('active');

			/* Identificar la categoria del enlace que fué cliqueado */ 
			const categoria = evento.target.innerHTML;   
			categoria === 'todas' ? list.filter('[data-categoria]') : list.filter(`[data-categoria="${categoria}"]`);
		});
	} ); 

	/* Imágenes */
	const overlay = document.getElementById('overlay');

	document.querySelectorAll('.list .item img').forEach((elemento) => { 
		const parent_ = elemento.parentNode.parentNode.querySelector('.expand-image');
		if(parent_ != null){
			parent_.addEventListener('click', () => { 
				const ruta = elemento.getAttribute('src'); 
				overlay.classList.add('active');
				document.querySelector('#overlay img').src = ruta;
			})
		}  
	});
 
	/* Botón Cerrar */
	document.querySelector('#btn-close-popup').addEventListener('click',  () => {
		overlay.classList.remove('active');
	});

	/* Overlay */
	overlay.addEventListener('click', (evento) => {
		evento
		evento.target.id === 'overlay' ? overlay.classList.remove('active') : '';
	});

});