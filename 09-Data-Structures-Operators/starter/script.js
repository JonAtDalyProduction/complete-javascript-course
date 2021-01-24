'use strict';
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_')
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
})
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
/*
///////////////////////////////////////

//****************STRINGS*********************/
const airline = 'American Airlines'
const plane = 'A320' 
/*
console.log(plane[0]);
// A
console.log(airline.length);
// 6
console.log(airline.indexOf('A'));
//0
console.log(airline.lastIndexOf('A'));
//9
console.log(airline.indexOf('Airlines'));
// 9
console.log(airline.slice(9));
// Airlines
console.log(airline.slice(0, 8));
// American
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1 ));
console.log(airline.slice(-2));
// es
console.log(airline.slice(1, -2));
//merican Airlin

const checkMiddleSeat = function(seat) {
   //B and E are Middle Seats 
   const s = seat.slice(-1);
   if(s === 'B' || s === 'E') 
   console.log('You have a Middle Seat');
   else console.log('You have an asile or window');
}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')
*/
//====================================================================
/*
console.log(new String('jonas'));
const passenger = 'JonAthAn'
const passengerLower = passenger.toLowerCase();
console.log(passenger.toLowerCase());
//jonathan
console.log(passenger.toUpperCase());
// JONATHAN
const passCorrected = passengerLower[0].toUpperCase() + passengerLower.slice(1)
function fixPass(name) {
  const passLower = name.toLowerCase();
   return passLower[0].toUpperCase() + passLower.slice(1);
}
console.log(fixPass(passenger));
//Jonathan

//comparing emails

const email = 'test@user.com'
const loginForm = ' TesT@User.Com \n'
const normalizedEmail = loginForm.toLowerCase().trim();
console.log(normalizedEmail);
//test@user.com
// console.log(email === normalizedEmail);
// true
function sanitizeEmail(userEmail, loginEmail) {
  const santEmail = loginEmail.toLowerCase().trim();
  return (userEmail === santEmail)
}
console.log(sanitizeEmail(email, loginForm ) ? true: 'You can log in' );
// true

const priceGB = '288,97&'
const priceUS = priceGB.replace('&', '$').replace(',','.')
console.log(priceUS);
// 288.97$

const annoucement = 'Please go to the door asap. door A23'
// NEW FANCY FUNCTION 
console.log(annoucement.replaceAll('door', 'gate'));
// OLD REGULAR EXPRESSION METHOD 
console.log(annoucement.replaceAll(/door/g, 'boarding gate'));

const newPlane = 'Airbus A320neo'

console.log(plane.includes('320'));
//true
console.log(newPlane.includes('320'));
// true
console.log(plane.startsWith('A320'));
// true
console.log(newPlane.startsWith('A320'));
// false

if (newPlane.startsWith('Airbus') && newPlane.endsWith('neo')) {
  console.log('this is a new plane');
}
// this is a new plane

const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
 if (baggage.includes('water') || baggage.includes('guns') || baggage.includes('ammo')) {
   console.log('you are not allowed on board with those items', items)
 } else {
   console.log('you may board the plane with', items);
 }
}; 

checkBaggage('i have food and water and books')
checkBaggage('I HAVE GUNS AND AMMO')
checkBaggage('i have a Pillow and an Eye Mask')
*/
//====================================================================
/*
console.log('a+string+split'.split('+'));
//(3) ["a", "string", "split"]
console.log('John Daly'.split(' '));
//(2) ["John", "Daly"]
const [firstName, lastName] = 'John Daly'.split(' ');
const userName = ['Mr', firstName, lastName.toUpperCase()].join('.');
console.log(userName);
//Mr.John.DALY

const capitalizeName = function(name){
  const names = name.split(' ')
  const newName = [];
  for(const n of names) {
    // ONE METHOD 
    // newName.push(n[0].toUpperCase() + n.slice(1));
    // OR SAME RESULT
    newName.push(n.replace(n[0], n[0].toUpperCase()))
    
  }
  console.log(newName.join(' '));
}
capitalizeName('first middle last')
// First Middle Last

// PADDING STRINGS 
const message = 'Go to gate A23!'
console.log(message.padStart(25, '+'));
//++++++++++Go to gate A23!
console.log(message.padEnd(25, '+'));
//Go to gate A23!++++++++++

const maskCC = function(ccNumber) {
  const str = ccNumber + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}
console.log(maskCC(1234567898745632));
// ************5632

// Repeat 
const alertMessage = ' All Flights are Delayed! '
console.log(alertMessage.repeat(3));
//All Flights are Delayed!  All Flights are Delayed!  All Flights are Delayed!

const flightsDelayed = function(n) {
console.log(`There are ${n} flights delayed ${'#'.repeat(n)}`);
};
flightsDelayed(5);
// There are 5 flights delayed #####

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
/*

//****************STRINGS*********************/
///////////////////////////////////////
// Coding Challenge #3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
 The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
