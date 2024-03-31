import { createElement } from "../../components/element/element";
import { getItemsList } from "../../components/itemsList/itemsList";
import { getTagsLabel } from "../../components/tagsLabel/tagsLabel";
import { getTopbar } from "../../components/topbar/topbar";
import { getArrayOfItems, renderItems } from "../../main";
import "./home.css"

export function getHomePage() {
    const page = createElement('section', 'home', 'section-padding');

    const title = createElement('h2', 'section-title');
    title.innerText = 'Лента мемов'

    const list = getItemsList();

    const filterBox = createElement('div', 'home__filter', 'filter');

    const labelInput = createElement('label', 'filter__label', 'filter__label--input');
    const filterInput = createElement('input', 'filter__input');
    filterInput.type = 'text';
    filterInput.placeholder = 'Поиск мема по названию..'

    const inputSubmit = createElement('button', 'filter__input--btn');
    const inputSVG = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 14L11.1 11.1" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `;
    inputSubmit.insertAdjacentHTML('beforeend', inputSVG);

    const labelCategory = createElement('div', 'filter__label');
    const dateBtn = createElement('button', 'filter__btn', 'filter__btn--date');
    const dateBtnSvg = createElement('div', 'filter__button--svg');
    dateBtnSvg.insertAdjacentHTML('beforeend', `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_16)">
    <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 4V8L10.6667 9.33333" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_16">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    `);
    const dateBtnSpan = createElement('span');
    dateBtnSpan.innerText = 'По дате';

    const likeBtn = createElement('button', 'filter__btn', 'filter__btn--like');
    const likeBtnSvg = createElement('div', 'filter__button--svg');
    likeBtnSvg.insertAdjacentHTML('beforeend', `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.96334 14.6668C7.88999 14.6668 7.81664 14.6668 7.74328 14.5915H7.66993C6.05617 13.7629 2.24182 11.4277 0.921467 7.73651C0.701408 7.05854 0.187938 4.27135 1.8017 2.53877C2.75529 1.48416 3.63552 1.3335 4.22235 1.3335C5.61605 1.3335 7.08311 2.16212 7.96334 3.36739C8.84358 2.08679 10.1639 1.3335 11.7043 1.3335C12.2912 1.3335 13.1714 1.48416 14.1983 2.53877C15.8121 4.27135 15.2986 7.13387 15.0786 7.73651C13.7582 11.503 9.87052 13.7629 8.33011 14.5915C8.1834 14.6668 8.0367 14.6668 7.96334 14.6668Z" stroke="#18191F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    `);
    const likeBtnSpan = createElement('span');
    likeBtnSpan.innerText = 'По количеству лайков';

    const relevationBtn = createElement('button', 'filter__btn', 'filter__btn--relevation', 'active');
    const relevationBtnSvg = createElement('div', 'filter__button--svg');
    relevationBtnSvg.insertAdjacentHTML('beforeend', `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_14)">
    <path d="M8 1.33334L10.06 5.50667L14.6667 6.18L11.3333 9.42667L12.12 14.0133L8 11.8467L3.88 14.0133L4.66666 9.42667L1.33333 6.18L5.93999 5.50667L8 1.33334Z" stroke="#272727" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_2_14">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>        
    `);
    const relevationBtnSpan = createElement('span');
    relevationBtnSpan.innerText = 'По релевантности';

    
    
    const tagsLabel = getTagsLabel();
    const tagsSearch = createElement('button', 'tags__search');
    tagsSearch.innerText = "Поиск";
    dateBtn.append(dateBtnSvg, dateBtnSpan);
    likeBtn.append(likeBtnSvg, likeBtnSpan);

    relevationBtn.append(relevationBtnSvg, relevationBtnSpan);

    labelInput.append(filterInput, inputSubmit);
    labelCategory.append(relevationBtn, dateBtn, likeBtn);

    filterBox.append(labelInput, labelCategory);

    page.append(title, filterBox, list);

    let categoriesBtn = [];
    categoriesBtn.push(likeBtn, dateBtn, relevationBtn);

    categoriesBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            categoriesBtn.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('active');
                }
            });
            btn.classList.add('active');
            inputClear();
        });
    });

    inputSubmit.addEventListener('click', () => {
        let inputValue = filterInput.value.toLowerCase(); 
        let targetArray = getArrayOfItems().filter(item => item.title && item.title.toLowerCase().includes(inputValue)); 
        
        renderItems(targetArray);
        

        
    });
    
    likeBtn.addEventListener('click', () => {
        let targetArray = getArrayOfItems();
        let sortedArray = targetArray.slice().sort((a, b) => b.likes - a.likes);
        renderItems(sortedArray);
    });

    dateBtn.addEventListener('click', () => {
        let targetArray = getArrayOfItems();
        let sortedArray = targetArray.slice().sort((a, b) => {
            return new Date(convertDateStrToStandardFormat(b.date)) - new Date(convertDateStrToStandardFormat(a.date));
        });
        renderItems(sortedArray);
    });

    // tagsSearch.addEventListener('click', () => {
    //     let targetArray = getArrayOfItems();
    
    //     let newArray = [];
    
    //     if (tagsLabel.targetTags.length === 0) {
    //         newArray = targetArray;
    //         renderItems(newArray);
    //         return;
    //     }
    
    //     let cleanedTags = tagsLabel.targetTags.map(tag => {
    //         if (typeof tag === 'string') {
    //             return tag.trim(); // Удаляем пробелы из тэгов, если tag является строкой
    //         }
    //         return tag; // Возвращаем tag без изменений, если не является строкой
    //     });
    
    //     newArray = targetArray.filter(item => {
    //         // Проверяем, есть ли у элемента теги перед фильтрацией
    //         if (item.tags) {
    //             let cleanedItemTags = item.tags.map(tag => {
    //                 if (typeof tag === 'string') {
    //                     return tag.trim(); // Удаляем пробелы из тэгов элемента, если tag является строкой
    //                 }
    //                 return tag; // Возвращаем tag без изменений, если не является строкой
    //             });
    //             return cleanedTags.some(tag => cleanedItemTags.includes(tag));
    //         }
    //         return false; // Если у элемента нет тегов, не включаем его в новый массив
    //     });
    
    //     renderItems(newArray);
    // });
    
    
    
    
    function convertDateStrToStandardFormat(dateStr) {
        let parts = dateStr.split(', ');
        let dateParts = parts[0].split('.');
        let timeParts = parts[1].split(':');
        return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timeParts.join(':')}`;
    }
    

    relevationBtn.addEventListener('click', () => {
        let targetArray = getArrayOfItems();
        renderItems(targetArray);
    });
    
    function inputClear() {
        filterInput.value = '';
    }

    return page;
}