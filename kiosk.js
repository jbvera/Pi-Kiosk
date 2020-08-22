(function () {
    const weatherDivSelector = "#weatherDiv";

    // Get DOM objects
    const weatherDiv = qs(weatherDivSelector);

    /**
     * Functions
     */
    function buildWeatherComponent() {
        weatherDiv.innerHTML = "Fetching weather data...";

        // https://openweathermap.org/api/one-call-api
        const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${weatherConfig.lat}&lon=${weatherConfig.lon}&exclude=minutely,hourly&appid=${weatherConfig.apiKey}`;
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                weatherDiv.innerHTML = "Weather data fetched";
                console.log(data);
            });



    }

    // Helper function
    function qs(selector) {
        return document.querySelector(selector);
    }

    buildWeatherComponent();
}());
