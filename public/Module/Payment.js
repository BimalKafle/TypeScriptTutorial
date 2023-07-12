export class Payment {
    constructor(a, b, c) {
        this.receipent = a;
        this.detail = b;
        this.amount = c;
    }
    format() {
        return `${this.receipent}is owed $${this.amount}for${this.detail}`;
    }
}
