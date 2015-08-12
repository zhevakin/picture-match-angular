import './settings.css';
import template from './settings.html';
import {SettingsController as controller} from './settings.controller';

let SettingsComponent = function () {
    return {
        template,
        controller,
        controllerAs: 'settings',
        bindToController: true,
        scope: {
            gameMode: '=',
            isGameFinished: '=',
            remainingPairsNum: '=',
            startGame: '&onStartGame',
            username: '='
        },
        restrict: 'E',
        replace: true
    };
};

export {SettingsComponent};