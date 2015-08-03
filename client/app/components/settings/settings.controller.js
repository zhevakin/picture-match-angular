class SettingsController {
    constructor(gameService) {
        this.username = 'Xvakin';
        this.gameService = gameService;
    }

    settingsFormSubmit() {
        console.log('Submit!');
        this.startGame();
    }
}

SettingsController.$inject = ['gameService'];

export {SettingsController};