var preorderTraversal = function(root) {
    const printArr = []
    if (!root) return printArr
    const stack = []
    stack.push({
        color: 'white',
        node: root
    })
    while (stack.length > 0) {
        const pickValue = stack.pop()
        const { color, node } = pickValue
        if (color === 'gray') {
            printArr.push(node.val)
        } else {
            node.right && stack.push({ color: 'white', node: node.right })
            node.left && stack.push({ color: 'white', node: node.left })
            stack.push({ color: 'gray', node })
        }
    }
    return printArr
}