var lowerCharset = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCharset = ['A' , 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var spec = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '?', '>', '<', '{', '}', '[', ']','-','_', '`','~']
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

// creating 4 seperate functions to return each different character set

function lower () {
    return lowerCharset
}

function upper () {
    return upperCharset
}

function specials () {
    return spec
}

function numbers () {
    return num
}

// creating several variable to be used later.  arrPass to push first password into, stringPass to use to convert password into a string, and final to use to create password with no commas.

var arrPass = []
var stringPass = ''
var finalPass = ''

// creating passLength variable to be used later
var passLength = 0

// creating variables to be used in userInput function all set to true for now.  These will be used to determine if the user checked the boxes to choose between the different character set possiblities.

var low = true
var up = true
var specs = true
var nums = true

// creating userInput function to determine what character values will be passed to the final password dependin on which checkboxes the user chooses.

function userInput () {
    passLength = document.querySelector("#charNum").value


    if (document.getElementById("uppercase").checked) {
        up = true
    } else {
        up = false
    }


    if (document.getElementById("lowercase").checked) {
        low = true
    } else {
        low = false
    }

    if (document.getElementById("number").checked) {
        nums = true
    } else {
        nums = false
    }


    if (document.getElementById("symbol").checked) {
        specs = true
    } else {
        specs = false
    }
}


// creating function to sanitize the password.  This will give the user an alert if they choose a number for the password length that is either less than 8 or greater than 128.  It will also alert the user that they have to check at least one of the boxes to use at least one of the character sets.

function passSanitize () {
    if (passLength < 8 || passLength > 128) {
        alert("Please choose a number bewtween 8 and 128 characters for password length")

    } else if (low === false && up === false && specs === false && nums === false) {
        alert("Please check at least one of the boxes to choose at least one of the character sets")
   
}

arrPass.length = 0
}

// creating a function that will create the random password based on the users checkbox selections.  This will push/concat each of the different character sets into the possible values variable array if the user chooses that specific checkbox.  If the user does not choose 1 or more of the character sets, those character will not be added to the possible values variable array.

function createPassword () {

    var possibleValues = []

    if (low === true) {
        possibleValues = possibleValues.concat(lower())
    }

    if (up === true) {
        possibleValues = possibleValues.concat(upper())
    }

    if (specs === true) {
        possibleValues = possibleValues.concat(specials())
    }
    if (nums === true) {
        possibleValues = possibleValues.concat(numbers())
    }


    // a function saved to a variable that will use the Math.floor(Math.random) to make sure that the password is randomized each time.  That will then be pushed into the arrPass to later be converted into the final password.
    for (var i = 0; i < passLength; i++) {
      var randomize = function() {
        return Math.floor(Math.random() * possibleValues.length)
    }
        arrPass.push(possibleValues[randomize()])
    }  
}


// function that will convert the arrPass first into a string, then into finalPass without any commas (will be just the characters)

function convert() {
    stringPass = (arrPass.toString())
    finalPass = (stringPass.replace(/,/g,""))
}

// function that will display the finalPass in the correct spot, using the #id from index.html

function final () {
     document.getElementById("display").value = finalPass
    
}

// function used to call all the other functions in the correct order.  generate() is linked to the generate button on the website page using onclick in index.html

function generate () {
    userInput();
    passSanitize();
    createPassword();
    convert();
    final();
}