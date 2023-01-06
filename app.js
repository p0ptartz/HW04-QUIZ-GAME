// create quiz questions/answers/correct answer object


var quizQuestions = [
    {
        question: "Dinosaurs were: ",
        choices: ["BIG", "Old", "Placed on Earth to test Man's faith in God", "Scary :("],
        correctAnswer: "Placed on Earth to test Man's faith in God"
    },
    {
        question: "Donald Trump is: ",
        choices: ["Dumb", "Really, REALLY dumb", "Orange", "America's only hope to stop the baby-eating pedophiliac Elite"],
        correctAnswer: "America's only hope to stop the baby-eating pedophiliac Elite"
    },
    {
        question: "The Earth is: ",
        choices: ["A Moon", "Flat", "A star", "A Planet"],
        correctAnswer: "Flat"
    },
    {
        question: "Obama was: ",
        choices: ["A president", "A nice guy", "Smart", "A blood sucking Reptilian put here to control the weather and cause civil unrest"],
        correctAnswer: "A blood sucking Reptilian put here to control the weather and cause civil unrest"
    }
];

// store variables for query select

var startButton = document.querySelector(".start-button")
var game = document.querySelector(".game")
var directions = document.querySelector(".container")
var timer = document.querySelector(".count")
// variables to select question/answers
var questionElement = document.querySelector("#question")
var aText = document.querySelector("#a")
var bText = document.querySelector("#b")
var cText = document.querySelector("#c")
var dText = document.querySelector("#d")
// variable to start the index
var currentQuestion = 0;


// setting the timer amount
timer.innerHTML = 60


// add event listener to remove directions and start quiz/timer
startButton.addEventListener("click", function () {
    startTimer()

})

// function to start the timer countdown
function startTimer() {
    game.style.display = "block"
    directions.style.display = "none"
    var count = 60
    var countdown = setInterval(function () {
        count--
        timer.innerHTML = count;

        if (count === 0) {
            clearInterval(countdown);
            game.style.display = "none"
        }
    }, 1000)

}

function showQuestions() {
    for (let i = 0; i < quizQuestions.length; i++) {
        let element = quizQuestions[i]
        let choices = element.choices
        console.log(element)
        choices.map((choice, index) => {
            console.log(choice)
        })
    }
}















