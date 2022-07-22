/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let length = document.getElementById("p1")
let volume = document.getElementById("p2")
let mass = document.getElementById("p3")
let box = document.getElementById("box1")
let btn = document.getElementById("btn")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")

btn.addEventListener("click", function(){
    let x = box.value 
     converter(x)
})
function converter(num) {
   p1.textContent = `${num} metres = ${(num*3.2808).toFixed(3)} feet | ${num} feet = ${(num/3.2808).toFixed(3)} metres`
   p2.textContent = `${num} litres = ${(num*0.264).toFixed(3)} gallons | ${num} gallons = ${(num/0.264).toFixed(3)} litres`
   p3.textContent = `${num} kilos = ${(num*2.204).toFixed(3)} pounds | ${num} pounds = ${(num/2.204).toFixed(3)} kilos`
  
}

