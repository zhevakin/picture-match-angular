class SettingsController {
    constructor(gameService) {
        this.gameService = gameService;
    }

    settingsFormSubmit() {
        console.log('Submit!');
        this.startGame();
    }

    setGameMode(mode) {
        this.gameMode = mode;
    }

}

SettingsController.$inject = ['gameService'];

export {SettingsController};