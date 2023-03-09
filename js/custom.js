//Find Leap Year

let year = parseInt(prompt("Enter a year: "));

function checkLeapYear(year){
 if(year%4 == 0){
  return (true);
 }else{
  return(false);
 }
}

if(checkLeapYear(year) == true){
 document.write(`${year} is a Leap year`);
}else{
 document.write(`${year} is not a Leap year`);
}


//Find Max number

/*let a1 = parseInt(prompt("Enter the first number:"));
let b1 = parseInt(prompt("Enter the second number:"));
let c1 = parseInt(prompt("Enter the third number:"));

function check(p1,q1,r1){
 if(p1>=q1 && p1>=r1){
    return(p1);
 }else if(q1>=p1 && q1>=r1){
    return(q1);
 }else{
    return(r1);
 }
}

let x1 = check(a1,b1,c1);

document.write(`${a1},${b1},${c1}: Maximum Number: ${x1}`);*/


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












