//定义一下链表
function ListNode(x){
    this.val=x;
    this.next=null;
}
//false无环，true有环
function findLoop(phead){
    var isLoop=false;
    if(phead===null){
        return isLoop;
    }
    var fast=phead;
    var slow=phead;
    while(fast!==null&&fast.next!==null){
        
        slow=slow.next;
        fast=fast.next.next;
        if(fast===slow){
           isLoop=true;
           break;
        }

    }
    return isLoop;
}