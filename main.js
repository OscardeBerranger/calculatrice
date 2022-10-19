const chiffres = document.querySelectorAll('.bouton')
const ecran = document.querySelector('.ecran')
const boutonEgal = document.querySelector('.egal')
const boutonClear = document.querySelector('.boutonClear')

let resultat = 0
ecran.innerHTML = resultat

function calcule(){
    resultat = eval(ecran.innerHTML)
    ecran.innerHTML = resultat
}
boutonClear.addEventListener('click', ()=>{
    ecran.innerHTML = 0
})



chiffres.forEach((chiffre)=>{
    chiffre.addEventListener('click',()=>{
        if (ecran.innerHTML=='0'){
            ecran.innerHTML = chiffre.id
            console.log(chiffre.id)
        }else {
            console.log(chiffre.id)
            ecran.innerHTML += chiffre.id
        }

    })
})

boutonEgal.addEventListener('click',()=>{
    calcule();
})
