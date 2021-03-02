import Counter from './Counter.js'

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? JSON.parse(decodeURIComponent(matches[1])) : undefined;
}

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(JSON.stringify(value));
    document.cookie = updatedCookie;
}

export default function (goods) {
    document.querySelector('.goods-box') ? document.querySelector('.goods-box').remove() : null
    const cart = document.createElement('div')
    cart.classList.add('goods-box')
    const main = document.querySelector('main')
    main.appendChild(cart)
    let cartGoods = getCookie('goods')
    if(cartGoods !== undefined){
        cartGoods.map(id => {
            const good = document.createElement('div')
            good.classList.add('goods-item')
            const buy = document.createElement('span')
            buy.classList.add('price')
            buy.innerHTML = `${goods[id-1].price + '$'}`
           
            const removeButton = document.createElement('button')
            removeButton.classList.add('remove')
            removeButton.innerHTML = 'Delete'
            removeButton.addEventListener('click', ()=>{
                cartGoods.splice(goods[id-1],1)
                setCookie('goods', cartGoods)
                good.remove()
                let amount = getCookie('goods').length
                Counter(amount)
            })

            good.insertAdjacentHTML('beforeend',`
                <h3>${goods[id-1].title}</h3>
                <img src="${goods[id-1].image}" alt="">
                <p class = 'description'>${goods[id-1].description}</p>  
            `)
            good.appendChild(buy)
            good.appendChild(removeButton)
            cart.appendChild(good)
        })
    } else {
        const emptyCart = document.createElement('span')
        emptyCart.classList.add('empty')
        emptyCart.innerHTML = 'There are no GOODS yet :D'
        cart.appendChild(emptyCart)
    }
}