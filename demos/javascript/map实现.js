
Array.prototype.mymap=function(callback,thisValue){
    const array=this;//因为map不会改变原数组
    if(!array){
        return;
    }
    var new_array=[];
    for(let i=0;i<array.length;i++){
        let buffer=array[i];
        new_array.push(callback.call(thisValue,buffer,i,array));
    }
    return new_array;
}