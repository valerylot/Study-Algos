/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for(let i=0; i<s.length; i++){
        let char = s[i];
        if(char === "(" || char === "{" || char === "["){
            stack.push(char);
        }else{
            let prevChar = stack.pop();
            
            if(prevChar === "(" && char !== ")") return false;
            if(prevChar === "{" && char !== "}") return false;
            if(prevChar === "[" && char !== "]") return false;
            if(prevChar === undefined) return false;
        }
    }
    return stack.length === 0;
};