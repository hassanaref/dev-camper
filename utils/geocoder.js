const nodeGeocoder = require("node-geocoder");

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: process.env.GEOCODER_API_KEY,
  FORMATTER: null,
};

const geocoder = nodeGeocoder(options);

module.exports = geocoder;
