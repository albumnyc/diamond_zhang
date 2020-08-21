//定义树
function TreeNode(x){
    this.val=x;
    this.left=null;
    this.right=null;
}
function IsTree(root){
    if(!root){
        return true;
    }
    return findTree(root.left,root.right);
}
function findTree(left,right){
    if(!left){
        return right?false:true;
    }
    if(left.val!==right.val){
        return false;
    }
    return findTree(left.left,right.right)&&findTree(left.right,right.left);
}