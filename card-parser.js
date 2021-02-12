const fs = require('file-system')
const StringBuilder = require('string-builder')

class CardParser {
    constructor(args = {}) {
        this.args = args
    }

    async parse() {
        const {source, output, md} = this.args

        const cards = [];
        const mdString = fs.readFileSync(source, 'utf8')
            .replace('[TOC]', '')
            .replace('\t', '    ')

        console.log(typeof mdString)

        
        // "1、2、3".split(/(、)/g) == ["1", "、", "2", "、", "3"]
        const rawCards = mdString.split(new RegExp(/^(#.*)$/, 'm')) // => [title, body, title, body, title, ...]
        
        const titleHierarcy = Array(6).fill(''); //h1, h2, ..., h6
        //rawCards.shift(); // Remove the first empty cell / text body on top of first header
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
                
                const front = titleHierarcy.join('\n').trimEnd();
                const back = str.trim();

                const newCard = new Card({
                    'id': 'id lol',
                    front,
                    back
                });
            }
            

        })
        
        
        

        fs.writeFile(output, mdString, {encoding: 'utf8'}, (err) => {
            if (err)
                return console.log('Error: ', err);

            
            console.log('TSV created');
        })

        console.log('jjaaa');
        
        
    }
}

module.exports = CardParser