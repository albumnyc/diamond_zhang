//定义下树
function TreeNode(x){
    this.val=x;
    this.left=null;
    this.right=null;
}

function IsTree(root){
    if(!root){
        return true;
    }
    let left_depth=findDepth(root.left);
    let right_depth=findDepth(root.right);

    if(Math.abs(left_depth-right_depth)>1){
        return false;
    }else{
        return IsTree(root.left)&&IsTree(root.right);
    }
}
function findDepth(root){
    if(!root){
        return 0;
    }
    let l=findDepth(root.left);
    let r=findDepth(root.right);
    return Math.max(l,r)+1;
}