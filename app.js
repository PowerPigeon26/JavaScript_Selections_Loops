console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

var fizzBuzzStr;
for (let i = 1; i <= 100; i++)
{
    fizzBuzzStr = "";
    if (i % 3 == 0)
    {
        fizzBuzzStr += "FIZZ";
    }
    if (i % 5 == 0)
    {
        fizzBuzzStr += "BUZZ";
    }
    if (fizzBuzzStr == "")
    {
        console.log("Nothing for " + i);
    }
    else
    {
        console.log(fizzBuzzStr + " for " + i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
console.log("While:\n==========\n");
var i = 1;
while (i <= 100)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
    i++;
}

var fizzBuzzStr;
var i = 1;
while (i <= 100)
{
    fizzBuzzStr = "";
    if (i % 3 == 0)
    {
        fizzBuzzStr += "FIZZ";
    }
    if (i % 5 == 0)
    {
        fizzBuzzStr += "BUZZ";
    }
    if (fizzBuzzStr == "")
    {
        console.log("Nothing for " + i);
    }
    else
    {
        console.log(fizzBuzzStr + " for " + i);
    }
    i++;
}

console.log("Do while:\n==========\n");

var i = 1;
do
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
    i++;
} while (i <= 100);

var fizzBuzzStr;
var i = 1;
do
{
    fizzBuzzStr = "";
    if (i % 3 == 0)
    {
        fizzBuzzStr += "FIZZ";
    }
    if (i % 5 == 0)
    {
        fizzBuzzStr += "BUZZ";
    }
    if (fizzBuzzStr == "")
    {
        console.log("Nothing for " + i);
    }
    else
    {
        console.log(fizzBuzzStr + " for " + i);
    }
    i++;
} while (i <= 100);

console.log("EXERCISE 4:\n=========================================\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
var n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 0; i <= n; i++)
{
    if (i == value)
    {
        console.log("Found value!");
        break;
    }
    if (i == n)
    {
        console.log("Did not find value");
        break;
    }
}
console.log("value = " + value);
console.log("n = " + n);

console.log("EXERCISE 5:\n=========================================\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
var n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log("start = " + start);
console.log("n = " + n);
console.log("fizzDivisor = " + fizzDivisor);
console.log("buzzDivisor = " + buzzDivisor);

for (let i = start; i <= n; i++)
{
    fizzBuzzStr = "";
    if (i % fizzDivisor == 0)
    {
        fizzBuzzStr += "FIZZ";
    }
    if (i % buzzDivisor == 0)
    {
        fizzBuzzStr += "BUZZ";
    }
    if (fizzBuzzStr == "")
    {
        console.log("Nothing for " + i);
    }
    else
    {
        console.log(fizzBuzzStr + " for " + i);
    }
}