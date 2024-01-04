import data from '../../data/data.json' assert { type: 'json' };

class listAcademic extends HTMLElement {
    constructor() {
        super();
        this.academic = data.academics;
    }

    connectedCallback() {
        this.innerHTML = this.academic.map(function (data_) {
            return `<li class="fa_item">
                        <div class="fa_item__logo logo-${data_.id}"></div>
                        <div class="fa_item__info">
                            <h5 class="info-title">${data_.name}</h5>
                            <h5 class="info-subTitle">${data_.descripcion}</h5>
                            <hr class="info-line bg-${data_.id}""> 
                            <div class="info-box">
                                ${data_.info}                                   
                            </div>
                            <div class="info-buttons brd-top-${data_.id}"> 
                                    <a style="display:${data_.visibility_btn1};" class="fa_btn-outlined txt-color-${data_.id}" target="_blank" href="${data_.urlBtn1}">
                                        ${data_.labelBtn1} 
                                        <i class="fa fa-solid fa-up-right-from-square"></i>
                                    </a>
                                    <a style="display:${data_.visibility_btn2};" class="fa_btn-raised bg-${data_.id}" target="_blank" href="${data_.urlBtn2}">
                                        ${data_.labelBtn2}
                                        <i class="fa fa-solid fa-up-right-from-square"></i>
                                    </a> 
                            </div> 
                        </div>
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-academic', listAcademic);