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

function isVeryEvenNumber(n) {

    digitAdder = origanl = n => {

        let digitTotal = 0

        for (let i = 0; i < origanl.length; i++) {
            console.log(origanl)
            console.log(origanl[i])
            digitTotal+= origanl[i]
        }

        console.log(digitTotal)
        return digitTotal
    }

    console.log(digitAdder())

    return digitAdder()/2

}

console.log(isVeryEvenNumber(222))