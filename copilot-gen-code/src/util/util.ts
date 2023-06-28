// Write a function finding the sum of values when a key is "age"
// input: [{"age": 10, "name": "jungwoo"}, {"age": 15, "name": "jangwoo" }]
// expected result: 25

export const sumAge = (input: any[]) => {
  let sum = 0;
  input.forEach((item) => {
    sum += item.age;
  });
  return sum;
}

// Write a function finding the sum of values when a key is "age"
// Use immutable code styles
// input: [{"age": 10, "name": "jungwoo"}, {"age": 15, "name": "jangwoo" }]
// expected result: 25

export const sumAgeImmutable = (input: any[]) => {
  return input.reduce((acc, cur) => acc + cur.age, 0);
}
