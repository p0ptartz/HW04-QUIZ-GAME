

// for the highscores page
var highScoreName = document.querySelector(".your-name")
var yourScore = document.querySelector(".your-score")
var clear = document.querySelector(".clear-btn")

// clears the local storage as well as the inputs on screen
clear.addEventListener("click", function () {
    localStorage.clear()
    highScoreName.textContent = ""
    yourScore.textContent = ""
})


// get the name and score elements
var highScoreName = document.querySelector(".your-name");
var yourScore = document.querySelector(".your-score");

// get the names and scores from local storage and create empty array
var names = JSON.parse(localStorage.getItem("names")) || [];
var scores = JSON.parse(localStorage.getItem("scores")) || [];



// loop through the name and score array
for (var i = 0; i < names.length; i++) {
    // create a li to list name and score
    var nameElement = document.createElement("li");
    var scoreElement = document.createElement("li");
    nameElement.textContent = names[i];
    scoreElement.textContent = scores[i];

    // adds scores to ul 
    highScoreName.appendChild(nameElement);
    yourScore.appendChild(scoreElement);
}


