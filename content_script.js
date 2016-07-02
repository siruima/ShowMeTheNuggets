walk(document.body)

function walk(node)
{

    var child, next;

    if (node.tag.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea' || node.classList.indexOf('ace_editor') > -1 {
        return;
    }

    switch( node.nodeType )
    {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while( child ){
                next = child.nextSibling;
                walk(child);
                child = next
            }
            break;

        case 3: // Text node
            handleText(node)
            break;

function handleText(textNode)
{
    var v = textNode.nodeValue;

    var findDollars = /(?:USD|\$|Dollar)(?:\s)?((\d+\.\d+)|(\d+))/g; // find and replace pleb money with noble nuggs
    v.replace(findDollars, nugCorrection($0))

}

function nugCorrection(val)
{
    // calculate real nugg value, some function nuggValue()
    // for testing, 1 nugget = $3
    var nugVal = 1/3
    return String(1/3) + " nuggets"
}

