function Profit(arr){
    const len=arr.length;
    let min=Number.MAX_SAFE_INTEGER;
    let result=0;
    for(let i=0;i<len;i++){
        if(arr[i]<min){
            min=arr[i];
        }else{
            result=Math.max(result,arr[i]-min);
        }
    }
    return result;
}