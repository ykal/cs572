// get fib function param from the shell argument
const args = process.argv;
const param = args[2];

// Todo: validate num

const fib = (num) => {
  num = Math.abs(num);
  if (num === 0)
    return 0;
  if(num <= 2)
    return 1;
  else 
    return fib(num-1) + fib(num-2);
} 

console.log(`Result of fib(${param}) is ${fib(param)}`);
