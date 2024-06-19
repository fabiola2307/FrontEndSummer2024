// ARRAY EXERCISE

// 1
// let people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// 2
// people.forEach(function (array) {
//     console.log(array);
//  });

// 3
// people.shift();
// console.log(people);

// 4
// people.pop();
// console.log(people);

// 5
// people.unshift("matt");
// console.log(people);

// 6
// people.push("gerry");
// console.log(people);

// 7
// for (let i = 1; i < people.length; i++) {
//     if (people[i] === "Mary") {
//         console.log("Mary");
//         break;  
//     }
//     console.log(people[i]);
// }

// 8
// let people2 = people.slice(1, 4);
// console.log(people2);

// 9
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// 10
// let withbob = ["bob"]
// let combineArray = people.concat(withbob);
// console.log(combineArray);

// OBJECT EXERCISES
console.log("OBJECT EXERCISE");

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


// NO 1 add the language "Go" to the end of the languages array

programming.languages.push("Go");

// NO 2 using bracket notation & change the difficulty to the value of 7

programming["difficulty"] = 7;

// NO 3 using delete keyword & remove the "jokes" key

delete programming.jokes;

// NO 4 using dot notation & add a new key "isFun" & value of "true"

programming.isFun=true

// NO 5 using map() & update each element to be "0 - JavaScript, 1 - Python, ...." where 0 represents the index of the array & console.log the output

programming.languages = programming.languages.map((languages, index) => ${index} - ${languages});
console.log(programming);