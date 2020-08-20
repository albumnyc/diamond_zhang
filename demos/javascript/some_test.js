//No.1
var a = 1;
(function a () {
    a = 2;
    console.log(a);//2
})();
//No.2
var foo = function bar(){ return 12; };
console.log(typeof bar());//function
//3
const num = {
    a: 10,
    add() {
      return this.a + 2;
    },
    reduce: () => this.a -2,
  };
  console.log(num.add());//12
  console.log(num.reduce());//undefined