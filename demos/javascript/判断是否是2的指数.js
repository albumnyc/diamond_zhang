function Solution(num){
    if(num!=0){
    if(num==1){
        return true;
    }else{
        while(num!=1){
            if(num%2==0){
                num=num/2;
            }else{
                return false;
            }
        }
        return true;
    }
    }else{
        return false;
    }
}