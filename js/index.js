const hamburgerBtn = document.getElementById('hamburger')
const navEl = document.getElementById('nav-links')
hamburgerBtn.addEventListener('click', () => {
    if(navEl.style.display === 'none') {
        navEl.style.display = 'block' 
    } else {
        navEl.style.display = 'none'
    }
})