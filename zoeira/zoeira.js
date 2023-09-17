function verificar() {
    let fsex = document.getElementsByName('radsex')
    let carater =''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        carater = 'correto'
        img.setAttribute('src', 'correto.png')

} else if (fsex[1].checked) {
    carater = 'Vagabundo'
    img.setAttribute('src', 'vagabundo.png')

}
res.style.textAlign ='center'
        res.innerHTML = `Detectamos um homem ${carater}`
        res.appendChild(img)
}