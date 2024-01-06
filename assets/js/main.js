/* ELEMENTS */
import './elements/animateImage.js'
/* COMPONENTS */
import './components.js'
/* ELEMENTS */
import './animateScroll.js'

/* LOADER PAGE */
$('body').css({ overflow: 'hidden' });

function loadPage() {
    $(".loader").fadeOut("slow", () => {
        $('body').css({ overflow: 'auto' });
    });
}

window.onload = loadPage;
