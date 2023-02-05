$(".btn").on("click", function(event) {
    var apiKey = "f310972106e2b4092b36a16e7d028581"
    // Adds a button for the city searched in the history section of the page
    var city = $("search-input").val()
    var cityBtn = $("<button>");
    cityBtn.addClass("btn btn-secondary");
    cityBtn.text(city);
    $("#history").append(cityBtn);
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey
    event.preventDefault();
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=Tehran&appid=f310972106e2b4092b36a16e7d028581",
        method: "GET"
    }).then(function(response) {
        // gets the response from openweather and displays the weather forecast for next 5 days
        console.log(response.list);
        var weather = response.list;
        for (var i = 0; i < weather.length; i++) {
            var date = weather[i].dt_txt;
            var temp = weather[i].main.temp;
            var humidity = weather[i].main.humidity;
            var icon = weather[i].weather[0].icon;
            var iconURL = "http://openweathermap.org/img/w/" + icon + ".png";
            // var weatherDiv = $("<div>");
            // weatherDiv.append("<p>" + date + "</p>");
            // weatherDiv.append("<p>" + temp + "</p>");
            // weatherDiv.append("<p>" + humidity + "</p>");
            // weatherDiv.append("<img src=" + iconURL + ">");
            // $("#forecast").append(weatherDiv);
            var card = `
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${iconURL}" alt="Card image cap" style="width: 50px; height: 50px;">
              <div class="card-body">>
              <div class="card-body">
                <h5 class="card-title">${date}</h5>
                <p class="card-text">${temp}</p>
              </div>
            </div>
          `;
          $("#forecast").append(card);
        }
    });
});


// When the user clicks on a city button, the weather forecast for that city is displayed
        
