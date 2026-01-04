/* 
Problem Statement:- 
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false
 */

// Solution (1) { O(n2) } ==>
    class Solution {
        hasDuplicate(nums) {
            for (let i=0 ; i<nums.length ; i++) {
                for (let j=i+1 ; j<nums.length ; j++) {
                    if (nums[i] === nums[j]) {
                        return true;
                    }
                }
            }
            return false;
        }
    }


// Solution (2) { nLog(n) } ==> 
    class Solution {
        hasDuplicate(nums) {
            nums.sort();
            for (let i=0 ; i<nums.length-1 ; i++) {
                if (nums[i] === nums[i+1]) {
                    return true;
                }
            }

            return false;
        }
    }

    
// Solution (3) { O(n) } ==> 
    class Solution {
        hasDuplicate(nums) {
            const hashSet = new Set();
            for (let i=0 ; i<nums.length ; i++) {
                if (hashSet.has(nums[i])) {
                    return true;
                }
                hashSet.add(nums[i]);
            }
            return false;
        }
    }
 