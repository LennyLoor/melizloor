import { langJSON } from "../data/lang.js";
const data = JSON.parse(langJSON);

const elements = [{
    html: document.querySelector("html"),
    checkLang: document.getElementById('lang'),
    tooltip_lang: document.querySelector('[data-tooltip-lang]'),
    hm_titulo: document.querySelector("[data-hm-titulo]"),
    hm_contenido: document.querySelector("[data-hm-contenido]"),
    hd_menu: document.querySelectorAll('.menu__list > li > a'),
    sm_titulo: document.querySelector('[data-sm-titulo]'),
    sm_subtitulo: document.querySelector('[data-sm-subtitulo]'),
    sm_contenido: document.querySelector('[data-sm-contenido]'),
    sm_objetivo: document.querySelector('[data-sm-objetivo]'),
    sm_hobbies: document.querySelectorAll('[data-hobbies] > li > a > span')
}];

elements.forEach((element) => {
    element.checkLang.addEventListener('change', () => {
        const lang = element.checkLang.checked ? 'en' : 'es';
        //Menú
        element.hd_menu.forEach((elem, i) => {
            elem.textContent = data[lang]['menu'][elem.getAttribute('id')]
        });
        element.tooltip_lang.textContent = data[lang]['menu']['tooltip_lang'];
        element.tooltip_lang.className = data[lang]['menu']['tooltip_class'];
        //Home
        element.hm_titulo.textContent = data[lang]['home']['titulo'];
        element.hm_contenido.textContent = data[lang]['home']['contenido'];

        //Sobre-mi
        element.sm_titulo.textContent = data[lang]['sobre_mi']['titulo'];
        element.sm_subtitulo.textContent = data[lang]['sobre_mi']['subtitulo'];
        element.sm_contenido.textContent = data[lang]['sobre_mi']['contenido'];
        element.sm_objetivo.textContent = data[lang]['sobre_mi']['objetivo'];
        element.sm_hobbies.forEach((elem, i) => { 
            elem.textContent = data[lang]['hobbies'][elem.getAttribute('id')]
        });
    });
})
