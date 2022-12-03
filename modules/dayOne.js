//Import All Elf Inventory Item Calorie List
const { elfInventoryCalories } = require('../data/elfInventoryCalories')

// Split list into an array value per elf
const elfCalorieItemListByElf = elfInventoryCalories.split('\n\n');

// Split and convert each Elf's inventory calorie count list into a number
const allElfInventoryItemCalorieObj = {};
for(const [index, itemList] of elfCalorieItemListByElf.entries()) {
    const itemListOfElfArr = itemList.split("\n");
    allElfInventoryItemCalorieObj[index + 1] = [];
    for(const itemCalorieCount of itemListOfElfArr){
        allElfInventoryItemCalorieObj[index + 1].push(parseInt(itemCalorieCount));
    }
}

// Function to get Total Calorie Count of Elf's Inventory
function getTotalCalorieCount(elfInventoryItemCalorieCountsArr){
    let totalCalorieCount = 0;
    for(const calorieCount of elfInventoryItemCalorieCountsArr){
        totalCalorieCount += calorieCount;
    }
    return totalCalorieCount;
}

// Function to get Elf with the highest total inventory calorie count
function findMostInventoryCalorieElf(allElfInventoryObj, numberOfRanks = 1){
    let fattestInventory = [];
    //add an elf arr for each elf to return
    for(let i = 0; i < numberOfRanks; i++){
        fattestInventory.push(['Elf 0', 0]);
    }
    for(const elf in allElfInventoryObj){
        const elfTotalInventoryCalorie = getTotalCalorieCount(allElfInventoryObj[elf]);
        for(let i = 0; i < numberOfRanks; i++){    
            if( elfTotalInventoryCalorie > (fattestInventory[i][1]) ){
                const newElf = [`Elf ${elf}`, elfTotalInventoryCalorie]
                fattestInventory.splice(i,0, newElf);
                fattestInventory.pop();
                break;
            }
        }
    }
    return fattestInventory;
}

// Day 1 - Part 1: console log the name and total inventory calorie count of the elf with the highest inventory calorie count
const topCalorie = findMostInventoryCalorieElf(allElfInventoryItemCalorieObj);

// Day 1 - Part 2: the top three Elves carrying the most Calories
const topThree = findMostInventoryCalorieElf(allElfInventoryItemCalorieObj,3);

module.exports = { topCalorie, topThree };