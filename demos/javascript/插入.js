function myInsertSort(array) {
    const len=array.length;
    if(len<=1){
        return array;
    }
    let pre=0;
    let cur=0;
    for(let i=1;i<len;i++){
        pre=i-1;
        cur=array[i];
        while(cur<array[pre]&&pre>=0){
            array[pre+1]=array[pre];
            pre--;
        }

        array[pre+1]=cur;
    }
    return array;

}