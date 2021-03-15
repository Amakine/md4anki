#!/usr/bin/env node


const { parseFile } = require('./parser')

const SUPPORTED_INPUT_FORMATS = ['md', 'markdown']
const SUPPORTED_OUTPUT_FORMATS = ['tsv', 'apkg']


require('yargs')
  .command(
    '$0 <source> [output]',
    'Converts .md to .tsv!',
    () => {},
    (argv) => {
        const args = processArgs(argv)      
        parseFile(args)
    }
  )
  .option('-md', {
      type: 'boolean',  
      description: 'keep as markdown (parses to html by default)'
  })
  .argv


  /**
   * Validifies arguments and sets defaults
   * Exits application if invalid arguments are received
   * @param {object} argv 
   * @returns {object} modified version of the received argv object
   * @private
   */
function processArgs({source, output = '', md=false}) {

    let outputPath = output
    let sourcePath = source
    const parseToMarkdown = md

    exitProcessIf(
        (!sourcePath),
        'Source not defined!'
    )

    exitProcessIf(
         ( sourcePath.split('.').length > 2
        || outputPath.split('.').length > 2) ,
        "Filepaths with multiple periods (\".\") are not supported"
    )

    const parts = sourcePath.split('.')
    if (parts.length <= 1) sourcePath += '.md'

    const sourceFileType = (parts.length <= 1) ? 'md' : parts[1]
    const sourcePathWithoutFileType = parts[0]
    
    
    exitProcessIf(
        (!SUPPORTED_INPUT_FORMATS.includes(sourceFileType)),
        `File "${sourcePath}" has unsupported filetype!`
    )
    
    const outputParts = outputPath.split('.')
    if (!outputPath) {
        outputPath =  sourcePathWithoutFileType + '.tsv'
    }
    else if (outputParts.length <= 1) {
        outputPath += '.tsv'
    }
    else  { // if user provided output path with file type
        const outputType = outputParts[1]

        exitProcessIf(
            (!SUPPORTED_OUTPUT_FORMATS.includes(outputType)),
            'WARNING: Unsupported output format, output might not be what you wanted!'
        )
    }

    return {
        sourcePath,
        outputPath,
        parseToMarkdown: Boolean(parseToMarkdown)
    }
}

function exitProcessIf(bool, errorMessage) {
    if (bool) {
        console.log(errorMessage)
        process.exit(1)
    }
}


