function Solve(arr){
    var Mymap={}
    for(let i=0;i<arr.length;i++){
        Mymap[arr[i]]?Mymap[arr[i]]++:Mymap[arr[i]]=1;
    }
    //console.log(Mymap);
   var result=[];
  var len=Object.getOwnPropertyNames(Mymap).length;
    for(let i=0;i<len;i++){
         let max=0,index=0;
         for(let p in Mymap){
           
            if(max<Mymap[p]){
                max=Mymap[p]
              
                index=p;
               
            }
         }
        result.push(index);
        console.log(index);
        delete Mymap[index];
        console.log(Mymap);
}
console.log(result.join(','))
}
Solve([2,3,1,5,4,5]);