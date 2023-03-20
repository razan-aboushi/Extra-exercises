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




let numbb1 = prompt("Enter the first number");
let numbb2 = prompt("Enter the second number");

if (numbb1 > numbb2) {
  console.log(numbb1 + " " + numbb2);
}
else
  console.log(numbb2 + " " + numbb1);




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



// another way to solving 
let nar1 = 1*prompt("Please ,enter a number");
let nar2 = 1*prompt("Please , enter another number");
if (nar1 > n2)
{
 alert(nar1 +" is the larger");
}
else
{
 alert(nar2 +" is the larger"); 
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




let arrt=[];

for(let m=0;m<=5;m++)
{
  arrt.push(m);
}
alert(arrt);




for(let i=0; i <=20;i++)
{
  if (i%3==0)
  {
    console.log(i);
  }
}





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




let num = prompt("Please , enter a number in the range of 0 to 100");

while (isNaN(num) || num<0 || num>100)
{
 alert(num +" is out of range or not a number. Please Try again.");

 num = prompt("Please enter a number in the range of 0 to 100");
} 




let numint = prompt ("Please enter an integer number");
let sumn = 0;
for (let ro =0; ro<=numint; ro++)
 sumn = sumn + ro; 
alert("The sum of 0 through "+numint+" is "+sumn); 




let  maxnum = prompt ("Please enter an integer number");
let sum = 0;
for (let e=0; e<=maxnum; e++)
 sum = sum + e; 
alert("The average of 0 through "+ maxnum +" is "+(sum/(maxnum+1))); 