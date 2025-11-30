Arrays Intersection

Given two arrays of integers nums1 and nums2, return a new array that contains only the numbers that appear in both arrays.

Each number in the result should be unique (без повторов), and you may return the result in any order.

You may assume that both input arrays contain only integers.

Example 1:

Input: nums1 = [1, 2, 3], nums2 = [2, 3, 4]
Output: [2, 3]
Explanation: Numbers 2 and 3 are present in both arrays.


Example 2:

Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
Output: [4, 9]
Explanation: 4 and 9 appear in both arrays, so they are included once in the result.


Example 3:

Input: nums1 = [1, 1, 2, 3], nums2 = [1, 3, 3]
Output: [1, 3]
Explanation: Even though 1 and 3 appear multiple times, each common number appears once in the result.


Follow-up:

Can you come up with an algorithm that runs faster than O(n * m) time, where n and m are the lengths of the two arrays?