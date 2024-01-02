import data from '../../data/data.json' assert { type: 'json' };

class listHobbies extends HTMLElement {
    constructor() {
        super();
        this.hobby = data.hobbies;
    }

    connectedCallback() {
        this.innerHTML = this.hobby.map((data_) =>{
            return ` <li>
                        <div class="hb__item">
                            <div class="hb__icon">
                                <i class="fa-solid fa-${data_.icon} hb__icon--lightblue"></i>
                            </div>
                            <div class="hb__text">
                                <span>${data_.name}</span>
                            </div>
                        </div>
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-hobbies', listHobbies);