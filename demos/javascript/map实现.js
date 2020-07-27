Array.prototype.mymap=function(callback,context){
    const array=this;
    const new_array=[];
    for(let i=0;i<array.length;i++){
        let buffer=array[i];
        new_array.push(callback.call(context,buffer,i,array));
    }
    return new_array;

}