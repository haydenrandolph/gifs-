var nameonButtons = ['Broncos', 'Buccaneers', 'Panthers', 'Seahawks', 'Falcons', 'Patriots', 'Bengals', 'Dolphins', 'Jaguars', 'Chiefs', 'Bears', '49ers', 'Raiders', 'Chargers', 'Cardinals', 'Jets', 'Ravens', 'Browns', 'Steelers', 'Texans', 'Colts', 'Saints', 'Titans', 'Bills', 'Giants', 'Cowboys', 'Redskins', 'Rams', 'Eagles', 'Lions', 'Packers', 'Vikings'];

var myButtons = [];
var myResponse;

for (i = 0; i < nameonButtons.length; i++){
	var myButton = $("<button class='buttonRow'>" + nameonButtons[i] + "</button>");
	myButtons.push(myButton);
	$('#buttonRow').append(myButton);


			// create an ajax function that searches and pulls everything with panthers

}

function getgifs(name){
	name = name.replace(" ", "+");
	
	var theUrl = 'http:api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='+name;

	
	$.ajax({
		url:theUrl,
		method:"GET"
		
	}).done(function(response){
		
		for (i=0;i<response.data.length; i++){
			console.log(response.data[i].images.fixed_height.url);
			//create an img using jQuery
			var myimage = $("<img>");
			//give it the attribute "src" with the value that you just logged
			myimage.attr("src", response.data[i].images.fixed_height.url);
			//append it the the thing where you want it
			$(".gifRow").append(myimage);
 		}
 		
		myResponse=response;
	})
}

$(".buttonRow").click(function(){
	$(".gifRow").empty()
	console.log($(this).html());
	getgifs($(this).html());
});

