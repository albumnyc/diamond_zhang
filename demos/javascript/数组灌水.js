function Water(arr){
    let start=arr[0];//开始的值
    let startIndex=0;//开始位置
    let min=arr[0];//最小值
    let minIndex=0;//最小值位置
    let end=arr[0];//结束值
    let endIndex=0;//结束位置
    for(let i=0;i<arr.length;i++){
        if(start<=arr[i]&&min==start){
            start=arr[i];
            startIndex=i;
            min=arr[i];
            minIndex=i;
        }else if(min>arr[i]){
            start=min;
            startIndex=minIndex;
            min=arr[i];
            minIndex=i;
        }else if(min<arr[i]){
            end=arr[i];
            end=i;
        }

        if(endIndex>startIndex+1){
            for(let j=startIndex;j<endIndex-1;j++){
                arr=arr.substring(0,j+1)+(end<start?end:start)+arr.substring(j+2,arr.length);
            }
            Water(arr);
            return false;
        }


    }
}