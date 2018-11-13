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
			var name = document.createElement('li');
			link.innerText = gameName;
			name.appendChild(link);
			category.appendChild(name);
		};
	};

})