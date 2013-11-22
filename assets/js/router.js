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

		// Default/Home route.
		app_router.on('route:home', function(action) {
			if(!Session.is_authenticated()) {
				// Create a new instance of the home view.
				var homeView = new LoginView;
			} else {
				app_router.navigate('dashboard', {trigger: true});
			}
		});

		// We're also going to listen to events
		// fired on the Session model for changes
		// in user authentication.
		Session.on('change:api_key', function(Session) {
			// A user has just logged in.
			if(Session.get('api_key')) {
				app_router.navigate('dashboard', {trigger: true});
			}

			// A user has just logged out.
			else {
				app_router.navigate('login', {trigger: true});
			}
		});

		// Start tracking history.
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};

});