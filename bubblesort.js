function bubbleSort(array) {
    for(let i = 0;i < array.length-1; i++){
        for(let j =0; j < array.length-1; j++){
            let right = array[j+1];
            if(array[j] > array[j+1]){
                array[j+1] = array[j]
                array[j] = right;
            }
        }
        
    }
    return array;
  }