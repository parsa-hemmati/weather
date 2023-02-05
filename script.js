$("#search-button").on("click", function(event) {
    var apiKey = "f310972106e2b4092b36a16e7d028581"
    var city = $("search-input").val()
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
    event.preventDefault();
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=Tehran&appid=f310972106e2b4092b36a16e7d028581",
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});
