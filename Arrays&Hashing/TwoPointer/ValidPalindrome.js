/* 
    Given a string s, return true if it is a palindrome, otherwise return false.
    A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.
    Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

    Example 1:
    Input: s = "Was it a car or a cat I saw?"
    Output: true
    Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:
    Input: s = "tab a cat"
    Output: false
    Explanation: "tabacat" is not a palindrome.

    Constraints:
    1 <= s.length <= 1000
    s is made up of only printable ASCII characters.
 */

// Solution (1) { O(n) } ==> 
    class Solution {
        isAlphanumeric(char) {
            return ( 
                (char >= 'a' && char <= 'z') || 
                (char >= 'A' && char <= 'Z') || 
                (char >= '0' && char <= '9')
            );
        }

        isPalindrome(s) {
            let newString = '';
            for (let c of s) {
                if (this.isAlphanumeric(c)) {
                    newString += c.toLowerCase();
                }
            }
            return newString === newString.split("").reverse().join("");
        }
    }
