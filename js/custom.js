//Find Leap Year

//Findout Leap Year....


/*let year = parseInt(prompt("Enter a year: "));

function checkLeapYear(year){
 if(year%4 == 0 && year%100 != 0){
  return (true);
 }else if (year%400 == 0){
  return(true);
 }else{
   return(false);
 }
}

if(checkLeapYear(year) == true){
 document.write(`${year} is a Leap year`);
}else{
 document.write(`${year} is not a Leap year`);
}*/


//Find Max number

/*let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));
let c = parseInt(prompt("Enter the third number:"));

function check(p,q,r){
 if(p>=q && p>=r){
    return(p);
 }else if(q>=p && q>=r){
    return(q);
 }else{
    return(r);
 }
}

let x = check(a,b,c);

document.write(`${a},${b},${c}: Maximum Number: ${x}`);*/



//Find Min number
/*let a2 = parseInt(prompt("Enter the first number: "));
let b2 = parseInt(prompt("Enter the second number: "));
let c2 = parseInt(prompt("Enter the third number: "));

function check(p2,q2,r2){
 if(p2<=q2 && p2<=r2){
    return(p2);
 }else if(q2<=p2 && q2<=r2){
    return(q2);
 }else{
    return(r2);
 }
}

let x2 = check(a2,b2,c2);

document.write(`${a2},${b2},${c2}: Minimum Number: ${x2}`);*/

//Find Even or Odd

/*let getNumber = parseInt(prompt("Enter Any Number: "));

let reminder = getNumber % 2;

if(reminder == 0){
  document.write(`${reminder} is a even number`);
}else{
  document.write(`${reminder} is a odd number`);
}*/

//............................................................

// one liner condition for leap year
/*let year = parseInt(prompt("Enter a year: "));

function getLeapYear(year){
if((year%4 == 0 && year%100 != 0) || year%400 == 0){
   return true;
}else{
   return false;
}
}

if(getLeapYear(year) == true){
 document.write(`${year} is a Leap Year`);
}else{
   document.write(`${year} is not a leap year`);
}*/


// take multiple input and find max
/*let value = Number(prompt("How many numbers do you want to compare to get the Maximum Number? "));

let arr = [];

//input value
for(let i = 0; i < value; i++){
   arr[i] = prompt("Enter a Number:");
}
//define value
for(let i = 0; i < value; i++){
   document.write(`${arr[i]},`);
}

arr.sort();
arr.reverse();
let getMaximumNumber = arr[0];

document.write(` Maximum Number: ${getMaximumNumber}`);*/

// take multiple input and find min
/*let value = Number(prompt("How many numbers do you want to compare to get the Minimum Number? "));

let arr = [];

//input value
for(let i = 0; i < value; i++){
   arr[i] = prompt("Enter a Number:");
}
//define value
for(let i = 0; i < value; i++){
   document.write(`${arr[i]},`);
}

arr.sort();
let getMinimumNumber = arr[0];

document.write(` Minimum Number: ${getMinimumNumber}`);*/

//...............................................................

// check difference between parseInt, parseFloat and Number.

/*let a = Number(prompt("Enter a Number:"));
document.write(`${a} is a number`);*/


/*let b = parseInt(prompt("Enter a Number:"));
document.write(`${b} is a parseInt`);*/

/*let c = parseFloat(prompt("Enter a Number:"));
document.write(`${c} is a parseFloat`);*/

//................................................................

//Find Maximum number

let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));
let c = parseInt(prompt("Enter the third number:"));

function getMaximumNumber(a,b,c){
 if(a>=b && a>=c){
    return a;
 }else if(b>=a && b>=c){
    return b;
 }else{
    return c;
 }
}

let x1 = getMaximumNumber(a,b,c);

document.write(`${a},${b},${c}: Maximum Number: ${x1}`);



//Find Minimum number

/*let p2 = parseInt(prompt("Enter the first number: "));
let q2 = parseInt(prompt("Enter the second number: "));
let r2 = parseInt(prompt("Enter the third number: "));

function checkMinimumNumber(p2,q2,r2){
 if(p2<=q2 && p2<=r2){
    return p2;
 }else if(q2<=p2 && q2<=r2){
    return q2;
 }else{
    return r2;
 }
}

let x2 = checkMinimumNumber(p2,q2,r2);

document.write(`${p2},${q2},${r2}: Minimum Number: ${x2}`);

*/














