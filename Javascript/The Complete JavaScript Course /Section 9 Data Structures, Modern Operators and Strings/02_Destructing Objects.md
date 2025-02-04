## Destructing objects

```js
"use strict";

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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
```

<br>

<details>
  <summary>Destructing an object, rename the variables</summary>

```javascript
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Output
// Classico Italiano {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 }
//   } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
```

</details>
<br>

<details>
  <summary>Set a default value</summary>

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Output
// [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]
```

</details>

<br>

<details>
  <summary>Mutating Variables while destructuring objects</summary>

```javascript
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);
```

</details>

<br>

<details>
  <summary>Nested Objects</summary>

```javascript
// Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// Output 11 23
```

</details>
