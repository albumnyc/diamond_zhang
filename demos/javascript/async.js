/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-29 20:32:58
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/async.js
 */ 
Promise.resolve().then(() => console.log(2));
new Promise((resolve, reject) => {
    resolve();
    console.log(3);
}).then(() => console.log(4));
setTimeout(() => {
    Promise.resolve().then(() => console.log(5));
    setTimeout(() => console.log(7), 0);
}, 0);
setTimeout(() => { console.log(6) }, 0);
setTimeout(() => {
    Promise.resolve().then(() => console.log(8));
    setTimeout(() => console.log(9), 0);
}, 0);
//32456879

//3其实在promise里是同步执行的，按行执行，then的话是异步操作进入到位队列中，从上到下依次执行所以是先2后4


async function a() {
    console.log(1);
    await console.log(2);
    await new Promise((res, rej) => {
        res();
        setTimeout(() => console.log(3), 0)
    })
    new Promise((res, rej) => {
        res();
        setTimeout(() => console.log(4), 0)
    }).then(() => console.log(5))
    setTimeout(() => console.log(6), 0)
}

async function b() {
    await a();
    Promise.resolve().then(() => console.log(8));
    console.log(7);
}

setTimeout(() => console.log(9), 0);
//125789346（我对于9放在哪很迷茫）

/*
async 作为关键字放在函数前面，表示该函数是一个异步函数，意味着该函数的执行不会阻塞后面代码的执行

async内部实现原理就是该函数中如果有一个返回值，则调用该函数时，默认会在内部调用Promise.solve(）方法，
把他转化成一个Promise对象作为返回，若函数内部抛出错误，则调用Promise.reject()返回一个Promise对象
 */
/*
await即等待，用于等待一个Promise对象。
只能在async function中使用，否则会报错
await的返回值不是Promise对象 而是Promise对象处理之后的结果

await表达式会暂停当前async function的执行，等待Promise处理完成。
若Promise正常处理（fulfilled），其回调的resolve函数参数作为await的值，继续执行async function
若Promise处理异常（rejected），await会把Promise的异常原因抛出。

如果await操作符后的表达式的值不是一个Promise，那么该值将被转换为一个已正常处理的Promise
 */