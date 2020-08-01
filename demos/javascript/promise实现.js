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


function Promise(executor){
    if(!(this instanceof Promise)){
        return new Promise(executor);
    }
    //确保executor确实是Promise
    let self=this;
    //获取当前状态
    self.status='pending';
    //初始化promise的值
    self.data=undefined;
    //回调函数
    self.resolve_cb=[];
    self.reject_cb=[]
    const len=self.callback.length;
    function resolve(value){
        //resolve和reject异步执行
        setTimeout(function(){
            if(self.status==='pending'){
                self.status='resolved';
                self.data=value;

                for(let i=0;i<len;i++){
                    self.resolve_cb[i](value);
                }
            }
        })

    }
    function reject(e){
        setTimeout(function(){
            if(self.status==='pending'){
                self.status='rejected';
                self.data=e;

                for(let j=0;j<len;j++){
                    self.reject_cb[j](e);
                }
            }
        })

    }

    try{
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }
}
Promise.prototype.then=function(Resolve,Reject){
    //要返回一个Promise对象
    const self=this;
    let new_promise;
    //判断当前状态
    //如果是pending
    if(self.status==='pending'){
        //判断不了调用哪个函数

        return new_promise=new Promise(function (resolve,reject) {
            //把callback放回调的对应数组里[]
            self.resolve_cb.push(function(value){
                try{
                    let res=Resolve(self.data);
                    if(res instanceof Promise){
                        res.then(resolve,reject);
                    }else{
                        resolve(res);
                    }
                }catch (e) {
                    reject(e);
                }
            })
            self.reject_cb.push(function (error) {
                try{
                    let rej=Reject(self.data);//其实是error reason
                    if(rej instanceof Promise){
                        rej.then(resolve,reject);
                    }else{
                        resolve(rej);
                    }
                }catch (e) {
                    reject(e);
                }

            })

        })
    }
    //如果是resolve
    if(self.status==='resolved'){
        return new_promise=new Promise(function(resolve,reject){
            try{
                let res=Resolve(self.data);
                if(res instanceof Promise){//如果已经返回了Promise对象
                    res.then(resolve,reject)//可以实现继续调用
                }else{
                    resolve(res);//继续调用回调函数
                }
            }catch (e) {
                reject(e);//reject回调
            }
        })
    }
    //如果是reject
    if(self.status==='rejected'){
        return new_promise=new Promise(function (resolve,reject) {
            try{
                let rej=Reject(self.data);//其实是error reason
                if(rej instanceof Promise){
                    rej.then(resolve,reject);
                }else{
                    resolve(rej);
                }
            }catch (e) {
                reject(e);
            }
        })
    }
}
Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        const length = promises.length;
        const result = new Array(length);
        let count = 0;

        promises.forEach((item, index) => {
            item.then((data) => {
                result[index] = data;
                count++;
                if (count === length) resolve(result);
            }).catch((err) => {
                reject(err);
            });
        });
    });
};