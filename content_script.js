var nugg_val = 0;

getNuggValue(function (resp) {
    nugg_val = resp['conversion'];
    walk(document.body);
});


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
    var nugVal = 1 / nugg_val;
    var nuggets = nugVal * val;
    return String(nuggets.toFixed(2)) + " nuggets";
}

function getNuggValue(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://aqueous-shore-20712.herokuapp.com/whatthenug", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}