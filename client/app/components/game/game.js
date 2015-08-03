import angular from 'angular';
import {GameComponent} from './game.component';

let gameModule = angular.module('game', [])
    .directive('game', GameComponent);

export { gameModule };