const editor = document.getElementById("wall");

let edit_timeout;
let edit_buffer = [];
function edit(f, ms) {
    console.log
    if(edit_timeout) {
        clearInterval(edit_timeout);
    }
    edit_buffer.push(f)
    edit_timeout = setTimeout(next_edit, ms)
}

function next_edit() {
    if (edit_buffer.length > 0) {
        edit_buffer[0]();
        edit_buffer.shift()
    }
}

text = requestAsync("GET", "/wall", (b) => editor.innerText = b);

editor.addEventListener("keydown", (e) => {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    let node = range.startContainer;

    // Move into a text node if needed
    if (node.nodeType !== Node.TEXT_NODE) {
        if (node.childNodes.length > 0) node = node.childNodes[0];
        else return;
    }

    const pos = range.startOffset;
    const text = node.nodeValue;

    // Handle Backspace/Delete: replace character with space
    if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();
        let index = pos + (e.key === "Delete" ? 0 : -1);
        if (index >= 0 && index < text.length) {
            node.nodeValue = text.substring(0, index) + " " + text.substring(index + 1);
            setCaret(node, e.key === "Delete" ? index + 1 : index);
        }
        edit(() => {requestAsync("POST", "/wall", next_edit,  JSON.stringify({
            text: " ",
            position: index
        }))}, 1000);
        return;
    }

    // Allow only printable ASCII
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        const code = e.key.charCodeAt(0);
        if (code >= 32 && code <= 126) {
            e.preventDefault();

            // Overwrite at current position
            if (pos < text.length) {
                node.nodeValue = text.substring(0, pos) + e.key + text.substring(pos + 1);
            } else {
                // If caret is at end, append
                node.nodeValue = text + e.key;
            }
            setCaret(node, pos + 1);
            
            console.log("Inserted:", e.key, "at position", pos);
            edit(() => {requestAsync("POST", "/wall", next_edit,  JSON.stringify({
                text: e.key,
                position: pos
            }))}, 1000);
        } else {
            e.preventDefault();
        }
    }
});

// Prevent non-ASCII pastes
editor.addEventListener("paste", (e) => {
    e.preventDefault();
    const raw = (e.clipboardData || window.clipboardData).getData('text');
    const clean = raw.replace(/[^\x20-\x7E]/g, '');
    document.execCommand("insertText", false, clean); // Still gets overwritten by keydown
});

function setCaret(node, pos) {
    const sel = window.getSelection();
    const range = document.createRange();
    range.setStart(node, pos);
    range.setEnd(node, pos);
    sel.removeAllRanges();
    sel.addRange(range);
}

function sendEdit(value, pos) {

}

function requestAsync(method, theUrl, callback, body)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open(method, theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(body);
}

