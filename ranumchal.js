const submitBtn = document.getElementById("submit")
const newnumBtn = document.getElementById("refresh")
const relation = document.getElementById("feedbacker")

const counter = document.getElementById("guesscounter")
const guesser = document.getElementById("userguess")
let numtoguess = Math.floor(Math.random() * 10) + 1

let guessnum = 0
let positioninrelation;

submitBtn.onclick = function(){
    guessnum ++;
    let guess = guesser.value
    if(guess > numtoguess){
        positioninrelation = "too high!"
    } 
    else if(guess < numtoguess){
        positioninrelation = "too low!"
    } 
    else{
        positioninrelation = "Correct!"
        submitBtn.disabled = true;
    }
    updatefeedback()
}
newnumBtn.onclick = function(){
    numtoguess = Math.floor(Math.random() * 10) + 1
    submitBtn.disabled = false;
    guessnum = 0
    positioninrelation="None"
    updatefeedback()
    
}

function updatefeedback(){
    relation.innerText = positioninrelation;
    counter.innerText = guessnum
}