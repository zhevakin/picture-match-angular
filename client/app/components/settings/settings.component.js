import './settings.less';
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
            startGame: '&onStartGame',
            username: '='
        },
        restrict: 'E',
        replace: true
    };
};

export {SettingsComponent};