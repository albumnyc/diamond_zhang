/*
创建一个新函数/创建的函数接受第二个以及之后的参数作为自己参数
bind返回函数

 */

Function.prototype.myBind=function (source) {
    let self=this;
    let args=Array.prototype.slice.call(arguments,1);
    return function(){
        let bindargs=Array.prototype.slice(arguments);
        self.apply(source,args.concat(bindargs));
    }
}