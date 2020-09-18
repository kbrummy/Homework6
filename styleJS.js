$("#searchButton").on("click", function () {
  var searchVal = $("#searchInput").val();

  searchWeather(searchVal);
});

function searchWeather(city) {
  console.log(city);
  var search =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=b7ef947311647ad100ad8f8b2cd6da49";
  $.get(search, function (data) {
    console.log(data.list[0].weather[0].main);
    alert("Load was performed.");
  });
}
