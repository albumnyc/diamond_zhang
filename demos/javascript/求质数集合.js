function findPrime(n){
    //n为1~n的数里挑质数
    var prime=[];
	var i,j;
    for( i=2;i<n;i++){
        for(j=2;j<i;j++){
            if(i%j===0){
                break;
            }
        }
        if(i<=j){
            prime.push(i);
        }
    }

    return prime;
}
console.log(findPrime(100));