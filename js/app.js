(function(){
	var app = angular.module('theatre', [ ]);

	app.controller('TheatreController', function(){
		this.movies = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(movie){
			movie.reviews.push(this.review);
			this.review = {};
		};
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

	// app.controller('MovieController', function(){


	// });

})();