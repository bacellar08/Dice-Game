
var result = document.querySelector('.result');
var refresh = document.querySelector('.refresh-btn');

refresh.addEventListener('click', refreshPage)


function refreshPage() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var diceimg1 = 'images/dice' + randomNumber + '.png';
  var diceimg2 = 'images/dice' + randomNumber2 + '.png';
  
  document.querySelector('.img1').setAttribute('src', diceimg1);
  document.querySelector('.img2').setAttribute('src', diceimg2);
  
  
  if (randomNumber == randomNumber2) {
  result.innerHTML = 'Draw!';
  } else if (randomNumber > randomNumber2) {
  result.innerHTML = '🚩 Player 1 Wins!';
  } else {
  result.innerHTML = 'Player 2 Wins! 🚩';
  }


}



