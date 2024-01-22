import { dataJSON } from "../../data/data.js";
const data = JSON.parse(dataJSON);

class listHobbies extends HTMLElement {
    constructor() {
        super();
        this.hobby = data.hobbies;
    }

    connectedCallback() {
        this.innerHTML = this.hobby.map((data_, index) => {
            return ` <li>                         
                        <a class="hb__icon tooltip" onclick="">
                            <i class="fa-solid fa-${data_.icon} hb__icon--lightblue" onclick=""></i>
                            <span class="tooltiptext" id="hobbies${index + 1}" >${data_.name}</span>
                        </a>                          
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-hobbies', listHobbies);