/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-28 16:25:38
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/快排.js
 */ 

/**
 * @description:  快排
 * @param {type} Array<number>
 * @return:  Array<number>
 */ 
function myQuickSort(array) {
    const len = array.length;
    if (len <= 1) {
        return array;
    }
    const pivot = array[0];
    const  left = [];
    const right = [];
    
    for (let i = 1; i < len; i++) {
        const buffer = array[i];
        buffer >= pivot ? right.push(buffer) : left.push(buffer);
    }
    return myQuickSort(left).concat(pivot, myQuickSort(right));
}
