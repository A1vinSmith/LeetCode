const addTwoNumbers = (l1, l2) => {
    if(l1 === null || l2 === null){
        return l1 || l2;
    }
    let result = new ListNode(0);
    let cur = result;
    let p = l1;
    let q = l2;
    let carry = 0;
    
    while(p || q){
        let qval;
        let pval;
        
        if(q){
            qval = q.val;
            q = q.next;
        } else {
            qval = 0;
        }
        
        if(p){
            pval = p.val;
            p = p.next;
        } else {
            pval = 0;
        }
        
        let val = qval + pval + carry;
        
        if(val > 9){
            carry = 1;
            val %= 10;
        } else {
            carry = 0;
        }
        
        cur.next = new ListNode(val);
        cur = cur.next;
    }
    
    if(carry !== 0){
        cur.next = new ListNode(1);
    }
    
    return result.next;
    
};
