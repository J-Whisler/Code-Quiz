// variables to grab different elements from html page
var startBtn = document.querySelector('#start-btn')
var questContainEl = document.querySelector('#question-container')
var questionEl = document.querySelector('#question')
var answerBtnsEl = document.querySelector('#answer-btns')

// variables set as undefined to be used to shuffle the order of the questions
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
    // calling reset function
    reset()

    // calling currentQuestion function that will use the shuffeledQuestions variable and the currentQuestionsIndex to produce the next question on the screen
    currentQuestion(shuffeledQuestions[currentQuestionsIndex])

    

}

// create currentQuestion function with question parameter
function currentQuestion (question) {
    // set the text content of the question element
    questionEl.innerText = question.question
    // loop through different questions answers
    question.answers.forEach(function answer () {
        // creates button for each different answer
        var button = document.createElement('button')
        // will set the text of the button to the text of the answers from questions.js
        button.innerText = answer.text
        // add the btn class to all the newly created button elements
        button.classList.add('btn')
        // checking to see if the answer is correct
        if (answer.correct) {
            // add a data attribute to the button element and sets the attribute to correct if it is the correct answer to the question
            button.dataset.correct = answer.correct
        }
        // add event listener to thw newly created button elements, used as parameter in selectAnswer function
        button.addEventListener('click', selectAnswer)
        // appends the button we just created to the answerbtnsEl
        answerBtnsEl.appendChild(button)
    })
}

// creating reset function to remove original answer button elements to be replaced by answer buttons containing answer text
function reset () {
    // while loop to loop through all chidren for answerBtnsEl
    while (answerBtnsEl.firstChild) {
        // if there is a child inside the answer button element, this will remove it
        answerBtnsEl.removeChild
        (answerBtnsEl.firstChild)
    }
}

// selectAnswer fucntion
function selectAnswer (event) {
    // variable for whichever button we select
    var selectedButton = event.target
    // checks if the answer selected was the correct answer using the dataset of correct
    var correct = selectedButton.dataset.correct
    // sets status class of body whether it should be set to correct or incorrect
    setStatusClass(document.body, correct)
    // loops through all other buttons and sets the status class for those buttons
    // converts to an array so we can use it with the forEach
    Array.from(answerBtnsEl.children).forEach(function button () {
        // sets status class based on if the answer is correct or incorrect
        setStatusClass(button, button.dataset.correct)
    })

}



