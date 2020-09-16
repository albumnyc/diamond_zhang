function inorder(root){
    if(!root){
        return;
    }
    root.left&&inorder(root.left);
    console.log(root.val);
    root.right&&inorder(root.right);
}