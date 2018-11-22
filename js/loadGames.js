document.addEventListener("DOMContenLoaded", function(){


	/* Request for the json */
	var url = "https://shisuiraijin.github.io/proyecto/data/games.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	r.onload = function loadGames() {
		var json = r.response;

		
	}
})