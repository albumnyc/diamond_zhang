//简单对象去重，不考虑深度对象
function mySimple(arr){
    const newArr = [];
    const obj = {};
    arr.forEach(item => {
        if (typeof item !== 'object') {
            if (newArr.indexOf(item) === -1) {
                newArr.push(item);
            }
        } else {
            const str = JSON.stringify(item);
            if (!obj[str]) {
                newArr.push(item);
                obj[str] = 1;
            }
        }
    })
    return newArr;
}