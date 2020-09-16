//定义树
//验证二叉树是否为对称二叉树，即左子树和右子树是否对称
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