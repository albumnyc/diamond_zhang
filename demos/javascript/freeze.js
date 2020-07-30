/*
Object.freeze()可以冻结一个对象。一个被冻结的对象再也不能被修改，添加，删除，原型也不能被修改
freeze()返回和传入的参数相同的对象

 */

Object.myFreeze=function(obj){
   if(obj instanceof Object){
       //通过Object.seal()让obj无法被扩展删除属性
       Object.seal(obj);
       //然后进行defineProperty修改writable属性变为false，只能可读
       for(let item in obj) {
           if (obj[item] instanceof Object) {
               Object.myFreeze(obj[item]);
           } else {
               Object.defineProperties(obj, item, {writable: false});
           }
       }
   }

}
