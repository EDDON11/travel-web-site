let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let themeBtn = document.querySelector('#theme-btn');

menuBtn.onclick = () => {
   navbar.classList.toggle('active') 
};

loginBtn.onclick = () => {
loginForm.classList.toggle('active')

};

searchBtn.onclick = () => {
    searchForm.classList.toggle('active')
    
};

window.onscroll = () => {
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')


}

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun')

if(themeBtn.classList.contains('fa-sun')) {

    document.body.classList.add('active')
} else {
    document.body.classList.remove('active')
}

}




