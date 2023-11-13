// console.log("theMessage");

// const theButton = document.querySelector("button");
// const theInput = document.querySelector("input")
// let theDivider = document.querySelector("div")

// let theUserWords;
// let theItem;
// let theTxt;

// theButton.addEventListener('click', makeList)

// function makeList() {
//     console.log("click!");
//     theUserWords = theInput.value;
//     // console.log(theUserWords)
//     theItem = document.createElement('li')
//     const theSpan = document.createElement('span');
//     theTxt = document.createTextNode(theUserWords);
//     // document.body.appendChild(theItem);
//     theDivider.appendChild(theItem);
//     theItem.appendChild(theTxt);
// }

// document.querySelector("p").addEventListener('click', eraseList)

// function eraseList(){
//     console.log("erase!");
//     document.querySelector("div").remove(theItem)
// }

// ------------------------------------------------------------

console.log("starting script...");

const addButton = document.querySelector("button");
const inputBox = document.querySelector("input");
let container = document.querySelector("div");

let theUserWords;
let theItem;
let theTxt;

function makeList() {
    console.log("click!");
    theUserWords = inputBox.value;

    theItem = document.createElement("li");
    theTxt = document.createTextNode(theUserWords);
    theItem.appendChild(theTxt);

    container.appendChild(theItem);     // could also have appended directly to DOM using document.body.appendChild()
}

addButton.addEventListener('click', makeList)

// function eraseList(event){
//     console.log("commencing erase!");
//     container.removeChild(theItem);
// }

// document.getElementById("clear").addEventListener("click", eraseList);

