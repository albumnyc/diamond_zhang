function charge(coins,money){
    var result=Number.MAX_SAFE_INTEGER;
    
     var buff=new Array(money);
     return findCharge(coins,money,buff,result);
     
 }
 function findCharge(coins,money,buff,result){
     const len=coins.length;
     if(money===0){
         return result=0;
     }
     if(buff[money]){
         return buff[money];
     }else{
         for(let coin of coins){
             if(money>=coin){
                 money=money-coin;
                 result=Math.min(result,findCharge(coins,money,buff,result)+1);
             }
         }
     }
     return buff[money]=result;
 
 }
 console.log(charge([1,2],5))