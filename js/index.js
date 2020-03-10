// Your code goes here
let variable1 = document.querySelector('body')
let variable2 = document.querySelector('header')
let variable3 = document.querySelector('.text-content')
let variable4 = document.querySelector('img')
let sound = document.querySelector('audio')

variable1.addEventListener('mouseover', (event) => {
    variable1.style.backgroundColor = 'dodgerblue';
}) 

variable1.addEventListener('mouseout', (event) => {
    variable1.style.backgroundColor = 'white';
}) 

variable2.addEventListener('drag', (event) => {
    variable2.style.backgroundColor = 'red';
})

variable2.addEventListener('dragend', (event) => {
    variable2.style.backgroundColor = 'white';
})

variable1.addEventListener('dblclick', (event) => {
    alert('Attention. This is an important message from the FBI. Sensitive content has been found on the device of user Dustin Graham. An team is on route to your home in Albuquerque, New Mexico. Please remain where you are.');
})

variable1.addEventListener('wheel', (event) => {
    variable1.style.backgroundColor = 'pink';
})

variable1.addEventListener('keydown', (event) => {
    sound.play();
})

variable1.addEventListener('copy', (event) => {
    variable1.style.color = 'purple';
})

variable4.addEventListener('click', (event) => {
    variable1.style.backgroundColor = 'black';
})

variable2.addEventListener('mousedown', (event) => {
    variable1.style.backgroundColor = 'orange';
})