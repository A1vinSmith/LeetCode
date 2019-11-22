[1, -1]
[1,8,6,2,5,4,8,3,7]
[76,155,15,188,180,154,84,34,187,142,22,5,27,183,111,128,50,58,2,112,179,2,100,111,115,76,134,120,118,103,31,146,58,198,134,38,104,170,25,92,112,199,49,140,135,160,20,185,171,23,98,150,177,198,61,92,26,147,164,144,51,196,42,109,194,177,100,99,99,125,143,12,76,192,152,11,152,124,197,123,147,95,73,124,45,86,168,24,34,133,120,85,81,163,146,75,92,198,126,191]

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var copy = Array.from(height)
    var sorted = Array.from(height).sort((a, b) => b - a)
    
    // findNextHeightest
    function fnh() {
        var h = sorted.shift()
        var i = copy.findIndex(e => e == h)
        copy.splice(i, 1, 0)
        return [h, i]
    };
    
    // Cal: higherIdnex, shorterIndex, shorterHeight
    function cal(hI, sI, sH) {
        return (hI - sI) * sH
    };
    
    function changeFS(farthestIndex, third, thirdIndex) {
        var farthest = farthestIndex == firstIndex ? first : second;
        first = farthest, firstIndex = farthestIndex;
        second = third, secondIndex = thirdIndex;
    };
    
    var f = fnh();
    var first = f[0], firstIndex = f[1];
    
    var s = fnh();
    var second = s[0], secondIndex = s[1];
    
    var bI = firstIndex > secondIndex ? firstIndex : secondIndex;
    var sI = firstIndex < secondIndex ? firstIndex : secondIndex;
    
    var result = cal(bI, sI, second);
    
    var t, third, thirdIndex, left, right, result2;
    
    while(sorted.length > 0) {
        t = fnh();
        third = t[0], thirdIndex = t[1];
        
        if (third <= 0) {
            break;
        } 
        
        left = firstIndex < secondIndex ? firstIndex : secondIndex;
        right = firstIndex > secondIndex ? firstIndex : secondIndex;
        
        if (thirdIndex > left && thirdIndex < right) {
            continue;
        }
        
        if (thirdIndex < left) {
            result2 = cal(right, thirdIndex, third);
        
            if (result > result2) {
                continue;
            } else {
                result = result2;
                changeFS(right, third, thirdIndex);
                
                continue;
            }
        }
        
        if (thirdIndex > right) {
            result2 = cal(thirdIndex, left, third);
            if (result > result2) {
                continue;
            } else {
                result = result2;
                changeFS(left, third, thirdIndex);
                
                continue;
            }
        }
    };
    
    if (secondIndex < firstIndex) {
        var potential;
        for(var i = firstIndex + 1; i < height.length; i++) {
            if (height[i] >= second) {
                potential = i
            }
        }
        if (potential) return cal(potential, secondIndex, second);
    }
    
    if (secondIndex > firstIndex) {
        var potential;
        for(var i = firstIndex - 1; i >= 0; i--) {
            if (height[i] >= second) {
                potential = i
            }
        }
        if (potential) return cal(secondIndex, potential, second);
    }
    if (result < 0) return 0;
    return result;
};
