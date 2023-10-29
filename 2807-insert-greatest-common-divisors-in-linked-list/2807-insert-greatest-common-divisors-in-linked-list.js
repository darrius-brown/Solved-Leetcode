/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertGreatestCommonDivisors = function(head) {
    const dummy = head;
    let curr = head;
    while (curr && curr.next) {
        const c = curr;
        const n = curr.next;
        // find GCD
        const g = new ListNode(gcd(c.val, n.val));
        c.next = g;
        g.next = n;
        curr = n;
    }
    return dummy;
};

const gcd = (a, b) => {
    while(a !== b){
      	if (a > b) {
          	a -= b;
      	} else {
          	b -= a;
      	}
  	}
  	return a;
}