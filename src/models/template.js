class Template {
    constructor({questionFormat, answerFormat, css, fields}) {
        this.cards = [{
            name: 'Basic+Clozee',
            answerFormat,
            questionFormat
        }]
        this.css = css
        this.fields = [...fields]
    }
  }

  module.exports = Template