define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	
	var TestModel = Backbone.Model.extend({
		defaults: {
			test: false,
			hello: 'sup'
		},

		url: function() {
			return 'request/api.php'
		},

		initialize: function() {

		}
	});

	return TestModel;

});