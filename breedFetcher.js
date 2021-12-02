const request = require('request');

const fetchBreedDescription = function(breedName, info) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  
  request(url, (error, response, body) => {
    if (error) {
      info("URL doesn't seem to exist.");
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      info(null, data[0].description);
    } else {
      info(`We have failed to find that breed`, null);
    }
  });
};

module.exports = { fetchBreedDescription };