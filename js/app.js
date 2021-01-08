const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

const colors = ['red', 'green', 'blue', 'yellow', 'black','white'];

function randomNumber(){
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click', function(){
const randomColors = randomNumber();
document.body.style.backgroundColor = colors[randomColors];
color.textContent = colors[randomColors];
});