function myMerge(arr1,arr2){
    const len1=arr1.length;
    const len2=arr2.length;
    const len3=len1+len2;
    const arr3=new Array(len3);
    let m=0;
    let n=0;
    for(let i=0;i<len3;i++){
        if(m>=len1){
            arr3[i]=arr2[n++];
        } else if(n>=len2){
            arr3[i]=arr1[m++];
        }else{
            if(arr1[m]>arr2[n]){
                arr3[i]=arr2[n++];
            }else{
                arr3[i]=arr1[m++];
            }
        }

    }
    return arr3;
}