//mergeSort will do all the work - mergeSort(arr, args)
    //split will divide the array fed into it into two - split(arr)

    function split(wholeArray) {
        /* your code here to define the firstHalf and secondHalf arrays */
        let middle = Math.floor(wholeArray.length/2);
        let firstHalf = wholeArray.slice(0,middle);
        let secondHalf = wholeArray.slice(middle)
        return [firstHalf, secondHalf];
      }
