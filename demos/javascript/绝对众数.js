/*
绝对众数就是一个数在一组数种个数超过1/2的数，
说白了就是这个数组中一半的数都是一样的
那么，排序后中间的数一定是绝对众数（如果存在绝对众数的话）
 */
//排序法
function findMode(array){
    const len=array.length;
    array.sort();
    return array[len/2]||array[(len+1)/2];
}
//可以遍历数组，存储键值对，判断谁的value达到了len/2
function findMode(array){
    const len=array.length;
    let val=[];
    for(let i=0;i<len;i++){
        val[array[i]]=val[array[i]]?val[array[i]]+1:1;
    }
    for(let item in val){
        if(val[item]>len/2||val[item>((len+1)/2)]){
            return item;
        }
    }
    console.log("Hi! There is no mode!");

}
