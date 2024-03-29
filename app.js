import { md5 } from './md5.mjs';
import { publicKey, privateKey } from './secrets.mjs';

// API Key information
let timestamp = Date.now();
let md5Hash = md5(`${timestamp}${privateKey}${publicKey}`);

// API Fetch Data
fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&modifiedSince=2018-03-01&limit=50?&apikey=${publicKey}&hash=${md5Hash}`)
.then((res) => res.json())
.then((data) => {
  console.log(data);

  // API Data
  var arr = data.data.results.map(_ => {return{marvelName:_.name, marvelImage:_.thumbnail}});
  let realArray = arr.filter(function(marvelElement) {
    if (marvelElement.marvelImage.path.includes("image_not_available")){
      return false;
    } else {
    return true;
  }});

  const shuffledQuestions = realArray.sort(() => Math.random() - .5);

  let index = 0;
  let answers = shuffledQuestions.slice(0, 4); // get the first 4 items from the shuffled questions

  // Start Again
  function nextItem() {
    {window.location.reload()}
  }
  // Buttons
  function optionOne() {
    if (btnOne.textContent == characterName.textContent) {
      alert("Right Answer");
    } else {
      alert("wrong answer");
        } { window.location.reload() }
    }
  
  function optionTwo() {
    if (btnTwo.textContent == characterName.textContent) {
      alert("Right Answer");
    } else {
      alert("wrong answer");
      }  { window.location.reload() }
    }

  function optionThree() {
    if (btnThree.textContent == characterName.textContent) {
      alert("Right Answer");
    } else {
      alert("wrong answer");
    } { window.location.reload() }
  }

  function optionFour() {
    if (btnFour.textContent == characterName.textContent) {
      alert("Right Answer");
    } else {
      alert("wrong answer");
    } { window.location.reload() }
  }

  // Randomises the answers
  const characterName = document.getElementById('character-name');
  var indexNumber = Math.floor(Math.random()*4);
  console.log(indexNumber);
  characterName.textContent = answers[indexNumber].marvelName;
  console.log(answers); 
  var marvelPic = answers[indexNumber].marvelImage.path+ "/portrait_xlarge.jpg" ;
  console.log(marvelPic);
  
  // Eventlisteners
  const btnOne = document.getElementById("btn-1");
  btnOne.textContent = answers[0].marvelName;
  btnOne.addEventListener('click', optionOne);

  const btnTwo = document.getElementById("btn-2");
  btnTwo.textContent = answers[1].marvelName;
  btnTwo.addEventListener('click', optionTwo);

  const btnThree = document.getElementById("btn-3");
  btnThree.textContent = answers[2].marvelName;
  btnThree.addEventListener('click', optionThree);

  const btnFour = document.getElementById("btn-4");
  btnFour.textContent = answers[3].marvelName;
  btnFour.addEventListener('click', optionFour);
  
  // Images
  document.getElementById("marvel-picture").src = marvelPic;

  // Marvel Attribution
  const marvelAttribution = document.getElementById("attribute");
  marvelAttribution.innerText = data.attributionText;

  // Refresh Button
  document.getElementById("next-btn").addEventListener('click', function (e) {
    characterName.innerText = nextItem();
    document.getElementById("next-btn").addEventListener('click', nextItem);
  });
});
