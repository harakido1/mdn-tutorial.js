
let myImage = document.querySelector('img');

myImage.onclick = function() {
   let mySrc = myImage.getAttribute('src');
   if (mySrc === "img/developer-work-station.jpg") {
      myImage.setAttribute('src', 'img/developer-tools.jpg');
   } else {
      myImage.setAttribute('src', 'img/developer-work-station.jpg');
   }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
   let myName = prompt('Please enter your name.');
   if (!myName) {
      setUserName();
   }
   localStorage.setItem('name', myName);
   myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
   setUserName();
} else {
   let storedName = localStorage.getItem('name');
   myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick  = function() {
   setUserName();
}