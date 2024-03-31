import { createElement } from "../element/element";
import { getLogo } from "../logo/logo";
import "./load.css"

export function getLoad() {
    const load = createElement('div', 'load');
    const circle = createElement('div', 'load__circle');
    const logo = getLogo();
    logo.classList.add('load__logo');

    logo.addEventListener('click', (event) => {
        event.preventDefault();
    })

    load.append(circle, logo);

    function isLoaded() {
        load.classList.add('loaded');
        load.style.display = 'none';
    }
    
    return {load, isLoaded};
}