var BASE_URL= "https://www.omdbapi.com/";

function getDataFromApi(searchTerm, callback){
	var settings={
		url:BASE_URL,
		data: {
			s:searchTerm,
			r:'json',
			apikey:'daf84c20'
		},
		dataType: 'json',
		type:'GET',
		success:callback,
		//beforeSend:callFunction
	};

	$.ajax(settings);
}

/*function callFunction(){
	$('.selectid').attr("disabled", true)
}*/

function displayData(data){
	var result = "";

	if(data.Search){
		data.Search.forEach(function(item){
			result += "<p>" + item.Title + "<br>" + item.Year + "</p>"
		});
	}
	else{
		result += "<p>No data found </p>"
	}

	$('.js-search-result').html(result);
}

function watchSubmit(){
	$('.js-search-form').submit(function(){
		var query = $(this).find('.js-query').val();
		console.log("User entered::: "+ query);
		getDataFromApi(query,displayData);
	});
}

$(function(){
	watchSubmit();
});
