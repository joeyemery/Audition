require.config({
	// Define the paths for JS files
	// outside the default location.
	paths: {
		jquery: 'libs/jquery',
		backbone: 'libs/backbone',
		underscore: 'libs/underscore',
		text: 'libs/text'
	} 
});

// Load in the app.js file and
// fire the initialize method
// when it's finished loading.
require(['app'], function(App) {
	App.initialize();
});