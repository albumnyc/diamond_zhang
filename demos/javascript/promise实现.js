/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-29 09:38:33
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/promise实现.js
 */ 
//Promise三种状态：pending/fulfiled/rejected
//状态转换：pending-->fulfiled/rejected(单向)
//Promise需要then，会返回一个Promise，以致于下一步then调用
//Promise可以通过resolve和reject直接创建

export enum promiseStatus {
    pending =  1,
    resolve = 2,
    reject = 3,
    promised = 4,
}
class Promise {
    constructor(){

    }
    resolve(obj){

    }
    reject(){

    }
    then(){

    }
    catch(){

    }
    execute(){//回调要用

    }
}