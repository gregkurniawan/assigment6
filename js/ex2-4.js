//Exercise 2
const displayText400 = () => {
    const existingElements = Array.from(document.getElementsByClassName("400level"));
    existingElements.forEach(element => {
        console.log(element.innerText);
    })
}
displayText400();

//Exercise 3
const divElements = Array.from(document.getElementsByTagName("p"));
divElements.forEach(divElement => {
    divElement.style.backgroundColor  = "yellow"
    divElement.style.fontWeight = "900" 
});

//Exercise 4
document.querySelectorAll("ul")[2].setAttribute("id", "test");
console.log(document.getElementById("test"));

function list () {
    var x = document.getElementsByTagName("li")[9];
    x.setAttribute("id","list");
    console.log(document.getElementById("list"));
}
list();

const COBLink = ["https://www.csulb.edu/college-of-business"];

const newLink = document.createElement("a");
newLink.id = "COB";
newLink.textContent = "College of Business";
newLink.href = COBLink;
document.getElementById("test").insertBefore(newLink, document.getElementById("list"));


/*document.querySelectorAll("ul")[2].setAttribute("id", "test");
console.log(document.getElementById("test"));

function list () {
    var x = document.getElementsByTagName("li")[9];
    x.setAttribute("id","list");
    console.log(document.getElementById("list"));
}
list();

const newLinks = [
    "https://www.csulb.edu/college-of-business"
];

const COB = document.getElementById("test");

newLinks.forEach(newLink => {
    const linkElement = document.createElement("a");
    linkElement.textContent = "College of Business";
    linkElement.href = newLink;
    COB.appendChild(linkElement);
    COB.appendChild(document.createElement("br"));
    document.getElementById("test").insertBefore(newLinks, document.getElementById("list"))
});*/
