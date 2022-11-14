/* const now = 2037;
const ageJonas = now - 1991;
const ageLukasz = now - 1997;
console.log(ageJonas, ageLukasz);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + " " + lastName)



// assigment operators
let x = 10 + 5; // 15
x += 10; // x = x+10 // 25
x *= 4;
x++;
x--;
x--;
console.log(x);


//Comperasion operators;
console.log(ageJonas > ageLukasz); // >,< >= ,<=;
console.log(ageLukasz >= 18);

const isFullAge = ageLukasz >= 18;

console.log(now - 1991 > now - 2018);

let countryPopulation = 38000000;

countryPopulation /= 2;

console.log(countryPopulation);

countryPopulation++;
console.log(countryPopulation);

populationFinland = 6000000;
console.log(countryPopulation > populationFinland);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(description);
//CHALANGE nr 1

let weightsMark = 78;
let heightMark = 1.69;
let weightsJhon = 92;
let heightJhon = 1.95;

console.log("Mark's weight is ", weightsMark, "kg", "and his weight", heightMark, 'm');
console.log("Jhon's weight is ", weightsJhon, "kg", "and his height", heightJhon, 'm');

let bmiJhon = weightsJhon / (heightJhon * heightJhon);
let bmiMark = weightsMark / (heightMark * heightMark);

console.log(bmiJhon, bmiMark);


let markHgherBmi = bmiMark > bmiJhon;
console.log(markHgherBmi);

console.log("-------------Drugi zestaw danych ----------------");

//weightsMark = 95;
//heightMark = 1.88;
//weightsJhon = 85;
//heightJhon = 1.76;

console.log(`Mark's weight is  ${weightsMark} kg and his weight ${heightMark} m`);
console.log("Jhon's weight is ", weightsJhon, "kg", "and his height", heightJhon, 'm');

bmiJhon = weightsJhon / (heightJhon * heightJhon);
bmiMark = weightsMark / (heightMark * heightMark);

console.log(bmiJhon, bmiMark);

markHgherBmi = bmiMark > bmiJhon;
console.log(markHgherBmi);



const age = 15;
const isOldEnough = age >= 18;


if (age >= 18) {
    console.log(`Sara can start driving license 😊 `)
} else {

    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years.`);
}


const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

//CHALANGE nr 2

bmiJhon = weightsJhon / (heightJhon * heightJhon);
bmiMark = weightsMark / (heightMark * heightMark);

if (bmiJhon > bmiMark) {
    console.log(`John's BMI is ${bmiJhon.toFixed(2)} and is higher ${(bmiJhon - bmiMark).toFixed(2)} than ${bmiMark.toFixed(2)} Mark's!`)
} else {
    console.log(`Mark's BMI IS ${bmiMark.toFixed(2)} and is ${(bmiMark - bmiJhon).toFixed(2)} higher than ${bmiJhon.toFixed(2)} John's!`)
}

console.log(bmiJhon, bmiMark);
markHgherBmi = bmiMark > bmiJhon;
console.log(markHgherBmi);
*/

/*const favorite = Number(prompt("What your favorite number"));
console.log(favorite);
console.log(typeof favorite)

if (favorite === 23) {
    console.log('COll 23 is an amazing number');
} else if (favorite === 7) {
    console.log('cool 7 is too great number!');
} else if (favorite === 9) {
    console.log('cool 9 is also great number!');
} else {
    console.log('xD')
}
if (favorite !== 23) console.log("Why not 23?");
*/
// zadanie == and ===
/* const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

console.log(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border')
} else if (numNeighbours > 1) {
    console.log(`I have ${numNeighbours} neighbours`);
} else {
    console.log('I have 0 neighbours');
} */

// const hasDriverLicense = true; // condition A
// const hasGoodVision = true; // condition B


// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(hasDriverLicense && !hasGoodVision);


// // if (hasDriverLicense && hasGoodVision) {

// //     console.log('Sarah is able to drive');
// // } else {
// //     console.log('Sarah cant drive');
// // }

// const isTired = false; // C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Sarah cant drive');
// }


// CHALLANGE #3 XD----------------------------------------------------------------------------------------------------------------------------------------------------

// const dolphin1Competition = 97;
// const dolphin2Competition = 112;
// const dolphin3Competition = 101;

// const koala1Competition = 109;
// const koala2Competition = 95;
// const koala3Competition = 106;

// let avgDolphinScore = ((dolphin1Competition + dolphin2Competition + dolphin3Competition) / 3).toFixed(2)

// let avgKoalaScore = ((koala1Competition + koala2Competition + koala3Competition) / 3).toFixed(2)
// console.log(avgDolphinScore, avgKoalaScore);

// if (avgKoalaScore === avgDolphinScore && avgKoalaScore >= 100 && avgDolphinScore >= 100) {
//     console.log(`Its draw! Both win 🏆`);
// } else if (avgKoalaScore > avgDolphinScore && avgKoalaScore >= 100) {
//     console.log('Koalas win competition 🏆!');
// } else if (avgKoalaScore < avgDolphinScore && avgDolphinScore >= 100) {
//     console.log("Dolphins won the competition 🏆");
// } else {
//     console.log("Non one win 😥");
// }






// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'mondey'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tusday':
//         console.log('Prepere theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code expamples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

//coding #4;---------------------------------------------------------------

let tip;
let value = 40;

value >= 50 && value <= 300 ? tip = (15 / 100) * value : tip = (20 / 100) * value;
console.log(tip);
console.log(`The bill was ${value}, the tip was ${tip}, and the total value ${value + tip}`);
