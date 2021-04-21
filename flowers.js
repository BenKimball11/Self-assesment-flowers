//flowers is the varible
const flowers = [
  {
    id: 1,
    color: "White",
    species: "Roses",
    price: 0.9,
  },
  {
    id: 2,
    color: "red",
    species: "tulip",
    price: 1.1,
  },
];

const addFlower = (flowerObject) => {
  /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

  /*
       Step 1: Get maximum id current in array
   */
  // Get index of last item in array
  const lastIndex = flowers.length - 1;

  // Get the last object in the array
  const currentLastFlower = flowers[lastIndex];

  // Get id property value of last phone
  const maxId = currentLastFlower.id;

  /*
       Step 2: Increase the current max id by 1
       */
  const newId = maxId + 1;
  /*
      Step 3: Add the id property to the flower object
      */
  flowerObject.id = newId;

  flowers.push(flowerObject);
};

const findExpensiveFlowers = () => {
  const expensiveFlowers = []; // Do not change this code

  /*
    Write a for..of loop that iterate the array
    of flowers, and if the price of a flower is
    greater than or equal to 1.00, it should be
    added to the `expensiveFlowers` array.
    */

  for (const flower of flowers) {
    if (flower.price >= 1.0) {
      expensiveFlowers.push(flower);
    }
  }
  return expensiveFlowers; // Do not change this code
};

// Do not touch this code
module.exports = {
  findExpensiveFlowers,
  addFlower,
};
