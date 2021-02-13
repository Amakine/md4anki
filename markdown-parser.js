//const minify = require('html-minifier').minify;

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
    render(mdString) {
        const html = mdParser.render(mdString);
        const minifiedHtml = html.replace(/\n/g, '') //minify(html, { removeAttributeQuotes: true });
        return minifiedHtml;
    }
}

module.exports = MarkdownParser;