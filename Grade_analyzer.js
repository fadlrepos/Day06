const prompt = require("prompt-sync")();

function getGrades() {
    let grades = [];

    for (let i = 0; i < 5; i++) {
        let grade = Number(prompt(`Enter grade ${i + 1}: `));
        grades.push(grade);
    }

    return grades;
}

function calculateTotal(grades) {
    let total = 0;

    for (let i = 0; i < grades.length; i++) {
        total += grades[i];
    }

    return total;
}

function calculateAverage(grades) {
    let total = calculateTotal(grades);
    return total / grades.length;
}

function getResult(grade) {
    if (grade >= 10) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function countPassed(grades) {
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            count++;
        }
    }

    return count;
}

function countFailed(grades) {
    let count = 0;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] < 10) {
            count++;
        }
    }

    return count;
}

function findHighest(grades) {
    let highest = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > highest) {
            highest = grades[i];
        }
    }

    return highest;
}

function findLowest(grades) {
    let lowest = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }

    return lowest;
}


// Main program

let grades = getGrades();

console.log("\nGrades:");

for (let i = 0; i < grades.length; i++) {
    console.log(`Grade ${i + 1}: ${getResult(grades[i])}`);
}

let total = calculateTotal(grades);
let average = calculateAverage(grades);
let passed = countPassed(grades);
let failed = countFailed(grades);

console.log("\nTotal:", total);
console.log("Average:", average);
console.log("Passed:", passed);
console.log("Failed:", failed);
console.log("Highest:", findHighest(grades));
console.log("Lowest:", findLowest(grades));

if (average >= 10) {
    console.log("Class passed");
} else {
    console.log("Class failed");
}
