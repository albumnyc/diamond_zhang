function Solution(str,data){
    let result=str;
    for(let key in data){
        result=result.replace(new RegExp("("+key+")",'g'),data[key])
    }
    return result;
}