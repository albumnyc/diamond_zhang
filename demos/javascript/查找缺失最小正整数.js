function findLucky(arr){
    arr.sort();
    const len=arr.length;
    for(let i=1;i<len;i++){
        if(arr[i]!==(arr[0]+i)){
            return arr[0]+i;
        }
    }
    return arr[0]-1?arr[0]-1:arr[len-1]+1;
  
}
console.log(findLucky([1,2,3,4]));