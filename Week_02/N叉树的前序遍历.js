var preorder = function(root) {
    if (!root) return [];
    var res = [], arr = [root];
    while(arr.length){
        var current = arr.pop();
        res.push(current.val);
        for(var i = current.children.length - 1; i >= 0; i--){
            arr.push(current.children[i]);
        }
    }
    return res;
};