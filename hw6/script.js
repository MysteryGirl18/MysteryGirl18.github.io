console.log("theMessage");

const imgBtn = document.getElementById("img-btn")
const quoteBtn = document.getElementById("quote-btn");
const surpriseBtn = document.getElementById("surp-btn");

const theDivider = document.getElementById("display");

let para;
let node;

const img = "pics/soldiers.png";
const quote = "'History as she is harped. Rite words in rote order.'  -Marshall McLuhan";
const surprise = "pics/sloth.gif";

imgBtn.addEventListener('click', displayImg);
quoteBtn.addEventListener('click', displayQuote);
surpriseBtn.addEventListener('click', displaySurprise);

function displayQuote() {
    console.log("click!");

    let para = document.createElement('p')
    para.className = "quote";
    let node = document.createTextNode(quote);
    para.appendChild(node);

    // document.body.appendChild(theItem);
    theDivider.replaceChildren(para);
}

function displayImg() {
    console.log("click!");

    const myImage = new Image();
    myImage.src = img;
    myImage.class = "full_width";

    theDivider.replaceChildren(myImage);
}

function displaySurprise() {
    console.log("click!");

    const myImage = new Image();
    myImage.src = surprise;
    myImage.class = "full_width";

    theDivider.replaceChildren(myImage);
}
