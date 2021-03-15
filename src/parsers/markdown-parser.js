const PreserveNewline = require("markdown-it-preserve-newline")
const mdParser = require('markdown-it') ({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true
});

mdParser.use(
    PreserveNewline
)

class MarkdownParser {
    constructor({commonMark=false}) {
        
    }
    render(mdString) { 
        const html = mdParser.render(mdString)
        const minifiedHtml = html.replace(/\n/g, ' ')
            .replace(/<code>/g, '<code class="clozee">')
        return minifiedHtml;
    }
}

module.exports = MarkdownParser;