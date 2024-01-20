import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON); 

class listSocialMedia extends HTMLElement {
    constructor() {
        super();
        this.social_media = data.social_media;
    }

    connectedCallback() {
        this.innerHTML = this.social_media.map((data_) => {
            return ` <li>
                        <a class="info__network--${data_.class}" href="${data_.url}" target="_blank">
                            ${data_.name} 
                            <i class="fa fa-solid fa-up-right-from-square"></i>
                        </a>
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-socialmedia', listSocialMedia);


class footerSocialMedia extends HTMLElement {
    constructor() {
        super();
        this.redes_sociales = data.redes_sociales;
    }

    connectedCallback() {
        this.innerHTML = this.redes_sociales.map((data_) => {
            return `  <li>
                        <a href="${data_.enlace}" target="_blank"><i
                        class="fa-brands fa-${data_.icono}"></i> ${data_.name}</a>
                    </li>`;
        }).join('')
    }
}
window.customElements.define('footer-socialmedia', footerSocialMedia);