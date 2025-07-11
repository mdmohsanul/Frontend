export function findPrime(n) {
  if (n <= 0) {
    return "Invalid input";
  }
  const primes = [2];
  let num = 3;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num += 2; // Check only odd numbers
  }
  return primes[n - 1];
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
