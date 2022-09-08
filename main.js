let nameCardInput = document.querySelector('#name-input');
const nameCard = document.querySelector('#name-card')
nameCardInput.addEventListener('keyup', () => {
    nameCard.innerHTML = nameCardInput.value.toUpperCase();
})
let numberCardInput = document.querySelector('#number-input');
const numberCard = document.querySelector('#number-card')
numberCardInput.addEventListener('keyup', () => {
    numberCard.innerHTML = `${numberCardInput.value.substring(0, 4)} ${numberCardInput.value.substring(4, 8)} ${numberCardInput.value.substring(8, 12)} ${numberCardInput.value.substring(12, 16)}`;
})

let mmCardInput = document.querySelector('#input-mm')
let yyCardInput = document.querySelector('#input-yy')
let mmCard = document.querySelector('#date-card')

mmCardInput.addEventListener('keyup', () => {
    mmCard.innerHTML = `${mmCardInput.value}/`
})
yyCardInput.addEventListener('keyup', () => {
    mmCard.innerHTML = `${mmCard.textContent.substring(0, 3)}${yyCardInput.value}`
})
let cvcInput=document.querySelector('#cvc-input')
const cvcCard = document.querySelector('#cvc-card')

cvcInput.addEventListener('keyup', ()=>{
    cvcCard.innerHTML =cvcInput.value
})

const buttonConfirm=document.querySelector('#submint-data')
const screnThankYou =document.querySelector('.thank-you-container')
const screenForm =document.querySelector('.form-container')

buttonConfirm.addEventListener('click',(e)=>{
    e.preventDefault()
    screnThankYou.classList.toggle('inactive')
    screenForm.classList.toggle('inactive')
})