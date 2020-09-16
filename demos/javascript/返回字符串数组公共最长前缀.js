function Solve(strs){
    const len=parseInt(strs[0]);
	if(len===0){
        return "empty";
    }
    var result="";
    var arr=[];
    for(let i=1;i<=len;i++){
       arr.push(strs[i]);
    }
    if(arr.length){
        var res="";
        for(let i=0;i<arr[0].length;i++){
            var temp=arr[0][i];
            if(arr.every(el=>{
                return el.charAt(i)===temp;
            })){
                res+=temp;
            }else{
                break;
            }
        }
        return res===''?"empty":res;
    }
    return "empty";
};
console.log(Solve(['2','dbc','ddd']))
