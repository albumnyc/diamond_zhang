/*
1、创建一个XMLHttpRequest对象
2、创建HTTP请求
3、设置响应HTTP请求状态的函数
4、发送HTTP请求
5、获取异步调用返回的数据
6、使用js和DOM局部刷新
 */

//创建XMLhttprequest对象

//判断是否支持xmlhttprequest对象
var httpreq;
if(window.XMLHttpRequest){
     httpreq=new XMLHttpRequest();
}else if(window.ActiveXObject){
     httpreq=new ActiveXObject("Microsoft.XMLHTTP");
}
//设置请求方式 open()设置get/post,path,是否异步
var url="http://localhost:8080/";
httpreq.open("POST",url,true);
//设置响应HTTP请求的函数
httpreq.onreadystatechange=function () {
    if(httpreq.readyState==4){//0 请求未初始化 1 服务器已建立 2 请求已接受 3 请求处理中 4 请求已完成
        if(httpreq.status>=200&&httpreq.status<300||httpreq.status==304){//200 ok
           console.log(httpreq.responseText);
        }else if(httpreq.status>=400){
           console.log("Error: "+httpreq.status);
        }
    }
}
//发送请求
httpreq.send();