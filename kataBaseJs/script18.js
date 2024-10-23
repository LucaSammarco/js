// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

//! After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


let haystack = ["apple", 42, "banana", true, "car", null, "orange", 7, "needle", "rock", false, "cat", 99, undefined, "pen", 13, "tree", "dog", "sun", "moon"];

function findNeedle(haystack) {
    // your code here

    let needle = haystack.indexOf("needle")

    return `found the needle at position ${needle}`
  }