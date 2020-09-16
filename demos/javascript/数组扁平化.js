function simple(array){
    return array.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?simple(cur):cur)
    },[]);
}
console.log (simple({"1":123,"2":234,"8":456}))