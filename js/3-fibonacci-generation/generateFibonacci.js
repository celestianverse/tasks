const generateFibonacci = (length) => {
  if (length <= 0) return [];

  if (length === 1) return [0];

  if (length === 2) return [0, 1];

  let fibonacci = [0, 1];

  for (let i = 2; i < length; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
  }

  return fibonacci;
};

const result = generateFibonacci(10);

console.log(result);