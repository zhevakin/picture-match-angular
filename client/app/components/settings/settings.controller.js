class SettingsController {
    constructor(gameService) {
        this.gameService = gameService;
    }

    settingsFormSubmit() {
        this.startGame();
    }

    setGameMode(mode) {
        this.gameMode = mode;
    }

}

SettingsController.$inject = ['gameService'];

export {SettingsController};