console.log("hi!");

let content = document.getElementById('content');
let redParagraph = document.createElement("p");
redParagraph.style.color="red";
redParagraph.textContent="Hey I am Red!";
content.appendChild(redParagraph);