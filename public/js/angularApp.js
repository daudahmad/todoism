'use strict';

/* App Module */

var todolistApp = angular.module('todolist', [
	'todolistControllers',
	'ui.router',
	'xeditable'
]);

todolistApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
    		.state('home', {
      			url: '/home',
      			templateUrl: '/partials/home.html',
      			controller: 'TodoListController',
      			/*resolve: {
					notePromise: ['totolists', function(totolists){
				      	return totolists.getAll();
				    }]
				}*/
    		})
		
		$urlRouterProvider.otherwise('home');
}]);

todolistApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

$.findFromArray = function(property, value, arr) {
    var matching = $(arr).filter(function(index, elem)
    {
        return elem[property] === value;
    }); 
    return matching.length > 0;
};