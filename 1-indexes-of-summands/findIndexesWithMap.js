const findIndexesWithMap = (nums, target) => {
  const storage = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (storage.has(diff)) {
      return [storage.get(diff), i];
    }

    storage.set(num, i);
  }
};

const result = findIndexesWithMap([10, 4, 0, 5, 6], 10);

console.log(result);
