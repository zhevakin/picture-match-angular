import angular from 'angular';
import {SettingsComponent} from './settings.component';

let settingsModule = angular.module('settings', [])
    .directive('settings', SettingsComponent);

export { settingsModule };