import { createElement } from "../../components/element/element";

export function getProfilePage() {
    const page = createElement('section', 'home', 'section-padding')

    const title = createElement('h2');
    title.innerText = 'Профиль';

    const text = createElement('p',)
    text.innerText = 'Данная страница в разработке..'

    page.append(title, text);

    return page;
}