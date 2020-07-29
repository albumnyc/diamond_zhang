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