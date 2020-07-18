import { md5 } from './md5.mjs';
import { publicKey, privateKey } from './secrets.mjs';

let timestamp = Date.now();
let md5Hash = md5(`${timestamp}${privateKey}${publicKey}`);

fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)
.then((res) => res.json())
.then((data) => {
  console.log(data);

  var arr = data.data.results.map(_ => _.name);
  const shuffledQuestions = arr.sort(() => Math.random() - .5)

  let index = 0;
  let buttonOne = 2;
  console.log(buttonOne)
  let buttonTwo = 3;
  let buttonThree = 4;
  let buttonFour = 5;

  function nextItem() {
    index++;
    index % arr.length;
    return arr[index];

  }

  function prevItem() {
    index--;
    if (index < 0) index = arr.length - 1;
    return arr[index]
  }

  function optionOne() {
    if (btnOne.textContent == characterName.textContent) {
      alert("right answer");
    } else {
      alert("no answer");
      { window.location.reload() }
    }

    function optionTwo() {

      if (btnThree.textContent == characterName.textContent) {
        alert("right answer");
      } else {
        alert("No answer");
        { window.location.reload() }
      }
    }

    function optionThree() {
      if (btnTwo.textContent == characterName.textContent) {
        alert("right answer");
      } else {
        alert("No answer");
      } { window.location.reload() }
    }
  }

  function optionFour() {
    if (btnFour.textContent == characterName.textContent) {
      alert("right answer");
    } else {
      alert("wrong answer");
    } { window.location.reload() }
  }



  const characterName = document.getElementById('character-name');
  characterName.textContent = shuffledQuestions[1];

  const btnOne = document.getElementById("btn-1").textContent = shuffledQuestions[buttonOne];
  console.log(characterName);

  const btnTwo = document.getElementById("btn-2");
  btnTwo.textContent = shuffledQuestions[buttonTwo];


  const btnThree = document.getElementById("btn-3");
  btnThree.textContent = shuffledQuestions[buttonThree];

  console.log(btnThree);

  const btnFour = document.getElementById("btn-4");
  btnFour.textContent = shuffledQuestions[buttonFour];
  btnFour.addEventListener('click', optionFour)

  document.getElementById("next-btn").addEventListener('click', function (e) {
    characterName.innerText = nextItem();

    document.getElementById("next-btn").addEventListener('click', nextItem);
  });
});














