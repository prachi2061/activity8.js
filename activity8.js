
function fizzBuzz() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    console.log("FizzBuzz Result:", result);
}

function processScores() {
    const scores = [85, 93, 78, 92, 88, 76, 95, 89];
    
    const passingScores = scores.filter(score => score >= 80);

    
    const boostedScores = passingScores.map(score => score + 5);

    const totalScore = boostedScores.reduce((total, score) => total + score, 0);

    console.log("Passing Scores:", passingScores);
    console.log("Boosted Scores:", boostedScores);
    console.log("Total Class Score:", totalScore);
}

// Task 3: Maximum and Minimum in an Array
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    
    console.log("Maximum:", max, "Minimum:", min);
}

// Bonus Task: Sorting and Summing
function sortAndSum(arr) {
    const sortedNumbers = [...arr].sort((a, b) => a - b);
    const totalSum = sortedNumbers.reduce((sum, num) => sum + num, 0);

    console.log("Sorted Array:", sortedNumbers);
    console.log("Total Sum:", totalSum);
}

//Running each task
fizzBuzz();
processScores();
findMaxMin([3, 5, 1, 9, 4]);
sortAndSum([12, 5, 7, 20, 3, 8]);