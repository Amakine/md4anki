const CardParser = require('./card-parser')

const SUPPORTED_FILE_FORMATS = ['md', 'markdown']


require('yargs')
  .command(
    '$0 <source> [output]',
    'Converts .md to .tsv!',
    () => {},
    (argv) => {
        const args = processArgs(argv)
        parser = new CardParser(args)
        parser.parse()       
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
function processArgs(argv) {
    let { source, output, md } = argv

    if (!source) {
        console.log('Source not defined!');
        return;
    }
    const parts = source.split('.')
    const sourceName = parts[0];
    const fileType = parts[parts.length-1]
    const hasFileType = (parts.length >= 2)
    const hasSupportedFileType = (
        hasFileType
        &&
        SUPPORTED_FILE_FORMATS.includes(fileType)
    )
    
    if (hasFileType && !hasSupportedFileType) {
        console.log(`File "${source}" has unsupported filetype!`);
        process.exit(1)
    }

    if (!hasFileType)
        source += '.md'
    

    if (!output) {
        output = sourceName + '.tsv'
    }
    else if (!output.endsWith('.tsv')) {
        if (!output.includes('.'))
            output += '.tsv'
        else
            console.log('WARNING: Unsupported output format, output might not be what you wanted!'); 
    }

    //console.log(source, output);

    return {
        //...argv,
        source,
        output,
        md: Boolean(md)
    }
}

//mdcards spanish.md -o spanish.tsv

