class Card {
    constructor({note_id, front, back, clozee, backMd, frontMd}) {
        this.note_id = note_id
        this.front = front
        this.back = back
        this.clozee = clozee

        this.backMd = backMd
        this.frontMd = frontMd
    }
}

module.exports = Card;