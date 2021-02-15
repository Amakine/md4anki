class Card {
    constructor({note_id, front, black='', clozeeValue}) {
       this.note_id = note_id
       this.front = front
       this.back = back
       this.clozeeValue = clozeeValue
    }
}

module.exports = Card;