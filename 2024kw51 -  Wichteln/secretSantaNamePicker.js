const participants = ["Mike", "Fabio", "Freddy", "Max", "Jonathan", "Marcus"];

const christmasTree = (height) => {
  for (let i = 0; i < height; i++) {
    const spaces = " ".repeat(height - i - 1);
    const stars = "*".repeat(2 * i + 1);
    console.log(spaces + stars + spaces);
  }
};

const secretSanta = (names) => {
  const shuffled = [...names].sort(() => Math.random() - 0.5);
  return names.reduce((pairs, name, i) => {
    pairs[name] =
      shuffled[i] === name ? shuffled[(i + 1) % names.length] : shuffled[i];
    return pairs;
  }, {});
};

christmasTree(5);

console.log(secretSanta(participants));
