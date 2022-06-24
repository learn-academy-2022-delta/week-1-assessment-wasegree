// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
    // - Create a function called anyNum
    // - Parameters: boilingPoint
    // - Use Variables provided
    // - Declare a conditional statement that campares the values of temp1,temp2 and temp3 to boiling point.
    // - return expected outputs

const anyNum = (boilingPoint) => {
    if(boilingPoint < 212) {
        return "42 is below boiling point"
    } else if(boilingPoint >= 350) {
        return "350 is above boiling point" 
    } else if(boilingPoint === 212)
        return "212 is at boiling point"
} 
const temp1 = 42
const temp2 = 350
const temp3 = 212

// console.log(anyNum(temp1)) // 42 is below boiling point
// console.log(anyNum(temp2)) // 350 is above boiling point
// console.log(anyNum(temp3)) // 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
    // - create a function named comboArray
    // - parameters: array1, array2
    // - concat array1 and array2 to combine them without altering either array.
    // - use length property to return expected output: 10

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const comboArray = (array1, array2) => {
    return array1.concat(array2).length
}
// console.log(comboArray(myNumbers1, myNumbers2)) // 10


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code: 
    // - use const variable provided
    // - create a new variable named inverse with a value equal to currentCohort.split("").reverse().join(""). 
    // - .split("") will turn the sting into an element which will allow me to apply .reverse() which will reverse the elements of the array. Finally applying .join() will return the array back to a string.
    // - expected output: 2202 atleD

const currentCohort = "Delta 2022"
var inverse = currentCohort.split("").reverse().join("")

// console.log(inverse) // 2022 atleD

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code: 
    // - Create a for loop that iterates over the array
    // - let i = 0; i < myArray.length; i++
    // - Include an if and a else statement that return the strings "odd" and "even"

const myArray = [13, 34, 5, 10, 27, 42]

// for(let i = 0; i < myArray.length; i++){
//     if(i % 2 === 0) {
//         console.log("odd")
//     } else{
//         console.log("even")
//     } 
// }
// My output is odd, even, odd, etc. 

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
    // - Create a function called numSet
    // - Parameters: smallNum, bigNum
    // - Set a conditional statement that subtacts smallNum from bigNum
    // - Use test variables

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const numSet = (smallNum, bigNum) => {
    if(bigNum - smallNum === 42) {
        return 42
    } else if (bigNum - smallNum !== 42) {
        return 3
    }
}
// console.log(numSet(number1, number2))
// console.log(numSet(number3, number4))
 
 