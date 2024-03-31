import { createElement } from "../../components/element/element";

export function getNotFoundPage() {
    const page = createElement('section', 'home', 'section-padding')

    const title = createElement('h2');
    title.innerText = 'Страница не найдена';

    const text = createElement('p',)
    text.innerText = 'Извинте, но данной страницы не существует'

    page.append(title, text);

    return page;
}