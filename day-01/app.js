const { spawn } = require("child_process");

console.log(`Start`);

spawn("node", ["day-01/computations", 25], {
  stdio: 'inherit'
});

console.log("Some process");

spawn("node", ["day-01/computations", -17], {
  stdio: 'inherit'
});

console.log("End")

