const request = require('request');
const userInput = process.argv.slice(2);


const breed = userInput[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log("URL doesn't seem to exist.");
  } else {
    const data = JSON.parse(body);
    const breedName = data[0];
    if (breedName) {
      console.log(data[0].description);
    } else {
      console.log(`We have failed to find the breed ${breed}.`);
    }
  }
});