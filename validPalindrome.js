/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const check = (s) => {
        let l = 0;
        let r = s.length - 1;
        while(l<=r){
            if(s[l]===s[r]){
                l++;
                r--;
            } else{
                return false;
            }
        }
        return true;
    }
    const regex = /[^a-zA-Z0-9]/g
    const clean = s.replace(regex, '').toLowerCase();
    return check(clean)
};