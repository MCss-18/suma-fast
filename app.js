// buttons
const btnStar = document.getElementById('btn-star');
const btnResult = document.getElementById('btn-result');
const btnBack = document.getElementById("btn-back");
const btnResultContainer = document.querySelector('.btn-result-container');
// containers
const numRandom = document.getElementById('num-random');
const nums = document.querySelector('.nums');
const results = document.querySelector('.container-results');
const result = document.getElementById('result');
// input
const textNum = document.getElementById('textNum');
const textSpeed = document.getElementById('textSpeed')

let arrayNums = []

function reiniciarJuego(){
  location.reload();
}

function aleatorio(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}

btnStar.addEventListener('click', () => {
  let num = textNum.value;
  let speed = textSpeed.value;
  nums.classList.add('show');
  iniciarJuego(num, speed);
})

function iniciarJuego(num, speed) {
  let cont = num;
  let previousNum = 0;
  let intervalId = setInterval(() => {
    if(cont>0){
      numRandom.textContent = aleatorio(-10, 10);
      if(previousNum === parseInt(numRandom.textContent)){
        console.log('Duplicado')
        numRandom.textContent = aleatorio(-10, 10);
      }
      previousNum = parseInt(numRandom.textContent);
      console.log(parseInt(numRandom.textContent));
      arrayNums.push(parseInt(numRandom.textContent));
      cont--;
    }else{
      clearInterval(intervalId); // Detiene el intervalo
      btnResultContainer.classList.add('show');
      numRandom.classList.add('hide');
    }
  }, speed*1000);
}

btnResult.addEventListener('click', () => {
  nums.classList.remove('show');
  numRandom.classList.remove('hide');
  results.classList.add('show');
  btnResultContainer.classList.remove('show');
  result.textContent = arrayNums.reduce((a, b)=>a+b);

})

btnBack.addEventListener('click', () => {
  reiniciarJuego()
})
