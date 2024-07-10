//a structure that allows you to store multiple values in a single reference.

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

//finding lenght
const item = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(item.length); // 5

const items = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(items[0]);
// returns "bread"

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]

//finding index
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//adding items
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("london", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "london", "Brighton" ]
//To add an item to the start of the array, use unshift():
const cities = ["Manchester", "Liverpool"];
cities.unshift("london");
console.log(cities); // [ "london", "Manchester", "Liverpool" ]


//Removing items
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]

//To remove the first item from an array, use shift():
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]

//If you know the index of an item, you can remove it from the array using splice():
const cities = ["Manchester", "Liverpool", "london", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "london", "Carlisle" ]

//for...of
const cars = ["nissan", "Ford", "toyota"];

for (const car of cars) {
  console.log(car);
}

//to create a new array containing only the items in the original array use filter()
function isLong(city) {
    return city.length > 8;
  }
  const cities = ["nairobi", "mombasa", "kakamega", "machakos"];
  const longer = cities.filter(isLong);
  console.log(longer); // [ "mombasa", "machakos" ]

//map
