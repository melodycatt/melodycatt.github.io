const editor = document.getElementById("wall");

let edit_timeout;
let edit_buffer = [];
function edit(body) {
    /*() => {requestAsync("POST", "/wall", next_edit,  JSON.stringify({
                text: e.key,
                position: pos
            }))}, 1000
    console.log*/
    if(edit_timeout) {
        clearInterval(edit_timeout);
    }
    edit_buffer.push(body);
    edit_timeout = setTimeout(() => { requestAsync("POST", "/wall", () => {edit_buffer = []}, JSON.stringify(edit_buffer)) }, 1000)
}

function next_edit() {
    if (edit_buffer.length > 0) {
        edit_buffer[0]();
        edit_buffer.shift()
    }
}

let text = requestAsync("GET", "/wall", (b) => {editor.innerText = b; editor.offsetHeight; console.log(b[0], b[0] === "\u{00A0}", b[0] === "\u{0020}", editor.innerText[0] === "\u{00A0}")});
scroll = getUnits(editor, "width", "px");
scroll = scroll.substring(0, scroll.length - 2) * 0.5
console.log(scroll)
window.scrollTo(4800, 4800);

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
    
    let pos = range.startOffset;
    const text = node.nodeValue;
    
    if (e.key === "ArrowLeft" && text[pos - 1] === "\u{2060}") {
        e.preventDefault()
        setCaret(node, pos - 2);
    }
    if (e.key === "ArrowRight" && text[pos] === "\u{2060}") {
        e.preventDefault()
        setCaret(node, pos + 2);
    }
    if (e.key === "ArrowDown") {
        e.preventDefault()
        setCaret(node, pos + 2000);
    }
    if (e.key === "ArrowUp") {
        e.preventDefault()
        setCaret(node, pos - 2000);
    }
    // Handle Backspace/Delete: replace character with space
    if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();
        let index = pos + (e.key === "Delete" ? 0 : -1);
        if (text[index] === "\u{2060}") {
            index -= 1;
        }
        if (index < 0 || index >= 1000000) return
        if (index >= 0 && index < text.length) {
            node.nodeValue = text.substring(0, index) + "\u{00A0}" + text.substring(index + 1);
            setCaret(node, e.key === "Delete" ? index + 1 : index);
        }
        edit({
            text: "\u{00A0}",
            position: index
        });
        return;
    }

    if (e.key === "Enter") {
        e.preventDefault();
            let index = pos + 1000;
        setCaret(node, index);
        return
    }

    // Allow only printable ASCII
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
        let key = e.key
        if (e.key === " ") {
            key = "\u{00A0}"
            console.log( key === "\u{00A0}")
        }
        /*if (e.key === "|") {
            //key = "\u{2758}";
            key = "\u{23D0}";
        }
        if (e.key === "-") {
            //key = "\u{2758}";
            key = "\u{2011}";
        }*/
        if (pos < 0 || pos >= 1000000) return
        const code = e.key.charCodeAt(0);
        if (code >= 32 && code <= 126) {
            e.preventDefault();
            if (text[pos] === "\u{2060}") {
                setCaret(node, pos + 1);
                pos++;
            }
            // Overwrite at current position
            node.nodeValue = text.substring(0, pos) + key + text.substring(pos + 1);
            setCaret(node, pos + 1);
            
            console.log("Inserted:", key, "at position", pos, key === "\u{00A0}");
            edit({
                text: key,
                position: pos
            });
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

