// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
    // I think an error will occur but I do not know what type will show up. .push should place "indigo" after "daffodil" but, the current console.log will not allow that to happen because .push("indigo") has not been established yet. 

// b) Verify and explain: 
    // 5 was logged to the terminal. The console.log provided above takes an argument of what is to be added at index 5. If I logged console.log(colors) I would see see indigo added to the end of the array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
//console.log(cohort.length)

// a) Your answer: 10 will be logged to the terminal

// b) Verify and explain: Stings have the built in property .length which  determines in this case how many characters exist inside a given string. At first glance I believed there to be only 9 characters but, I remembered that .length also recognizes spaces as characters.


// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer: 
    // o
// b) Verify and explain:

    // Bracket notations allows javascript to locate the character of a string by its index. Bracket notations are zero-indexing which means numbering starts at 0. As a result, when the code is logged it returns o.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
    // My initial thought process: I Have two const variables. There is a console.log that contains the variable languages in parenthesis but why is the variable index in bracket notation? Maybe undefined or null will show up if i log this.

    // I realized that I was thinking of index as a string and not a variable with the value of 1. 

// b) Verify and explain: 
    // The correct answer is Ruby. Unlike the previous question, when dealing with arrays, bracket notation is used to locate a specific element by its index in the array. In this case, Ruby is at index 1.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: I am on the fence with this one but I think an error will appear in my terminal.

// b) Verify and explain: A TypeError is what i got back in the terminal. I think this happened because .toUpperCase does not recognize the elements in the array by their dataTypes. As a result, "saturday", and "sunday" cannot be uppercased unless recognized as strings.



// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: String will be logged to the terminal

   // I know that typeof is used to determine what a specific datatype is. The use of .lenght should access each element in the array. 
   // If what I am thinking is correct then I am expecting javascript to tell me what datatype each of the elements are in the array.

// b) Verify and explain: number was the correct answer.
    // I think the reason why number was the correct answer is because even though an array can contain any data type, the data types are elements placed at different indexes. I forgot that the use of .length was soley to access each element at their given index and typeof was determing what data type the index 0, 1, and 2 were.
