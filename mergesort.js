//mergeSort will do all the work - mergeSort(arr, args)
//split will divide the array fed into it into two - split(arr)

function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, middle);
  let secondHalf = wholeArray.slice(middle);

  if (wholeArray.length === 1) {
    return wholeArray;
  }
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let sortedArray = [];
  while (arr1.length > 0 && arr2.length > 0) {
    let elem1 = arr1[0];
    let elem2 = arr2[0];
    if (elem1 < elem2) {
      sortedArray.push(arr1.shift());
    } else {
      sortedArray.push(arr2.shift());
    }
  }
  if (arr1.length !== 0) {
    sortedArray.concat(arr1);
  } else {
    sortedArray.concat(arr2);
  }
  return sortedArray;
}

function mergeSort(array) {
  if(array.length === 1){
      return array;
  } else {
      let s = split(array);//two arrays returned
     let left =  mergeSort(split(s[0]));//need to check this section
      let right = mergeSort(split(s[1]));
  }
  return merge(left, right);
}
