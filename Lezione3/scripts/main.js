/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
let myVariable = "Bob";
let età = 25;
let variable = true;
let vettore = [2,3,'Pippo',true];
let età1 = 25.0;
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
function multiply(num1, num2){
    let result = num1 * num2;
    return result
}
let ris = multiply (5, 6);
alert(ris);
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://www.mozilla.org/en-US/about/manifesto/") {
    myImage.setAttribute("src", "img/firefox-icon.jpg");
  } else {
    myImage.setAttribute("src", "https://www.mozilla.org/en-US/about/manifesto/");
  }
};
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
if (!localStorage.getItem("name")) {
    setUserName();
}
myButton.onclick = () => {
    setUserName();
  };
