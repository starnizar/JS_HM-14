import {ShowCatalog} from './catalog.js'
import Contacts from './contacts.js'
import Cart from './cart.js'
import data from '../api.js'

const routes = [
    {name: 'Home', component: ShowCatalog}, 
    {name: 'Contacts', component: Contacts},
    {name: 'Cart', component: Cart}
]

let goods = []

data().then(result => {
    goods = result;
})

export function nav () {
    const nav = document.createElement('nav')

    routes.map(route => {
        const link = document.createElement('li')
        link.innerHTML = route.name
        link.classList.add('theLink')
        nav.appendChild(link)
        link.addEventListener('click', ()=>{
            console.log(route.name);
            location.hash = route.name
            route.component(goods)
        })
    })

    return nav
}