/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl   = document.getElementById("mass-el")
const valueEl  = document.getElementById("input-data")
const converterEl = document.getElementById("converter-btn")
let feet = 0
let meters = 0
let gallons = 0
let liters = 0
let pounds = 0
let kilos = 0

converterEl.addEventListener("click", convValues)

function convValues() {

    feet = parseFloat((valueEl.value) * 3.281).toFixed(3)
    meters = parseFloat((valueEl.value)/3.281).toFixed(3)  
    gallons = parseFloat((valueEl.value) * 0.264).toFixed(3)
    liters = parseFloat((valueEl.value)/0.264).toFixed(3)
    pounds = parseFloat((valueEl.value) * 2.204).toFixed(3)
    kilos = parseFloat((valueEl.value)/2.204).toFixed(3)
    
    lengthEl.innerHTML = `<p>${valueEl.value} meters = ${feet} feet | ${valueEl.value} feet = ${meters} meters</p>`
    volumeEl.innerHTML = `<p>${valueEl.value} liters = ${gallons} gallons | ${valueEl.value} gallons = ${liters} liters</p>`
    massEl.innerHTML = `<p>${valueEl.value} kilos = ${pounds} pounds | ${valueEl.value} pounds = ${kilos} kilos</p>`
}