const colors = ['#A68A56','#F25252','#F27777','#F2F2F2','#0D0D0D'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}