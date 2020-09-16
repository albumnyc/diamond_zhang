const getType = (obj) => {
    if (typeof obj === 'symbol') {
        return 'symbol';
    } else if (typeof obj !== 'object') {
        return 'simple';
    }
    return Object.prototype.toString.call(obj).slice(8, -1);
};


function cloneReg(target) {
    const reFlags = /\w*$/;
    const result = new target.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = target.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        console.log('普通函数');
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            console.log('匹配到函数体：', body[0]);
            if (param) {
                const paramArr = param[0].split(',');
                console.log('匹配到参数：', paramArr);
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

const deepclone = (obj) => {
    const type = getType(obj);
    if (type === 'simple') {
        return obj;
    }
    const cloneDataHandler = {
        simple: () => obj,
        Function: cloneFunction(),
        Symbol: cloneSymbol(),
        Regexep: cloneReg()
    };
    try {
        const clonedData = cloneDataHandler[type](obj);
        return clonedData;
    }catch(e){
        
    }
    const newobj = Array.isArray(obj) ? [] : {};
    for (const i in obj) {
        if (isType(obj[i], 'object')) {
            newobj[i] = deepclone(obj[i]);
        } else if (isType(obj[i], 'function')) {
            newobj[i] = eval(obj[i].toString());
        } else {
            newobj[i] = obj[i];
        }
    }
    return newobj;
};







//我的深拷贝
function deepClone(obj){
    var target={};
    for(var key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(typeof obj[key]==='object'){
                target[key]=deepClone(obj[key]);
            }else{
                target[key]=obj[key];
            }
        }
    }
    return target;
}