function sum(...nums) {
    
    return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));