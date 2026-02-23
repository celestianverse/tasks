const findIndexesWithObject = (nums, target) => {
  const storage = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (storage[diff] !== undefined) {
      return [storage[diff], i];
    }

    storage[num] = i;
  }
};

const result = findIndexesWithObject([10, 4, 0, 5, 6], 10);

console.log(result);