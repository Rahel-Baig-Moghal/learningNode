// Import the necessary functions from the 'fs' module
const { readFile, writeFile } = require("fs");

// Read the content of the first file
readFile("./content/first.txt", "utf-8", (err, result) => {
  // Handle any errors that occur during the read operation
  if (err) {
    console.log(err);
    return;
  }
  // Store the content of the first file in a variable
  const first = result;

  // Read the content of the second file
  readFile("./content/second.txt", "utf-8", (err, result) => {
    // Handle any errors that occur during the read operation
    if (err) {
      console.log(err);
      return;
    }
    // Store the content of the second file in a variable
    const second = result;

    // Append the content of the first and second files to a new file
    writeFile(
      "./content/result-sync.txt",
      `\nResult from async-read and write : ${first}, ${second}`,
      { flag: 'a' }, // 'a' flag appends the content to the file
      (err, result) => {
        // Handle any errors that occur during the write operation
        if (err) {
          console.log(err);
          return;
        }
        // Log a success message if the write operation is successful
        console.log(result);
      }
    );
  });
});