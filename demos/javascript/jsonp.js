/*
由于ajax无法跨域，但<script>的<src>可以跨域
所以把跨域服务器写成调用本地的函数，回调数据即可

调用跨域服务器上动态生成的js格式文件（不管是什么类型的地址，最终返回值都是js代码）

传递一个callback参数给跨域服务端，然后跨域服务器返回数据时，
会将这个callback参数作为函数名包裹json数据
 */
/*
与AJAX的区别

ajax是通过XmlHttpRequest来获取非本页内容
jsonp的核心时 动态 添加<script>来调用服务器提供的js脚本
 */
/*
jsonp的核心——编码事项动态查询

1、本地服务端声明一个回调函数，其函数作为参数值，传递给跨域请求的服务器，callback=function_name
2、创建一个script标签，把跨域的接口地址赋值给src，在这个地址中传递callback
3、服务器接受请求，对数据进行拼接处理
4、服务器通过http协议把数据返回给服务端，服务端再调用自己的回调函数
 */

function myJsonp({url,params,callback}){
    return new Promise((resolve,reject)=>{
        const script=document.createElement("script");
        window[callback]=(data)=>{
            resolve(data);
            document.body.removeChild(script);
        }
        params={...params,callback};
        let arr=[];
        for(let item in params) {
            arr.push(`${item}=${params[item]}`);
        }
        script.src=`${url}?${arr.join('&')}`;
        script.setAttribute("type","text/javascript");
        document.body.appendChild(script);//appendChild()可向节点的子节点列表的末尾添加新的子节点（这里就是在<body>里添加<script>）

    });



}
   myJsonp({
       url:'http://localhost:9988/deploy',
       params:{
           code:'hi'
       },
       callback:'show'
   }).then((data)=>{
       console.log(data);
   }).catch((e)=>{console.log(e)})
