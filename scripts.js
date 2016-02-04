$(document).ready(function() {
$("#submit").click(function(e) {
	e.preventDefault();
	var temp = $("[name='temp']:checked").val(); 
	var food = $("[name='food']:checked").val();
	var location = selectLocation(temp, food);
	console.log(location);
	$(".place").hide();
	$("#" + location.name).show();
});

function selectLocation(temp, food) {
	var places = [
	{name: "mexico", temp: "hot", food: "fish"},
	{name: "antarctica", temp: "icy", food: "fish"},
	{name: "pnw", temp: "cool", food: "burger"},
	{name: "korea", temp: "cool", food: "fish"},
	{name: "newyork", temp: "cool", food: "pizza"},
	{name: "texas", temp: "hot", food: "burger"},
	{name: "iraq", temp: "hot", food: "pizza"},
	{name: "greenland", temp: "icy", food: "pizza"},
	{name: "alaska", temp: "icy", food: "burger"}
	]
	return places.filter(function(select) {
		return select.temp === temp &&
				select.food === food;
	})[0];
};
});