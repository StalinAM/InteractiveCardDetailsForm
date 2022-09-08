function addZeroU(valor) {
    if (!valor) {
        return '00/'
    }
    if (parseInt(valor) > 9) {
        return valor + '/'
    }
    return `0${parseInt(valor)}/`
}
const nameSpan = document.querySelector('.name-span')
const numberSpan = document.querySelector('.number-span')
const mmSpan = document.querySelector('.mm-span')
const yySpan = document.querySelector('.yy-span')
const cvcSpan = document.querySelector('.cvc-span')

let nameCardInput = document.querySelector('#name-input');
const nameCard = document.querySelector('#name-card')
nameCardInput.addEventListener('keyup', () => {
    if (nameCardInput.value.match(/(\d+)/g)) {
        nameSpan.innerHTML = 'Letters only'
    } else {
        nameSpan.innerHTML = ''
    }
    nameCard.innerHTML = nameCardInput.value.toUpperCase();

})
let numberCardInput = document.querySelector('#number-input');
const numberCard = document.querySelector('#number-card')
numberCardInput.addEventListener('keyup', () => {
    if (numberCardInput.value.match(/([a-zA-Z]+)/g)) {
        numberSpan.innerHTML = 'Numbers only'
    } else if (numberCardInput.value.length > 16) {
        numberSpan.innerHTML = 'Max. 16 numbers'
    } else {
        numberSpan.innerHTML = ''
    }
    numberCard.innerHTML = `${numberCardInput.value.substring(0, 4)} ${numberCardInput.value.substring(4, 8)} ${numberCardInput.value.substring(8, 12)} ${numberCardInput.value.substring(12, 16)}`;
})

let mmCardInput = document.querySelector('#input-mm')
let yyCardInput = document.querySelector('#input-yy')
let mmCard = document.querySelector('#date-card')

mmCardInput.addEventListener('keyup', () => {
    if (parseInt(mmCardInput.value) > 12) {
        mmSpan.innerHTML = "Wrong month"
    } else {
        mmSpan.innerHTML = ''
    }
    mmCard.innerHTML = addZeroU(mmCardInput.value)
})
yyCardInput.addEventListener('keyup', () => {
    if (parseInt(yyCardInput.value) > 99) {
        yySpan.innerHTML = "Wrong year"
    } else {
        yySpan.innerHTML = ''
    }
    mmCard.innerHTML = `${mmCard.textContent.substring(0, 3)}${addZeroU(yyCardInput.value).substring(0, 2)}`

})
let cvcInput = document.querySelector('#cvc-input')
const cvcCard = document.querySelector('#cvc-card')

cvcInput.addEventListener('keyup', () => {
    if (cvcInput.value.length > 3) {
        cvcSpan.innerHTML = "Max. 3 numbers"
    } else {
        cvcSpan.innerHTML = ''
    }
    cvcCard.innerHTML = cvcInput.value
})

const buttonContinue = document.querySelector('button')
const screnThankYou = document.querySelector('.thank-you-container')
const screenForm = document.querySelector('.form-container')

const allSpan = document.querySelectorAll('span')
const allInput =document.querySelectorAll('input')

screenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    for (const item of allSpan) {
        if (!item.value) {
            screnThankYou.classList.toggle('inactive')
            screenForm.classList.toggle('inactive')
        }
    }
})
buttonContinue.addEventListener('click', () => {
    
    location.reload()
    
})