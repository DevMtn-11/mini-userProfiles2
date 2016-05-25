angular.module('userProfiles').service('mainService',
	function($http) {

		var baseURL = 'http://reqres.in/api/users';

		this.getUsers = function() {
			return $http({
				method: 'GET',
				url: baseURL + '?page=1'
				// http://reqres.in/api/users?page=1
			});
		};

});
