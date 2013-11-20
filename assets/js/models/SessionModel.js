define([
	'jquery',
	'underscore',
	'backbone',
	'models/BaseModel'
], function($, _, Backbone, BaseModel) {
	
	var SessionModel = BaseModel.extend({

		defaults: {
			id: (localStorage.getItem('id')) ? localStorage.getItem('id') : null,
			api_key: (localStorage.getItem('api_key')) ? localStorage.getItem('api_key') : null
		},

		initialize: function() {
			console.log(this.attributes);
		},

		// The login method passes the credentials
		// to the API and processes the response.
		login: function(credentials) {
			var instance = this;

			this.save(credentials, {
				success: function(model, res) {
					localStorage.setItem('api_key', res.api_key);
					localStorage.setItem('id', res.id);

					instance.set({password: null});
					console.log(instance);
				},

				error: function(model, res) {
					console.log(res);
				}
			});
		},

		logout: function() {
			var instance = this;

			this.destroy({
				success: function(model, res) {
					localStorage.clear();
					instance.clear();
				}
			});
		},

		is_authenticated: function() {
			if(this.get('api_key')) {
				return true;
			} else {
				return false;
			}
		},

		urlRoot: function() {
			return this.apiPath + 'auth';
		}
	});

	return new SessionModel();

});