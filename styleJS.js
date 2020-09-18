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
    for (let i = 0; i < data.list.length; i++) {
      if (i % 7 === 0) {
        console.log(data.list[i].weather[0].main);
      }
    }
    alert("Load was performed.");
  });
}
