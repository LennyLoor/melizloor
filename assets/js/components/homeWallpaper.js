import data from '../../data/data.json' assert { type: 'json' };

class wallpaperElements extends HTMLElement {
    constructor() {
        super();
        this.home_wallpaper = data.home_wallpaper;
    }

    connectedCallback() {
        this.innerHTML = this.home_wallpaper.map((data_) => {
            return ` <div class="img_box img-${data_.image}"></div>`;
        }).join('')
    }
}
window.customElements.define('wallpaper-elements', wallpaperElements);