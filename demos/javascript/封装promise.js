async function cry(array) {
    let key=null;
    for(let p of array){
        key=p.then(key);
    }
    return key.then();
}