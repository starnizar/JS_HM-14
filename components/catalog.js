import Counter from './Counter.js'

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
}
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

export function ShowCatalog (goods) {
    document.querySelector('.goods-box') ? document.querySelector('.goods-box').remove() : null
    const catalog = document.createElement('div')
    catalog.classList.add('goods-box')
    const main = document.querySelector('main')
    main.appendChild(catalog)

    goods.map(item => {
        const good = document.createElement('div')
        good.classList.add('goods-item')
        const buy = document.createElement('span')
        buy.classList.add('price')
        buy.innerHTML = `${item.price + '$'}`
        buy.addEventListener('click', ()=>{
            let theCookie = getCookie('goods')
            if(theCookie !== undefined) {
                theCookie.push(item.id)
            } else {
                theCookie = [item.id]
            }
            setCookie('goods', theCookie)
            let amount = getCookie('goods').length
            Counter(amount)
        })
        good.appendChild(buy)
        good.insertAdjacentHTML('beforeend',`
            <h3>${item.title}</h3>
            <img src="${item.image}" alt="">
            <p class = 'description'>${item.description}</p>
        `)
        catalog.appendChild(good)
    })
}