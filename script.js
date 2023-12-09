let count = 0;

const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');

btnIncrease.addEventListener('click', () => {
    addOne();
});

btnDecrease.addEventListener('click', () => {
    subtractOne();
});

btnReset.addEventListener('click', () => {
    reset();
})

function addOne(){
    count++;
    document.querySelector('#value').textContent = `${count}`;
}

function subtractOne(){
    count --;
    document.querySelector('#value').textContent = `${count}`;
}

function reset(){
    document.querySelector('#value').innerHTML = 0;
    count = 0;
}