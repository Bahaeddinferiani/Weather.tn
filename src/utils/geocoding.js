const request = require("request");
const geocoding = (adress, callback) => {
  const ew =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    adress +
    ".json?access_token=pk.eyJ1IjoiYmFoYWZlcmlhbmkiLCJhIjoiY2w2aG9hdTYxMTMwMDNicHJkcjQ0YTk0aiJ9.UscexEnHqU4NixQ3edPJeg";
  request({ uri: ew, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to server");
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};
module.exports = geocoding;
