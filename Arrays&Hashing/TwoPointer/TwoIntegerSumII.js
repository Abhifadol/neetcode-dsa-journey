/* 
    Given an array of integers numbers that is sorted in non-decreasing order.
    Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and 
    index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
    There will always be exactly one valid solution.

    Your solution must use O(1) additional space.

    Example 1:
    Input: numbers = [1,2,3,4], target = 3
    Output: [1,2]
    Explanation:
    The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

    Constraints:
    2 <= numbers.length <= 1000
    -1000 <= numbers[i] <= 1000
    -1000 <= target <= 1000
 */

// Solution (1) { O(n2) } ==> 
    class Solution {
        twoSum(numbers, target) {
            const arr = [];
            for (let i =0 ; i<numbers.length ; i++) {
                for (let j=i+1 ; j<numbers.length ; j++) {
                    if (numbers[i]+numbers[j] === target) {
                        arr.push(i+1, j+1);
                    }
                }
            }
            return arr;
        }
    }

// Solution (2) { O(n) } ==> 
    class Solution {
        twoSum(numbers, target) {
            let leftIndex = 0;
            let rightIndex = numbers.length - 1;
            while (leftIndex < rightIndex) {
                const currSum = numbers[leftIndex] + numbers[rightIndex];
                if (currSum < target) {
                    leftIndex += 1;
                } else if (currSum > target) {
                    rightIndex -= 1;
                } else {
                    return [leftIndex+1, rightIndex+1];
                }
            }
            return [];
        }
    }
