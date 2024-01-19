import { dataJSON } from "../../data/data_.js";
const data = JSON.parse(dataJSON); 

class listHobbies extends HTMLElement {
    constructor() {
        super();
        this.hobby = data.hobbies;
    }

    connectedCallback() {
        this.innerHTML = this.hobby.map((data_) =>{
            return ` <li>                         
                        <a class="hb__icon" title="${data_.name}">
                            <i class="fa-solid fa-${data_.icon} hb__icon--lightblue"></i>
                        </a>                          
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-hobbies', listHobbies);