'use strict';


// nestesd destructuring 
const nested = [2, 4, [5 ,6]];
const [a, ,b] = nested;
// console.log(a ,b); 
// 2 (2) [5, 6]

const [x, ,[y, z]] = nested;
// console.log(x,y,z); 
//  2 5 6

// default values 
const [here1, here2, missing] = [1, 2]
// console.log(here1,here2, missing)
//  1 2 undefined

const [d, e, f = 'default'] = [4, 5]
// console.log(d,e,f)
// 4 5 "default"

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
// array destructuring 
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
     this.mainMenu[mainIndex]];
  }
};

const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);
// Garlic Bread Pizza

// destructuring objects
const { name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories); 
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}__proto__: Object (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]0: "Italian"1: "Pizzeria"2: "Vegetarian"3: "Organic"length: 4__proto__: Array(0)

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags); 
// SAME AS PREVIOUS OUTPUT 
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}__proto__: Object (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]0: "Italian"1: "Pizzeria"2: "Vegetarian"3: "Organic"length: 4__proto__: Array(0)

const {mainMenu:menu = [], starterMenu: starters  = [], reviews: feedback = [] } = restaurant;
console.log(menu, starters, feedback);