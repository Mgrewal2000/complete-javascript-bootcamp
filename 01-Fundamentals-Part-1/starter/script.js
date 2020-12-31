// // let name = 'Manveer Singh'
// // console.log(name)
// // naming convention--> usually lower caps then start the new word with capitalized...firstName, threeYears, first_name..can NOT start with a numbe..can NOT contain $%& etc "unexpected token errors"..also can NOT use reserved keywords like function/new...do NOT start variables with UPPER CASE..we will later use that in OOP..make sure your variables are descriptive (show what they have stored inside of them)

// //Boolaen
// let condition = true;
// // console.log(condition);
// // //we can also check data types of variables using typeof as below
// // console.log(typeof condition);

// //below we have an object
// let me = {
//     name: 'Manveer',
//     age: 20
// };
// // console.log(me);

// //using const
// const birthyear = 2020;
// // can NOT change the birthyear now since it's a const
// // birthyear = 2021 would throw an error..birthyear does NOT change however age does that's why we use 'let' for age and not const
// // IMPORTANT --> use const as DEFAULT..only use 'let' when you are 100% sure the variable will change in the future

// // basic operators
// const fname = 'Stark'
// const lname = 'Singh'
// // console.log(fname + ' ' + lname)

// //assignment operator --> =
// let x = 10 + 10; //20
// // console.log(x);
// x += 100; //120 (20 + 100)
// // console.log(x);
// x *= 2; //240
// // console.log(x);
// x++; //241
// // console.log(x);
// x--; //240
// // console.log(x);
// const y = 239;
// //comparison operators
// // console.log(x > y); //true
// // console.log(x < y); //false

// const isTrue = x > y; //basically saving the condition in a variable
// // console.log(isTrue);

// let a, b, c;
// a = b = c = 10 + 100;
// console.log(a, b, c); //110 110 110

// //CODING CHALLENGE 1
// let mark = {
//     weight: 95,
//     height: 1.88
// };
// let john = {
//     weight: 85,
//     height: 1.76
// };
// const bmiMark = mark.weight / (mark.height ** 2);
// const bmiJohn = john.weight / (john.height ** 2);
// let markHigherBMI = (bmiMark > bmiJohn);
// console.log(bmiMark, bmiJohn, markHigherBMI);
// //I did it using objects which haven't been taught yet but mine's better


// //TEMPLATE LITERALS AND STRINGS
// const fname = 'Manveer';
// const job = 'student';
// const birthyear = 2000;
// //two ways to combine these variables...one is old, slow and most devs use and another is called the TEMPLATE LITERAL
// // first way (the old, slow way)
// const manu = 'I am ' + fname + ' ' + ' and I am a ' + job + ' ' + ' born in ' + birthyear + ' !!'
// console.log(manu);
// //next is called the template literal and ALLOWS you to directly insert variables into a sentence without needing to worry about + and the space etc
// const manunew = `I am ${fname} and I am a ${job} born in ${birthyear}...btw this is using the template literal and it's pretty efficient at doing this ngl`;
// console.log(manunew);
// // you can also do multiple line spacing with template literals too
// console.log(`This is me using template
// literals to 
// skip 
// over lines in JS.`);

// IF/ELSE Statements
// allows you to make decisions based on conditions..
// let's say you want to check if the person given on their age is able to take a drivers test or not, you can use an if statement as below
// let age = 15;
// const legalAgeToTest = 18;
// let yearsLeft = legalAgeToTest - age;
// if (age >= legalAgeToTest) {
//     console.log(`You are all good to go!! good luck on ur test`);
// } else {
//     console.log(`Too young to be whipping big dawg..come back in ${yearsLeft} years!!`);
// }

//CODING CHALLENGE 2
// let mark = {
//     weight: 95,
//     height: 1.88
// };
// let john = {
//     weight: 55,
//     height: 1.76
// };
// const bmiMark = mark.weight / (mark.height ** 2);
// const bmiJohn = john.weight / (john.height ** 2);
// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI is higher and it's ${bmiMark}!!`);
// } else {
//     console.log(`John's BMI is higher and it's ${bmiJohn}!!`);
// }


//TYPE CONVERSION
// const year = '2000'; //this is a string
// console.log(year + 18); //this can not be done..String + Int
// console.log(Number(year) + 18); //typecast string into int then added 18 to it..should return 2018.

