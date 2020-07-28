function myQuickSort(array) {
    if(array.length<=1){
        return array;
    }
    const pivot=array[0],left=[],right=[];
    for(let i=1;i<array.length;i++){
        const buffer=array[i];
        if(buffer>=pivot){
            right.push(buffer);
        }
        if(buffer<pivot){
            left.push(buffer);
        }
    }
    return myQuickSort(left).concat(pivot,myQuickSort(right));

}