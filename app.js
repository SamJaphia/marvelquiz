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
  // let buttonOne = 2;
  // console.log(buttonOne)
  // let buttonTwo = 3;
  // let buttonThree = 4;
  // let buttonFour = 5;

  let answers = shuffledQuestions.slice(0, 4); // get the first 4 items from the shuffled questions

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
      alert("wrong answer");
      { window.location.reload() }
    }
  }

  function optionTwo() {

    if (btnTwo.textContent == characterName.textContent) {
      alert("right answer");
    } else {
      alert("wrong answer");
      }  { window.location.reload() }
    }
  

  function optionThree() {
    if (btnThree.textContent == characterName.textContent) {
      alert("right answer");
    } else {
      alert("wrong answer");
    } { window.location.reload() }
  }

  function optionFour() {
    if (btnFour.textContent == characterName.textContent) {
      alert("right answer");
    } else {
      alert("wrong answer");
    } { window.location.reload() }
  }



  const characterName = document.getElementById('character-name');
  characterName.textContent = answers[Math.floor(Math.random()*4)];
  var marvelPic = data.data.results[1].thumbnail.path + "/portrait_uncanny.jpg";
  
  

  const btnOne = document.getElementById("btn-1");
  btnOne.textContent = answers[0];
  btnOne.addEventListener('click', optionOne);

  const btnTwo = document.getElementById("btn-2");
  btnTwo.textContent = answers[1];
  btnTwo.addEventListener('click', optionTwo);

  const btnThree = document.getElementById("btn-3");
  btnThree.textContent = answers[2];
  btnThree.addEventListener('click', optionThree);

  const btnFour = document.getElementById("btn-4");
  btnFour.textContent = answers[3];
  btnFour.addEventListener('click', optionFour);

  document.getElementById("marvel-picture").src = marvelPic;
  
  document.getElementById("next-btn").addEventListener('click', function (e) {
    characterName.innerText = nextItem();

    document.getElementById("next-btn").addEventListener('click', nextItem);
  });
});














