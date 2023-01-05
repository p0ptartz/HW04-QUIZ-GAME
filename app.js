// create quiz questions/answers/correct answer object

var quizQuestions = [
    {
        question: "Dinosaurs were: ",
        choices: ["BIG",
            "Old",
            "Placed on Earth to test Man's faith in God",
            "Scary :("],
        correctAnswer: 3,
    },
    {
        question: "Donald Trump is: ",
        a: "Dumb",
        b: "Really, REALLY dumb",
        c: "Orange",
        d: "America's only hope to stop the baby-eating pedophiliac Elite",
        correctAnswer: 4,
    },
    {
        question: "The Earth is: ",
        a: "Flat",
        b: "A Planet",
        c: "A star",
        d: "A Moon",
        correctAnswer: 1,
    },
    {
        question: "Obama was: ",
        a: "A president",
        b: "A nice guy",
        c: "Smart",
        d: "A blood sucking Reptilian put here to control the weather and cause civil unrest",
        correctAnswer: 4,
    },
]

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


// function to start the quiz
startQuiz()
function startQuiz() {

    // add event listener to remove directions and start quiz/timer
    startButton.addEventListener("click", function () {
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
    })

    // loading the quiz data 
    var currentData = quizQuestions[currentQuestion]

    questionElement.innerHTML = currentData.question
    aText.innerHTML = currentData.a
    bText.innerHTML = currentData.b
    cText.innerHTML = currentData.c
    dText.innerHTML = currentData.d
}

// needed a for loop so i can move to the next question when pressing any answer button.  THIS TOOK ME FOREVER :(

var answerButton = document.querySelectorAll(".answer-btn")

for (i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener("click", function (event, answer) {

        // need to deduct time if answer is wrong as well as change wrong answer color to red and correct to green

        // if (answer !== quizQuestions[currentQuestion].correctAnswer) {
        //     event.target.setAttribute("style", "background-color: red")
        // } else {
        //     event.target.setAttribute("style", "background-color: green")
        // }

        // this moves to next question
        currentQuestion++
        startQuiz()
    })

}








