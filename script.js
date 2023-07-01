function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto do João Lucas gerada por uma IA.')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
    

    
}