import _ from 'lodash';

class GameController {
    constructor($timeout, gameService) {
        this.gameService = gameService;
        this.$timeout = $timeout;
        this.cards = this.gameService.getState();

        this.card1 = null;
        this.card2 = null;
        this.pairedCardsIds = [];
        this.isGameFinished = false;
    }

    startGame() {
        this.gameService.loadCards((data) => {
            // Load cards data
            this.cards = data;

            // Init game state
            this.card1 = null;
            this.card2 = null;
            this.pairedCardsIds = [];
            this.isGameFinished = false;
        });
    }

    isCardSelected(card) {
        let isSelected = false;
        if (this.card1) {
            isSelected = card.index === this.card1.index;
        }
        if (this.card2 && !isSelected) {
            isSelected = card.index === this.card2.index;
        }

        return isSelected;
    }

    isCardPaired(card) {
        return _.includes(this.pairedCardsIds, card.id);
    }

    cardClick(card) {
        if (this.isCardPaired(card) || this.isCardSelected(card)) {
            return;
        }

        if (!this.card1) {
            this.card1 = card;
        } else if (!this.card2) {
            this.card2 = card;
            if (this.card1.id === this.card2.id) {
                this.pairedCardsIds.push(card.id);
                if (this.pairedCardsIds.length === this.cards.length / 2) {
                    this.win();
                }
            }

            this.$timeout(()=> {
                this.card1 = null;
                this.card2 = null;
            }, 500);
        }
    }

    win() {
        this.isGameFinished = true;
    }

}

GameController.$inject = ['$timeout', 'gameService'];

export {GameController};