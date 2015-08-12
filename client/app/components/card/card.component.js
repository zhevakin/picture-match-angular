import './card.css';
import template from './card.html';
import {CardController as controller} from './card.controller';

let CardComponent = function () {
    return {
        template,
        scope: {
            data: '='
        },
        controller,
        controllerAs: 'card',
        bindToController: true,
        restrict: 'E',
        replace: true
    };
};

export {CardComponent};