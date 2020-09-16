function postorder(root){
    if(!root){
        return;
    }
    root.left&&postorder(root.left);
    root.right&&postorder(root.right);
    console.log(root.val);
}