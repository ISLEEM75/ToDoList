const myList = document.getElementsByTagName("LI");
// const timer = document.querySelector("#time");

for (let i = 0; i < myList.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    btn.className = "Delete";
    myList[i].appendChild(btn);
}
// const t = timer.value;

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

function addItem() {
    let li = document.createElement("li");
    let titel = document.getElementById("item").value;
    var expiryValue = parseInt(document.getElementById("time").value);

    let liTitel = document.createTextNode(titel);
    li.appendChild(liTitel);

    if (titel === "") {
        alert("you must type task");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("item").value = "";
    var span = document.createElement("SPAN");

    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    btn.className = "Delete";
    li.appendChild(btn);

    const expiryLabel = document.createElement("span");
    expiryLabel.innerText = "Expires in : " + expiryValue;
    expiryLabel.className = "expiry-label active";
    expiryLabel.setAttribute("expiresIn", expiryValue);

    li.appendChild(span);
    li.appendChild(expiryLabel);

    for (let i = 0; i < Delete.length; i++) {
        Delete[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}

// let second = t * 60;
// const typeTime = document.querySelector(".time")

// function typeTime(typeTime, timeCount) {
//     if (typeTime == 1) {
//         return (timeCount *= 60 * 1000);
//     } else if (typeTime == 2) {
//         return (timeCount *= 60 * 60 * 1000);
//     } else if (typeTime == 3) {
//         return (timeCount *= 24 * 60 * 60 * 1000);
//     } else if (typeTime == 4) {
//         return (timeCount *= 7 * 24 * 60 * 60 * 1000);
//     } else if (typeTime == 5) {
//         return (timeCount *= 30 * 24 * 60 * 60 * 1000);
//     }
// }
function done() {
    const notDoneElements = document.querySelectorAll("li:not(.checked)");
    const doneElements = document.querySelectorAll("li.checked");

    for (var i = 0; i < notDoneElements.length; i++) {
        notDoneElements[i].classList.add("hide");
    }
    for (var i = 0; i < doneElements.length; i++) {
        doneElements[i].classList.remove("hide");
    }
}

function notDone() {
    const notDoneElements = document.querySelectorAll("li:not(.checked)");
    const doneElements = document.querySelectorAll("li.checked");

    for (var i = 0; i < notDoneElements.length; i++) {
        notDoneElements[i].classList.remove("hide");
    }
    for (var i = 0; i < doneElements.length; i++) {
        doneElements[i].classList.add("hide");
    }
}

document.getElementById("item").addEventListener("keyup", function(e) {
    if (e.which === 13) newElement();
});
let lk = 0;
let x = null;
x = setInterval(() => {
    const expiryElements = document.querySelectorAll(".expiry-label.active");
    for (var i = 0; i < expiryElements.length; i++) {
        const currentElement = expiryElements[i];
        const currentValue = parseInt(currentElement.getAttribute("expiresin"));
        console.log("Current length " + expiryElements.length);

        const numberInSeconds = currentValue - 1;
        if (numberInSeconds === 0) {
            currentElement.innerText = "Expired";
            currentElement.className = "expiry-label expired";
        } else {
            currentElement.setAttribute("expiresin", numberInSeconds);
            currentElement.innerText = "Expires in :" + numberInSeconds;
        }
    }
}, 1000);
const Delete = document.getElementsByClassName("Delete");

for (let i = 0; i < Delete.length; i++) {
    Delete[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}