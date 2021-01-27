console.log("server live");
'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// LESSON 7===============================
// ########## FUNCTION CLOSURES ###############
// EXAMPLE 2 
/*
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    setTimeout(() => {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    console.log(`Will start boarding in ${wait} seconds`);
}
boardPassengers(180, 3)
*/
// EXAMPLE 1 
/*
let f; 
const g = function() {
    const a = 23; 
    f= function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}
g()
f()
// re-assinging the f function
console.dir(f)
h()
f()
console.dir(f)
*/
/*
const secureBooking = function() {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}; 
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker)
*/
// LESSON 7===============================
/*
// LESSON 6===============================
// ########## IIFE FUNCTION ###############
// variables inside the IIFE are not avaiable in the global scope 
(function () {
    const isPrivate = 'This variable is only available inside this function.'
    console.log(`This is an IIFE! It will never run again! ${isPrivate}`);
})();
// This is an IIFE! It will never run again! This variable is only available inside this function.
// console.log(isPrivate);
// Uncaught ReferenceError: isPrivate is not defined
{
    const isPrivate = 'This const is private';
    var notPrivate = 'This var is not private';
}
//This is an arrow version of IIFE!
// (() => console.log(`This is an arrow version of IIFE! ${isPrivate}`))();
// // Uncaught ReferenceError: isPrivate is not defined
(() => console.log(`This is an arrow version of IIFE! ${notPrivate}`))();
// This is an arrow version of IIFE! This var is not private
// LESSON 6===============================
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the
 number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. 
        The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example,
   if the option is 3, increase the value AT POSITION 3 of the array by 1. 
   Make sure to check if the input is a number and if the number makes sense 
   (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
    The method takes a string as an input (called 'type'), which can be either 
    'string' or 'array'. If type is 'array', simply display the results array as
     it is, using console.log(). This should be the default option. If type is 'string',
    display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
        Use both the 'array' and the 'string' option. Do NOT put the arrays in the
        poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}
            \n(write option number)`
            )
        ); 
        console.log(answer);
        typeof answer === 'number' && answer < this.answers.length 
        && this.answers[answer]++;
        console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },

    displayResults (type = 'array'){
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
         console.log(`Poll results are ${this.answers.join(',')} `);
        }
    },
};

// console.log(poll.displayResults);

document
.querySelector('.poll')
.addEventListener('click', poll.registerNewAnswer
.bind(poll));


poll.displayResults.call({answers: [5, 2, 3] })
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1] }, 'string')
// console.log(displayResults.call(testData1));
*/
/*
// LESSON 5===============================
const lufthansa = {
    airline: 'Lufthansa',
    iata: 'LH',
    bookings: [],

    book(flightNum, name) {
        this.bookings.push({flight: `${this.iata}${flightNum}`, name})
        console.log(`${name} booked ${this.airline} flight ${this.iata}${flightNum}`);
    },
};
const eurowings = {
    airline: 'EuroWings',
    iata: 'EW',
    bookings: [],
};
const swiss = {
    airline: 'Swiss Airlines',
    iata: 'LX',
    bookings: [],
};
const book = lufthansa.book;
// ########## BIND METHOD ###############
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(423, 'Phil Michelson')
// Phil Michelson booked EuroWings flight EW423
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Dustin Johnson');
// Dustin Johnson booked EuroWings flight EW23

lufthansa.planes = 300
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane.bind(lufthansa));
// without BIND METHOD 
// <button class=​"buy">​Buy new plane 🛩​</button>​
// WITH BIND METHOD 
// {airline: "Lufthansa", iata: "LH", bookings: Array(0), planes: 300, book: ƒ, …}airline: "Lufthansa"book: ƒ book(flightNum, name)arguments: (...)caller: (...)length: 2name: "book"__proto__: ƒ ()[[FunctionLocation]]: script.js:9[[Scopes]]: Scopes[2]bookings: []buyPlane: ƒ ()iata: "LH"planes: 301__proto__: Object

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
// 220
const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(100));
// 123
// LESSON 5===============================
*/
/*
// LESSON 4=============================== 
const lufthansa = {
    airline: 'Lufthansa',
    iata: 'LH',
    bookings: [],

    book(flightNum, name) {
        this.bookings.push({flight: `${this.iata}${flightNum}`, name})
        console.log(`${name} booked ${this.airline} flight ${this.iata}${flightNum}`);
    },
};
lufthansa.book(239, 'John Daly');
// John Daly booked Lufthansa flight LH239
lufthansa.book(240, 'Tiger Woods')
// Tiger Woods booked Lufthansa flight LH240
console.log(lufthansa);
// {airline: "Lufthansa", iata: "LH", bookings: Array(2), book: ƒ}
const eurowings = {
    airline: 'EuroWings',
    iata: 'EW',
    bookings: [],
};
const swiss = {
    airline: 'Swiss Airlines',
    iata: 'LX',
    bookings: [],
};
const book = lufthansa.book;
// book(123, 'John Doe');
// uncaught TypeError: Cannot read property 'bookings' of undefined
// ########## CALL METHOD ###############
book.call(eurowings, 123, 'John Doe')
// John Doe booked EuroWings flight EW123
book.call(lufthansa, 240, 'Jordan Spieth')
// Jordan Spieth booked Lufthansa flight LH240
book.call(swiss, 567, 'Jason Day')
// Jason Day booked Swiss Airlines flight LX567

// ########## APPLY METHOD ###############
const bookingData = [678, 'Rory Mcleroy']
book.apply(swiss, bookingData)
// Rory Mcleroy booked Swiss Airlines flight LX678
//-------------SAME AS------------------------
book.call(swiss, ...bookingData)
// Rory Mcleroy booked Swiss Airlines flight LX678
// LESSON 4=============================== 
*/
/*
// LESSON 3=============================== 
// longest way
// const greet = function (greeting){
//     return function(name) {
//     console.log(`${greeting} ${name}`);
//     }
// }
// shorter arrow 
// const greet = gretting => {
// return ((greeting, name) => console.log(`${greeting} ${name}`));
// }
// shortest arrow 
const greet = gretting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey')
greeterHey('John');
// LESSON 3=============================== 
*/
/*
// LESSON 2=============================== 
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function (str, fn) {
    console.log(`Original String ${str}`);
 console.log(`Transformed String ${fn(str)}`);
 console.log(`Function ran: ${fn.name}`);
}
transformer('This is a String', upperFirstWord)
transformer('This is a String', oneWord)

const high5 = function () {
    console.log("HIGH FIVE");
}

document.body.addEventListener('click', high5);
['One', 'Two', 'Three'].forEach(high5);
// LESSON 2===============================
*/
/*
// LESSON 1=============================== 
const bookings = [];
// DEFAULT PARAMETER VALUES
const createBooking = function (
    flightNum,
     numPassengers = 1,
      price = 199 * numPassengers) {
    //ES 5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking);
}
// createBooking('LH123')
// createBooking('LH456', 2, 500)
const flight = "LH234"
const person = {
    name: 'John Daly',
    passport: 1234567890
}
const checkIn = function (flightNum, passenger) {
 flightNum = 'LH999'
 passenger.name = 'Mr. ' + passenger.name;
 if(passenger.passport === 1234567890) { alert('Checked In')} 
 else { alert('wrong passport number') }
}
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000)
};
newPassport(person);
checkIn(flight, person)
console.log(flight);
console.log(person);
//LESSON 1===============================
*/