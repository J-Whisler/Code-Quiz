// variables to grab different elements from html page
var startBtn = document.querySelector('#start-btn')
var questContainEl = document.querySelector('#question-container')
var questionEl = document.querySelector('#question')
var answerBtnsEl =document.querySelector('#answer-btns')

// variable set as undefined to be used to shuffle the order of the questions
var shuffeledQuestions; 
var currentQuestionsInsex;

// event listener to make the start button functional
startBtn.addEventListener('click', startGame)

// start game function that will be triggered by the above event listener
function startGame() {
    // this will hide the start button after the user clicks on it
    startBtn.classList.add('hide')
    // this will sort the questions using math.random to give us a number between 0 and 1, -.5 to give us a 50/50 chance of getting a number above 0 and a 50/50 chance of getting a number below 0, thus giving us a random array of questions.
    shuffeledQuestions = questions.sort(function() {Math.random() -.5})
    // setting the currentQuestionIndex to 0 so it knows to start on the first item in the shuffled array.
    currentQuestionsIndex = 0;
    // this will remove the 'hide class' from the question container element, thus making the question appear on the screen after the user clicks the start button, and the start button disappears
    questContainEl.classList.remove('hide')
    // this calls the nextQuestion function
    nextQuestion()
}

// create function to make questions appear on the screen
function nextQuestion () {

    currentQuestion(shuffeledQuestions[currentQuestionsInsex])

}

// create currentQuestion function with question parameter
function currentQuestion (question) {
    // set the text content of the question element
    questionEl.textContent = question.question
}

function selectAnswer () {
    
}

