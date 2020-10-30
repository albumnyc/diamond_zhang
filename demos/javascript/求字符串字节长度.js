function findByte(str){
    var sum=0;
    for(let i=0;i<str.length;i++){
        if(str.charCodeAt(i)<255){
            sum++;
        }else{
            sum+=2;
        }
    }
    return sum;
}
console.log(findByte('你1a好'));