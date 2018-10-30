document.addEventListener("DOMContentLoaded", function(){

	var url = "https://shisuiraijin.github.io/proyecto/data/gameList.json";
	var r = new XMLHttpRequest();
    r.open('GET', url);
    r.responseType = 'json';
	r.send();
	
	r.onload = function()
	{
		var json = r.response;

		var fps = document.getElementById("FPS")
		var fps_array = json.FPS;

		for (i = 0; i < fps_array.lenght; i++)
		{
			fps.innerHTML = fps.innerHTML + "<li><a href='"+ fps.fps_array[i].link +
			"'>" + fps_array[i].name + "</a></li>";
		};

	}

})