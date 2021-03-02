export default function (amount) {
    document.querySelector('.counter') ? document.querySelector('.counter').remove() : null
    const Counter = document.createElement('div')
    Counter.classList.add('counter')
    const div = document.querySelector('.app')
    Counter.innerHTML = `
        <i class="fa fa-shopping-cart"></i>
        <span>${amount}</span>
    `
    div.appendChild(Counter)
    return Counter
}