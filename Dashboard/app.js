function loadDate() {
    var currentDate = new Date();
    var dateString = currentDate.toString()
    .split(" ")
    .splice(0, 4)
    .join(" ");
    
    $("#date").text(dateString);
}

function loadWeather() {
    var weather = $("#weather");
    var url = "https://api.forecast.io/forecast/";
    var apiKey = "7f27815af57ebfbc50cb923890bf6d48"; 

function success(position) {
    var latitude = position.coords.latitde;
    var longitude = position.coords.longitude;
    
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
    });
}

function error() {
    alert("Unable to retrieve your location for weather");
}

navigator.geolocation.getCurrentPosition(success, error);

weather.text("fetching weather...");
}

function loadNews() {
    var news = $("#news");
    var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=";
    var apiKey = "03bc5e81feab4f688d8d4bea8e5a0a1d";
    
    $.getJSON(url + apiKey, function(data) {
    var titles = data.articles.map(function(articles) {
            return "<a href='" + articles.url + "'>" + articles.title + "</a>";
        });
        
        news.html(titles.join("<br><br>"));
    });
    
    news.text("fetching news...");
}

loadDate();
loadWeather();
loadNews();