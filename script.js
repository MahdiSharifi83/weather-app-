var apiKey = "e86564a3274253e335f05227e2e10a00";
var button = document.querySelector("#mybtn");
var input = document.querySelector("#cityname");
var city = document.querySelector("#city");
var tempture = document.querySelector("#temp");
var Description = document.querySelector("#desc");
var wind = document.querySelector("#wind");
var cityOutput = document.querySelector("#output-city");
var temptureOutput = document.querySelector("#output-temp");
var DescriptionOutput = document.querySelector("#output-desc");
var windOutput = document.querySelector("#output-wind");


function submit() {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    )
    .then(function (res) {
      let data = res.data;

      console.log(data);
      cityOutput.innerHTML=data.name
      const celsius = data.main.temp-273.15
      temptureOutput.innerHTML=celsius.toFixed(0)
      DescriptionOutput.innerHTML=data.weather[0].main
      windOutput.innerHTML=data.wind.speed.toFixed(1)
    });

}
button.addEventListener("click", submit);
