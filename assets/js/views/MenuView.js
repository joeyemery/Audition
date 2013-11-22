define([
	'jquery',
	'underscore',
	'backbone',
	'text!../../../templates/menu.html'
], function($, _, Backbone, menuTemplate) {

	var MenuView = Backbone.View.extend({
		el: $('#page'),

		initialize: function() {
			// Render the template on initialize.
			this.render();
		},

		render: function() {
			// Create a new underscore template from
			// the contents of 'dashboard.html'.
			var template = _.template(menuTemplate);

			// Set the HTML of $el to the template
			// we just created, passing through an
			// object for all the variables.
			this.$el.html(template({
				username: 	'CuriouslyOdd',
				level: 		'3'
			}));

			// Return 'this' to allow chained calls.
			return this;
		}
	});

	return MenuView;

});