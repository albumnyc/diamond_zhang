function test(){
    var timer=null,t=0;
    return function(){
        timer=setInterval(()=>{
            if(t!=3){
                t++;
                console.log("Hello World");
            }else{
                clearInterval(timer);
            }
        },1000);
    }
}
var a=test();
a();