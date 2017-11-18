export const config = ($stateProvider, $urlRouterProvider,$locationProvider) => {
    $stateProvider
        /**
        * Main route
        */
        .state('main', {
            url: '/main',
            template: '<main-app></main-app>'
        })
        /**
        * Album route
        */
        .state('album', {
          url: '/album:id',
          template: '<album></album>'
        })
        /**
        * Movie route
        */
        .state('movie', {
          url: '/movie:id',
          template: '<movie></movie>'
        })
        /**
        * Default route
        */
        $urlRouterProvider.otherwise('/main');
        $locationProvider.html5Mode(true).hashPrefix('!');
};
