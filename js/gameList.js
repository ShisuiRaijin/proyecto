document.addEventListener("DOMContentLoaded", function(){

	/* Request for the json */
	var url = "https://shisuiraijin.github.io/proyecto/data/gameList.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	/**
	 * Logic for loading the game list in the page,
	 * the function checks if a category is or not already in the webpage and acts accordingly by
	 * adding it in the game list or just adding the game into the already created category.
	 */
	r.onload = function()
	{
		var json = r.response;
		var gameArray = json["Games"];
		var list = document.getElementById("gameList")

		for (i = 0; i < gameArray.length; i++)
		{
			var game = gameArray[i];
			var gameCategory = game["category"];
			var gameName = game["name"];
			var gameLink = game["link"];
			var category = document.getElementById(gameCategory);

			if (category == null)
			{
				var cat = document.createElement('li');
				cat.innerText = gameCategory;
				list.appendChild(cat);
				var ul = document.createElement('ul');
				ul.setAttribute("id", gameCategory);
				cat.appendChild(ul);
				category = document.getElementById(gameCategory);
			}

			var link = document.createElement('a');
			link.setAttribute("href", gameLink);
			link.innerText = gameName;
			category.appendChild(link);
			var name = document.createElement('li');
			link.appendChild(name);
		};
	};
})