const studname = document.getElementById("name")
const studage = document.getElementById("age")
const member = document.getElementById("schoolmember")
const codclub = document.getElementById("codingclub")
const gamclub = document.getElementById("gamedesign")
const robclub = document.getElementById("robotics")
const regBtn = document.getElementById("register")
const res = document.getElementById("result")


let feepremember;
let totalfee;
regBtn.onclick = function(){
    studentname = studname.value
    studentage = studage.value
    schoolmemb = member.checked
    coderbois = codclub.checked
    devteam = gamclub.checked
    robotsfromspace = robclub.checked
    legibilityresults = res.value
    console.log()
    switch(true){
        case (studentname == "" || studentname == " " || studentname == null):
            legibilityresults = "You need to enter name"
            updateresult()
            break;
        case (studentage < 10):
            legibilityresults = "You need to be 10 or older"
            updateresult()
            break;
        case (coderbois == false && devteam == false && robotsfromspace == false):
            legibilityresults = "You need to pick which club to sign up for"
            updateresult()
            break;
    }
    if(coderbois == true){
        feepremember = 20;
    }
    else if(devteam == true){
        feepremember = 25;
    }
    else{
        feepremember = 30;
    }
    if(schoolmemb == true){
        totalfee = feepremember - 5
    }
    else{
        totalfee = feepremember
    }
    switch(true){
        case(schoolmemb == true && coderbois == true):
        
    }
    legibilityresults = `${studentname} is ${schoolmemb? "a school member ": "not a school member"} (5$ discount) and registered for  ${coderbois? "The Coding Club": devteam? "Game Design": "Robotics"} ($${feepremember}). the final fee is $${totalfee}`
    updateresult()
function updateresult(){
    res.innerText = legibilityresults;
}
}