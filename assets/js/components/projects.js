import { dataJSON } from "../../data/data_.js";
const data = JSON.parse(dataJSON); 

/* LIST PROJECTS */
class listProjects extends HTMLElement {
    constructor() {
        super();
        this.project = data.projects;
    }
    connectedCallback() {
        this.innerHTML = this.project.map((data_) => { 
            return ` 
            <div class="item" 
                data-categoria="${data_.data_categoria}" >
                <div class="item-content">
                    <img class="item-image" width="200" src="../assets/images/projects/${data_.image}" alt="${data_.name_project}" title="${data_.name_project}">
                    <div class="item-data"> 
                        <div class="items title">
                            <p>${data_.name_project}</p>
                            <hr>
                        </div>
                        <div class="items content">
                            <p>${data_.tipo_project}</p> 
                            <span> Herramientas usadas </span>
                            <div class="content_icons">
                               ${data_.herramientas}
                            </div>
                        </div>
                        <div class="items buttons"> 
                            <a href="${data_.url_repositorio}" style="display:${data_.btn_repositorio}" target="_blank">Repositorio</a>
                            <a href="${data_.url_enlace}" style="display:${data_.btn_enlace}" target="_blank">${data_.tipoDeEnlace}</a> 
                            <a target="_blank" class="expand-image" style="display:${data_.btn_imagen}">Imagen <i class="fa-solid fa-up-right-and-down-left-from-center"></i></a>
                        </div>
                    </div>
                </div>
            </div>`;
        }).join('')
    }
}

window.customElements.define('list-projects', listProjects);
 
/* OVERLAY */
class overlayImage extends HTMLElement {
    constructor() {
        super();
        this.project = data.projects;
    }
    connectedCallback() {
        return this.innerHTML =  ` 
        <button id="btn-close-popup">
            <i class="fas fa-times"></i>
        </button>
        <div class="container-img no-select">
            <img src="" alt="">
        </div>`; 
    }
}

window.customElements.define('overlay-images', overlayImage);


