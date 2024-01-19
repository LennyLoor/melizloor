import { langJSON } from "../../data/data_.js";
const data = JSON.parse(langJSON); 


const input = document.querySelector('#lang');
const html = document.querySelector("html");
const change_text = document.getElementById("home_txt_1"); 
const item1 = document.getElementById("item1"); 

input.addEventListener('change', function() {
    if (input.checked) {
        console.log('Ingles');
        html.setAttribute("lang", "en");
        change_text.textContent = data.en.sobreMi.title;
        item1.textContent = data.en.header.item1;
    } else {
        console.log('español');
        html.setAttribute("lang", "es");
        change_text.textContent = data.es.sobreMi.title; 
        item1.textContent = data.es.header.item1;
    }
});
 