// Import the 'path' module from Node.js, which provides utilities for working with file and directory paths.
const path = require("path");

// Log the platform-specific path segment separator (e.g., '\' on Windows, '/' on Unix-like systems).
console.log(path.sep);

// Join the provided path segments into a single path string, using the platform-specific separator.
const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

// Get the last portion of a path, resembling the filename, from the provided file path.
const base = path.basename(filePath);
console.log(base);

// Resolve the provided path segments into an absolute path, starting from the current directory '__dirname'.
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);