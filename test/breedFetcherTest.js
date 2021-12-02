const { fetchBreedDescription } = require(`../breedFetcher`);
const { assert } = require('chai');

describe("fetchBreedDescription", () => {
  it("returns a string desciption for a vaild breed, via callback",  (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns a error when passing a invalid/non-existent breed",  (done) => {
    fetchBreedDescription('Huh', (err, desc) => {
      assert.equal(err, `We have failed to find that breed`);

      const expectedDesc = null;

      assert.equal(expectedDesc, desc);

      done();
    });
  });

});