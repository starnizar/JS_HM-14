import {header} from './header.js'
import {nav} from './nav.js'
import {footer} from './footer.js'
import main from './main.js'
import Counter from './Counter.js'

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}


document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css">')
document.head.insertAdjacentHTML('afterbegin', '<title>SPA-SHOP</title>')
document.head.insertAdjacentHTML('afterbegin', '<meta name="viewport" content="width=device-width, initial-scale=1.0">')
document.head.insertAdjacentHTML('afterbegin', ' <meta charset="UTF-8">')
document.head.insertAdjacentHTML('beforeend', '<link href="https://use.fontawesome.com/7bb5f94a6d.css" media="all" rel="stylesheet">')

const html = document.querySelector('html')
html.setAttribute('lang', 'ru')



export function init () {

    function create (element, clas) {
        const el = document.createElement(element)
        el.classList.add(clas)
        return el
    }
    
    function addToBody (element) {
        document.body.appendChild(element)
    }

    const div = create('div','app')
    addToBody(div)

    let amount =  getCookie('goods')

    if (amount !== undefined) {
        if(amount.legth !== undefined){
            div.appendChild(Counter(amount.legth))
        }else{
            amount = ':D'
        div.appendChild(Counter(amount))
        }
    } else {
        amount = ':D'
        div.appendChild(Counter(amount))
    }

    div.appendChild(header())
    div.appendChild(nav())
    div.appendChild(main())
    div.appendChild(footer())
}

