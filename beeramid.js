//PROMPT
//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

/*
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/

//ATTEMPT

// let beeramid = function(bonus, price) {
//     let spent = 0
//     let levels = 1
//     let totalCans = 0
//     while (spent <= bonus) {
//             console.log(`totalCans initial: ${totalCans}`)
//         totalCans = totalCans + levels * levels
//             console.log(`totalCans updated: ${totalCans}`)
//             console.log(`spent initial: ${spent}`)
//         spent = totalCans * price
//             console.log(`spent updated: ${spent}`)
//             console.log(`levels: ${levels}`)
//         levels++
//         console.log(`levels updated: ${levels}`)
//         console.log('-------------------------------------------------')

//     }
//     if (levels < 2) {
//         return 0
//     } else {
//         return levels - 2
//     }
// }

let beeramid = function(bonus, price) {
    let spent = 0
    let levels = 1
    let totalCans = 0
    while (spent <= bonus) {
        totalCans = totalCans + levels * levels
        spent = totalCans * price
        levels++
    }
    if (levels < 2) {
        return 0
    } else {
        return levels - 2
    }
}

console.log(beeramid(-1, 4))


//BEST PRACTICES

var beeramid = function(bonus, price) {
    var beers = Math.floor(bonus / price), levels = 0;
    while(beers >= ++levels * levels) {
      beers -= levels * levels;
    }
    return levels - 1;
}

//------------------------------------------------------------------------------------------------

const beeramid = (bonus, price, lvl = 1) =>
  bonus - lvl ** 2 * price < 0 ? --lvl : beeramid(bonus - lvl ** 2 * price, price, ++lvl);