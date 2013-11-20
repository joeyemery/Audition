define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../../templates/dashboard.html',
	'text!../../../templates/bookmark.html',
	'models/SessionModel'
], function($, _, Backbone, dashboardTemplate, bookmarkTemplate, Session) {

	var DashboardView = Backbone.View.extend({
		el: $('#page'),

		initialize: function() {
			// Render the template on initialize.
			this.render();
		},

		events: {
			'click .logout': 'logout'
		},

		logout: function(e) {
			e.preventDefault();

			Session.logout();
		},

		render: function() {
			// Create a new underscore template from
			// the contents of 'dashboard.html'.
			var template = _.template(dashboardTemplate);

			// Set the HTML of $el to the template
			// we just created, passing through an
			// object for all the variables.
			this.$el.html(template({
				username: 	'CuriouslyOdd',
				level: 		'3'
			}));

			// Additionally we're going to check to
			// see if the user has added us to their
			// homescreen (bookedmarked, ios only).
			// If they haven't we'll prepend the
			// bookmark template telling them to
			// do so.
			/*if ('standalone' in navigator && !navigator.standalone && (/iphone|ipod|ipad/gi).test(navigator.platform) && (/Safari/i).test(navigator.appVersion)){
				var bookmark_template = _.template(bookmarkTemplate);
				this.$el.prepend(bookmark_template());
			}*/

			// Return 'this' to allow chained calls.
			return this;
		}
	});

	return DashboardView;

});