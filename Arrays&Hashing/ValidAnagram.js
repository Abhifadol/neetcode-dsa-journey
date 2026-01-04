/* 
    Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    Example 1:
    Input: s = "racecar", t = "carrace"
    Output: true

    Example 2:
    Input: s = "jar", t = "jam"
    Output: false

    Constraints:
    s and t consist of lowercase English letters.
*/

// Solution (1) { O(nlog(n) + mlog(m)) } ==> 
    class Solution {
        isAnagram(s, t) {
            if (s.length !== t.length) {
                return false;
            }

            const stringS = s.split('').sort().join();
            const stringT = t.split('').sort().join();

            return stringS === stringT;
        }
    }

// Solution (2) { O(n + m) } ==>
    class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const hashSetS = {};
        const hashSetT = {};
        for (let i=0 ; i<s.length ; i++) {
            hashSetS[s[i]] = (hashSetS[s[i]] || 0) + 1;
            hashSetT[t[i]] = (hashSetT[t[i]] || 0) + 1;
        }

        for (const key in hashSetS) {
            if (hashSetS[key] !== hashSetT[key]) {
                return false;
            }
        }
        return true;
    }
}
 
