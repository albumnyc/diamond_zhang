var a = 222333444.1245
function addDou(num) {
     var numArr = num.split('.')
     num = numArr[0]
     var result = ''
     while(num.length>3){
         result = ','+num.slice(-3)+result
         num = num.slice(0,num.length-3)
     }
     if(num){
         result = num+result
     }
     result = result+'.'+numArr[1]
     return result
 }
 console.log(Solution(a.toString()))

 function Solution(num){
     var numArr=num.split('.');
     var buff=numArr[0];
     var result='';
    while(buff.length>3){
        result=','+buff.slice(-3)+result;
        buff=buff.slice(0,buff.length-3);
    }
    if(buff){
        result=buff+result;
    }
    result=result+'.'+numArr[1];
    return result;
 }
