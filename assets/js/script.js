



var cityNames = [];
var buttonsEL = $("#history");
var currentDay = $('#current-day');
var today = $('#today');
var img = $('<img>', {id:"current-day"});
var h2 = $('<h2>', {id: "current-day"});

$('#current-day').prepend(img)
$('#current-day').prepend(h2)




function renderButtons() {
  buttonsEL.empty()
  
  for (var i = 0; i < cityNames.length; i++) {
    var cityName = cityNames[i];
    var btn = $('<button>')
    btn.text(cityName)
    buttonsEL.append(btn);
      
    }
  
}

$("button").on("click", function(event){
 
event.preventDefault();
var userInput = $('#search-input').val()
cityNames.push(userInput);
console.log(cityNames);
renderButtons();


var queryURL = "https://api.openweathermap.org/data/2.5/weather?appid=7f059f73ac5b7b94dc943888038b8961&q="; 
var query5Url = "https://api.openweathermap.org/data/2.5/forecast?appid=7f059f73ac5b7b94dc943888038b8961&q="



fetch(queryURL + userInput)
.then(function (response) {
  return response.json();
})
.then(function (result) {

  var cityName = result.name;
 var epochDate = result.dt;

 var myDate = new Date( epochDate *1000).toLocaleDateString(); //https://www.epochconverter.com/programming/

 var tempK = result.main.temp;

 var humidity = result.main.humidity;

 var windSpeed = result.wind.speed;

 var wIcon = result.weather[0].icon;
 



 $('#current-day').append("<p>" + tempK)
 $('#current-day').append("<p>" + humidity)
 $('#current-day').append("<p>" + windSpeed)
 
 var iconUrl = "https://openweathermap.org/img/wn/" + wIcon +"@2x.png"
 $("img").attr("src", iconUrl)
console.log(iconUrl);
$(h2).append(cityName + " " + myDate );

});

fetch(query5Url + userInput)
.then(function (response) {
  return response.json();
  ;
  })
  .then(function (result) {
    

  
  var day1 = result.list[4];
  var day2 = result.list[12];
  var day3 = result.list[20];
  var day4 = result.list[28];
  var day5 = result.list[36];
var allDays = [day1, day2, day3, day4, day5];

  var day1Obj = {
    date: new Date(day1.dt * 1000).toLocaleDateString(),
    // icon: dgdfg,
    temp: day1.main.temp - 173,
    wind: day1.wind.speed,
    humidity: day1.main.humidity,
  }

  var day1ObjVal = Object.values(day1Obj)

 

  $('.Day1').append((`Date: ${day1Obj.date}`), ("<br>"), (`Wind speed: ${day1Obj.wind}m/s`), ('<br>'),(`Humidity: ${day1Obj.humidity}%`), ('<br>'), (`Temperature: ${day1Obj.temp}C`));
 

  var day2Obj = {
    date: new Date(day2.dt * 1000).toLocaleDateString(),
    // icon: dgdfg,
    temp: day2.main.temp - 173,
    wind: day2.wind.speed,
    humidity:  day2.main.humidity,
  }
  var day2ObjVal = Object.values(day2Obj)

  $('.Day2').append((`Date: ${day2Obj.date}`), ("<br>"), (`Wind speed: ${day2Obj.wind}m/s`), ('<br>'),(`Humidity: ${day2Obj.humidity}%`), ('<br>'), (`Temperature: ${day2Obj.temp}C`));

  

  var day3Obj = {
    date: new Date(day3.dt * 1000).toLocaleDateString(),
    // icon: dgdfg,
    temp: day3.main.temp - 173,
    wind: day3.wind.speed,
    humidity: day3.main.humidity,
  }
  var day3ObjVal = Object.values(day3Obj)

  $('.Day3').append((`Date: ${day3Obj.date}`), ("<br>"), (`Wind speed: ${day3Obj.wind}m/s`), ('<br>'),(`Humidity: ${day3Obj.humidity}%`), ('<br>'), (`Temperature: ${day3Obj.temp}C`));
 

  var day4Obj = {
    date: new Date(day4.dt * 1000).toLocaleDateString(),
    // icon: dgdfg,
    temp: day4.main.temp - 173,
    wind: day4.wind.speed,
    humidity:  day4.main.humidity,
  }

  var day4ObjVal = Object.values(day4Obj)

$('.Day4').append((`Date: ${day4Obj.date}`), ("<br>"), (`Wind speed: ${day4Obj.wind}m/s`), ('<br>'),(`Humidity: ${day4Obj.humidity}%`), ('<br>'), (`Temperature: ${day4Obj.temp}C`));

  

  var day5Obj = {
    date: new Date(day5.dt * 1000).toLocaleDateString(),
    // icon: dgdfg,
    temp: day5.main.temp - 173,
    wind: day5.wind.speed,
    humidity:  day5.main.humidity,
   
  }
var day5ObjVal = Object.values(day5Obj)

$('.Day5').append((`Date: ${day5Obj.date}`), ("<br>"), (`Wind speed: ${day5Obj.wind}m/s`), ('<br>'),(`Humidity: ${day5Obj.humidity}%`), ('<br>'), (`Temperature: ${day5Obj.temp}C`));

  

  var allDaysObj = {
    day1: day1Obj,
    day2: day2Obj,
    day3: day3Obj,
    day4: day4Obj,
    day5: day5Obj,
  }

var allDaysDiv =[day1ObjVal, day2ObjVal, day3ObjVal, day4ObjVal, day5ObjVal,];

console.log(day1ObjVal[1])
  });
})
