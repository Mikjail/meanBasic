var app = angular.module('MainApp', [])

function mainController($scope, $http) {
	alert("controller!");
	loaderHotel($scope, $http);
	alert("salio el load!");
	$scope.newHotel = {};
	$scope.Hotels = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/Hotel').success(function(data) {
		$scope.Hotels = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una Hotel
	$scope.registrarHotel = function() {
		$http.post('/api/Hotel', $scope.newHotel)
		.success(function(data) {
				$scope.newHotel = {}; // Borramos los datos del formulario
				$scope.Hotels = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una Hotel
	$scope.modificarHotel = function(newHotel) {
		$http.put('/api/Hotel/' + $scope.newHotel._id, $scope.newHotel)
		.success(function(data) {
				$scope.newHotel = {}; // Borramos los datos del formulario
				$scope.Hotels = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto Hotel conocido su id
	$scope.borrarHotel = function(newHotel) {
		$http.delete('/api/Hotel/' + $scope.newHotel._id)
		.success(function(data) {
			$scope.newHotel = {};
			$scope.Hotels = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectHotel = function(Hotel) {
		$scope.newHotel = Hotel;
		$scope.selected = true;
		console.log($scope.newHotel, $scope.selected);
	};

}

// Obtenemos todos los hoteles de la base de datos
function loaderHotel($scope, $http) {
	$scope.hotel = $http.get('/api/HotelAll');
	console.log("nice:" + $scope.hotel);
}


