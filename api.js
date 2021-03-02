export default function() {
    const response = fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    return response
}
