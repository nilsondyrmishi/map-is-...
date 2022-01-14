const runAccessTest = (practiceShape) => {
  // practice accessing data from a large object,
  // with and without arguments you can use as much code as you like here

  // Example of how your code could look like:
  function example_accessAllBirds() {
    return practiceShape.birds;
  }

  function accessChicken() {
    return practiceShape.birds[3]
    // 2. Access 'chicken' from practiceShape (line 51)
  }

  function accessWinstonChurchillsIceCream() {
    // 1. Access 'Vanilla' (Winston' Churchill's favourite ice-cream) from practiceShape (line 7)
    return practiceShape.items.quotes[0].person.favouriteIceCream;


  }

  function accessQuoteByIndex(index) {
    return practiceShape.items.quotes[0].quote;
    // 2. Access the quote using the index param
    // e.g. accessQuoteByIndex(2) returns "What a wonderful world"
  }

  function accessQuoteById(id) {
    return practiceShape.items.images[id].imgUrl;

    // 3. Access the imgUrl using the id.
    // e.g. accessQuoteById(2) returns "It's my life"
  }

  function findIceCreamById(id) {

    return practiceShape.items.quotes[id];

    // 4. Given an id, return the person's favourite ice-cream.
    // e.g. find findIceCreamById(2) should return "Chocolate"
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
   *
   *
   */

  console.log(
    "[Example] Should be an array of birds: ",
    example_accessAllBirds()
  );
  console.log("accessChicken - Should be Chicken: ", accessChicken());
  console.log(
    "accessWinstonChurchillsIceCream - Should be Vanilla: ",
    accessWinstonChurchillsIceCream()
  );
  console.log(
    "accessQuoteByIndex - Should be 'I am the greatest': ",
    accessQuoteByIndex(0)
  );
  console.log(
    "accessQuoteById - Should be 'It's my life': ",
    accessQuoteById(2)
  );
  console.log(
    "accessQuoteById - Should be 'What a wonderful world': ",
    accessQuoteById(3)
  );
  console.log(
    "findIceCreamById - Should be 'Pistaccio': ",
    findIceCreamById(3)
  );
};

export default runAccessTest;
