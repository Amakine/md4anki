const fs = require('file-system')
const StringBuilder = require('string-builder')
const Card = require('./card')

const MarkdownParser = require('./markdown-parser.js')
const mdParser = new MarkdownParser();

const createSlug = (titles, clozeeValue) => {
    
    const clean = (str) =>
    //.replace(/\s+/g, '-')
    str
        .replace(/(^#+\s*)/, '')
        .trim()
        .toLowerCase()
    
    const getLastXCells = (arr, x) =>
        arr.slice(lines.length-x, lines.length)



    const lines = titles.split('\n');

    if (clozeeValue) {
        const n = lines.length;
        lines[n-1] += (';;' + clozeeValue)
    }

    const scope = (clozeeValue) ? 1 : 2;
    const lastTwo = getLastXCells(lines, scope)
    
    const lastTwoCleaned = lastTwo.map(clean);
    
    const slug = lastTwoCleaned
        .join('::')

   console.log('SLUG', slug)
    return slug;
        //.replace(/::[^(::)]*$/, ';;')
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
        
        
        // "1、2、3".split(/(、)/g) == ["1", "、", "2", "、", "3"]
        const rawCards = mdString.split(new RegExp(/^(#.*)$/, 'm')) // => [title, body, title, body, title, ...]
        
        const titleHierarcy = Array(6).fill(''); //h1, h2, ..., h6
        rawCards.shift(); // Remove the first empty cell / text body on top of first header

        rawCards.filter(card => (card)) // filter empty text bodies (between two headers)
        rawCards.forEach((str) => {
            const match = str.match(/^#+/); // # or ##, or .. or ######
            
            const isHeader = (match)
            const isTextBody = (!isHeader && (str.trim()))

            if (isHeader) {
                //const sharpsOnly = match[0]               // ###
                //const headerWithSharps = match.input;     // ### title
                //const headerSharpCount = match[0].length; // 3

                const titleNumber      = match[0].length; // 3 (1-6) (h1, ..., h6)
                const header = match.input.replace(/^#*/, '').trim()

                titleHierarcy[titleNumber-1] = header;
                for(let i = titleNumber; i < titleHierarcy.length; i++) // If we move header upwards in hierarchy, lower headers are forgotten
                    titleHierarcy[i] = ''
            }
            else {
                /*console.log(titleHierarcy.join('\n').trimEnd())
                console.log('-----------')
                console.log(str.trim())
                console.log('-----------')
                console.log('\n\n')*/

                
                const front = '## ' + titleHierarcy
                                .join(' :: ')
                                .repeat(/^.*::/g, '') // remove h1 title
                                .trimEnd();
                
                const note_id = createSlug(front);
                const back = str.trim();
                

                const newCard = new Card({
                    front: front,
                    back: back,
                    note_id,
                });

                const match = newCard.back.match(/`.*`/g);
                if (match) {
                    match.forEach((clozee) => {
                        let clozeeValue = clozee.replace(/`/g, '');

                        const backMd = newCard.back
                            .replace(clozee, '<code class="clozee">' + clozeeValue + '</code>')

                            
                        let clozeeCard = {
                            ...newCard,
                            front: mdParser.render(newCard.front),
                            back: mdParser.render(backMd),
                            note_id: createSlug(newCard.front, clozeeValue)
                        }
                            
                        cards.push(clozeeCard)
                    })
                }
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

        fs.writeFile('debug.html', TSVstring, {encoding: 'utf8'}, (err) => {

        });

        console.log('jjaaa');
        
        
    }
}

module.exports = CardParser