function findSum(root,sum=0){
    if(!root){
        return sum;
    }
    sum=sum+root.val;
    if(!root.left&&!root.right){
        return sum;
    }
    return findSum(root.left,sum)+findSum(root.right,sum);
}
