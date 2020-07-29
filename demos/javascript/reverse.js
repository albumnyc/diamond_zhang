/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-29 09:36:37
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


// 下面是欧巴给小宝贝写的
function reserve(str) {
    const len = str.length + 1;
    let temp = "";
    let result = "";
    for (let i = 0; i < len; i++) {
        if (str[i] === " " && temp[0] === " " && str[i]) {
            temp += " ";
        } else if (str[i] !== " " && temp[0] !== " " && str[i]) {
            temp += str[i];
        } else {
            result = temp + result;
            temp = str[i];
        }
    }
    return result;
}
console.log(reserve(str)); // -> " much very       very  nieyichao  like     zhangjiahui "