import {Instagram} from './instagram.factory';
import angular from 'angular';

let instagramModule = angular.module('instagram', [])
    .factory('instagram', Instagram);

export {instagramModule};