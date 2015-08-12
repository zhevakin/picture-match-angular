import './game.css';
import template from './game.html';
import {GameController as controller} from './game.controller';

let GameComponent = function () {
    return {
        template,
        controller,
        controllerAs: 'game',
        bindToController: true,
        restrict: 'E',
        replace: true
    };
};

export {GameComponent};