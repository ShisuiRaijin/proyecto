document.addEventListener("DOMContentLoaded", function(){

	var url = "https://shisuiraijin.github.io/proyecto/data/gameList.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	r.onload = function()
	{
		var json = r.response;
		var gameArray = json["Games"];
		var list = document.getElementById("gameList")

		for (i = 0; i < gameArray.length; i++)
		{
			var game = gameArray[i];
			var category = game["category"];
			var name = game["name"];
			var link = game["link"];
			var cat = document.getElementById(category);
			if (cat == null)
			{
				list.innerHTML = list.innerHTML + "WIP"
				elem.innerText = category;
			} else 
			{

			}

		};
	};

})