// //TYPE COERCION
// // JS Automatically converts one of the data types to match the another..just like we did earlier in the older method like this...'I am' + yearsOld + ' and I am a' + job + ''..converts the yearsOld (num) to string
// console.log('23' + 10 + '23'); //should be 231023 because the + triggers an integer to string converstion
// console.log('23' - '23' - 10); //should be -10 because the - triggers a string to integer conversation
// // **IMPORTANT** Type coercion converts numbers to string when using the + but converts strings to numbers when doing - / > < etc..for example
// console.log('23' / '23'); // should be 1..it's a number

//TRUTHY AND FALSY VALUES
//Falsy values are just values that WILL BECOME false when we try to convert them into a boolean..only 5 values in JS that are we Falsy: 
// 0, 
//' ', 
//undefined, 
//NULL, 
//NaN
//Truthy values are just values that will become true when we try to convert them into a boolean
// console.log(Boolean(0)); //false
// console.log(Boolean(''));//false
// console.log(Boolean(1)); //true
// console.log(Boolean(undefined)); //false
// // these are examples of type coercion

// const money = 0; //0 is a falsy value...should trigger else
// if (money) {
//     console.log(`Not a lot of money but a few`);
// } else {
//     console.log(`Get a job`); //0 is false
// }

// // Equality operators ( == vs ===)
// // '===' is a strict quality operator which does not do type coercion (doesn't automatically convert strings to numbers) while '==' does do type coercion and automatically converts strings to numbers...example below
// let age = '20';
// if (age === 20) console.log(`You're using ===`);
// if (age == 20) console.log(`You're using == this time which automatically converts ur string var age to a number then does the comparison`);
// //**IMPORTANT - we usually almost want to use === to avoid bugs and make it easier to debug**/
// PROMPT to ask users questions
// prompt(`What is your age??`)
// whatever the user enters..it'll come in as a string not a number and using === on it would yield FALSE..so wrap the prompt using a NUMBER function to typecast it like below...
// Number(prompt(`What is your age??)); // now whatever the users enter it'll come in as a num

//LOGICAL OPERATORS
// AND OR NOT --> Already know them
// && in JavaScript is AND
// || in JavaScript is OR
// ! in JavaScript is NOT
// const manu = true;
// const janu = false;
// const legalAgeToMarry = true;
// console.log(manu || janu); //should be true
// console.log(manu && janu); // should be false
// console.log(manu && !janu); //should be true
// // you can use this to make decision
// if (manu && janu && legalAgeToMarry) console.log(`they should not get married`);
// else console.log(`they should get married`);

//CODING CHALLENGE 3
// let dolphins = {
//     score1: 97,
//     score2: 112,
//     score3: 81
// };
// const avgDolphins = (dolphins.score1 + dolphins.score2 + dolphins.score3) / 3;
// let koalas = {
//     score1: 109,
//     score2: 95,
//     score3: 86
// };
// const avgKoalas = (koalas.score1 + koalas.score2 + koalas.score3) / 3;
// console.log(`Avg for Koalas is ${avgKoalas}! Avg for Dolphins is ${avgDolphins}!!`);
// if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//     console.log(`The winner is Dolphins with the average of ${avgDolphins}!!`);
// } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
//     console.log(`It's a draw!! Dolphin's avg was ${avgDolphins} and the Koalas avg was ${avgKoalas}`);
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//     console.log(`The winner is Koalas with the average of ${avgKoalas}!!`);
// } else console.log(`No one wins the trophy!! It was a draw and the scores were less than 100`);

//SWITCH STATEMENTS
// Compare one value to a variety of other ones (way more efficient than writing complicated if-else statements)
// let's take the week/weekend example tolearn this
const day = 'Wednesday';
switch (day) {
    case 'Monday':
        console.log(`Plan week ahead..market opens`);
        break; //break out of the switch statement
    case 'Tuesday':
        console.log('Wake up early and workout!!');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('This trigger is for both wednesday and thursday');
        break;
    case 'Friday':
        console.log('Hang out with friends!!');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Same thing for Saturday and Sunday!!');
        break;
    default:
        console.log('Not a day');
    // Remember the switch statement does STRICT EQUALITY COMPARISON (===)
}   // You can do the same thing with if/else but it's so long and inefficient