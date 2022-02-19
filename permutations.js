//PROMPT
//https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

/*
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.
*/

//PSEUDOCODE
// ok so I basically need to cyle through each index in the string
// I need to place index 0 at 0, and then have all other possibilities for index 1
// Im thinking about loops
// if the arry of permutations has a duplicate, I dont push it.
//


//ATTEMPT

//HEAPS ALGORITHM  https://www.youtube.com/watch?v=xghJNlMibX4

// function permutations(string) {
//     let container = []
//     let splitString = string.split('')
//     for (let i = 0; i < string.length; i++) {
//         let newPermutation = []
//         for (let j = 0; j < string.length; j++) { 
//             newPermutation.push(splitString[j])
//         }
//         container.push(newPermutation.join(''))
//     }
//     return container
// }

// console.log(permutations('abcd'))


function permutations(string) {
    let container = []
    let splitString = string.split('')
    for (let i = splitString.length - 1; i >= 0; i--) {
        let newPermutation = []
        newPermutation.push(splitString[i])
        container.push(newPermutation)
    }



    return container
}

console.log(permutations('abcd'))