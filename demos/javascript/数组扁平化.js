function simple(array){
    return array.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?simple(cur):cur)
    },[]);
}
