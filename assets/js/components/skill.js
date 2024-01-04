import data from '../../data/data.json' assert { type: 'json' };

class listSkill extends HTMLElement {
    constructor() {
        super();
        this.skill = data.skills;
    }

    connectedCallback() {
        this.innerHTML = this.skill.map((data_) =>{
            return `<li>
                        <div class="sk__item">
                            <div class="sk__icon">   
                                <img class="no-select fill-purple" width="60" src="assets/images/Icon/Icon_${data_.nameImage}.svg">
                            </div>
                            <div class="sk__text">
                                <span>${data_.name}</span>
                            </div>
                        </div>
                    </li>`;
        }).join('')
    }
}
window.customElements.define('list-skill', listSkill);