

// for the highscores page
var highScoreName = document.querySelector(".your-name")
var yourScore = document.querySelector(".your-score")
var clear = document.querySelector(".clear-btn")

clear.addEventListener("click", function () {
    localStorage.clear()
    highScoreName.textContent = ""
    yourScore.textContent = ""
})

// pulls name and score from local storage
var localName = localStorage.getItem("name")
var localScore = localStorage.getItem("score")


highScoreName.textContent = localName;
yourScore.textContent = localScore




// let nameList = document.querySelector(".your-name");
// let scoreList = document.querySelector(".your-score");

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);

//     let nameItem = document.createElement("li");
//     let scoreItem = document.createElement("li");
//     nameItem.textContent = key;
//     scoreItem.textContent = value;
//     nameList.appendChild(nameItem);
//     scoreList.appendChild(scoreItem);

// }