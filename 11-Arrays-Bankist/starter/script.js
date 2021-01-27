'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
 
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// create a first/last initial username from the account holders full name 
const createUsername = (accs) => {
  accs.forEach(function (acc) {
  acc.username = acc.owner
.toLowerCase()
.split(' ')
.map(name => name[0])
.join('');
});
};
createUsername(accounts);
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////START ACTIVE APP CODE//////////////////////////////
// display the balance in the upper right of the page
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$${acc.balance}`
}
// display the summary values on the bottom left of the page
const calcDisplaySummary = (acc) => {
// calc and display positive movement values
const credits = acc.movements.filter(mov => mov > 0)
.reduce((acc, mov) => acc + mov, 0);
labelSumIn.textContent= `$${credits}`;
// calc and display negative movement values
const debits = acc.movements.filter(mov => mov < 0)
.reduce((acc, mov) => acc + mov, 0);
labelSumOut.textContent= `$${Math.abs(debits)}`;
// calc and display interest on deposits
const interest = acc.movements.filter(mov => mov > 0)
.map(deposit => (deposit * 1.2) / 100)
.filter(int => int >= 1 ?? int)
.reduce((acc, int) => acc + int, 0);
labelSumInterest.textContent = `$${interest}`
};
// display the account transactions on the left pane of the page
const displayMovements = function(acc) {
  containerMovements.innerHTML= '';
  acc.movements.forEach(function(mov, i){
    const transType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${transType}">${i + 1} ${transType}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}$</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
// update the UI
const updateUi = function (acc) {
      // Display movements
      displayMovements(acc);
      // Display balance
      calcDisplayBalance(acc);
      // Display Summary 
      calcDisplaySummary(acc);
}
// EVENT HANDLERS 
let currentAccount;
const loginHandler = btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault(); 
  const currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log(currentAccount); 
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}` 
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUi(currentAccount);  
  }

});

const transferHandler = btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(currentAccount);
const amount = Number(inputTransferAmount.value);
const recieverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
console.log(amount, recieverAcc);
if (
  amount > 0 &&
  currentAccount.balance >= amount && /// RIGHT HERE ///
  receiverAcc?.username !== currentAccount.username
) {
  console.log('Transfer Valid', amount, recieverAcc);
  currentAccount.movements.push(-amount);
  recieverAcc.movements.push(amount);
  updateUi(currentAccount)
} else {
  console.log('Transfer Invalid', amount, recieverAcc);
}
});
///////////////////END ACTIVE APP CODE//////////////////////////////

//*****************START DEMO CODE********************************//
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1; 

const movementsUsd = movements.map(mov => mov * eurToUsd);

const movDesc = movements.map((mov, i) => 
 `Transaction ${i + 1}: ${mov > 0 ? 'Deposit' : 'Widthdrawl'} - ${Math.abs(mov)}`
);

const deposits = movements.filter(mov => mov > 0);
const widthdrawls = movements.filter(mov => mov < 0);
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
const min = movements.reduce((acc, mov) => acc < mov ? acc : mov, movements[0]);
// console.log(max);
// console.log(min);
const calcAvgMov = (movs) => (movs.reduce((acc, mov) => acc + mov, 0) / movs.length);
// *******METHOD CHANING******************
const totalDepUsd = (movs) => 
movs.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepUsd(movements))
*/
//*********INSPECT THE ARRAY IN THE CHAIN USING THE ARR CALLBACK */
// movs.filter(mov => mov > 0)
// .map((mov, i, arr) => {
//   console.log(mov, i , arr);
//   return mov * eurToUsd;
// })
// .reduce((acc, mov) => acc + mov, 0)
// console.log(totalDepUsd(movements))
  
// 


/*
console.log('vvvvv-BALANCE LONG-vvvvv');
const balanceLong = movements.reduce(function(acc, cur, i, arr){
  console.log(i, acc);
  return acc + cur;
}, 0);
console.log(balanceLong);
*/
// *******THE FIND METHOD******************
//returns the first value that matches the condition
/*
const findFirstDebit = (movs) => movs.find(mov => mov < 0);
console.log(movements);
console.log(findFirstDebit(movements));
console.log(accounts)
*/
// const findUser = (accs, user) => (accs.find(acc => acc.owner === user));
// console.log(findUser(accounts, 'Sarah Smith'));
/////////////////////////////////////////////////
// LECTURES
// let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
// console.log(arr.slice(2));
// // (2) ["c", "d"]
// console.log(arr.slice(2, 4));
// // (3) ["c", "d", "e"]
// console.log(arr.slice(-2));
// // (2) ["d", "e"]
// console.log(arr.slice(-1));
// // ["e"]
// console.log(arr.slice(1, -2));
// // (2) ["b", "c"]
// console.log(arr.slice());
// // (5) ["a", "b", "c", "d", "e"]
// console.log([...arr]);
// // (5) ["a", "b", "c", "d", "e"]

// SPLICE
// arr.splice(-1)
// console.log(arr);
// // (4) ["a", "b", "c", "d"]
// arr.splice(1, 2)
// console.log(arr);
// // (2) ["a", "d"]
// const arr2 =['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse());
// // (5) ["f", "g", "h", "i", "j"]

// CONCAT **SAME AS AS SPREAD OPPERATOR **
// const letters = arr.concat(arr2);
// console.log(letters);
// // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
// console.log([...arr, ...arr2]);
// // (10) ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

// JOIN 
// console.log(letters.join(' - '));
// // a - b - c - d - e - f - g - h - i - j

/////////////////////////////////////////////////////////////////////////////////
// ----------------FOR EACH WITH ARRAYS-----------------------------------------
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0 ){console.log(`Transaction #${i+1} Deposit- $${movement}`);}
  else {console.log(`Transaction #${i+1} Withdrawl- $${Math.abs(movement)}`);}
  
}
console.log('---------------FOREACH-------------------');
movements.forEach(function(mov, i, arr){
  if (mov > 0 ){console.log(`Transaction #${i+1} Deposit- $${mov}`);}
  else {console.log(`Transaction #${i+1} Withdrawl- $${Math.abs(mov)}`);}
});
// {{FOREACH}} WILL ALWAYS LOOP THE ENTIRE ARRAY
// IF YOU NEED TO BREAK OUT USE {{FOR OF}} 

// ----------------FOR EACH WITH MAPS -----------------------------------------
// const currencies = new Map([

  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// WITH A MAP
currencies.forEach(function(value, key, map){
console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// WITH A SET 
const unique = new Set(['usd', "gbp", 'eur', 'usd', "gbp", 'eur']);
unique.forEach(function(value, _, map) {
  console.log(`${value}: ${_}`);
});
// usd: usd
// gbp: gbp
// eur: eur
*/
/////////////////////////////////////////////////


