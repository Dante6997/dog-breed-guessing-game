var imgEl = document.getElementById("pic")
var descriptionEl = document.getElementById("description")
var btn1El = document.getElementById("btn1")
var btn2El = document.getElementById("btn2")
var btn3El = document.getElementById("btn3")
var btn4El = document.getElementById("btn4")
var btn5El = document.getElementById("btn5")
var btnDivEl = document.getElementById("btns")


btnDivEl.addEventListener("click", game);

function game() {
    var dogFacts = "https://dogdummyapi.p.rapidapi.com/dogs/filter?minLifeExpectancy=12"

    fetch(dogFacts).then(function.response {
       
    }

}
