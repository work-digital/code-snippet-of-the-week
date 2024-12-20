const fs = require("fs");

/*
Input Validation:
  Ensure there are at least 3 participants.
  Names should be unique and non-empty.

Output Formatting:
  Print the results in a user-friendly format.

  Restrict Pairing Rules:
  Add the ability to exclude specific pairings (e.g., Alice cannot give a gift to Bob).

  Multiple Rounds:
  Support generating pairings for multiple rounds without repeating pairs.

  Save and Load:
  Allow saving the results to a file and loading previous assignments to avoid repeats in future rounds.
*/

/**
 * Generates Secret Santa pairings
 * @param {string[]} names - List of participant names
 * @param {Object} restrictions - Optional restrictions { [giver]: [receivers to exclude] }
 * @returns {Object} - Pairings as { giver: receiver }
 */
function secretSanta(names, restrictions = {}) {
  if (names.length < 3)
    throw new Error("At least 3 participants are required.");
  if (new Set(names).size !== names.length)
    throw new Error("Names must be unique.");

  let shuffled;
  let valid = false;

  // Try until valid pairings are found
  while (!valid) {
    shuffled = [...names].sort(() => Math.random() - 0.5);
    valid = names.every(
      (name, i) =>
        name !== shuffled[i] && !restrictions[name]?.includes(shuffled[i])
    );
  }

  return names.reduce((pairs, name, i) => {
    pairs[name] = shuffled[i];
    return pairs;
  }, {});
}

/**
 * Save pairings to a file
 * @param {Object} pairings - Pairings object { giver: receiver }
 * @param {string} fileName - File name to save to
 */
function savePairings(pairings, fileName) {
  fs.writeFileSync(fileName, JSON.stringify(pairings, null, 2));
  console.log(`Pairings saved to ${fileName}`);
}

/**
 * Load pairings from a file
 * @param {string} fileName - File name to load from
 * @returns {Object} - Pairings object { giver: receiver }
 */
function loadPairings(fileName) {
  if (!fs.existsSync(fileName)) throw new Error("File does not exist.");
  return JSON.parse(fs.readFileSync(fileName, "utf8"));
}

////////////////////////////////////// Example Usage
const participants = [
  "Mike",
  "Fabio",
  "Freddy",
  "Max",
  "Jonathan",
  "Marcus",
  "Peter",
];
const restrictions = { Mike: ["Fabio"], Max: ["Freddy"] };

try {
  const pairings = secretSanta(participants, restrictions);
  console.log("Secret Santa Pairings:");
  for (const [giver, receiver] of Object.entries(pairings)) {
    console.log(`${giver} → ${receiver}`);
  }

  // Save the pairings to a file
  savePairings(pairings, "pairings.json");

  // Load previous pairings
  const previousPairings = loadPairings("pairings.json");
  console.log("Loaded Previous Pairings:", previousPairings);
} catch (error) {
  console.error("Error:", error.message);
}
