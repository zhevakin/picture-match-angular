import './app.css';
import angular from 'angular';
import 'angular-touch';
import {gameModule, settingsModule, cardModule} from './components/components';
import {gameServiceModule, instagramModule} from './services/services';

angular.module('app', [
    'ngTouch',
    settingsModule.name,
    gameModule.name,
    cardModule.name,
    gameServiceModule.name,
    instagramModule.name
]);