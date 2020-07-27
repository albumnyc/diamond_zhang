Array.prototype.myfill=function (value,start,end) {
    const array=this;

    start=start||0;
    end=end||array.length;
    for(let i=start;i<end;i++){
        array[i]=value;
    }
    return array;
}