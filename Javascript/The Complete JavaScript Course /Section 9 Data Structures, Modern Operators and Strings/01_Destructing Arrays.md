## Destructing arrays

Destructing arrays in JavaScript is a syntax that allows you to unpack values from arrays into distinct variables.

```js
// THE STARTER CODE
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
```

- Example of code without using array destructuring.

```js
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(arr);
```

- Example of code with array destructuring

```js
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
```

- Extract the first and second elements from the array

```js
const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria
```

- Extract the first and third elements from the array

```js
const [first, , second] = restaurant.categories;
console.log(first, second); // Italian Vegetarian
```

- Change the main and secondary elements from main, secondary -> secondary, main

```js
let [main, , secondary] = restaurant.categories;

// Without destructuring

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

// With destructuring
let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);
```

- Return multiple values from a function

```js
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
```

- Example with nested arrays

```js
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [ 5, 6 ]

// Destruct the inner array further
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6
```

- Set default values

```js
// Without default values
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

// With default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```
