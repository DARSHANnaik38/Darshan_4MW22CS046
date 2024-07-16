function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    let maxNumber = numbers[0];
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    
    return maxNumber;
}


console.log(findMax([1, 3, 7, 2, 5])); 
console.log(findMax([])); 
