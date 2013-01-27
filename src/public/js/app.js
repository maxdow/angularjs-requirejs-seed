define(["angular"],
	function BaseManager(angular){
		var initialize = function () {
			angular.bootstrap(document);
		};
	return {
		initialize : initialize
	};
});