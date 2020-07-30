/*
cookie的几个特性
1、存储的数据只能是字符串格式
2、一定时间后，cookie会被销毁
3、同源策略：同协议、同域名、同端口才能进行读取

一些基本操作
1、cookie要设置name和value
2、cookie的domain默认设置
3、设置cookie的path
4、设置cookie的expires

 */
function setCookie(name,value,expire,domain,path){
    let expires=0;
    //name和value是必须的，expire,domain,path可选

    //设置expires
    if(typeof expire==="number"){
        expires=new Date();
        expires.setDate(expires.getDate()+expire);
    }

    return(document.cookie=[name+"="+value,
    typeof expire==="number"?";expires="+expires:"",
    typeof domain==="string"?";domain="+domain:"",
    typeof path==="string"?";path="+path:"",
    ].join(""));
}
function getCookie(name){
    const mycookie=document.cookie;
    const arr=mycookie.split(";");
    for(let i=0;i<arr.length;i++){
        if(arr[i].split("=")[0]===name){
            return arr[i].split("=")[1];
        }
    }
}
function deleteCookie(name){
    //删除cookie就是expires变成-1
    setCookie(name,"",-1);
}