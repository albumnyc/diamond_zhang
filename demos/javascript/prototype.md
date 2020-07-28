#原型链知识点梳理
##new操作的步骤
1、创建一个空的对象
2、链接到原型 obj.__proto=Func.prototype
3、绑定this指向，执行构造函数
4、确保返回的是对象 
```javascript
const obj=new Object({});
obj.__proto__===Object.prototype;
```
同时记住new 后面的是function
#create()与new的区别
```javascript
const obj1=Object.create(obj);
obj1.__proto__===obj;
```
1、Object.create()是Object的内置方法，可以创建一个新对象，使用现有的对象来提供新创建的对象__proto__
2、new：原型链——原构造函数prototype属性，
3、Object.create()：原型链——原构造函数/对象本身 所以obj1.__proto__===obj;

##附记
//原型链的顶端是null-->Object.prototype Object-->function.prototype  function-->array.prototype/String.prototype  Array/String
(new String()).typeof=Object

var a={};//也有__proto

