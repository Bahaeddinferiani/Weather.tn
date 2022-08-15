const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=0fe5cd936b56f22190a338f476896134&query=" +
    longitude +
    "," +
    latitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,

        "Temperature is " +
          body.current.temperature +
          "°C, feels like " +
          body.current.feelslike +
          "°C, wind speed is " +
          body.current.wind_speed +
          "Km/h",
        body.current.weather_icons[0],
        "Its " + body.current.weather_descriptions[0]
      );
    }
  });
};

module.exports = forecast;
