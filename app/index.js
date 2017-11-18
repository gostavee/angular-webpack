/**
* Required modules
*/
import path from 'path';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './resources/css/main.css';
/**
* All Components
*/
import {mainComponent} from './components/main/main.component';
import {sidebarComponent} from './components/sidemenu/sidemenu.component';
import {albumComponent} from './components/album/album.component';
/**
* Configration and routing
*/
import {config} from './config';
/**
* Angular App
*/
const App = angular.module('app', [uiRouter]);
/**
* App configration
*/
App.config(config);
/**
* Register Components
*/
App.component('mainApp', mainComponent);
App.component('sideMenu', sidebarComponent);
App.component('album', albumComponent);
