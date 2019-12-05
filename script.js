// variables to grab different elements from html page
var startBtn = document.querySelector('#start-btn')
var questContainEl = document.querySelector('#question-container')
var questionEl = document.querySelector('#question')
var answerBtnsEl = document.querySelector('#answer-btns')
var timerEl = document.querySelector('#timer')
var headerEl = document.querySelector('#header')
var answerTextEl = document.querySelector('#answer-text')
var time = 75;
var step = 0;
var btn1 = document.querySelector('#btn1')
var btn2 = document.querySelector('#btn2')
var btn3 = document.querySelector('#btn3')
var btn4 = document.querySelector('#btn4')
var name = localStorage.setItem['Name']
var score = localStorage.setItem['Score']

// variables set as undefined to be used to shuffle the order of the questions
var shuffeledQuestions; 
var currentQuestionsIndex;

// event listener to make the start button functional
startBtn.addEventListener('click', startGame)

// start game function that will be triggered by the above event listener
function startGame() {
    // this will hide the start button after the user clicks on it
    startBtn.classList.add('hide')
    // this will sort the questions using math.random to give us a number between 0 and 1, -.5 to give us a 50/50 chance of getting a number above 0 and a 50/50 chance of getting a number below 0, thus giving us a random array of questions.
    shuffeledQuestions = questions.slice().sort(function() {Math.random() -.5})
    // setting the currentQuestionIndex to 0 so it knows to start on the first item in the shuffled array.
    currentQuestionsIndex = 0;
    // this will remove the 'hide class' from the question container element, thus making the question appear on the screen after the user clicks the start button, and the start button disappears
    questContainEl.classList.remove('hide')
    // this calls the nextQuestion function
    nextQuestion()
    // calls the timer function
    timer()
    // hides the header text when start button is pushed
    headerEl.classList.add('hide')
    // makes answer text appear when start button is pushed
    answerTextEl.classList.remove('hide')


    

}

// create function to make questions appear on the screen
function nextQuestion () {
    
    // calling currentQuestion function that will use the shuffeledQuestions variable and the currentQuestionsIndex to produce the next question on the screen
    currentQuestion(shuffeledQuestions[currentQuestionsIndex])

    

}

function anotherQ () {
    if (step === 5) {
        finish ()
    } else {
        questionEl.innerHTML = questions[step].title
        btn1.innerHTML = questions[step].choices[0]
        btn2.innerHTML = questions[step].choices[1]
        btn3.innerHTML = questions[step].choices[2]
        btn4.innerHTML = questions[step].choices[3]
    }
}


        
questionEl.innerHTML = questions[step].title
btn1.innerHTML = questions[step].choices[0]
btn2.innerHTML = questions[step].choices[1]
btn3.innerHTML = questions[step].choices[2]
btn4.innerHTML = questions[step].choices[3]


for (var i = 0; i < answerBtnsEl.length; i++) {
    answerBtnsEl[i].addEventListener('click', function () {
        console.log(step)
        if(this.textContent === questions[step].answer) {
            console.log('correct')
            step++
        } else {
            console.log('incorrect')
            step++
        }
        if(step < questions.length) {
            questionEl.textContent = questions[step].title
            btn1.textContent = questions[step].choices[0]
            btn2.textContent = questions[step].choices[1]
            btn3.textContent = questions[step].choices[2]
            btn4.textContent = questions[step].choices[3]
            

        }
        if(step === questions.length) {
            clearInterval (timer);
            score = time;
            alert('Your Score is ' + score);
                    
              if(!Name + [i++]){
            
            Name = prompt('Enter Your Name'); 
            localStorage.setItem('Name', JSON.stringify(name)); 
            localStorage.setItem('score', JSON.stringify(score)); 
              
          }

        }
    })
}





// selectAnswer function
// function selectAnswer () {

    btn1.addEventListener('click', function () {
        if (questions[step].choices[0] !== questions[step].answer) {
            time = time - 15
        }
        step++
    })

    btn2.addEventListener('click', function() {
        if (questions[step].choice[1] !== quesitions[step].answer) {
            time = time - 15
        }
        step++
    })
    btn3.addEventListener('click', function() {
        if (questions[step].choices[2] !== questions[step].answer) {
            time = time - 15
        }
        step++
    })
    btn4.addEventListener('click', function () {
        if (questions[step].choices[3] !== questions[step].answer) {
            time = time - 15
        }
        step++
    
// }
    })


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

function timer () {
    timer = setInterval(function() {
        time--;
        timerEl.textContent = ('Score: ' + time)
        if(time !== 0) {
        }
        else if (time === 0) {
            clearInterval (timer)
            alert('Time is up!')
        } else {}
        }, 1000)
}