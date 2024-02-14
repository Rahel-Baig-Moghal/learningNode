const os = require("os"); // imports built-in os module

// info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds `);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  release: os.release(),
};
console.log(currentOS);
