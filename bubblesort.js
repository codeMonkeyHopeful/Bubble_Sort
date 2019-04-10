function bubbleSort(array) {
    let reducedJ = array.length - 1;
    for(let i = 0;i < reducedJ; i++){
        
        for(let j =0; j < reducedJ; j++){
            let right = array[j+1];
            if(array[j] > array[j+1]){
                array[j+1] = array[j]
                array[j] = right;
            }
        }
        reducedJ--;
    }
    return array;
  }