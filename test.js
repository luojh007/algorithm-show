function Node (key, value) {
    this.key = key
    this.value = value
    this.next = null
}

const node = new Node()


function add (node, addNode) {
    let next = node.next
    addNode.next = next
    node.next = addNode
}

function deleteNode (head, node) {
    const ans = new Node()
    let pre = ans
    pre.next = head
    while (head) {
        if (head.value === node.value) {
            pre.next = head.next
        }
        head = head.next
        pre = pre.next
    }
    return ans.next
}

function update (node, value) {
    node.value = value
}

function get (head, node) {
    if (!head) {
        return null
    }
    while (head) {
        if (head.value === node.value) {
            return node
        }
        head = head.next
    }
    return -1
}
