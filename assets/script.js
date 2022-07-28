var imgEl = document.getElementById("pic")
var descriptionEl = document.getElementById("description")
var btn1El = document.getElementById("btn1")
var btn2El = document.getElementById("btn2")
var btn3El = document.getElementById("btn3")
var btn4El = document.getElementById("btn4")
var btn5El = document.getElementById("btn5")
var btnDivEl = document.getElementById("btns")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48b7163cdamshe822b76bf59eb35p1b1960jsnb634b45f19f6',
		'X-RapidAPI-Host': 'dogdummyapi.p.rapidapi.com'
	}
};

btnDivEl.addEventListener("click", game);

function game(event) {
    var dogBreed = event.target.textContent;
    var dogFacts = "https://dogdummyapi.p.rapidapi.com/dogs/filter?search=" + dogBreed;

    fetch(dogFacts, options)
        .then(function(response){return response.json()})
        .then(function(dogs){
            var dog = dogs[0];
            descriptionEl.innerHTML = dog.description;

        })

}

function imgSelector() {
    
}


"https://images.dog.ceo/breeds/chihuahua/n02085620_3045.jpg"
"https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_19002.jpg"
"https://images.dog.ceo/breeds/collie-border/n02106166_2198.jpg"

