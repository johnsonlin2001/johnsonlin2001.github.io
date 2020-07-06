
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/brooke.jpg') {
      myImage.setAttribute ('src','images/brooke2.gif');
    } else {
      myImage.setAttribute ('src','images/brooke.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML =  myName +' loves Brooke Wylde';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML =  storedName + ' loves Brooke Wylde';
}

myButton.onclick = function() {
  setUserName();
}
