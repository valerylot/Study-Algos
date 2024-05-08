/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false

    let map= {}

    for(let i of s){
        map[i] = (map[i] || 0 ) + 1
    }

    for(let i of t){
        if(!map[i] || map[i] == 0) return false
        map[i]--
    }
    return true;
};

//SOLUTION 2

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false

    let map = {}

    for(let i of s){
        if(!map[i]){
            map[i] = 1
        } else{
            map[i]++
        }
    }

    for(let i of t){
        if(!map[i]){
            return false
        }

        if(map[i]){
            map[i]--
        }
        if(map[i] === 0){
            delete map[i]
        }
    }
    return Object.keys(map).length === 0
};