//111111111111111111111111
console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log(events);
//111111111111111111111111
//222222222222222222222222
gameEvents.delete(64)
console.log(gameEvents);
//222222222222222222222222
//333333333333333333333333
const gameTime = [...gameEvents.keys()].pop();
const avgFouls = gameTime / gameEvents.size 
console.log(avgFouls);
console.log(`Fouls occured every ${avgFouls} on average`);
//3333333333333333333333333
//4444444444444444444444444
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? `[FIRST HALF] ${key}` : `[SECOND HALF] ${key}`;
  console.log(`Answer${half}: ${value}`)
}
//4444444444444444444444444
*/


// for (const [team, odd] of Object.entries(game.odds)){
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamString} ${odd}`)
// }
//****************SETS*********************/
/*
console.log(new Set('ABCD'))
// Set(4) {"A", "B", "C", "D"}
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza'])
console.log(ordersSet);
// Set(3) {"Pasta", "Pizza", "Risotto"}
console.log(ordersSet.size);
// 3 
console.log(ordersSet.has('Bread'));
//false
console.log(ordersSet.has('Pizza'));
//true
ordersSet.add('Garlic Bread')
console.log(ordersSet);
// Set(4) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
ordersSet.delete('Risotto')
console.log(ordersSet);
// Set(4) {"Pasta", "Pizza", "Garlic Bread"}
for(const order of ordersSet) console.log(order);
// Pasta
// Pizza
// Garlic Bread

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffPositions = new Set(staff);
console.log(staffPositions);
// Set(3) {"waiter", "chef", "manager"}
const staffUnique = [...new Set(staffPositions)]
console.log(staffUnique);
//(3) ["waiter", "chef", "manager"]
*/
//****************SETS*********************/
//=========================================//
//****************MAPS*********************/
/*
const setExample = new Map();
setExample.set('keyname', 'value');
console.log(setExample);
//script.js:37 Map(1) {"keyname" => "value"}

const rest = new Map();
rest.set('name', 'Gabagool');
rest.set(1, 'NYC')
console.log(rest.set(2, 'LA'));
//Map(3) {"name" => "Gabagool", 1 => "NYC", 2 => "LA"}
rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'we are open')
.set(false, 'we are closed')

console.log(rest.get('name')) 
// Gabagool
console.log(rest.get(true)) 
//we are open
console.log(rest.get(1)) 
//NYC
var now = new Date().getHours();
console.log(now); 
// current hour of the day 
console.log(rest.get(now > rest.get('open') && now < rest.get('close')));
 // we are open
 console.log(rest.has('categories'))
 // ture
 console.log(rest.size);
 // 8
//  rest.clear();
//  console.log(rest);
// Map(0) {}

rest.set([1, 2], 'Test');
console.log(rest.get([1, 2]));
//undefined
const setArr = [3,4]
rest.set(setArr, 'TestAgain');
console.log(rest.get(setArr));
// TestAgain

rest.set(document.querySelector('h1'), 'heading')
console.log(rest);

const question = new Map([
  ['question', 'what is the best food?'],
   [1, 'Pizza'],
    [2, 'Burgers'],
     [3, 'Pasta'],
      ['correct', 1],
      [true, 'correct'],
      [false, 'try again']
     ])
     console.log(question);

for (const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer${key}: ${value}`)
}
const answer = 1
// const answer = Number(prompt('Your Answer'));
// console.log(answer);
console.log(question.get(question.get('correct') === answer));
console.log(...question);
console.log(...question.keys());
console.log(...question.values());
*/
//****************MAPS*********************/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function(...players) {
    console.log(`Total goals scored ${players.length}`);
    players.forEach(player => {
      console.log(player);
    })
  }
  
};
// ///////////////////////////////////////
// // Coding Challenge #2
// // 111111111111111111111111111
// for(const [i, el] of game.scored.entries())
//   console.log(`Goal ${i+1}: ${el}`);
// //111111111111111111111111111111

// //222222222222222222222222222222
// const odds = Object.values(game.odds)
// let avg = 0; 
// for (const odd of odds) avg += odd;
// avg /= odds.length;
// console.log(avg);
// //222222222222222222222222222222

// //333333333333333333333333333333
// for (const [team, odd] of Object.entries(game.odds)){
//   const teamString = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teamString} ${odd}`)
// }
// //333333333333333333333333333333
// //BONUS BONUS BONUS BONUS BONUS BONUS BONUS BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// //BONUS BONUS BONUS BONUS BONUS BONUS BONUS BONUS 
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
// game.printGoals(...game.scored)
// Total goals scored 4
// Lewandowski
// Gnarby
// Lewandowski
// Hummels
// const players1 = game.players[0]
// console.log(players1); 
// const players2 = game.players[1]
// console.log(players2); 
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)
// Neuer (10) ["Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"]
const allplayers = [...players1, ...players2];
// console.log(allplayers);
//(22) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"]
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);
//(14) ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski", "Thiago", "Coutinho", "Perisic"]

