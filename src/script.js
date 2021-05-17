


function search(city) {
    let apiKey = "16b011e84ccaeeedc0d35d25c7339c80";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

}

function handleSubmit(event) {
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}




let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search ("New York");