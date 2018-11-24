document.addEventListener("DOMContentLoaded", function(){


	/* Request for the json */
	var url = "https://shisuiraijin.github.io/proyecto/data/games.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	r.onload = function loadGames() {
		var json = r.response;
		var gameId = document.getElementById("gameId");
		var game = json[gameId.innerText]

		// Game Title
		var elem = document.getElementById("gameTitle");
		elem.innerText = game.title;
	
		// Game triler
		elem = document.getElementById("gameTrailer");
		elem.innerHTML = elem.innerHTML + game["trailer"];

		// Game description
		elem = document.getElementById("gameDescription");
		var desc = game["description"];
		for (var i = 0; i < desc.length; i++) {
			var item = desc[i];
			
			var p = document.createElement("p");
			p.innerText = item;
			elem.appendChild(p);
		}

		//Game images
		elem = document.getElementById("gameGalery");
		var imgs = game["galery"];
		for (var i = 0; i < imgs.length; i++) {
			var img = imgs[i];
			
			var item = document.createElement("img");
			item.setAttribute("src", img[0]);
			item.setAttribute("alt", img[1]);

			elem.appendChild(item);
		}

		//Game requirements
		elem = document.getElementById("gameRequirements");
		var req = game["requirements"];
		for (var i = 0; i < req.length; i++) {
			var item = req[i];
			
			if (i == 0) {
				var dt = document.createElement("dt");
				dt.innerText = item;
				elem.appendChild(dt);
			}else{
				var dd = document.createElement("dd");
				dd.innerText = item;
				elem.appendChild(dd);
			}
		}

		//Game price
		elem = document.getElementById("priceRating");
		var price = game["price"];
		var rating = game["rating"];

		elem.innerText = price + " U$D / Rating: " + rating;
	}
})
