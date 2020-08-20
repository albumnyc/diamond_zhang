function print_Array(arr,m,n){
    var t=0,p=1;
    const len=arr.length;
     while(t<len){
         for(let i=m-p+1;i>p-1;i--){//从左向右
             console.log(arr[m*p-i]);
             t++;
         }
         for(let j=2+p-1;j<=n-p+1;j++){//从上到下
             console.log(arr[j*m-p]);
             t++;
         }
         for(let k=2+p-1;k<=m-p;k++){//从右到左
             console.log(arr[m*(n+p-1)-(k+p-1)]);
             t++;
         }
         for(let z=n-p+1;z>p;z--){//从下往上
             console.log(arr[z*m-(m-p+1)]);
             t++;
         }
        
         p++;
     }
 }
 
 
 var a=[1,2,3,4,5,6,7,8,9];
 print_Array(a,3,3);