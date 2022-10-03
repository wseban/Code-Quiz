//establish variables which is everything we need to keep track

var startQuizBtn = document.querySelector("#button");
var question = document.body.children[1].children[0].children[0];
var choices = document.querySelector("choices");
var ansA = document.querySelector("#a");
var ansB = document.querySelector("#b");
var ansC = document.querySelector("#c");
var ansD = document.querySelector("#d");
var score = 0;
//var savedScores = JSON.parse(localStorage.getItem(initials)) || []
var initials;
var answer1 = "<section>";
var answer2 = "  #  ";
var answer3 = "var x = element";
var answer4 = "<img>";
var answer5 = "Version control & collaboration";
var timerTracker = document.querySelector(".timer");
var startTime = 1000 * 10;
var timeRemaining;
startQuizBtn.addEventListener("click", begin);
//console.log(question); //<=== I use this console to DOM traverse accurately
//function timer(){

//}

// begin the game- click the button switches the text under main h4 with id question to a question
// begin also starts timer until end of game 20 seconds and projects that on main section .timer
//timeRemaining = setInterval()

//above function is what happens after the timer elapses not the timeout set
//overall timeout encompassing all question functions that if answered correctly moves to next but if not degridades timer by 5 sec and moves on
function begin(){
    //console.log("HEllo I am working");
    timeRemaining = setTimeout(saveYourScore, startTime);
    timerTracker.innerHTML = "Timer: " + timeRemaining;
    ansA.addEventListener("click", questionTwo);
    ansB.addEventListener("click", questionTwo);
    ansC.addEventListener("click", questionTwo);
    ansD.addEventListener("click", questionTwo);
    question.innerHTML = "1. Which one of the following is proper semantic HTML?";
    ansA.textContent = "<span>";
    ansA.style.visibility = "visible";
    ansB.textContent = "<div>";
    ansB.style.visibility = "visible";
    ansC.textContent = "<section>"
    ansC.style.visibility = "visible";
    ansD.textContent = "<flopper>"
    ansD.style.visibility = "visible";
    startQuizBtn.style.visibility = "hidden";
    console.log(Math.floor(timeRemaining));
    }
    
function questionTwo(event){
    //console.log(event.target.textContent);
    //console.log("HEllo I am working");
    if(event.target.textContent === answer1){
      score++;
    //    startQuizBtn.innerHTML = "Correct";
    }
    console.log(score);

    //if (//answers incorrect){
     //   timeRemaining - (1000 * 5);
     ansA.removeEventListener("click", questionTwo);
     ansB.removeEventListener("click", questionTwo);
     ansC.removeEventListener("click", questionTwo);
     ansD.removeEventListener("click", questionTwo);
    
    ansA.addEventListener("click", questionThree);
    ansB.addEventListener("click", questionThree);
    ansC.addEventListener("click", questionThree);
    ansD.addEventListener("click", questionThree);
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
function questionThree(event){
    if(event.target.textContent === answer2){
        score++;}
     console.log(score);
     ansA.removeEventListener("click", questionThree);
     ansB.removeEventListener("click", questionThree);
     ansC.removeEventListener("click", questionThree);
     ansD.removeEventListener("click", questionThree);
    ansA.addEventListener("click", questionFour);
    ansB.addEventListener("click", questionFour);
    ansC.addEventListener("click", questionFour);
    ansD.addEventListener("click", questionFour);
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

function questionFour(event){
    if(event.target.textContent === answer3){
        score++;}
        console.log(score);
        ansA.removeEventListener("click", questionFour);
        ansB.removeEventListener("click", questionFour);
        ansC.removeEventListener("click", questionFour);
        ansD.removeEventListener("click", questionFour);
    ansA.addEventListener("click", questionFive);
    ansB.addEventListener("click", questionFive);
    ansC.addEventListener("click", questionFive);
    ansD.addEventListener("click", questionFive);
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

function questionFive(event){
    if(event.target.textContent === answer4){
        score++;}
        console.log(score);
        ansA.removeEventListener("click", questionFive);
        ansB.removeEventListener("click", questionFive);
        ansC.removeEventListener("click", questionFive);
        ansD.removeEventListener("click", questionFive);
    ansA.addEventListener("click", saveYourScore);//figure out the functiopn the click should activate
    ansB.addEventListener("click", saveYourScore);
    ansC.addEventListener("click", saveYourScore);
    ansD.addEventListener("click", saveYourScore);
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
function saveYourScore(event){
    if(event.target.textContent === answer5){
        score++
    }
    /*var input = document.createElement("input");
    input.setAttribute("type", "text");*/
    clearTimeout(timeRemaining);
    question.innerHTML = "Save your high score of... " + score + " by inputting your initials below";
    ansA.style.visibility = "hidden";
    ansB.style.visibility = "hidden";
    ansC.style.visibility = "hidden";
    ansD.style.visibility = "hidden";
    startQuizBtn.style.visibility = "visible";
    startQuizBtn.removeEventListener("click", begin);
    initials = document.createElement("input");
    initials.setAttribute("type", "text");
    question.appendChild(initials);
    startQuizBtn.addEventListener("click", endQuiz);
    startQuizBtn.textContent = "Submit!"
}
function endQuiz(){
    //initials = document.body.children[1].children[0].children[0].children[0];
    var list = localStorage.setItem(initials.value, JSON.stringify(score));
   // savedScores.push(list);
    document.querySelector("#highScores").innerHTML = (initials, JSON.parse(localStorage.getItem(score)));
    location.reload();
}
//function initialSave()
//localStorage.setItem("initials", JSON.stringify(score)) <---- make array for all scores then stringify and parse that array
///savedScores.push()
    



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


// refresh page when submit---  window.reload()




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