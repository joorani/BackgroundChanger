const button = document.querySelector(".button");
const body = document.querySelector('body');
const hexNum = document.querySelector('h1');

button.addEventListener('click',hexColorChanger);

function hexColorChanger() {
  const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8,9,'A', 'B', 'C','D','E','F'];
  
  let  result = "#";
  
  for(let i = 0; i < 6; i++) {
    const  randomIndex = Math.floor(Math.random()*hexNumbers.length);
    result += hexNumbers[randomIndex];
  }
  body.style.backgroundColor = result;
  hexNum.innerHTML = `HEX COLOR :${result}`;
}