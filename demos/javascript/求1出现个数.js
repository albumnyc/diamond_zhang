function getCount(n){
    var sum=0;
    for(let i=1;i<=n;i++){
        let temp=i.toString();
        for(let j=0;j<temp.length;j++){
            if(temp.charAt(j)==='1'){
                sum++;
            }
        }
    }
    return sum;
}
console.log(getCount(400));