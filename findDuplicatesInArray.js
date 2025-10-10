function findDuplicates(array) {
  const uniqueElementsCount = { duplicates: {} };

  array.forEach((element, index) => {
    if (!uniqueElementsCount.hasOwnProperty(element)) {
      uniqueElementsCount[element] = 1;
    } else {
      uniqueElementsCount[element]++;
      if (!uniqueElementsCount.duplicates.hasOwnProperty(element)) {
        uniqueElementsCount.duplicates[element] = [index];
      } else {
        uniqueElementsCount.duplicates[element].push(index);
      }
    }
  });

  return uniqueElementsCount;
}

const elements = [
  23, 2, 7, 32, 5, 7, 23, 23, 678, 23, 1, 90, 8, 1, 3, 32, 90, 90,
];
console.table(findDuplicates(elements));
