const buttonToggle = document.querySelector('.far')
const navToggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header')

buttonToggle.addEventListener('click', () => {
    navToggle.classList.toggle('nav-toggle')
    header.classList.toggle('scroll')

})





// #################### GALLERY Z-INDEX #########################