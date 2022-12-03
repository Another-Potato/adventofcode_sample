const { elfRucksacks } = require('../data/elfRucksacks');

// Split text into each line for each rucksack
const rucksacks = elfRucksacks.split('\n');

function findPackingError(rucksack) {
    const firstCompartment = rucksack.slice(0, (rucksack.length / 2));
    const secondCompartment = rucksack.slice((rucksack.length / 2), rucksack.length);
    for(const item of firstCompartment){
        if(secondCompartment.includes(item)){
            return item;
        }
    }
    return '';
}

function checkRucksacks (rucksackArr) {
    const errors = [];
    for(const rucksack of rucksackArr){
        errors.push(findPackingError(rucksack));
    }
    return errors;
}

function getPriority(checkChar){
    const priorities = [
        null,
        'a','b','c','d','e','f','g','h','i',
        'j','k','l','m',
        'n','o','p','q','r','s','t','u','v',
        'w','x','y','z'
    ];

    const charPriority = priorities.indexOf(checkChar.toLowerCase());
    if(checkChar !== checkChar.toLowerCase()){
        return (charPriority + 26);
    }
    return charPriority;
}

function getBadge(rucksackGroup){
    for(const item of rucksackGroup[0]){
        if(rucksackGroup[1].includes(item) && rucksackGroup[2].includes(item)){
            return item;
        }
    }
    return null;
}

function getAllGroupBadges(rucksackArr){
    const totalGroups = rucksackArr.length - (rucksackArr.length % 3);
    const groupBadges = [];
    for (let g = 0; g < rucksackArr.length; g += 3){
        const groupOfThree = [
            rucksackArr[g],
            rucksackArr[g + 1],
            rucksackArr[g + 2]
        ];
        groupBadges.push(getBadge(groupOfThree));
    }
    return groupBadges;
}



// Day 3 - Part 1: Find the sum of the priorities of items type that appears in both compartments of each rucksack.
const allRucksackErrors = checkRucksacks(rucksacks);
let errorPrioritySum = 0;
for(const error of allRucksackErrors){
    errorPrioritySum += getPriority(error);
};

const allGroupBadges = getAllGroupBadges(rucksacks);
let badgePrioritySum = 0;
for(const badge of allGroupBadges){
    badgePrioritySum += getPriority(badge);
};

module.exports = { errorPrioritySum, badgePrioritySum };