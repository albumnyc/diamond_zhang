/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-28 16:54:40
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/冒泡.js
 */

function myBubbleSort(array) {
    const len = array.length;
    if (len <= 1) {
        return array;
    }
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}
