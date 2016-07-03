walk(document.body);

function walk(node) {

    var child, next;

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;   
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    var findDollars = /(?:\$|USD|Dollar)(?:\s)?((\d+\.\d+)|(\d+))/g; // find and replace pleb money with noble nuggs
    v = v.replace(findDollars, function (match) {
        if (match.charAt(0) === '\$') {
            match = match.substr(1);
        }
        return nugCorrection(Number(match));
    });

    textNode.nodeValue = v;

}

function nugCorrection(val) {
    // calculate real nugg value, some function nuggValue()
    // for testing, 1 nugget = $3
    var nugVal = 1 / 3;
    var nuggets = nugVal * val;
    return String(nuggets.toFixed(2)) + " nuggets";
}

