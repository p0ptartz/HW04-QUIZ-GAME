
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
var choicesList = document.querySelector("#choices");
// variable to start the index
var currentQuestion = 0;
var count = 60
var countdown;
// setting the timer amount
timer.innerHTML = 60


// add event listener to remove directions and start quiz/timer
startButton.addEventListener("click", function () {
    countdown = setInterval(function () {
        count--
        timer.innerHTML = count;

        if (count <= 0) {
            endGame();
        }
    }, 1000)

    directions.classList.add("hide");
    game.classList.remove("hide");
    showQuestions();
})

// function to stop the timer countdown
function endGame() {

    clearInterval(countdown);

}

function showQuestions() {
    questionElement.textContent = quizQuestions[currentQuestion].question;
    quizQuestions[currentQuestion].choices.forEach(function (choice) {
        var choiceElement = document.createElement("li");
        choiceElement.textContent = choice;
        choicesList.appendChild(choiceElement)
        choiceElement.addEventListener("click", function () {

            if (currentQuestion === quizQuestions.length - 1) {
                endGame();
                // deduct time if answer is wrong.  originally written as a function but unsure how to place the function properly
            } else if (choice !== quizQuestions[currentQuestion].correctAnswer) {
                count -= 10;
                choicesList.innerHTML = "";
                currentQuestion++;
                showQuestions()
            }
            else {
                // Clear the choices 
                choicesList.innerHTML = "";
                // Show the next question
                currentQuestion++;
                showQuestions()
            }
        })
    })
}


// i wrote this function first but not sure where to place it
// function evaluate() {
//     if (choice !== quizQuestions[currentQuestion].correctAnswer) {
//         count -= 10;
//         choicesList.innerHTML = "";
//         currentQuestion++;
//         showQuestions()
//     }
// }














