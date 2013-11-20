define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	
	var BaseModel = Backbone.Model.extend({
		apiPath: 'http://localhost/battleships-server/public/api/v1/'
	});

	return BaseModel;

});