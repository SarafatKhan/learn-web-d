///////////////////////////////////////////////////////////////////////////////Array(Data Structure)


let students = ["sarafat", "kayum", "nayum", "sajid"];

let nums = [2, 4, 8, 6];
let data = ["nayum", "kayum", 3, 6, 1.20];

console.log(data[1][2]);

let fruts = ["mango", "apple", "litchi"];

fruts[0] = "banana";
fruts[10] = "papaya";

//////////////////////////// Array Methods : push-add to end, pop- delete from end & returns it, Unshift- add to start, shift- delete from start & returns it

let cars = ["audi", "maruti", "xuv", "bmw"];
cars.push("toyoto");

console.log(cars);

cars.pop();
console.log(cars);

cars.unshift("forchunar");
console.log(cars);

console.log(cars.shift());
cars.shift();
console.log(cars);

let months = ["january", "july", "march", "august"];

months.shift();
months.shift();
months.unshift("july", "june");

console.log(months);

////////////////////////////////////////////

console.log(months.indexOf("march"));
console.log(months.indexOf("december"));
console.log(months.includes("march"));
console.log(months.includes("february"));

//////////////////////////////////////// concatination

let primary = ["red", "green", "blue"];
let secondry = ["orange", "pink", "voilet", "purple"];

let all_colors = primary.concat(secondry);

console.log(all_colors);

//////////////////// reverse & slice

all_colors.reverse();
console.log(all_colors);
all_colors.reverse();

console.log(all_colors.slice());
console.log(all_colors.slice(3));
console.log(all_colors.slice(3, 4));
console.log(all_colors.slice(-2));

////////////////////////////////////////////// Splice methods

// splice(start,deleteCount,item0...itemN);      // does not change in orginal Array

all_months = ["january", "february", "march", "april", "may", "june", "july", "august", "august", "august", "november", "december",]

console.log(all_months);

all_months.splice(8, 2, "september", "october");

console.log(all_months);

/////////////////////////////////////////////// sorting

let alfabetes = ["a", "b", "x", "o", "q", "g", "p"];
alfabetes.sort();
console.log(alfabetes);

console.log(all_months.sort());

numbers = [90, 65, 43, 78, 100, 80];
numbers.sort();
console.log(numbers);

//////////////////////////////////////////////////////////////PQ
let monthss = ["january", "july", "march", "august"];

monthss.splice(0, 2, "july", "june");
console.log(monthss);

let programinglanguages = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(programinglanguages.reverse().indexOf("javascript"));

//////////////////////////// Array References

let arr = ["a", "b", "c"];
let arrCopy = arr;
console.log(arr == arrCopy);
arr.push("d");
console.log(arr == arrCopy, arr === arrCopy, arrCopy)

let arr2 = ["a", "b", "c"];
let arrCopy2 = ["a", "b", "c"];
console.log(arr2 == arrCopy2);

////////////////////////////// Constant Arrays

const arr3 = [1, 2, 3]; // we can aply methods on const arrays but cant change complate arrays.
arr3.push(4);
console.log(arr3);

let numss = [[2, 4, 6], [3, 6, 9], [4, 8, 12]]; //////Nesting in arrays
console.log(numss);

///////////////////// tic-tac-toe game state

let game_1 = [["X", null, 0], [null, "X", 0], [0, null, "X"]];
console.log(game_1);
game_1[1][2] = null;


// numberss= [2,4,6,8,10,12,14,16,18,20];
// let n = 4;
// let ans = numberss.slice(0, n);
// console.log(ans);

// numberss= [2,4,6,8,10,12,14,16,18,20];
// let n = 4;
// let ans = numberss.slice(-n);
// console.log(ans);

let str = "something";
if (str.length < 1) {
    console.log("Sting is blank");
} else {
    console.log("String is not blank");
}

let str_1 = "ThisIsPracticeQustion.";
let idx = 3;
if (str_1[idx] == str_1[idx].toLowerCase()) {
    console.log("This string is in lower case.");
} else {
    console.log("Not in lower case.");
}

let str_2 = "This is an Aplication";

// let str_3 = prompt("please enter a string");
// console.log(`original string = ${str_3}`);
// console.log(`string without spaces = ${str_3.trim()}`);


let element = ["Nothing", 5, 4, 7, 9, 44,64];
let elementNo = 7;

if(element.indexOf(elementNo) != -1){
    console.log("Element Exist.")
}
else {
    console.log("Element not Exist.");
}

































