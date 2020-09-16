function preorder(root){
    if(!root){
        return;
    }
    console.log(root.val);
    root.left&&preorder(root.left);
    root.right&&preorder(root.right);
}