$(document).ready(function () {
  $("#searchButton").on("click", function () {
    var searchVal = $("#searchInput").val();

    $("#searchInput").val("");
    //console.log(searchVal);
    searchWeather(searchVal);
  });
});
