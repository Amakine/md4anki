const Card = require('../models/card.js');
const MarkdownParser = require('./markdown-parser.js')
const mdParser = new MarkdownParser({});

// https://github.com/yhatt/markdown-it-incremental-dom

class CardParser {

    parse(paragraph) {
        const { textBody, titleHierarchy } = paragraph
        const clozeeCards = []
        const flashCards = []
        const match = paragraph.textBody.match(/`[^`]+`/g);
        
        this.cardCount = {}
        
        const titles = [...paragraph.titleHierarchy]
        .filter(title => (title))
        
        if (titles.length >= 2) titles.shift()      // removes the main title from card (takes too much space)        
        
        const title = '### ' + titles.join(' :: ');

        const isClozee = (match)
        const isFlashcard = (!match && (paragraph.textBody.trim()))
        
        if (isClozee) {
            match.forEach((clozee) => {
                const clozeeValue = clozee.replace(/`/g, '').toLowerCase();

                const body = paragraph.textBody
                    .replace(clozee, '<code class="clozee" id="current-clozee">' + getPadding(clozeeValue) + '</code>')

                const front = title + '\n' + body
                const back = ''
                const note_id = this.getNoteId([...paragraph.titleHierarchy], clozeeValue);

                clozeeCards.push(new Card({
                    front: mdParser.render(front),
                    back:  mdParser.render(back),
                    clozee: clozeeValue,
                    note_id
                }))
            }, this)
        }
        else if (isFlashcard) {
            const front = title;
            const back = paragraph.textBody;

            flashCards.push(new Card({
                front: mdParser.render(front),
                back:  mdParser.render(back),
                note_id: this.getNoteId([...paragraph.titleHierarchy]),
            }))
        }

        const cards = [...clozeeCards, ...flashCards]
        return cards;
    }

    getNoteId(titleHierarchy, clozeeValue=undefined) {
        const clean = (str) =>
            str
            .replace(/\(.*?[)$]/, '') // removes parentheses and their contentes from Note ID
            .replace(/[\.,¿!]/g, '')  // removes common punctuation marks: dots, commas, question marks, exclamation marks
            .trim()                   
            .replace(/\s+/g, '-')     // replaces whitespace with "-"
            .toLowerCase()            // because ANKI input box can't be set case insensitive....
    
        const getLastXCells = (arr, x) =>
            arr.slice(arr.length-x, arr.length) // only last two 
    
        titleHierarchy = titleHierarchy.filter(title => (title))  // no empty titles
        
        if (clozeeValue)
            titleHierarchy.push(clozeeValue)                      // add clozee to title hierarchy
    
        const lastTwo = getLastXCells(titleHierarchy, 2)          // use last two titles to generate noteId
        const lastTwoCleaned = lastTwo.map(clean);    
        let noteId = lastTwoCleaned.join('::')                      
    
        if (clozeeValue)
            noteId = noteId.replace('::', ';;')                       // replace last title and clozee with ;;
        

        const isDuplicate = (this.cardCount[noteId])

        if (!isDuplicate) {
            this.cardCount[noteId] = 1;
        }
        else {
            this.cardCount[noteId]++
            noteId += this.cardCount[noteId]    //noteId1, noteId2, noteId3, etc
        }

        return noteId;
    }
}

const getPadding = (clozeeValue) => {
    const n = Math.ceil(clozeeValue.length/2);
    const pad = '&thinsp;'.repeat(n);
    const padding = pad + '???' + pad;

    return padding
}

module.exports = CardParser