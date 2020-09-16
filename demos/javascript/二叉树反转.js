function reverseTree(root){
    if(!root){
        return null;
    }
    var temp=root.left;
    root.left=root.right;
    root.right=temp;
    reverseTree(root.left);
    reverseTree(root.right);
    return root;

}