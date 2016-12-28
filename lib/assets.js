// refernce: http://docs.brightcove.com/en/video-cloud/cms-api/references/cms-api/versions/v1/index.html#api-videoGroup-Get_Videos
var events = require('events');
var util = require('util');
var Uri = require('jsuri');
var querystring = require('querystring');
/**
 * Represents the Video API object.
 * @constructor
 * @param {string} accountId - The account ID to lookup videos against.
 * @param {OAuth} oauthClient - The authorized api client.
 */
var AssetsClient = function AssetsClient(accountId, oauthClient) {

	events.EventEmitter.call(this);
	this.oauthClient = oauthClient;
	this.baseUrl = 'https://cms.api.brightcove.com/v1';
	this.getVideosUrl = this.baseUrl + '/accounts/'+ accountId +'/videos/';

	this.getAccountId = function getAccountId() {
		return accountId;
	}
}

util.inherits(AssetsClient, events.EventEmitter);


AssetsClient.prototype.commands = {
	get_renditions: 'get_renditions',
}


/**
 * Call the Get Videos API via the OAuth Client
 * @param {Object} options - addition parameters.
 * @returns {Promise} - The promise.
 */
AssetsClient.prototype.getRenditions = function getRenditions(videoId) {
	var url = new Uri(this.getVideosUrl + videoId + "/assets/renditions");
	var opts = {
		hostname: url.host(),
		path: url.path() + url.query(),
		method: 'GET'
	};
	return this.oauthClient.makeAuthenticatedRequest(this.commands.get_renditions, opts);
}






module.exports = AssetsClient;
