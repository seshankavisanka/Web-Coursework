let serchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
//   
let menu = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');
// for vedio btn
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');

}


menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})



serchBtn.addEventListener('click', ()=>{
    serchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})
//video btn script part
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
