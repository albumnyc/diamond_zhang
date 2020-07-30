/*
Object.keys()方法会返回一个由一个给定对象的自身可美剧属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的一致
 */
/*
处理对象，返回可枚举的属性数组
 */
let person = {name:"张三",age:25,address:"深圳",getName:function(){}}

Object.keys(person) // ["name", "age", "address","getName"]


Object.myKey=function(obj){
    const keys=[];
    if(obj instanceof Object){
        for (let key in obj){
            if(obj.hasOwnProperty(key)){
                keys.push(key);
            }
        }
    }
    return keys;
}