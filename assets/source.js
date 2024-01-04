let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    navbar.classList.remove('active')
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')
    navbar.classList.remove('active')
}

document.getElementById("year").innerHTML = new Date ().getFullYear();

function buy (product_name, product_price) {
    const message = `Bang gua mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6281323910377?text=${message}`
    open(whatsapp, "_blank")
}

function chat () {
    const message = `Beli... Beli...`
    const whatsapp = `https://wa.me/6281323910377?text=${message}`
    open(whatsapp, "_blank")
}

function sosmed () {
    alert('instagram@rakaawira')
}

function Send () {
    alert('ea')
}
