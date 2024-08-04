//TRIGGER TEMA ESCURO OU CLARO
const html = document.querySelector('html')
const toggleThemeButton = document.getElementById('toggleThemeButton')

toggleThemeButton.addEventListener('change', () => {
    html.classList.toggle('dark')
})