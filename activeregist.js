const studname = document.getElementById("name")
const studage = document.getElementById("age")
const member = document.getElementById("schoolmember")
const codclub = document.getElementById("codingclub")
const gamclub = document.getElementById("gamedesign")
const robclub = document.getElementById("robotics")
const regBtn = document.getElementById("register")
const res = document.getElementById("result")


let feepremember;
regBtn.onclick = function(){
    studentname = studname.value
    studentage = studage.value
    schoolmemb = member.value
    coderbois = codclub.value
    devteam = gamclub.value
    robotsfromspace = robclub.value
    legibilityresults = res.value
    console.log(devteam)
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
    updateresult()
}
function updateresult(){
    res.innerText = legibilityresults;
}