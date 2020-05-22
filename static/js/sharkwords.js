const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
  'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;


// Loop over the chars in `word` and create divs.
//
const createDivsForChars = (word) => {

  for (const letter of word) {
  //   const div = document.createElement('div');
  //   div.classList.add('letter-box');
  //   div.classList.add(letter);
  //   document.querySelector('#word-container').append(div);
  // }
    $('#word-container').append(`<div class="letter-box ${letter}"></div>`);
  }
};


// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  
  for (const letter of ALPHABET) {
    // const btn = document.createElement('button');
    // btn.innerHTML = char;
    // document.querySelector('#letter-buttons').append(btn);

    $('#letter-buttons').append(`<button>${letter}</button>`);
  }
};


// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {

  // buttonEl.setAttribute('disabled', true);
  
  const button = $(buttonEl);

  button.attr('disabled', true);

};


// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => {
  console.log(isLetterInWord)
  return document.querySelector(`div.${letter}`) !== undefined;

  // return $(`div.${letter}`) !== undefined;
};

///This is always returning true?? Therefore causing problems below
///so that handleWrongGuess will not run at all!! Not sure how to fix


// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {

  // document.querySelector(`div.${letter}`).innerHTML = letter;
  
    $(`div.${letter}`).html(letter);
};


// Called when `letter` is not in word.
//
// If the shark gets the person, disable all buttons and show the "play again"
// message. Otherwise, increment `numWrong` and update the shark image.
//
const handleWrongGuess = (numWrong) => {
  console.log(numWrong)
  numWrong2 += 1;
  console.log(numWrong)

  document.querySelector('#shark-img img').setAttribute(
    'src',
    `images/guess${numWrong}.png`
  );
  // $(`#shark-img`).attr('src', 'images/guess${numWrong}.png');

  if (numWrong === 5) {
    const buttons = document.querySelectorAll('buttons');
    // const buttons = $('buttons');
    for (const btn of buttons) {

      btn.setAttribute('disabled', true);
    }
      // btn.attr('disabled', true)

    document.querySelector('#play-again').style.display = '';

    // $('#play-again').style.display = '';
  }
  return numWrong
};


// Reset game state. Called before restarting the game.
//
const resetGame = () => {

};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
    startGame();
  });
})();
