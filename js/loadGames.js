document.addEventListener("DOMContentLoaded", function(){


	/* Request for the json */
	var url = "https://shisuiraijin.github.io/proyecto/data/games.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	r.onload = function loadGames() {
		var json = r.response;

		console.log(json)
		var game = json["csgo"]
		console.log(game)

		var elem = document.getElementById("gameTitle");
		elem.innerText = game.title;
	
	
		elem = document.getElementById("gameTrailer");
		elem.innerHTML = elem.innerHTML + game["trailer"]
	}
})
