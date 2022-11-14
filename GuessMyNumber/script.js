'use strict';

// console.log(document.querySelector('.message').textContent);

// // dom - document object model - pozwala js na dostep do elementow html i stylow ktore pozwalaja na ich bezposrednia zmiane.Jest to polaczenie pomiedzy js a htmml oraz css.
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;
// document.querySelector('.guess').value = 23;

// event

//PROJEKT #1 =-----------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMassage = function (massage) {
  document.querySelector('.message').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when is not imput
  if (!guess) {
    displayMassage('No number 😒!!');

    // when players wins
  } else if (guess === secretNumber) {
    displayMassage('Correct Number 🏆🏆🏆🏆🏆!!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? 'Too high 🤣!!' : 'Too LOW 😂!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('YOU LOST THE GAME 🤣🤣🤣🤣🤣🤣!! KEKW');
      document.querySelector('.score').textContent = 0;
    }
  } //when player guess more then secret
});

// reset button again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMassage('Start quessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
