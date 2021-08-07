module.exports = function reverse(n) { 
    n = String(Math.abs(n))
    return (n.split("").reverse().join(""));
    
};
