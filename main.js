// js code for rajneeshzytox portfolio


// header nav option btn for mobile

let navbtn = document.querySelector('.nav-option-btn');
let navItems = document.querySelector('.nav-items');

navbtn.addEventListener('click', () => {
    navbtn.classList.toggle('activeNavBtn');
    navItems.classList.toggle('activeNav')

});

