/*
Object.assign(target,...sources)

target是目标对象，source是源对象，可以有多个，返回修改后的target

浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存。
 */
/*
实现一个Object.assign大致思路
1、判断参数是否正确,source不能是null或者undefined
2、使用for..in循环遍历出所有可枚举自有属性，并赋值给新的目标对象hasOwnProperty返回非原型链上的属性


 */
Object.myAssign=function(target,...source){
    const len=source.length;
    for(let i=0;i<len;i++){
        if(source[i]!==null||source[i]!==undefined){
            for(let item in source[i]){
                if(source[i].hasOwnProperty(item)){
                    target[item]=source[i][item];
                }
            }
        }
    }
    return target;
}

