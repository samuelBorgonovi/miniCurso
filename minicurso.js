var modulo = angular.module("helloWorld", []);
			
	modulo.controller("helloCtrl", function($scope){
		$scope.tarefas = [];

		$scope.novaTarefa = function(){

			$scope.tarefas.push({
					desc: $scope.tarefa,
					feita: false,
					ehInput: false
			});

		$scope.tarefa = "";
		}

		$scope.editarTarefa = function(id){
			$scope.tarefas[id].ehInput = true;
		}


		$scope.salvarTarefa = function(id){
			
			$scope.tarefas[id].ehInput = false;
		}

		$scope.removerTarefas = function(){
			$scope.tarefas = [];
		};





});