//小张12个月零花钱
function translate(obj){
    var result=[];
    var a=0;
    for(let key in obj){
        a++;
        if(parseInt(key)===a){
            result.push(obj[key]);
        }else{
            let temp=parseInt(key)-a;
            for(let i=0;i<temp;i++){
                result.push(null);
            }
            a=parseInt(key);
            result.push(obj[key]);
        }
    }
   
    if(a!=12){
        let buff=12-a;
        
        for(let i=0;i<buff;i++){
            result.push(null);
        }
         a=12;
    }
    return result;
}
console.log(translate({1:200,2:140,5:400,11:300}));