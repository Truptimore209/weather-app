function getWeather() {
    const city = document.getElementById("city").value.trim();

    const apiKey = "6ccfd4c89d32358bf62da6e419e238b3"; // exact key

    if (city === "") {
        alert("City name enter kara");
        return;
    }

    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        encodeURIComponent(city) +
        "&units=metric&appid=" +
        apiKey;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // IMPORTANT

            if (data.cod !== 200) {
                alert(data.message);
                return;
            }

            document.getElementById("result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(() => {
            alert("Error fetching data");
        });
}