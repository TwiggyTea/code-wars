//PROMPT
//https://www.codewars.com/kata/5bc052f93f43de7054000188/train/javascript

/*
You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character. The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b, then string b matches the pattern.

If the string matches, return true else false.

For example:
solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string. 
solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string. 
solve("codewars","codewars") = true, because the strings already match.
solve("a","b") = false
solve("*", "codewars") = true
More examples in test cases.

Good luck!
*/

//PSEUDOCODE
//ok so I am thinking of just doing a loop through the indecies normally
// but then when I hit the asterix I will flip a boolean that will let the indecies not match
// once the indecies match, the switch goes back

//ATTEMPT

function solve(a, b){

    if (a.length > b.length + 1){
        return false
    }

    let longer;

    if (b.length > a.length) {
        longer = b
    } else {
        longer = a
    }

    console.log(a)
    console.log(b)

    let starSwitch = false
    let bIndex = ''

    for (let i = 0; i < longer.length; i++) {
        if (a[i] === '*'){
            starSwitch = true
            bIndex = i
        }

        if (starSwitch === false) {
                if (a[i] !== b[i]){
                    return false
                }
            } else if (starSwitch === true) {
                if (a[i] === b[bIndex]){
                    starSwitch = false
            }
        }

        console.log(`i: ${i}, switch: ${starSwitch}, bIndex: ${bIndex}, a[i]: ${a[i]}, b[i]: ${b[i]}`)
    }

    return true
}

console.log(solve("aaa","aa"))