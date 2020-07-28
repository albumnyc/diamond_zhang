/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-28 21:17:58
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/reverse.js
 */ 
const str = " zhangjiahui     like  nieyichao  very       very much ";
function reserve(str) {
    const origin=str.split(" ");
    const new_str=[];
    const len=origin.length;
    for(let i=0;i<len;i++){
        new_str[len-i]=origin[i];
    }
    return new_str.join(" ");
}
console.log(reserve(str)); // -> " much very       very  nieyichao  like     zhangjiahui "