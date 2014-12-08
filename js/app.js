(function(){
	var app = angular.module('theatre', [ ]);

	app.controller('TheatreController', function(){
		this.movies = gems;

	});

	var gems = [

		{
			name: 'Dodgeball', 
			rating: 5, 
			description: 'The movie Dodgeball is about...'
		}, 
		{
			name: 'Wedding Crashers',
			rating: 4, 
			description: 'The movie Wedding Crashers is about...'
		}
	];

	// app.controller('MovieController', function(){


	// });

})();