console.log("Before my if statement");
let age = 23;

if (age >= 18) {
    console.log("You can vote");
    console.log("You can drive");
}

else if (age < 18) {
    console.log("You can not vote");
}

console.log("After my if statement");
let firstName = "Sarafat";
if (firstName == "Sarafat") {
    console.log(`Welcome ${firstName}`);
}

// Trafic light system

let color = "Blue";

let firstStatement = `Now the signal is ${color}`
if (color == "Red") {
    console.log(`${firstStatement}, So Please Wait!`);
}
else if (color == "Green") {
    console.log(`${firstStatement}, So you can go!!`);
}
else if (color == "Yellow") {
    console.log(`${firstStatement}, So be carefull !`);
}
//  else {
//     console.log("System Error");
// }
else if (!(color == "Red") && !(color == "Yellow") && !(color == "Green")) {
    console.log("System error");
}

// Grading system

let marks = 92;

if (marks >= 90) {
    console.log("A+");
}
else if (marks >= 75) {
    console.log("A");
}
else if (marks >= 60) {
    console.log("B");
}
else if (marks >= 33) {
    console.log("C");
}
else if (marks < 33) {
    console.log("F");
}
// pricing System

let popCornSize = "L";

let priPrint = `The Popcorn size is ${popCornSize}, The Price is :`;
if (popCornSize == "XL") {
    console.log(`${priPrint}250 Rupees.`);
}
else if (popCornSize == "L") {
    console.log(`${priPrint}200 Rupees.`);
}
else if (popCornSize == "M") {
    console.log(`${priPrint}100 Rupees.`);
}
else if (popCornSize == "S") {
    console.log(`${priPrint}50 Rupees.`);
} else {
    console.log("Sorry, This size is not abeleble");
}

///////////////////////////////////////////// good string 
// Qustion

let stringName = "august";

if (stringName.length > 3 && stringName[0] === "a") {
    console.log("Good String");
} else {
    console.log("Not a Good String");
}

////////////////////////////////////////////////////////////

if (true) {
    console.log("True value");
} else {
    console.log("false value")
}


let string = "a";

if (string) {
    console.log("String is not empty");
} else {
    console.log("String is empty");
}

let num = 0;

if (num) {
    console.log("num is not equal to zero");
} else {
    console.log("num is equal to zero");
}

/////////////////////////////////////////////////// SWITCH STATEMENT

let colour = "green";

switch (colour) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("System error");
}

/////////////////////////////////////////////////// practic qustionn (day system)

let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong Day");
}


//////////////////////////////////////////////////////////////New day system

let newDay = 9;

if (newDay % 7 == 0) {
    console.log("Monday");
}
else if (newDay % 6 == 0) {
    console.log("Tuesday");
}
else if (newDay % 5 == 0) {
    console.log("Wednesday");
}
else if (newDay % 4 == 0) {
    console.log("Thrusday");
}
else if (newDay % 3 == 0) {
    console.log("Friday");
}
else if (newDay % 2 == 0) {
    console.log("Sadurday");
}
else if (newDay % 1 == 0) {
    console.log("Sunday");
} else {
    console.log("We dont know!")
}


///////////////////////////////////////////////////////////////////////////// ALERT AND PROMPTS

// alert("This is simple alert");
// console.error("this is an error message");
// console.warn("this is warning message");

// prompt

// prompt("enter your name");

// let myFirstName = prompt("Enter your first name");
// let myLastName = prompt("Enter your last name");
// let msg = "Welcome " + myFirstName + " " + myLastName + "!";
// alert(msg);

////////////////////////////////////////////////////////////////////// PRACTIC QUSTION

// let reNum = 27;

// if (reNum % 10 == 0) {
//     console.log("good");
// } else {
//     console.log("bad");
// }

// let userName = prompt("Enter Name");
// let userAge = prompt("Enter Age");

// let finalMsg = userName + " is " + userAge + " Years old.";
// alert(finalMsg);

////////////////////////////////////////////////

let month = 3;

switch (month) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Out of the code!");
}


///////////////////////////////////////////////////

let stringStr = "apple";

if (((stringStr[0] == "a") || (stringStr[0] == "A")) && (stringStr.length >= 5)) {
    console.log("Golden String");
} else {
    console.log("Not a Golden String");
}

/////////////////////////////////////////////////////////////////////////////////////

let num_a = 15553;
let num_b = 18;
let num_c = 156;

if (num_a > num_b){
    if (num_a > num_c){
        console.log("num_a is Largest");
    } else {
        console.log("num_c is Largest");
    }
} else {
    if(num_b > num_c){
        console.log("num_b is Largest");
    } else {
        console.log("num_c is Largest");
    }
}

/////////////////////////////////////////////////////////////////////


num_1 = 453;
num_2 = 233;

if (num_1 % 10 == num_2 % 10){
    console.log("num_1 and num_2 have same last digit. witch is", num_1 % 10);
}else {
    console.log("num_1 and num_2  have not same last digit.")
}

///////////////////////////////////////////////////////////////////////////////////// Methods

////////////////////trim
let stringNam = "          KHAN     ";

// let newStringNam = stringNam.trim();
// console.log(newStringNam);
console.log(stringNam.trim());
console.log(stringNam);

let stringName_1 = "SARAFAT KHAN";
let stringName_2 = stringName_1.toLowerCase();
let stringName_3 = stringName_2.toUpperCase(); 
console.log(stringName_2);
console.log(stringName_3);

///////////////////////////////////////wit Arguments

let msg_1 = "ThisIsMyLaptop";

// let msg_2 = msg_1.indexOf("My");
// console.log(msg_2);

console.log(msg_1.indexOf("My"));
console.log(msg_1.indexOf("p"));

/////////////////////////////////////////////// Method Chaining

let msg_3 =  "     hello     ";
let msg_4 = msg_3.trim().toUpperCase();
console.log(msg_4);

/////////////////////////////// slice

let msg_5 = "apnacollage";
console.log(msg_5.slice(0, 4));
// console.log(msg_5.slice(4, 11));
// console.log(msg_5.slice(6, msg_5.length));
// console.log(msg_5.slice(8,));
// console.log(msg_5.slice(-2));

///////////////////////////////////////////////////replace method

let msg_6 = "This Is Sarafat Khan From Rajasthan.";

console.log(msg_6.replace("Rajasthan","India"));

let msg_7 = "This that This that This that.";

console.log(msg_7.replace("that","is"));


// let vegitable = "Potato, ";

// console.log( vegitable.repeat(5));


// let dddddd = "ApnaCollage";

// console.log(dddddd.replace("Apna", "Our"));




























