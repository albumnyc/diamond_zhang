//No.1
var a = 1;
(function a () {
    a = 2;
    console.log(a);//2
})();
//No.2
var foo = function bar(){ return 12; };
console.log(typeof bar());//function
//No.3
const num = {
    a: 10,
    add() {
      return this.a + 2;
    },
    reduce: () => this.a -2,
  };
  console.log(num.add());//12
  console.log(num.reduce());//undefined

//No.4

setTimeout(() => {
    console.log(3);
    Promise.resolve().then(_ => {
        console.log(1);
    })
}, 0)
setTimeout(() => {
    console.log(4);
    Promise.resolve().then(_ => {
        console.log(2);
    })
}, 0)//3142

// async 再awiat完成之后才让出线程
async function a1() {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
}
async function a2() {
    console.log('a2')
}

console.log('script start')

setTimeout(() => {
    console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
    console.log('promise1')
})

a1()

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')
//No.5
var man = {
    name: 'jscoder',
    age: 22
};
var proxy = new Proxy(man, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError(`Property ${property} does not exist.`);
        }
    }
});
// console.log(proxy.name)//jscoder
// console.log(proxy.age)//22
// console.log(proxy.location)//Property location does not exist.