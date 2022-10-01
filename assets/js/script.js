//establish variables which is everything we need to keep track

var startQuizBtn = document.querySelector("#button");
var question = document.body.children[1].children[0].children[0];
var choices = document.querySelector("choices");
var ansA = document.querySelector("#a");
var ansB = document.querySelector("#b");
var ansC = document.querySelector("#c");
var ansD = document.querySelector("#d");
var score = 0
var timerTracker = document.getElementsByClassName("timer");
startQuizBtn.addEventListener("click", begin);
//console.log(question); //<=== I use this console to DOM traverse accurately

// begin the game- click the button switches the text under main h4 with id question to a question
// begin also starts timer until end of game 20 seconds and projects that on main section .timer

function begin(){
    console.log("HEllo I am working");
    var answer1 = ansC;
    question.innerHTML = "1. Which one of the following is proper semantic HTML?";
    ansA.textContent = "<span>";
    ansA.style.visibility = "visible";
    ansB.textContent = "<div>";
    ansB.style.visibility = "visible";
    ansC.textContent = "<section>"
    ansC.style.visibility = "visible";
    ansD.textContent = "<flopper>"
    ansD.style.visibility = "visible";

    if()
    }
    //question.setAttribute("")
function questionTwo(){
    //console.log("HEllo I am working");
    question.innerHTML = "2. Which one is a proper CSS selector for an id?";
    ansA.textContent = "  .  ";
    ansA.style.visibility = "visible";
    ansB.textContent = "  #  ";
    ansB.style.visibility = "visible";
    ansC.textContent = "section"
    ansC.style.visibility = "visible";
    ansD.textContent = "   *   "
    ansD.style.visibility = "visible"; 
}
function questionThree(){
    question.innerHTML = "3. How do you establish a variable in javascript?";
    ansA.textContent = "variable: element";
    ansA.style.visibility = "visible";
    ansB.textContent = "est: var";
    ansB.style.visibility = "visible";
    ansC.textContent = "'You shall not pass!'"
    ansC.style.visibility = "visible";
    ansD.textContent = "var x = element"
    ansD.style.visibility = "visible"; 
}

function questionFour(){
    question.innerHTML = "4. What tag do we use to implement an image in HTML?";
    ansA.textContent = "<img>";
    ansA.style.visibility = "visible";
    ansB.textContent = "<a>";
    ansB.style.visibility = "visible";
    ansC.textContent = "<script>"
    ansC.style.visibility = "visible";
    ansD.textContent = "</img>"
    ansD.style.visibility = "visible"; 
}

function questionFive(){
    question.innerHTML = "5. What is GitHub used for?";
    ansA.textContent = "spending Bitcoin";
    ansA.style.visibility = "visible";
    ansB.textContent = "Version control & collaboration";
    ansB.style.visibility = "visible";
    ansC.textContent = "saving your work for later"
    ansC.style.visibility = "visible";
    ansD.textContent = "writing and altering code"
    ansD.style.visibility = "visible"; 
}
    /*function endQuiz(){

        var quizTimer
    }
*/
//if element.matches(#a b or c) === false;  timeLeft subtracts 5 seconds
// moves on to next question


//function endQuiz(){
    
//}
    



// set timer for end quiz function
//at end of quiz timer user is asked for initials === key
//user key and score === value is save to local storage and parsed to "High scores" area
//(save to local storage by localStorage.setITem("key", "value"))

//parse out of local storage to display on right
//high scores .appendChild(ul)







//button event listener for click, then changes the centered text <p>to question 1 also starting the setinterval timer function
//set time out should be 20sec
//var quizTime = setTimeout(function(), 1000 * 20);
//two functions set in this one starts timer other changes quiz to questions
//var questionOne = 
//questions should have 4 separate buttons each one submitting answer use element.matches to determine correct answer
// if wrong take time off 
// if (element.matches() !== true) {quizTime = quizTime - 5000}
//


/*



GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```*/