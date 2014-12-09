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