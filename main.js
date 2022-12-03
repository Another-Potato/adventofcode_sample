const { topCalorie,topThree } = require('./modules/dayOne');
const { errorPrioritySum, badgePrioritySum } = require('./modules/dayThree');



// Day 1 - Part 1: console log the name and total inventory calorie count of the elf with the highest inventory calorie count
console.log(`Day 1 - Part 1 Answer: ${topCalorie[0][1]}`)

// Day 1 - Part 2: the top three Elves carrying the most Calories
console.log(`Day 1 - Part 2 Answer: ${topThree[0][1] + topThree[1][1] + topThree[2][1]}`);

// Day 3 - Part 1:
// Find the sum of the priorities of items type that appears in both compartments of each rucksack.
console.log(`Day 3 - Part 1 Answer: ${errorPrioritySum}`);

// Day 3 - Part 2: 
// Find the item type that corresponds to the badges of each three-Elf group.
// What is the sum of the priorities of those item types?
console.log(`Day 3 - Part 2 Answer: ${badgePrioritySum}`);