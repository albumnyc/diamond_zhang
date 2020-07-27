Array.prototype.myreduce=function(callback,init){
    const origin=this;
    const start=init?0:1;
    let result=init||origin[0];

    for(let i=start;i<origin.length;i++){
        const cur=origin[i];
        result=callback(result,cur,i,origin);
    }
    return result;
}