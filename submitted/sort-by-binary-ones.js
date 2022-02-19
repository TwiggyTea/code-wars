//PROMPT
//https://www.codewars.com/kata/59eb28fb0a2bffafbb0000d6/train/javascript

/*
In this example you need to implement a function that sort a list of integers based on it's binary representation.

The rules are simple:

sort the list based on the amount of 1's in the binary representation of each number.
if two numbers have the same amount of 1's, the shorter string goes first. (ex: "11" goes before "101" when sorting 3 and 5 respectively)
if the strings have the same length, lower decimal number goes first. (ex: 21 = "10101" and 25 = "11001", then 21 goes first as is lower)
Examples:

Input: [1,15,5,7,3]

( in binary strings is: ["1", "1111", "101", "111", "11"])
Output: [15, 7, 3, 5, 1]

(and after sortByBinaryOnes is: ["1111", "111", "11", "101", "1"])
*/


//ATTEMPT
function sortByBinaryOnes(list){
    let binaryContainer = []
    let sortedContainer =[]

    for (let i = 0; i < list.length; i++) {
        binaryContainer.push(list[i].toString(2))
    }

    let compareFunction = (a, b) => {
        let aOneCount = 0
        let bOneCount = 0

        for (let i = 0; i < a.length; i++) {
            if(a[[i]] == 1){
                aOneCount++
            }
        }

        for (let i = 0; i < b.length; i++) {
            if(b[[i]] == 1){
                bOneCount++
            }
        }

        if (aOneCount == bOneCount){
            return a - b
        } else {
            return bOneCount - aOneCount
        }
    }

    binaryContainer.sort(compareFunction)
    binaryContainer.forEach(num => sortedContainer.push(Number.parseInt(num, 2)))
    return(sortedContainer)
}

console.log(sortByBinaryOnes([1,15,5,7,3]))

// NOTES
//this is super scuffed, really quite a roundabout way of doing this, but it works.

//BEST PRACTICES

const sortByBinaryOnes = list =>
    list.sort((a, b) => b.toString(2).replace(/0/g, ``).length - a.toString(2).replace(/0/g, ``).length || a - b);

//---------------------------------------------------------------------------------------------------------

const sortChoose = ( $ ) => $.toString(2).replace(/0/g, '').length
const sortFunction = ( a, b ) => (sortChoose(b) - sortChoose(a)) || (a-b)
const sortByBinaryOnes = ( arr ) => arr.sort( sortFunction )