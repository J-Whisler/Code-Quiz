var startBtn = document.querySelector('#start-btn')
var questContainEl = document.querySelector('#question-container')

startBtn.addEventListener('click', startGame)


function startGame() {
    startBtn.classList.add('hide')
    questContainEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion () {

}

