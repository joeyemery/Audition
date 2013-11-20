define([
	'jquery',
	'underscore',
	'backbone',
	'models/SessionModel',
	'text!../../../templates/login.html'
], function($, _, Backbone, Session, loginTemplate) {

	var LoginView = Backbone.View.extend({
		el: $('#page'),

		initialize: function() {
			// Render the template on initialize.
			this.render();
		},

		events: {
			'submit .login': 		'login',
			'click .logout': 		'logout',
			'click .register a': 	'start_register'
		},

		start_register: function(e) {
			e.preventDefault();

			$('body, html').css('height', '100%').css('overflow', 'hidden');

			$('section.intro').animate({
				'height':'100%'
			}, 500);
		},

		logout: function() {
			Session.logout();
		},

		login: function(e) {
			e.preventDefault();
			Session.login({
				username: $('#username').val(),
				password: $('#password').val()
			});

			// Do login shizz.
		},

		render: function() {
			// Create a new underscore template from
			// the contents of 'home.html'.
			var template = _.template(loginTemplate);

			// Set the HTML of $el to the template
			// we just created, passing through an
			// object for all the variables.
			this.$el.html(template);
			this.$el.addClass('login');

			// Return 'this' to enable chained calls.
			return this;
		}
	});

	return LoginView;

});