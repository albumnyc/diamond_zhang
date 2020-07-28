function mySelectSort(array){
    const len=array.length;
    if(len<=1){
        return array;
    }
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){
            if(array[j]<array[i]){

                [array[i],array[j]]=[array[j],array[i]];
            }
        }
    }
    return array;
}