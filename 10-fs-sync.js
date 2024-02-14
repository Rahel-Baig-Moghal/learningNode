// Importing necessary modules from Node.js: readFileSync and writeFileSync from the 'fs' module.
const { readFileSync, writeFileSync } = require("fs");

// Read the content of the first and second text files synchronously, using UTF-8 encoding.
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// Log the contents of the first and second text files.
console.log(first, second);

// Write a new line followed by the result of concatenating the contents of the first and second files
// into a new file called "result-sync.txt", with the 'a' flag to append to the file if it already exists.
writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result : ${first}, ${second}`,
  { flag: "a" }
);