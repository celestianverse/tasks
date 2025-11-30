const getSumWithFor = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const getSumWithMap = (nums, target) => {
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

const getSumWithObject = (nums, target) => {
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

const result = getSumWithMap([10, 4, 0, 5, 6], 10);

console.log(result);
