//定义下树
function TreeNode(x){
    this.val=x;
    this.left=null;
    this.right=null;
}
function isTree(root){
   return findTree(root,0,Number.MAX_SAFE_INTEGER);
}
function findTree(root,min,max){
    if(!root){
        return true;
    }
    if(root.val<= min||root.val>=max){
        return false;
    }
    return findTree(root.left,min,root.val)&&findTree(root.right,root.val,max);
}