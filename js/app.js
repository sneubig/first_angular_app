(function(){
	var app = angular.module('theatre', [ ]);

	app.controller('TheatreController', function(){
		this.movie = gem;

	});

	var gem = {
		name: 'Dodgeball', 
		rating: 5, 
		description: 'The movie Dodgeball is about...'
	};

	// app.controller('MovieController', function(){


	// });

})();