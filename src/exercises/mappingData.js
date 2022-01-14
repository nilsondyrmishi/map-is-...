import image from "../components/Image";

const runDataMappingTest = (practiceShape) => {
  // Practice transforming data with map
  // Your solution should only contain the map function and return its result.

  function getCatImages() {
    return practiceShape.items.images.map(image => image.imgUrl
     )}

    // 1. Using map, create an array of only cat images
    // > ["http://...", "http://...", etc..]


  function getNames() {
    return practiceShape.items.quotes.map(persons => persons.person.name)

    // 1. Using map, create an array of only peoples' names.
    // > ["Winston Churchill". "John Lennon",  etc..]
  }

  function getUpperCaseBirds() {
    return practiceShape.birds.map(bird => bird.toUpperCase())

    // 2. Using map, create an array of uppercased birds
    // > ["PIGEON", "HAWK", "EAGLE", etc..]
  }

  function getPeopleAndQuotes() {
    return practiceShape.items.quotes.map(persons => `${persons.person.name} said ${persons.quote}`)

    // 3. Using map, create an array of "Person said: Quote", e.g.:
    // > ['Winston Churchill said: I am the greatest', "John Lennon said: It's my life", etc]
  }

  // No need to worry about the below:
  /**
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */

  console.log("getCatImages - Should be an array of URLs: ", getCatImages());
  console.log("getNames - Should be an array of Names: ", getNames());
  console.log(
    "getUpperCaseBirds - Should be an array of uppercased Birds: ",
    getUpperCaseBirds()
  );
  console.log(
    `getPeopleAndQuotes - Should look like ["John Lennon said: It's my life", "George Orwell said: What a wonderful world" ...] :`,
    getPeopleAndQuotes()
  );
};

export default runDataMappingTest;
