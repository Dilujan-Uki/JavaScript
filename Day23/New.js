let num=12345;
function squareDigit(num){
    let num1=0;
    while(num>0){
        num1*=10;
        num1+=(num%10);
        num=Math.floor(num/10);
        
    }
    return num1
}
console.log(squareDigit(num))

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // Eliminate even numbers

  // Check for factors up to the square root of num
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
const number = 7;
if (isPrime(number)) {
  console.log(`${number} is a Prime number`);
} else {
  console.log(`${number} is not a Prime number`);
}
