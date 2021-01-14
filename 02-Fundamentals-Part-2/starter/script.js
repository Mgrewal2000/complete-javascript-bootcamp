//STRICT MODE --> Easier to write secure code by writing 'use strict';...has to be the very first statement of the file.
'use strict';
// allows us to easily write secure code and avoid any stupid bugs that might happen when building applications...like misspelling variables and stuff.
//* IMPORTANT * - you should always use it, it forbids certain actions and makes it very easy to handle bugs..prints out exact error to the console at the exact line
// - Also does NOT allow you to use forbidden/reserved words like interface, private, etc and also the ones that could be used int he future. 


//Functions --> piece of code that you can keep using over and over again...can invoke/call/running the function
//here's how to declare it
function logger() {
    console.log(`My name is Manveer`);
}
//This function above is stupid and doesn't return anything


//here's how you call/invoke/run it
logger();

//Functions with parameters..parameters are basically variables that you can pass onto the function when you invoke it
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `I want my juice with ${apples} apples and ${oranges} oranges please!!`;
    //juice will not be displayed out to the console bcoz wenot logging it
    return juice;
}

//invoking the function and passing the parameters in it too...
// fruitProcessor(4, 10); --> need to store in a variable to get juice
const juiceFinal = fruitProcessor(10, 20);
console.log(juiceFinal);
// you can also just log the function invoke itself
console.log(fruitProcessor(10, 20));

//Functions are basically very generic code that you can keep on calling/passing in different parameters...Functions are the backbone of programming and you must get good at writing efficient functions
//Functions should always return values..

//** IMPORTANT --> to be a good programmer, you should write DRY (DO NOT REPEAT YOURSELF) code which basically means that dont repeat code and efficiently manage it using functions so you can keep on calling it with changed parameters */

//function declaration vs expression
//above we have function declarations..now let's create a function that calculates the age of a person
function calculateAge(birthYear, currentYear) {
    const yourAge = currentYear - birthYear;
    if (currentYear < birthYear) {
        console.log(`Current Year was smaller than birth year..Try again!!`);
    } else { return yourAge; }

}

console.log(`You are ${calculateAge(1000, 2021)} years old`);

//that was an example of function declaration...now we'll learn about function expressions..you can do it like this
//Remember an expression produces a value
const yourAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
}

console.log(calculateAge(2000, 2021), yourAge2(2000, 2021)); //one is with function declaration while second is with function expression

//functions are basically just generic code, values that you can store and call whenver you'd like.

//Keep in mind that functions defined using expressions can NOT be called before initialization while functions degined using declaration method CAN be called before initialization


//Arrow functions are basically 