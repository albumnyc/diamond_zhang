function myBubbleSort(array){
    const len=array.length;
    if(len<=1){
        return array;
    }
    for(let i=len;i>0;i--){
        for(let j=0;j<i;j++){
            if(array[j]>array[j+1]){
                const buffer=array[j];
                array[j]=array[j+1];
                array[j+1]=buffer;
            }
        }
    }
    return array;
}