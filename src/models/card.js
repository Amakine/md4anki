class Card {
    constructor({note_id, front, back='', clozee=''}) {
       this.note_id = note_id
       this.front = front
       this.back = back
       this.clozee = clozee 
    }

    getFields() {
        return [
            this.note_id,
            this.front,
            this.back,
            this.clozee,
        ]
    }
}

module.exports = Card;