const Paragraph = require('../models/paragraph')

class ParagraphParser {
    parse(markdownString) {
        const paragraphs = []

        // Matches inside codeblocks, well, whoops
        const divs = ['#+ ', '---']
        const cardDividerRegex = new RegExp(
            '^((?:' + divs.join('|') + ').*)$'
        )
        
        const rawParagraphs = markdownString.split(new RegExp(/^((?:#|---).*)$/, 'm')) // => [title, body, title, body, title, ...]
                
        const titleHierarchy = Array(6).fill(''); 
        rawParagraphs.shift();                          // Remove the first empty cell / text body on top of first header
        rawParagraphs.filter(card => (card.trim()))     // filter empty text bodies (between two headers)
        rawParagraphs.forEach((mdString) => {
            const titleMatch = mdString.match(/^#+/);  // # or ##, or .. or ######
            const isHeader = (titleMatch)

            if (isHeader) {                
                const sharps = titleMatch[0]            // ###
                const titleNumber = sharps.length;      // 3 (1-6) (h1, ..., h6)
                const header = titleMatch.input.replace(/^#*/, '').trim()

                titleHierarchy[titleNumber-1] = header;
                for(let i = titleNumber; i < titleHierarchy.length; i++) // If we move header upwards in hierarchy, lower headers are forgotten
                    titleHierarchy[i] = ''
            }
            else {
                paragraphs.push(new Paragraph({
                    titleHierarchy: [...titleHierarchy],
                    textBody: mdString.trim()
                }))
            }
        })
        return paragraphs
    }
}


module.exports = ParagraphParser