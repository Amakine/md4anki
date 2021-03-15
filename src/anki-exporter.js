const path = require('path')
const fs = require('file-system')
const Template = require('./models/template')
const AnkiExport = require('anki-apkg-export-multi-field').default;

class AnkiExporter {
    constructor() {}

    saveAPKG (outputPath, cards, exportId) {
        const frontPath = path.join(__dirname, './../resources/front.html')
        const backPath = path.join(__dirname, './../resources/back.html')
        const scriptsPath = path.join(__dirname, './../resources/scripts.js') 

        // Defauls to slightly modified version of Typora OneDark theme by Sweatran!! 
        // https://github.com/sweatran/typora-onedark-theme
        const stylesPath = path.join(__dirname, `./../resources/styles.css`)

        const frontTemplate = fs.readFileSync(frontPath, 'utf8')
        const backTemplate = fs.readFileSync(backPath, 'utf8');
        const scriptsTemplate = fs.readFileSync(scriptsPath, 'utf8')
        const cssTemplate = fs.readFileSync(stylesPath, 'utf8');

        const questionFormat = frontTemplate + '<script>'+ scriptsTemplate +'</script>'
        const answerFormat = backTemplate
        const css = cssTemplate

        const fields = ['Note ID', 'Front', 'Back', 'Clozee'];

        [frontTemplate, backTemplate, scriptsTemplate, cssTemplate].forEach(temp => {
            if (temp.match(/'/)) {
                console.log(
                    "\nTemplates should not contain '-character, breaks the Anki SQL",
                    "(and idk how to escape them lol):\n--------------\n\n", temp
                )
                process.exit(1)
            }
        })

        const template = new Template({
            questionFormat,
            answerFormat,
            css,
            fields
        })
        
        const fileName = outputPath.split('.')[0]
        const apkg = new AnkiExport(fileName, template);
        
        cards.forEach(card =>
            apkg.addCard([...card.getFields()], { exportId }) 
        )
        
        console.log(
            path.resolve(path + '.apkg')
        )
        
        apkg
        .save()
        .then(zip => {
            fs.writeFile(fileName + '.apkg', zip, (err) => {
                if (err) console.log(err)
            });

            console.log(`\n\n${cards.length} cards exported to ${fileName}.apkg!`)
        })
        .catch(err => console.log(err.stack || err));
    }
}

module.exports = AnkiExporter