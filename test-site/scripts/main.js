let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.png") {
    myImage.setAttribute("src", "images/furina.jpg");
  } else {
    myImage.setAttribute("src", "images/cat.png");
  }
};


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Cat.com, ${myName}`;
    }
  }
    
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cat.com, ${storedName}`;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  

  