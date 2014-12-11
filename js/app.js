(function(){
	var app = angular.module('theatre', ['theatre-movies']);

	app.controller('TheatreController', function(){
		this.movies = gems;
	});

	var gems = [

		{
			name: 'Dodgeball', 
			description: 'The movie Dodgeball is about...',
			reviews: [
				{
					stars: 5,
					body: 'I love this movie!',
					author: 'gary@test.com'
				},
				{
					stars: 4, 
					body: 'Funny, family movie',
					author: 'fred@test.com'
				}
			]
		}, 
		{
			name: 'Wedding Crashers',
			description: 'The movie Wedding Crashers is about...',
			reviews: [
				{
					stars: 4,
					body: 'Great movie!',
					author: 'gary@test.com'
				},
				{
					stars: 5, 
					body: 'Hilarious!',
					author: 'fred@test.com'
				}
			]
		}
	];

})();