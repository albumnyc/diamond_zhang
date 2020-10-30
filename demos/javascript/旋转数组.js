function rotateArr(arr,k){
    return Array.prototype.concat(arr.slice(arr.length-k),arr.slice(0,arr.length-k));

}
console.log(rotateArr([1,2,3,4,5,6,7],3))