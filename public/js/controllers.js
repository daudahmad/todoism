'use strict';

/* Controllers */

var TodoListController = angular.module('todolistControllers', []);

TodoListController.controller('TodoListController', ['$scope', '$state', function ($scope, $state) {

	var todoLists = this;
	$scope.editing = false;
	
	/*todoLists.todos = [
		{text:'learn angular', done:true},
		{text:'build an angular app', done:false}
	];*/

	if( localStorage.getItem("todoLists") == null ) {
		todoLists.lists = [
			{	listTitle : "List 1" , todos : [
					{text:'Sample Task 1', done:false}
				]
			},
			{
				listTitle : "List 2" , todos : [
					{text:'Sample Task 2', done:false}
				]
			}
		];
	}
	else {
		todoLists.lists = JSON.parse( localStorage.getItem("todoLists") );
	}

	$scope.addList = function(){
		if( !$scope.listTitle || $scope.listTitle === '' ) {
			alert('Todo list name cannot be empty!');
		}
		else {
			//alert('New todo list: ' + $scope.listTitle + ' added!');
			todoLists.lists.push(
				{	
					listTitle : $scope.listTitle, 
					todos : [
						{text:'Sample Task 1', done:false}
					]
				}
			);
			localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
			$state.go('home');
		}
	};

	todoLists.addTodo = function(todos) {
		if( !todos.todoText || todos.todoText === ''
				|| $.findFromArray('text', todos.todoText, todos) )  { 
			// alert('todo text cannot be empty'); 
			return; 
		}
		todos.push(
			{	
				text: todos.todoText, 
				done: false
			}
		);
		todos.todoText = '';
		localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
	};

	todoLists.removeList = function(index) {
		if (window.confirm("Are you sure?")) { 
 			todoLists.lists.splice(index, 1);
			localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));	
		}
	};

	todoLists.removeTodo = function(todos, parentIndex, index) {
		todos.splice(index, 1);
		todoLists.lists[parentIndex].todos = todos;
		localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
	};

	todoLists.save = function() {
		$scope.editing = false;
		localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
	}

	todoLists.remaining = function(todos) {
		var count = 0;
		angular.forEach(todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoLists.archive = function(todos, index) {
		var oldTodos = todos;
		todos = [];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done) {
				todos.push(todo);
			}
		});
		todoLists.lists[index].todos = todos;
		localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
	};
	
	todoLists.startEditing = function() {
		$scope.editing = true;
	};

	todoLists.cancelEditing = function() {
		$scope.editing = false;
	};

	$scope.storeToLocalStorage = function() {
		localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));	
	}

	localStorage.setItem("todoLists", JSON.stringify(todoLists.lists));
	$scope.todoLists = todoLists;

}]);