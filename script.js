const myList = document.getElementsByTagName("LI");
// const timer = document.querySelector("#time");

for (let i = 0; i < myList.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    btn.className = "Delete";
    myList[i].appendChild(btn);
}
// const t = timer.value;

function addItem() {
    let li = document.createElement("li");
    let titel = document.getElementById("item").value;
    let liTitel = document.createTextNode(titel);
    li.appendChild(liTitel);

    if (titel === "") {
        alert("you must type task");
    } else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("item").value = "";

    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Delete";
    btn.className = "Delete";
    li.appendChild(btn);

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

const Delete = document.getElementsByClassName("Delete");

for (let i = 0; i < Delete.length; i++) {
    Delete[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    };
}