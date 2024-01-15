console.log("Hello world !");

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let videogames = [
  "fox hole",
  "eldenring",
  "LOL",
  "snake",
  "candy crush",
  "uno",
];
for (let z = 0; z < 7; z++) {
  console.log("Iteration", z);
}

for (let i = 0; i < 5; i++) {
  console.log(videogames[i]);
}

let arrayExample = [1, 2, 3];
let z = 0;
arrayExample[z];

const foods = [
  "pineapple",
  "grape",
  "matcha latte",
  "avocado toast",
  "salmon bagel",
];
for (let food of foods) {
  console.log(food);
}


const animals = ["cat", "parakeet", "owl", "lemur", "toucan"];
animals.forEach(function (animals, index) {
  console.log(index, animals);
})

const colours = ["taupe", "mauve", "purple", "orange", "lemon", "gold"];
colours.forEach(function (colours, index) {
  console.log(index, colours);
})

const favouriteNumbers = [10, 888, 9, 5, 27, 444, 15,];
for (let number of favouriteNumbers) {
  console.log(number);
}

let counter = 0;

while (counter <= 10) {
  console.log(counter); counter++;
}

