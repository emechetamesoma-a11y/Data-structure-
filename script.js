// ===============================
// Problem 1: Sum of Distinct Elements from Two Sets
// ===============================

// Step 1: Initialize the two sets (arrays)
let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];

// Step 2: Initialize the sum variable
let sum = 0;

// ===============================
// Step 3: Add elements from set1 that are NOT in set2
// ===============================
for (let i = 0; i < set1.length; i++) {
    let found = false; // flag to check if element exists in set2

    // Nested loop to compare with set2
    for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
            found = true; // element found in both sets
            break;
        }
    }

    // If not found, add to sum
    if (!found) {
        sum += set1[i];
    }
}

// ===============================
// Step 4: Add elements from set2 that are NOT in set1
// ===============================
for (let i = 0; i < set2.length; i++) {
    let found = false;

    // Nested loop to compare with set1
    for (let j = 0; j < set1.length; j++) {
        if (set2[i] === set1[j]) {
            found = true;
            break;
        }
    }

    if (!found) {
        sum += set2[i];
    }
}

// ===============================
// Step 5: Print the final result
// ===============================
console.log("Sum of distinct elements:", sum);
