function findMaxNumber(numbers) {
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
  
 
  const numberArray = [12, 45, 6, 78, 23, 9];
  console.log(findMaxNumber(numberArray));
  
  const emptyArray = [];
  console.log(findMaxNumber(emptyArray));
  