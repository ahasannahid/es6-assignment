function mergeArrays(array1, array2) {
    return [...array1, ...array2];
  }
  
  
  const arrayA = [1, 2, 3];
  const arrayB = [4, 5, 6];
  const mergedArray = mergeArrays(arrayA, arrayB);
  console.log("Merged array:", mergedArray);
  