'use strict'; // pozwala wykrywac bledy w konsoli

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('i  can drive');

// function logger() {

//     console.log('My name is Jonas');
// }
// // calling/running/invoking function----------------
// logger();
// logger();
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {

//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function PPL(Fname, lname) {
//     const person = `${Fname} ${lname}`;
//     return person;
// }

// let newPerson = PPL('Łukasz', 'Pietrzyk')
// console.log(newPerson);

///deklaracja funkcji -------------------------
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);


// //ekspresja funkcji------------------------------
// const callAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = callAge2(1991);

// console.log(age2, age1);


// // arrow (one line of code) function--------------------------------------

// const calcAg3 = birthYear => 2037 - birthYear;
// const age3 = calcAg3(1991);
// console.log(age3);



// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName}, retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'BOB'));
// console.log(yearsUntilRetirement(1997, 'Lukasz'));


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// const juice = fruitProcessor(2, 3);
// console.log(juice);


// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {

//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         return -1;
//     }

//     //return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1950, 'Mike'));



// CODING CHALANGE #1 -----------------------------------------------------

/// MOJE ROZWIAZANIE ////
/*const calcAverage = avg => avg / 3;

const checkWinner = function (dolphin1, dolphin2, dolphin3, koalas1, koalas2, koalas3) {
    const koalas = koalas1 + koalas2 + koalas3;
    const delphine = dolphin1 + dolphin2 + dolphin3;
    const avgKoalas = calcAverage(koalas)
    const avgDolphins = calcAverage(delphine)

    if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win 🏆")
        return 'Dolphins win 🏆! Have avg ' + avgKoalas + ' score more then koalas avg ' + avgDolphins;
    } else if (avgDolphins >= avgKoalas * 2) {
        console.log("Dolphin win 🏆")
        return 'Dolphins win 🏆! Have avg ' + avgDolphins + ' score more then koalas avg ' + avgKoalas;
    } else {
        return "Nonone win";
    }
}

const points1 = checkWinner(44, 23, 71, 65, 54, 49);
const points2 = checkWinner(85, 54, 41, 23, 34, 27);
console.log(points1 + ' in first competition');
console.log(points2 + ' in secound competition');*/



/// PRZEROWBIONE ////-----------------------------------------------

/*const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolphins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);



const checkWinner = function (dolphin, koalas) {

    if (koalas >= 2 * dolphin) {
        console.log("Koalas win 🏆")
        return 'Dolphins win 🏆! Have avg ' + koalas + ' score more then koalas avg ' + dolphin;
    } else if (dolphin >= koalas * 2) {
        console.log("Dolphin win 🏆")
        return 'Dolphins win 🏆! Have avg ' + dolphin + ' score more then koalas avg ' + koalas;
    } else {
        return "Nonone win";
    }
}

let points1 = checkWinner(avgDolphins1, avgKoalas1);
console.log(points1 + ' in first competition');



avgDolphins1 = calcAverage(85, 54, 41);
avgKoalas1 = calcAverage(23, 34, 27);
points1 = checkWinner(avgDolphins1, avgKoalas1);
console.log(points1 + ' in secound competition');*/


/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);


const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

console.log(ages);
*/

// const friends = ['Michael', 'Steve', 'Peter'];


// //add elements
// const newLenght = friends.push('Jay');
// console.log(friends);
// console.log(newLenght);

// friends.unshift('Jhon');
// console.log(friends)

// //remove elements
// friends.pop();//delete last


// const poped = friends.pop();
// console.log(poped);

// console.log(friends)



// const poped2 = friends.shift(); //remove first argument
// console.log(poped2);
// console.log(friends);

// console.log(friends.indexOf('Steve'));



// CODING CHALLANGE #3 -----------------------------------------------------

;




// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill + bill * 0.15 : bill + bill * 0.20;
// }

// const bills = [125, 500, 44];

// const total = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const tip = [total[0] - bills[0], total[1] - bills[1], total[2] - bills[2]]

// console.log(bills, tip);


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';

// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey])



// const intersredIn = prompt('What do you want to know about Jonas? Chose betwen firstName,lastName,age,job and friends');
// console.log(jonas[intersredIn]);



// /*if (jonas[intersredIn]) {
//     console.log(jonas[intersredIn]);
// } else {
//     console.log('Wrong request! Chose betwen firstName,lastName,age,job and friends');
// }
// */
// jonas.location = 'Portugal';
// jonas['Twitter'] = '@YES0';
// console.log(jonas)

// const howManyFriend = jonas.friends;

// console.log(howManyFriend.length);


// console.log(`${jonas.firstName} has  ${jonas.friends.length}  and his best friend is called   ${howManyFriend[0]}`);



// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     //calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function () {
//     //     console.log(this);
//     //     return 2037 - this.birtYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     //#chalange -------------------------------------
//     getSummary: function () {
//         return `${this.firstName} is a ${jonas.calcAge} -years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a ' : 'no'}
//         driver's license.`
//     }

// };


// //console.log(jonas['calcAge'](1991));


// console.log(jonas.getSummary());

// //CHALANGE __________________________________________________
// const mark = {

//     fullName: 'Mark Miller',
//     weights: 78,
//     hight: 1.69,

//     calcBmi: function () {

//         this.bmi = this.weights / (this.hight * this.hight);
//         return this.bmi;
//     }
// };


// const john = {

//     fullName: 'John Smith',
//     weights: 92,
//     hight: 1.95,

//     calcBmi: function () {

//         this.bmi = this.weights / (this.hight * this.hight);
//         return this.bmi;
//     }

// };

// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);

// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName} Bmi is ${john.bmi} is higher then ${mark.fullName} ${mark.bmi}!`);
// } else {
//     console.log(`${mark.fullName} Bmi is ${mark.bmi} is higher then ${john.fullName} ${john.bmi}!`);
// };


//for (let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weights repetition ${rep}`);
//};

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];

// const type = [];



// for (let i = 0; i < jonas.length; i++) {
//     console.log(jonas[i], typeof jonas[i]);

//     type.push(typeof jonas[i]);

// }
// console.log(type);

// const years = [1991, 2007, 2069, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);


// console.log('Continue with string')

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] != 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }
// console.log('Brake')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }


// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];


// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exer = 1; exer <= 3; exer++) {
//     console.log(`----Starting exercise ${exer}-----`);


//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`EXEX ${exer}: Lifting weight repetiton ${rep}`);
//     }
// };






// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true,
// ];


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetitions ${rep}`);

// }

// let rep = 1;

// while (rep <= 10) {
//     console.log(`Lifting weights repetitions ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6) console.log('Loop end');
// }




//CHALANGE ========================================



// const calcTip = function (bills) {
//     if (bills >= 50 && bills <= 300) {
//         let tip = bills * 0.15;
//         return tip;
//     } else {
//         let tip = bills * 0.2;
//         return tip;
//     }

// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {

//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(bills[i] + tip);
// }

// console.log(bills, tips, total);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(total));
// console.log(calcAverage(tips));
