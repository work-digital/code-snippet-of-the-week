/* These examples show new methods from ECMAScript 2023 (ES14) that allow for fixed array changes. 
These methods are useful because they make code easier to read and maintain, 
and they keep the original arrays unchanged, which can be safer when working with React and States(re-renders). */

const letters = ["a", "b", "c", "d"];

const reversedLetters = letters.toReversed();

console.log("reversedLetters", reversedLetters, "letters", letters);

// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //

const numbers = [1, 2, 3, 4, 5];

const toSplicedNumbers = numbers.toSpliced(0, 4);

console.log(toSplicedNumbers, "toSplicedNumbers");

// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //

const counter = [1, 2, 33, 77];

const sortedNumbers = numbers.toSorted((a, b) => a - b);

console.log(sortedNumbers, "sortedNumbers");

// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //

const scores = [90, 85, 95, 70, 80, 65];

const lastIndexAbove80 = scores.findLastIndex((score) => score > 80); // 2
const lastIndexAbove100 = scores.findLastIndex((score) => score > 100); // -1

console.log(
  lastIndexAbove80,
  lastIndexAbove100,
  "lastIndexAbove80, lastIndexAbove100"
);

/* const oldSolutionLasstIndex = -1;

for (let i = scores.length - 1; i >= 0; i--) {
  if (scores[i] > 80) {
    oldSolutionLasstIndex = i;
    break;
  }
} */

// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //
// ________________________________________________ //

const persons = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 28 },
];

const result = persons.with(1, "test"); // changes the exact third element

console.log(result, "with");

// instead of this

/* const index = 3;
const newPerson = { name: "Tom", age: 34 };

const result = [
  ...persons.slice(0, index),
  newPerson,
  ...persons.slice(index + 1)
]; */
