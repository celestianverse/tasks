const getIntersection = (nums1, nums2) => {
  const set1 = new Set(nums1);

  return [...new Set(nums2.filter(num => set1.has(num)))];
};

const result = getIntersection([4, 25, 9, 0, 12, 4, 5], [9, 4, 16, 9, 8, 4, 0]);

console.log(result);