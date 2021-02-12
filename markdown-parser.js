const minify = require('html-minifier').minify;
var result = minify('<p title="blah" id="moo">foo</p>', {
  removeAttributeQuotes: true
});

class MarkdownParser {



}