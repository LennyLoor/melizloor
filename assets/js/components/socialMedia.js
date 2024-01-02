import data from '../../data/data.json' assert { type: 'json' };

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