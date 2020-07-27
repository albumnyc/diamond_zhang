/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-27 20:49:22
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/from实现.js
 */

//我还没学明白from
//over

console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]

Array.myfrom = function () {
    console.log("%c  么么哒，爱你哟", "color:red;");
    debugger;
    let arr = [];
    Array.prototype.forEach.call(arguments, function (item) {
        arr.push(item);
    });
    return arr;
};
