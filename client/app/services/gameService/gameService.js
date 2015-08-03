import {Game} from './gameService.factory';
import angular from 'angular';

let gameServiceModule = angular.module('gameService', [])
    .factory('gameService', Game);

export {gameServiceModule};