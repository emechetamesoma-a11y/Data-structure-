// --- Procedure / Function to find dot product ---
function dot_product(v1, v2) {
    let ps = 0; // ps means product sum
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i]; // multiply and add
    }
    return ps;
}

// --- Main Algorithm ---
function checkOrthogonalPairs(vectors1, vectors2) {
    for (let i = 0; i < vectors1.length; i++) {
        let v1 = vectors1[i];
        let v2 = vectors2[i];
        let ps = dot_product(v1, v2);

        console.log(`Pair ${i + 1}: dot product = ${ps}`);
        if (ps === 0) {
            console.log("→ These two vectors are ORTHOGONAL ✅");
        } else {
            console.log("→ These two vectors are NOT orthogonal ❌");
        }
        console.log("----------------------------");
    }
}

// --- Example Input (3 pairs of vectors) ---
let vectors1 = [
    [1, 2, 3],
    [2, -1, 0],
    [0, 5, 2]
];

let vectors2 = [
    [4, -2, 1],
    [1, 2, 0],
    [3, 0, -7]
];

// --- Run program ---
checkOrthogonalPairs(vectors1, vectors2);