const odds = game.odds
// console.log(odds);
const {odds: {team1, x:draw, team2}} = game
// console.log(team1, draw, team2);
// 2 3 1
// team1 < team2 && console.log('team 1 has winning odds');
// team1 > team2 && console.log('team 2 has winning odds' );
// team1 === team2 && console.log('odds are equal');
//team 2 has winning odds
///////////////////////////////////////
// Coding Challenge #1
/*
/*                           c                                                                                                   c                                 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

DONE 1. Create one player array for each team (variables 'players1' and 'players2')
DONE 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
DONE 3. Create an array 'allPlayers' containing all players of both teams (22 players)
DONE 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
DONE 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
DONE 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

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

// mutating variables 
let g = 111;
let h = 999;
// console.log(g,h);
// 111 999
const obj = {g: 23, h: 7, i: 14};
({g, h} = obj);
// console.log(g, h);
// 23 7

// spread operator
const firstArr = [7, 8, 9]
const hardway = [1, 2,  firstArr[0], firstArr[1], firstArr[2]]
// console.log(hardway);
const easyArr = [1, 3, ...firstArr]
// console.log(easyArr);
// [1, 3, 7, 8, 9]
// console.log(...easyArr);
//1 3 7 8 9
//================================================================================
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  }
};
// console.log(openingHours);
// {thu: {…}, fri: {…}, sun: {…}}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Object literals 
  openingHours,
 
// array destructuring 
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
     this.mainMenu[mainIndex]];
  },

  orderDelivery({time = 'now', address = 'pickup', mainIndex = 0, starterIndex = 0}) {
    console.log(obj);
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta(topping1, topping2, tonpping3) {
    console.log(`here is your pasta with ${topping1}, ${topping2}, ${tonpping3}`);
  },

  orderPizza(sauce, ...toppings) {
    console.log(sauce);
    console.log(toppings);
    //red
    // ["cheese", "meatballs", "garlic"]
    // white
    // []
  }

};
// console.log(restaurant);

// Property NAMES 
const properties = Object.keys(openingHours);
// console.log(properties);
// (3) ["thu", "fri", "sun"]
let openStr = `We are open on ${properties.length} days: `
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of properties) {
  openStr += `${day}, `
}
// console.log(openStr);
// We are open on 3 days: thu, fri, sun,
//Propery VALUES 
const values = Object.values(openingHours);
// console.log(values);
// (3) [{…}, {…}, {…}]
// 0:
// close: 22
// open: 12ct
// 1:
// close: 23
// open: 11
// 2:
// close: 24
// open: 0

const entries = Object.entries(openingHours)
// console.log(entries);
// (3) [Array(2), Array(2), Array(2)]
// 0: Array(2)
// 0: "thu"
// 1: {open: 12, close: 22}
// 1: Array(2)
// 0: "fri"
// 1: {open: 11, close: 23}
// 2: Array(2)
// 0: "sun"
// 1: {open: 0, close: 24}

for(const [key, {open, close}] of entries) {
  // console.log(`On ${key} we open at ${open} and close at ${close}`);
}
// On thu we open at 12 and close at 22
// On fri we open at 11 and close at 23
// On sun we open at 0 and close at 24

// ES 2020 function CHECK IF OBJECT PROPERY OR METHOD EXISTS 
// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// // no result property does not exist
// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// // no result property does not exist
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// // 11
// ======== WITH optional chaining ============
// console.log(restaurant.openingHours.mon?.open)
// // undefined
// console.log(restaurant.openingHours?.mon?.open)
// //undefined


for (const day of days) {
 const open = restaurant.openingHours[day]?.open ?? 'closed';
//  console.log(`${day} open at ${open}`);
}
// mon open at closed
// tue open at closed
// wed open at closed
// thu open at 12
// fri open at 11
// sat open at closed
// sun open at 0

// methods 
// console.log(restaurant.order?.(0, 1) ?? "method does not exist");
// //script.js:215 (2) ["Focaccia", "Pasta"]
// console.log(restaurant.orderBreakfast?.(0, 1) ?? "method does not exist");
//method does not exist
// with arrays 
const user = [{name: 'UserName', email: 'test@user.com'}]
// console.log(user[0]?.name?? 'User not found');
// // UserName
// console.log(user[1]?.name?? 'User not found');
// // 'User not found'
// ========== FOR OF LOOP =====================
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
// for(const item of menu) console.log(item);
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto

// for(const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// };
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

// *************nullish coalescing operator (??)********************
// const foo = null ?? 'default string';
// console.log(foo);
// // expected output: "default string"

// const baz = 0 ?? 42;
// console.log(baz);
// // expected output: 0

restaurant.numGuests = 0; 
const guests = restaurant.numGuests || 10; 
// console.log(guests);
// 10

const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// 0

// restaurant.orderPizza('red', 'cheese', 'meatballs', 'garlic');
// restaurant.orderPizza('white');


// const toppings = [prompt("Let's make pasta! Topping 1?"), prompt("Topping 2?"), prompt("Topping 3?")]
// console.log(toppings);
// ["pesto", "cheese ", "garlic"]

// restaurant.orderPasta(...toppings);
// here is your pasta with 123, 456, 789

// restaurant.orderDelivery({
//   time:'22:30',
//   address:'123 something street', 
//   mainIndex: 2, 
//   starterIndex: 2
// s

// const [starter, main] = restaurant.order(2, 0);
// console.log(starter, main);
// Garlic Bread Pizza

// destructuring objects
// const { name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories); 
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}__proto__: Object (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]0: "Italian"1: "Pizzeria"2: "Vegetarian"3: "Organic"length: 4__proto__: Array(0)

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags); 
// SAME AS PREVIOUS OUTPUT 
// Classico Italiano {thu: {…}, fri: {…}, sat: {…}}fri: {open: 11, close: 23}sat: {open: 0, close: 24}thu: {open: 12, close: 22}__proto__: Object (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]0: "Italian"1: "Pizzeria"2: "Vegetarian"3: "Organic"length: 4__proto__: Array(0)

// const {mainMenu:menu = [], starterMenu: starters  = [], reviews: feedback = [] } = restaurant;
// console.log(menu, starters, feedback);

// NESTED OBJECTS 
const { 
  fri: { open: o, close: c } } = openingHours;
// console.log(o, c);
// 11 23

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]; 
// console.log(wholeMenu);
// ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

const str = 'jonathan'; 
const letters = [...str]
// console.log(letters);
// ["j", "o", "n", "a", "t", "h", "a", "n"]

// SPREAD OPERATOR OBJCTS 
const newRestaurant = {foundedIn: 2021, ...restaurant, founder: 'Jonathan'}
// console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Gabagool Palace'; 
// console.log(restaurantCopy.name);
// Gabagool Palace
// console.log(restaurant.name);
// Classico Italiano

// Rest Operator 
// must be the last element on the left of the equal sign 
const [j, k, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, ]
// console.log(j, k);
// // 1 2
// console.log(others);
// //[3, 4, 5, 6, 7, 8]

const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood );
//Pizza Risotto (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

const {sat, ...notWeekend} = restaurant.openingHours;
// console.log(notWeekend);
// {thu: {…}, fri: {…}
//===================Rest Parameters ==================
// Functions 
const add = function(...numbers) {
  let sum = 0;
for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
// add(2, 3)
// // 5
// add(1, 2, 2)
// // 5
// const u = [1, 1, 1, 1, 1];
// add(...u);
// // 5

//========= SHORT CIRCUT WITH OPERATORS===========
// console.log('----- OR || OPERATOR -----');
// console.log(1 || "Hello");
// // 1
// console.log('' || 'Hello');
// // Hello
// console.log(true || 0);
// // true
// console.log(undefined || null);
// // null
// console.log(undefined || 0 || '' || null || 'Hello');
// // Hello

// const guests10 = restaurant.numGuests || 10 
// console.log(guests10);
// // 10
// const guests2 = restaurant.numGuests ? restaurant.numGuests : 2;
// console.log(guests2);
// // 2
// restaurant.numGuests = 4;
// const guests = restaurant.numGuests ? restaurant.numGuests : 2;
// console.log(guests);
// // 4
// const guests4 = restaurant.numGuests || 10 
// console.log(guests4);
// //4
// restaurant.numGuests = 0;
// const guestsZero = restaurant.numGuests || 10 
// console.log(guestsZero);
// // 10

// +++++++++ AND && OPERATOR ++++++++++++++++++++++
// console.log('----- AND && OPERATOR -----');

// console.log(0 && 'Hello');
// // 0
// console.log(1 && 'Hello');
// // hello
// console.log('hello' && 1 && undefined && null );
// // undefined
// console.log('hello' && 1 && null && undefined );
// // null
// console.log('hello' && 1 && 0 && null && undefined );
// // 0
// // REAL WORLD EXAMPLE  
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('red' , 'cheese');
//   // red , ['cheese']
// }
// restaurant.orderPizza && restaurant.orderPizza('white', 'spinach')
// // white, ['spinach']
// restaurant.orderTakeout && console.log('ordering takeout');
// // function not performed because orderTakeout does not exist 


























///



