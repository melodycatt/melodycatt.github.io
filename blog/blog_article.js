const article_text = document.getElementById("article-text");
console.log(article_text.innerHTML);
console.log(marked.parse(article_text.innerHTML));
console.log(marked.parse(`this is one element\n\nand this might be another`));
console.log(`# this is a heading\nbut this is not\n# this is also a heading
but this might not be`);
//article_text.innerHTML = marked.parse(article_text.innerHTML)

async function loadMarkdown(name) {
    try {
        // Fetch the Markdown file
        const response = await fetch(`./${name}.md`); // Change to your actual file path
        const markdownText = await response.text();

        // Convert Markdown to HTML using Marked.js
        article_text.innerHTML = marked.parse(markdownText);
    } catch (error) {
        console.error("Error loading Markdown:", error);
        document.getElementById('content').textContent = "Failed to load content.";
    }
}

loadMarkdown(article_text.getAttribute("data-name"));