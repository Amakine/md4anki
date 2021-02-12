const fs = require('file-system')
const StringBuilder = require('string-builder')
const Card = require('./card')
const mdParser = require('markdown-it') ({
    html: true,
    linkify: true,
    typographer: true
  });


const createSlug = (str) => {
    const lines = str.split('\n');
    const lastTwo = lines.slice(lines.length-2, lines.length)
    
    return lastTwo.map(card =>
        card.replace(/(^#+\s*)/, '')
            .replace(/\s+/g, '-')
            .trim()
            .toLowerCase()
    )
    .join('::')
}

class CardParser {
    constructor(args = {}) {
        this.args = args
    }

    async parse() {
        const {source, output, markdown} = this.args
        
        const cards = [];
        const mdString = fs.readFileSync(source, 'utf8')
        .replace('[TOC]', '')
        .replace('\t', '    ')
        .replace(/\r\n/g, '\n')
        //'mo' //front.split('\n').join('::')
        //.map(title => title.replace(/^#+/, '').trim() )
        //.filter(card => (card))
        
        console.log(typeof mdString)
        
        
        // "1、2、3".split(/(、)/g) == ["1", "、", "2", "、", "3"]
        const rawCards = mdString.split(new RegExp(/^(#.*)$/, 'm')) // => [title, body, title, body, title, ...]
        
        const titleHierarcy = Array(6).fill(''); //h1, h2, ..., h6
        //rawCards.shift(); // Remove the first empty cell / text body on top of first header

        //const mdParser = new MarkdownIt();
        //var result = ;

        rawCards.filter(card => (card)) // filter empty text bodies (between two headers)
        rawCards.forEach((str) => {
            const match = str.match(/^#+/); // # or ##, or .. or ######
            
            const isHeader = (match)
            const isTextBody = (!isHeader && (str.trim()))

            if (isHeader) {
                const sharpsOnly = match[0]               // ###
                const headerWithSharps = match.input;     // ### title
                const headerSharpCount = match[0].length; // 3
                const titleNumber      = match[0].length; // 3 (1-6) (h1, ..., h6)

                titleHierarcy[titleNumber-1] = headerWithSharps;    // If we move header upwards in hierarchy, lower headers are forgotten
                for(let i = titleNumber; i < titleHierarcy.length; i++)
                    titleHierarcy[i] = ''
            }
            else {
                console.log(titleHierarcy.join('\n').trimEnd())
                console.log('-----------')
                console.log(str.trim())
                console.log('-----------')
                console.log('\n\n')

                
                const front = titleHierarcy
                                .join('\n')
                                .trimEnd();
                
                const note_id = createSlug(front);
                
                    
                const back = str.trim();
                
                //md.render('# markdown-it rulezz!')

                const newCard = new Card({
                    note_id,
                    front: mdParser.render(front).replace(/\s+/g, ''),
                    back: mdParser.render(back).replace(/\s+/g, '')
                });
                cards.push(newCard)
            }
            

        })
        
        const sb = new StringBuilder();
        cards.forEach(card => {
            sb.append([card.note_id, card.front, card.back].join('\t'));
            sb.appendLine();
        })

        const TSVstring = sb.toString();
        
        

        fs.writeFile(output, TSVstring, {encoding: 'utf8'}, (err) => {
            if (err)
                return console.log('Error: ', err);

            
            console.log('TSV created');
        })

        console.log('jjaaa');
        
        
    }
}

module.exports = CardParser