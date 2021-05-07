class Game {
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
        this.characters = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
        this.deck = function() {
            let output = [];
            for (let suit of this.suits) {
                for (let char of this.characters) {
                    output.push(`${char} of ${suit}`);
                }
            }
            return output;
        },
        this.dealt = [],
        this.computerHand = [],
        this.playerHand = []

    }

    deal = () => {

        this.dealt = [];
        this.computerHand = [];
        this.playerHand = [];
        this.scoreReference = {
            'High Card': 1,
            '1 Pair': 2,
            '2 Pair': 3,
            '3 of a Kind': 4,
            'Straight': 5,
            'Flush': 6,
            'Full house': 7,
            '4 of a Kind': 8,
            'Straight Flush': 9,
            'Royal Flush': 10            
        }

        while (this.dealt.length < 10) {
            let choice = this.deck()[Math.floor(Math.random() * 52)];
            if (!this.dealt.includes(choice)) {
                this.dealt.push(choice)
            } 
        }

        for (let i in this.dealt) {
            if (Number(i) % 2 === 0) {
                this.playerHand.push(this.dealt[i]) 
            } else {
                this.computerHand.push(this.dealt[i]) 
            }
        }
        
        return {'player': this.playerHand, 'computer': this.computerHand}
    }

    reDeal = (list) => {

        for (let i = 4; i > -1; i--) {
            if (list.includes(Number(i))) {
            this.playerHand.splice(Number(i), 1)
            }
        }


        while (this.playerHand.length < 5) {
            let choice = this.deck()[Math.floor(Math.random() * 52)];
            if (!this.dealt.includes(choice)) {
                this.dealt.push(choice);
                this.playerHand.push(choice);
            } 
        }

        return this.playerHand;

    }

    checkPlayerHand = () => {

    }

    checkComputerHand = () => {

    }

}  
