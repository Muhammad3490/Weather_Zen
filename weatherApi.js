function weather(city) {
  const apiKey = "c127428a3c3e47598cc164816230810";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in fetching data from server.");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error in fetching the data ");
      alert("Error in fetching data from server.");
    });
}
function displayData(data) {
  let tempC = data.current.temp_c;
  let tempF = data.current.temp_f;
  let conditions = data.current.condition.text;

  console.log(`temperature in C : ${tempC}`);
  console.log(`temperature in F : ${tempF}`);
  console.log(`Condition  : ${conditions}`);
}

// get the input from user ....
document.addEventListener("DOMContentLoaded", () => {
  const inputForm = document.getElementById("input-form");
  inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const cityNameInput = document.getElementById("cityName");
    const cityName = cityNameInput.value;

    try {
      weather(cityName)
        .then((weatherData) => {
          let Ctemp = weatherData.current.temp_c;
          let Ftemp = weatherData.current.temp_f;
          let conditions = weatherData.current.condition.text;
          let humidity=weatherData.current.humidity;
          let flC=weatherData.current.feelslike_c;
          let flF=weatherData.current.feelslike_f;
          let uvIndex=weatherData.current.uv;
          let localTime=weatherData.location.localtime;

          const city = document.getElementById("city-name");
          const temp = document.getElementById("temp");
          const cond = document.getElementById("conditions");
          const humid=document.getElementById("humidity");
          const feelsC=document.getElementById("feelsC");
          const feelsF=document.getElementById("feelsF");
          const uV=document.getElementById("uv");
          const time=document.getElementById("time")

          city.innerText = cityName;
          time.innerText=localTime;
          if (
            conditions == "Sunny" ||
            conditions == "sunny" ||
            conditions == "Normal" ||
            conditions == "normal" ||
            conditions == "Clear" ||
            conditions == "clear"
          ) {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F <i class="fa-solid fa-sun m-left color-yellow"></i>`;
          } else if (
            conditions == "Partly cloudy" ||
            conditions == "partly cloudy" ||
            conditions == "Cloudy" ||
            conditions == "cloudy" ||
            conditions == "Overcast" ||
            conditions == "overcast"
          ) {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F <i class="fa-solid fa-cloud m-left color-white"></i>`;
          } else if (
            conditions == "Rain" ||
            conditions == "rain" ||
            conditions == "Moderate or heavy rain shower" ||
            conditions == "Showers" ||
            conditions == "Moderate or heavy rain" ||
            conditions == "Moderate or heavy rain with thunder" ||
            conditions == "Thunder" ||
            conditions == "Drizzle" ||
            conditions=="Patchy rain possible"
          ) {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F <i class="fa-solid fa-cloud-rain m-left color-white"></i>`;
          } else if (
            conditions == "Windy" ||
            conditions == "wind" ||
            conditions == "Gale" ||
            conditions == "Windswept" ||
            conditions == "Stormy" ||
            conditions == "Windy and dusty"
          ) {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F <i class="fa-solid fa-wind m-left color-white"></i>`;
          } else if (
            conditions == "Snow" ||
            conditions == "Snowy" ||
            conditions == "Snowfall" ||
            conditions == "Heavy snow" ||
            conditions == "Whiteout" ||
            conditions == "Blizzard" ||
            conditions == "Freazing rain" ||
            conditions == "Snowstorm"
          ) {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F <i class="fa-regular fa-snowflake m-left color-white"></i>`;
          } else {
            temp.innerHTML = `${Ctemp} <sup>o</sup> / ${Ftemp} F`;
          }

          cond.innerText = `Conditions : ${conditions}`;
          humid.innerText=`Humidity : ${humidity}`;
          feelsC.innerHTML=`Feels like : ${flC} <sup>o</sup> C`;
          feelsF.innerText=`Feels like : ${flF} F`;
          uV.innerText=`Uv index : ${uvIndex}`;

          localStorage.setItem("weatherData", JSON.stringify(weatherData));
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error here, e.g., display an error message to the user
        });
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here, e.g., display an error message to the user
    }
  });
});
