/* COMPONENTS */
import './components.js'
/* ELEMENTS */
import './animateScroll.js' 

/* LOADER PAGE */
$('body').css({ overflow: 'hidden' });
const loadPage = () => {
    $(".loader").fadeOut("slow", () => {
        $('body').css({ overflow: 'auto' });
    });
}
window.onload = loadPage;
