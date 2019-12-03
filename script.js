var startBtn = document.querySelector('#start-btn')
var questContainEl = document.querySelector('#question-container')

var shuffeledQuestions; 
var currentQuestionsInsex;


startBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.classList.add('hide')
    shuffeledQuestions = questions.sort(function() {Math.random() -.5})
    currentQuestionsInsex = 0;
    questContainEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion () {

}

