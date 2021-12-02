const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, descp) => {
  if (error) {
    console.log("Error in fetching the details", error);
  } else {
    console.log(descp);
  }
});