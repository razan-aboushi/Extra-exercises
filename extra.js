let num1 = -9;
let num2 = 3;
console.log(num1 * num2);


console.log("value is " + 50);

console.log(17 % 5);
console.log(5 % 17);
console.log(5 / 10);

if (4 == 4) {
  console.log("it's true");

}
else
  console.log("it's false");



if (4 != 5) {
  console.log("That's right");
}
else {
  console.log("sorry something is wrong");
}



let v = 7 >= 8;
console.log(v);



if (7 >= 8) {
  console.log("how is this !!");
}
else {
  console.log("yaaah here is the right place");
}


console.log(Math.ceil(.95));
console.log(Math.ceil(-5.5));
console.log(Math.ceil(1.5));



console.log(Math.floor(5.22));
console.log(Math.floor(6.85));
console.log(Math.floor(-5.95));





let num3 = prompt("Please enter number");
alert(num3);





//Read in two numbers and display them in ascending order
let numbb1 = prompt("Enter the first number");
let numbb2 = prompt("Enter the second number");

if (numbb1 > numbb2) {
  console.log(numbb2 + " " + numbb1);
}
else
  console.log(numbb1 + " " + numbb1);





  //Read in two numbers and display the larger
let nara1 = prompt("Please, enter a number");
let nara2 = prompt("Please , enter another number");
if (nara1 > nara2)
{
 alert(nara1 +" is the larger");
}
else
{
 alert(nara2 +" is the larger"); 
}




let rr = prompt("Input the First integer", "0");
let aa = prompt("Input the second integer", "0");

if (parseInt(rr) > parseInt(aa)) {
  console.log("The larger of " + rr + " and " + aa + " is " + rr + ".");
}
else if (parseInt(aa) > parseInt(rr)) {
  console.log("The larger of " + rr + " and " + aa + " is " + aa + ".");
}
else {
  console.log("The values " + rr + " and " + aa + " are equal.");
}








console.log(parseInt(numbb1) + parseInt(numbb2));






let R = prompt("Please enter the number here from 1 to 9");
let razan = parseInt(R);

switch (razan) {

  case 1:
    console.log("ONE");
    break;

  case 2:
    console.log("TWO");
    break;

  case 3:
    console.log("THREE");
    break;

  case 4:
    console.log("FOUR");
    break;

  case 5:
    console.log("FIVE");
    break;

  case 6:
    console.log("SIX");
    break;

  case 7:
    console.log("SEVEN");
    break;

  case 8:
    console.log("EIGHT");
    break;

  case 9:
    console.log("NINE");
    break;

  default:
    console.log("PLEASE TRY AGAIN");
    break;
}





let s = 0;
while (s <= 5) {
  alert(s);
  s++;
}



// Use a loop to display the numbers 0 through 5 in a single alert window
let arrt=[];

for(let m=0;m<=5;m++)
{
  arrt.push(m);
}
alert(arrt);


//Or we can solve it in this way :
let ssaa=""; 
for (let i=0; i<=5; i++)
{
  ssaa = ssaa + i + " "; 
}
alert(ssaa); 





//Use a loop to display the numbers in the range 0…20 that are multiples of 3
for(let i=0; i <=20;i++)
{
  if (i%3==0)
  {
    console.log(i);
  }
}




//Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time.
while (true) {
    pro = prompt("please enter a number from 1 to 100");
    if (pro < 1 || pro > 100) {
        alert("please re enter the value");
    }
    else {
        alert("Success");
        break;
    }

}
console.log(pro);



//Or we can solve it in this way :
let  roro1 = prompt("Please , enter a number in the range of 0 to 100");
while (roro1<0 || roro1>100)
{
 alert(roro1 + " this number is out of range , please try again");
 roro1= prompt("Please , enter a number in the range of 0 to 100");

} 




//Repeat previous exercise, but this time allow for the possibility that the user enters something that is not accnumber.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.

let num = prompt("Please , enter a number in the range of 0 to 100");

while (isNaN(num) || num<0 || num>100)
{
 alert(num +" is out of range or not a number. Please Try again.");

 num = prompt("Please enter a number in the range of 0 to 100");
} 



// Prompt for an integer, then display the sum of the integers from 0 through the number entered.For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.
let numint = prompt ("Please enter an integer number");
let sumN = 0;
for (let ro =0; ro<=numint; ro++)
 sumn = sumN + ro; 
alert("The sum of 0 through "+numint+" is "+sumN); 



//Prompt for an integer, then display the average of the integers from 0 through the number entered.For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.

let  maxnum = prompt ("Please enter an integer number");
let sum = 0;
for (let e=0; e<=maxnum; e++)
 sum = sum + e; 
alert("The average of 0 through "+ maxnum +" is "+(sum/(maxnum+1))); 