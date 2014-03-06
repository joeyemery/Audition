define([
	'backbone',
	'views/DashboardView',
	'views/LoginView',
	'views/MenuView',
	'models/SessionModel'
], function(Backbone, DashboardView, LoginView, MenuView, Session) {

	// Extend backbones router to define our routes.
	var AppRouter = Backbone.Router.extend({
		routes: {
			'dashboard': 	'/dashboard',
			'menu': 		'/menu',

			// Home/unrecognized route.
			'*actions': '/dashboard'
		}
	});

	var initialize = function() {
		// Create a new instance of our AppRouter (defined above).
		var app_router = new AppRouter;

		// Dashboard route.
		app_router.on('route:/dashboard', function() {
			var dashboardView = new DashboardView;
		});

		// Menu route.
		app_router.on('route:/menu', function() {
			var menuView = new MenuView;
		});

		// Start tracking history.
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});