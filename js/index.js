const menuButtons = document.querySelectorAll('.nav__menu-toggle')
const navBarUncovered = document.querySelector('.nav-bar')
const buttonToggle = document.querySelector('.far')



menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dataUncovered = navBarUncovered.getAttribute('data-uncovered')
        if (dataUncovered === 'true') {
            navBarUncovered.setAttribute('data-uncovered', false)
            buttonToggle.classList.remove('fa-caret-square-down')
            buttonToggle.classList.add('fa-minus-square')
        } else {
            navBarUncovered.setAttribute('data-uncovered', true)
            buttonToggle.classList.remove('fa-minus-square')
            buttonToggle.classList.add('fa-caret-square-down')
        }
    }
    )
})
