// LOOPS
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for( initialisation; CSSConditionRule; updation){
//     do something
// }

for (let i =1; i<=5; i++){
    console.log(i);
}

for (let i =5; i>=1; i--){
    console.log(i);
}

for (let i =10; i>=1; i--){
    console.log(i);
}

for (let i =2; i<=20; i=i+2){
    console.log(i);
}

for (let i =20; i>=2; i=i-2){
    console.log(i);
}

for (let i =5; i<=50; i=i+5){
    console.log(i);
}

// let n = prompt("Write Your Number.");
// n = parseInt(n);

// for(let i= n; i<=n*10; i=i+n){
//     console.log(i);
// }

for(let i= 1; i<=3; i=i+1){
    console.log(`Outer Loop ${i}`);
    for(let j= 1; j<=4; j=j+1){
        console.log(j);
    }
}

////////////////////////////////////////// while loop

let i = 1;

while(i<=10) {
    console.log(i);
    i++;
}
j = 2;
while(j<=20) {
    console.log(j);
    j = j+2;
}

const favMovie = "pk";

let guess = prompt("guess my favorite movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess. please try again.");
}
if(guess == favMovie){
    console.log("Congrets!");
}else{
    console.log("You quit");
}















