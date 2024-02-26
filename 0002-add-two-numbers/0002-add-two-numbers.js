/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummynode = new ListNode(0)
    let carry = 0
    let result = dummynode

    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum / 10)
        dummynode.next = new ListNode(sum % 10)
        dummynode = dummynode.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    if (carry) {
        dummynode.next = new ListNode(carry)
    }

    return result.next
};