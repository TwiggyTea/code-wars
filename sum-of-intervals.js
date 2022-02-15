//PROMPT
//https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript

/*Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
*/


//PSEUDOCODE
// ok so off rip I am thinking that we are going to start a loop through our initial array of intervals
// in that loop, we loop through each interval and count how steps it takes to get from our first number to our second.
// I think we have a second array storing the numbers we have interated through so we dont double count them.

//ATTEMPT 1 (works but inefficent)

/*function sumIntervals(intervals) {

   let counter = 0
   let usedNumbers = []
   for (let i = 0; i < intervals.length; i++) {
      for (let j = intervals[i][0]; j < intervals[i][1]; j++) {

         if (!usedNumbers.includes(j)){
            usedNumbers.push(j)
            counter++
         }
         //console.log(`Index 0(${intervals[i][0]}) of array ${i} + j(${j}) : ${intervals[i][0]+j}`)
         
      }
   }
   //console.log(usedNumbers)
   //console.log(counter)
   return counter
}

sumIntervals([[1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]])*/

   //ATEMPT 2

   function sumIntervals(intervals) {

      let counter = 0
      let usedNumbers = []
      for (let i = 0; i < intervals.length; i++) {
         for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
   
            if (!usedNumbers.includes(j)){
               usedNumbers.push(j)
               counter++
            }
            //console.log(`Index 0(${intervals[i][0]}) of array ${i} + j(${j}) : ${intervals[i][0]+j}`)
            
         }
      }
      //console.log(usedNumbers)
      //console.log(counter)
      return counter
   }
   
   sumIntervals([[1,5],
      [10, 20],
      [1, 6],
      [16, 19],
      [5, 11]])