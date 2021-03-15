const fs = require('file-system')
//const path = require('path')

const StringBuilder = require('string-builder')

const Card = require('./models/card')
const Paragraph = require('./models/paragraph')

const CardParser = require('./parsers/CardParser')
const ParagraphParser = require('./parsers/paragraph-parser')
const AnkiExporter = require('./anki-exporter')


const parseFile = (args) => {
    const {sourcePath, outputPath, parseToMarkdown} = args
    
    const mdString = fs.readFileSync(sourcePath, 'utf8')
    .replace('[TOC]', '')
    .replace('\t', '    ')
    .replace(/\r\n/g, '\n')
    
    const cardParser = new CardParser()
    const paragraphParser = new ParagraphParser()
    
    const cards = []
    const paragraphs = paragraphParser.parse(mdString)

    paragraphs.forEach((paragraph) => {
        const paragraphCards = cardParser.parse(paragraph)
        cards.push(...paragraphCards)
    })

    if (!cards.length) {
        console.log('No cards found from markdown file!');
    }
    
    const exportId = 'exportId' + Date.now().toString()
    const tags = [exportId].join(' ')

    const fileType = outputPath.split('.')[1]
    
    if (fileType == 'tsv') {
        const sb = new StringBuilder();
        cards.forEach(card => {
            sb.append([...card.getFields(), tags].join('\t'));
            sb.appendLine();
        })

        const outputTSV = sb.toString();
        fs.writeFile(outputPath, outputTSV, {encoding: 'utf8'}, (err) => {
            if (err) return console.log('Error: ', err);
            console.log('TSV created');
        })

        fs.writeFile('test_output/debug.html', '<style>.clozee {background-color: red;}</style>' + outputTSV, {encoding: 'utf8'}, (err) => {
            if (err)console.log(err)
            console.log("debug.html created")
        });

        console.log('\n')
        console.log(`${cards.length} cards exported to ${outputPath}!`)
    
        console.log(
            "\nTo query and delete old obsolete cards in Anki (after successful import!!):\n",
            `"note:MD4ANKI deck:${outputPath.split('.')[0]} -tag:${exportId}"`,
            "\nAlways keep backups!\n"
        )
    }  
    else if (fileType == 'apkg') {
        const ankiExporter = new AnkiExporter()
        ankiExporter.saveAPKG(outputPath, cards, exportId)
    }


    
}

module.exports.parseFile = parseFile


