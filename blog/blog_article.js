const article_text = document.getElementById("article-text");

marked.use({
    gfm: true
})
console.log(article_text.innerHTML);
console.log(marked.parse(article_text.innerHTML));
console.log(marked.parse(`this is one element\n\nand this might be another`));
console.log(`# this is a heading\nbut this is not\n# this is also a heading
but this might not be`);
//article_text.innerHTML = marked.parse(article_text.innerHTML)

async function loadMarkdown(name) {
    let markdownText
    try {
        // Fetch the Markdown file
        const response = await fetch(`./${name}.md`); // Change to your actual file path
        markdownText = await response.text();
    } catch (error) {
        console.error("Error loading Markdown:", error);
        markdownText = "# this article failed to load for some reason! this is a fallback, so it might be outdated. please contact me if you see this.\n\n" + article_text.innerHTML;
    }
    let footnotes = [...markdownText.matchAll(/^\[!foot (.+)\]/gm)];
    markdownText = markdownText.replaceAll(/^\[!foot (.+)\]/gm, "");
    article_text.innerHTML = marked.parse(markdownText);

    for(let i = 0; i < footnotes.length; i++) {
    //for(let i in footnotes) {
        let note = document.createElement('div');
        note.id = `footnote${i}`;
        note.className = "footnote";
        note.innerHTML = marked.parseInline(`**\[${i}\]:** ` + footnotes[i][1] + " ");
        let backlink = document.createElement('a');
        let link = document.querySelector(`a[href="#footnote${i}"]`);
        //console.log(i, `a[href="#footnote${i}]"`, link.id, link)
        link.id = `footnote${i}link`;
        backlink.innerHTML = "⤴";
        backlink.href = `#footnote${i}link`;
        backlink.style.display = "inline-block";
        note.appendChild(backlink);
        document.body.appendChild(note);
    }

    //const link = document.querySelector(`a[href="#footnote${0}"]`);
    //console.log(0, `a[href="#footnote${0}]"`, link.id, link)

    // Convert Markdown to HTML using Marked.js
    //article_text.innerHTML = marked.parse(markdownText);
}

loadMarkdown(article_text.getAttribute("data-name"));
