class CardController {
    constructor(gameService) {
        this.gameService = gameService;
    }

    cardClick() {
        this.gameService.cardClick(this.data);
    }
}

CardController.$inject = ['gameService'];

export {CardController};