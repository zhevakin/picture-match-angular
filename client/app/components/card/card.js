import angular from 'angular';
import {CardComponent} from './card.component';

let cardModule = angular.module('card', [])
    .directive('card', CardComponent);

export { cardModule };