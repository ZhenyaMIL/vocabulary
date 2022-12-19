
const addNewWord = document.querySelector(".vocabulary__add-new-word");
const trainingStart = document.querySelector(".training__start");

const allTabs = document.querySelectorAll('.wrapper-tabs__tab');
const vocabularyBlock = document.querySelector('.vocabulary');
const trainingBlock = document.querySelector('.training');
const vocabulary = document.querySelector('.vocabulary__all-words');
const trainingEnglishWord = document.querySelector('.training__english-word');
const trainingSeveralVariantsOfTranslate = document.querySelector('.training__choose-translate');
const milisecondPerHour = 3600000;
const syntax = "__";
const englishWordInput = document.querySelector('.english_word');
const nativehWordInput = document.querySelector('.native_word');
const buttonOne = document.querySelectorAll('.button-primary');
let removeButtons = document.querySelectorAll('.removeFromVocabulary');
let allVocabularyWords;
let svg = `<svg class='voice-acting' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="612px" height="612px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve"><g><g><path d="M574.47,190.063c-24.899-34.021-58.128-57.798-99.601-70.496c-10.086-3.09-21.556,2.761-24.548,12.974    c-2.971,10.13,2.806,21.062,12.974,24.204c32.966,10.183,59.534,28.821,79.616,56.467c19.909,27.415,30.16,58.218,30.16,92.935    c0,34.372-10.168,65.235-30.16,92.591c-19.992,27.354-46.65,45.932-79.616,56.115c-10.176,3.143-16.026,14.447-12.974,24.547    c2.565,8.5,10.168,13.678,18.585,13.678c3.157,0,4.9-0.367,5.963-0.695c41.384-12.996,74.783-36.416,99.602-70.496    C599.453,387.574,612,348.938,612,306.147C612,263.014,599.37,224.084,574.47,190.063z"/><path d="M495.558,362.973c12.36-17.125,18.585-36.123,18.585-56.818c0-21.391-6.397-40.268-18.585-57.162    c-12.36-17.126-28.709-28.903-48.753-35.427c-10.124-3.292-20.695,2.11-24.549,12.278c-2.806,10.168,2.199,20.718,12.974,24.197    c23.958,7.744,40.336,30.512,40.336,56.115c0,25.252-16.423,47.527-40.336,55.412c-10.115,3.338-16.026,14.104-12.974,24.205    c2.566,8.492,10.168,13.678,18.585,13.678c2.103,0,4.205-0.354,5.964-1.408C466.804,391.375,483.369,379.859,495.558,362.973z"/><path d="M389.298,55.387c-7.715-3.157-14.516-1.848-20.695,3.157L207.626,189.016H19.289C8.417,189.016,0,197.785,0,208.657    v194.652c0,10.871,8.417,19.289,19.289,19.289h188.338l160.976,131.533c3.479,2.844,7.362,4.191,11.926,4.191    c3.157,0,5.903-0.824,8.77-2.096c7.31-3.291,10.871-9.129,10.871-17.209V73.636C400.169,65.563,396.66,59.248,389.298,55.387z     M361.24,497.994l-134.325-109.77c-3.861-3.156-7.714-4.557-12.278-4.557H38.929V227.945h175.708    c4.557,0,8.799-1.362,12.278-4.205L361.24,113.605V497.994z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;


displayAllWords();

//What i want to finish
//All words need to be limited on training, for example today i want to learn 20/50/100 words, if my vocabulary
//not have enough in this case use all available

//add condition that after displaying word and variant of translate we could clcik only once
//if it was RIGHT variant update detail of current word(last update, progress, status, difficulties)


// ----TEMPRORARY SCRIPT----
const clearlocalStorage = document.querySelector('.clear-local-storage');
const addSeveralWords = document.querySelector('.add-several-words');

clearlocalStorage.addEventListener('click', () => {
  localStorage.clear();
})

addSeveralWords.addEventListener('click', () => {
  let today = new Date();
  let pastDateOne = new Date(2022,4,6);
  let pastDateTwo = new Date(2022,4,5);
  let pastDateThree = new Date(2022,4,4);
  let pastDateFour = new Date(2022,4,3);

  // New word,not difficult,today last update
  localStorage.setItem(`table`,`стол`);
  localStorage.setItem(`table__status`,`new word`);
  localStorage.setItem(`table__lastUpdate`,`${today}`);
  localStorage.setItem(`table__difficult`,`${false}`);

  // In progress,not difficult, pastDateOne last update
  localStorage.setItem(`cat`,`кошка`);
  localStorage.setItem(`cat__status`,`In progress`);
  localStorage.setItem(`cat__lastUpdate`,`${pastDateOne}`);
  localStorage.setItem(`cat__difficult`,`${false}`);

  // In progress, difficult, pastDateTwo last update
  localStorage.setItem(`developer`,`разработчик`);
  localStorage.setItem(`developer__status`,`In progress`);
  localStorage.setItem(`developer__lastUpdate`,`${pastDateTwo}`);
  localStorage.setItem(`developer__difficult`,`${true}`);

  // In progress, difficult, pastDateThree last update
  localStorage.setItem(`jerk`,`придурок`);
  localStorage.setItem(`jerk__status`,`In progress`);
  localStorage.setItem(`jerk__lastUpdate`,`${pastDateThree}`);
  localStorage.setItem(`jerk__difficult`,`${false}`);

  // In progress, difficult, pastDateFour last update
  localStorage.setItem(`active`,`активный`);
  localStorage.setItem(`active__status`,`In progress`);
  localStorage.setItem(`active__lastUpdate`,`${pastDateFour}`);
  localStorage.setItem(`active__difficult`,`${false}`);

  // In progress, difficult, pastDateFour last update
  localStorage.setItem(`car`,`машина`);
  localStorage.setItem(`car__status`,`In progress`);
  localStorage.setItem(`car__lastUpdate`,`${pastDateFour}`);
  localStorage.setItem(`car__difficult`,`${false}`);

  // In progress, difficult, pastDateFour last update
  localStorage.setItem(`rooster`,`петух`);
  localStorage.setItem(`rooster__status`,`In progress`);
  localStorage.setItem(`rooster__lastUpdate`,`${pastDateFour}`);
  localStorage.setItem(`rooster__difficult`,`${false}`);

})
// ----TEMPRORARY SCRIPT----

// ----BUTTON ANIMATION----
buttonOne.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.add('active');

    setTimeout(() => {
      button.classList.remove('active');
    }, 1000 );
  })
});
// ----BUTTON ANIMATION----


function displayAllWords() {
  let wordList = wordsList();
  allVocabularyWords = wordList.length;

  wordList.forEach(word => {
    let templateNewWord = `<div class="new-word">${svg}<p class="english">${word}</p><p class="native">${localStorage.getItem(word)}</p><button onClick="deleteWord(this)" class = 'button-primary removeFromVocabulary' type="submit">Remove</button></div>`;

    vocabulary.innerHTML += templateNewWord;
  })
}

addNewWord.addEventListener('click', () => {
  let englishWord = englishWordInput.value;
  let nativeWord = nativehWordInput.value;
  let templateNewWord = `<div class="new-word">${svg}<p class="english">${englishWord}</p><p class="native">${nativeWord}</p><button onClick="deleteWord(this)" class='button-primary removeFromVocabulary' type="submit">Remove</button></div>`;
  let ifFieldsAreFilled = englishWord && nativeWord ? true: false;
  let ifThisWordIsUnique = !wordsList().includes(englishWord);

  if(ifFieldsAreFilled === false) {
    displayTrouble("All fields must be filled");
  }

  if(ifThisWordIsUnique === false) {
    displayTrouble("You have added this word already");
  }

  if(ifFieldsAreFilled && ifThisWordIsUnique) {
    let lastUpdate = new Date();
    let status = 'new word';
    let wordDetail = getwordDetail(englishWord);
    let timesWordAppeared = 0;
    let rightAnswer = 0;

    localStorage.setItem(`${englishWord}`,`${nativeWord}`);
    localStorage.setItem(`${wordDetail.status}`,`${status}`);
    localStorage.setItem(`${wordDetail.lastUpdate}`,`${lastUpdate}`);
    localStorage.setItem(`${wordDetail.timesWordAppeared}`,`${timesWordAppeared}`);
    localStorage.setItem(`${wordDetail.rightAnswer}`,`${rightAnswer}`);


    englishWordInput.value = '';
    nativehWordInput.value = '';

    vocabulary.innerHTML += templateNewWord;
  }
});

function deleteWord(button) {
  let word = button.parentElement;
  let englishWord = word.querySelector('.english').innerText;
  let wordDetail = getwordDetail(englishWord);

  wordDetail.deleteWord();

  vocabulary.innerHTML = '';
  displayAllWords();
}

 allTabs.forEach(tab => {
  tab.addEventListener('click', function(event){
    event.stopPropagation();
    let currentTab = event.currentTarget;
    let classSection = currentTab.getAttribute('data-section');
    let section = document.querySelector(`div.${classSection}`);

    allTabs.forEach(tab => {
      let classSection = tab.getAttribute('data-section');
      let section = document.querySelector(`div.${classSection}`);

      tab.classList.remove('active');
      section.classList.remove('active');
    });

    currentTab.classList.add('active');
    section.classList.add('active');
    
  })
 });

trainingStart.addEventListener('click', function(){
  this.classList.add('hide');

  let wordsForTraining = createListOfPriorityWords();
  let minValue = 6;
  let maxIndex = wordsForTraining.length;

  if(allVocabularyWords > minValue) {
    let trainingBlock = document.querySelector('.training__new-words');

    wordsForTraining.forEach((word, index) => {
      let wordDetail = getwordDetail(word);
      let randomsWords = wordDetail.getrandomWords(word);
      let checkIfActive = '';
      let correctTranslate = localStorage.getItem(word)

      if(index == 0) {
        checkIfActive = 'active';
      }

      trainingBlock.innerHTML += `
      <div data-correct-variant='${correctTranslate}' class="word ${checkIfActive} word-index-${index}">
        <div class="training__english-word">${word}</div>
        <div class="training__translate-wrapper"></div>
      </div>`;

      randomsWords.forEach(randomsWord => {
        let wordIndex = document.querySelector(`.word-index-${index} .training__translate-wrapper`);
        let translateRandowWord = localStorage.getItem(randomsWord);

        wordIndex.innerHTML += `<div class="training__choose-translate button-primary">${translateRandowWord}</div>`;
      });
    });

    checkIfTranslateCorrect(maxIndex);

  } else {
    displayTrouble("Minimal words in your vocabulary is 7, please add words!");
  }

})

// ----FUNCTION HELPERS----
function wordsList() {
  let list = [];

  for(let i=0; i<localStorage.length; i++) {
    let englishWord = localStorage.key(i);
    let isWord = !(englishWord.includes(syntax));

    if(isWord) {
      list.push(englishWord);
    }
  }

  return list;
}



function checkIfTranslateCorrect(maxIndex) {
  let optionsOfTranslate = document.querySelectorAll('.training__translate-wrapper .training__choose-translate');

  optionsOfTranslate.forEach(option => {
    option.addEventListener('click', () => {
      let wordIndex = option.closest(".word");
      let correctTranslate = wordIndex.getAttribute("data-correct-variant");
      let myVariant = option.textContent;

      if(myVariant === correctTranslate) {
        showOtherWord(true, option, maxIndex);
      } else {
        showOtherWord(false, option, maxIndex);
      }
    })
  })
}

function showOtherWord(ifAnswearCorrect, option, maxIndex) {
  let correctTranslate = option;
  let currentWord = correctTranslate.closest("div.word");
  let currenWordIndex = +currentWord.getAttribute('class').split(" ").filter( className => className.includes('index')).join().split('index-').pop();

 if(ifAnswearCorrect) {
  correctTranslate.classList.add('correct-variant');

  nextWord(currentWord, currenWordIndex, maxIndex);
 } else {
  let wrongVariant = option;

  wrongVariant.classList.add('wrong-variant');

  nextWord(currentWord, currenWordIndex, maxIndex) 
 }
}

function nextWord(currentWord, currenWordIndex, maxIndex) {
  setTimeout(()=> {
    currentWord.classList.remove('active');
  }, 1000);

  setTimeout(()=> {
    if(currenWordIndex < maxIndex) {
      let nextIndex = currenWordIndex + 1;
      let nextWord = document.querySelector(`div.word.word-index-${nextIndex}`);

      nextWord.classList.add('active');
    }
  }, 1000)
}

function displayTrouble(reason) {
  let modal = document.querySelector('.overlay');
  let modalButton = document.querySelector('.modal-with-text__button');
  let displayMessage = document.querySelector('.overlay .modal-with-text p');
  let body = document.querySelector('body');

  modal.classList.add("active");
  body.classList.add('overlay-active');
  displayMessage.innerHTML = `${reason}`

  modalButton.addEventListener('click', () => {
    modal.classList.remove('active');
    body.classList.remove('overlay-active');
  })
  return;
}
//think about number of keys and decrement their if it will be possible
function getwordDetail(word){
  let status = `${word}__status`;
  let lastUpdate = `${word}__lastUpdate`;
  let timesWordAppeared = `${word}__timesWordAppeared`;
  let rightAnswer = `${word}__rightAnswer`;

  let detail = {
    status: status,
    lastUpdate: lastUpdate,
    timesWordAppeared: timesWordAppeared,
    rightAnswer: rightAnswer,

    deleteWord() {
      localStorage.removeItem(word);
      localStorage.removeItem(this.status);
      localStorage.removeItem(this.differenceInHours);
      localStorage.removeItem(this.lastUpdate);
    },
    getStatusValue() {
      let statusValue = localStorage.getItem(this.status);
      return statusValue;
    },
    getlastUpdateValue() {
      let lastUpdate = localStorage.getItem(this.lastUpdate);
      return lastUpdate;
    },
    getTimesWordAppearedValue() {
      let timesWordAppeared = localStorage.getItem(this.timesWordAppeared);
      return timesWordAppeared;
    },
    getTimesRightAnswerValue() {
      let rightAnswer = localStorage.getItem(this.rightAnswer);
      return rightAnswer;
    },
    getDifferenceInHoursValue() {
      let lastUpdate = this.getlastUpdateValue();
      let differenceInHours = countDifferenceBetweenDates(lastUpdate);
      return differenceInHours;
    },
    getDifficultValue() {
      // check if this word is difficult
      let a = this.getTimesWordAppearedValue();
      let b = this.getTimesRightAnswerValue();

      //If user never answer correctly
      if(b / a === 0) {
        return false;
      } else {
        return true;
      }
    },
    getrandomWords(currentWord) {
      let randomWords = getRandomUniqueWords(currentWord);

      return randomWords;
    }
  }
  return detail;
}

function countDifferenceBetweenDates(date) {
  // the function is able accept a date as a string
  let currentMoment = new Date();
  let dateInthePast = new Date(date);
  let differenceInHours = ((currentMoment - dateInthePast)/milisecondPerHour).toFixed(2);

  return differenceInHours;
}

function createListOfPriorityWords() {
  let wordList = wordsList();
  let listOfPriorityWords = [];

  let newWords = [];
  let difficultWords = [];
  let otherWords = [];

  wordList.forEach(word => {
    let wordDetail = getwordDetail(word);
    let status = wordDetail.getStatusValue();
    let isDifficult = wordDetail.getDifficultValue();
    let differenceInHours =  wordDetail.getDifferenceInHoursValue();

    if(status === 'new word') {
      newWords.push(word);
    }

    if(isDifficult === true && status !== 'new word') {
      difficultWords.push(word);
    }

    if(status !== 'new word' && isDifficult === false) {
      let otherWordsDetail = { wordName: `${word}`, hours: `${differenceInHours}`};
      otherWords.push(otherWordsDetail);
    }
  })

  otherWords.sort(function (a, b) {
    return b.hours - a.hours;
  });

  for (let i = 0; i < otherWords.length; i++) {
    otherWords[i] = otherWords[i].wordName;
  }

  listOfPriorityWords.push(...newWords);
  listOfPriorityWords.push(...difficultWords);
  listOfPriorityWords.push(...otherWords);

  return listOfPriorityWords;
}

function getRandomUniqueWords(currentWord) {
  let allWord = wordsList();
  let maxIndex = wordsList().length - 1;
  let uniqueWords = [];

  uniqueWords.push(currentWord);

  while (uniqueWords.length < 6) {
    let randomIndex = Math.floor(Math.random() * maxIndex);
    let word = allWord[randomIndex]

    if(!uniqueWords.includes(word)){
      uniqueWords.push(word);
    }
  }

  shuffle(uniqueWords);

  return uniqueWords;
}

//change index and position of element absolutely random inner array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function addClickEvents() {
  let trainingVariantOfTranslate = document.querySelectorAll('.training__choose-translate p');

  trainingVariantOfTranslate.forEach(variant => {
    variant.addEventListener('click', () => {
      variant.classList.add('active');
    })
  });
}
// ----FUNCTION HELPERS----