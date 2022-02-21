//PROMPT
//https://www.codewars.com/kata/58c9322bedb4235468000019

/*
Description:

#Task:

Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".

#Examples:

input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

input(222) => returns true

input(5) => returns false

input(841) => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!
*/

//ATTEMPT


//NOTE: TRY RECURSION
function isVeryEvenNumber(n) {

    let digitTotal = 0
    let nString = n.toString()

    for (let i = 0; i < nString.length; i++) {
        digitTotal+= parseInt(nString[i])
    }

    if (digitTotal >= 10) {

    }

    console.log(digitTotal)
    console.log(digitTotal % 2)

    return digitTotal % 2 ? false : true
}
console.log(isVeryEvenNumber(0))