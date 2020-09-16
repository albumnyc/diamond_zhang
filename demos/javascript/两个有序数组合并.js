/*
 * @Author: edwardnie
 * @LastEditTime: 2020-07-29 09:46:53
 * @LastEditors: edwardnie
 * @FilePath: /diamond_zhang/demos/javascript/两个有序数组合并.js
 */ 
function ddMerge(arr1,arr2){
    const len1=arr1.length;
    const len2=arr2.length;
    const len3=len1+len2;
    const arr3=new Array(len3);
    let m=0;
    let n=0;
    for(let i=0;i<len3;i++){
        if(m>=len1){
            arr3[i]=arr2[n++];
        } else if(n>=len2){
            arr3[i]=arr1[m++];
        }else{
            if(arr1[m]>arr2[n]){
                arr3[i]=arr2[n++];
            }else{
                arr3[i]=arr1[m++];
            }
        }

    }
    return arr3;
}
console.log(ddMerge([1,2,3],[0,5,9]))
/**
 * @param {Array[]} arrs
 * @param {boolean=false} [isUnique]
 * @param {Function=(a, b) => a - b} [compare]
 * @returns {Array}
 */
function myMerge (arrs, isUnique = false, compare = (a, b) => a - b) {
    if (!Array.isArray(arrs)) { return [] }
  
    var result = []
  
    arrs.forEach(arr1 => {
      arr1 = Array.isArray(arr1) ? arr1.slice() : [arr1]
      let arr2 = result
      result = []
  
      while (arr1.length > 0 && arr2.length > 0) {
        result.push(compare(arr1[0], arr2[0]) <= 0 ? arr1.shift() : arr2.shift())
      }
  
      result = result.concat(arr1, arr2)
  
      if (isUnique) {
        result = Array.from(new Set(result))
      }
    })
  
    return result
  }
  
  