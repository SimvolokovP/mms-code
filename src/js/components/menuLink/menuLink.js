
import { authModal, isAuth, router } from "../../main";
import { createElement } from "/src/js/components/element/element";
import "./menuLink.css"

export function getMenuLink(path, name = '', svg = '') {
    let link = createElement('a', 'menu__link');
    link.href = path;

    link.insertAdjacentHTML('beforeend', svg);
    
    if (name !== '') {
        const span = createElement('span', 'menu__link--span')
        span.textContent = name;
        link.append(span);
    }

    link.addEventListener('click', function(event) {
        event.preventDefault();
        router.navigate(path);
        
    });

    return link;
}