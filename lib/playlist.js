// refernce: http://docs.brightcove.com/en/video-cloud/cms-api/references/cms-api/versions/v1/index.html#api-videoGroup-Get_Videos
var events = require('events');
var util = require('util');
var Uri = require('jsuri');
var querystring = require('querystring');
/**
 * Represents the Playlist API object.
 * @constructor
 * @param {string} accountId - The account ID to lookup videos against.
 * @param {OAuth} oauthClient - The authorized api client.
 */
var PlaylistClient = function PlaylistClient(accountId, oauthClient) {

	events.EventEmitter.call(this);
	this.oauthClient = oauthClient;
	this.baseUrl = 'https://cms.api.brightcove.com/v1';
	this.playlistsUrl = this.baseUrl + '/accounts/'+ accountId +'/playlists';

	this.getAccountId = function getAccountId() {
		return accountId;
	}
}

util.inherits(PlaylistClient, events.EventEmitter);


PlaylistClient.prototype.commands = {
	get_playlist: 'get_playlist',
	get_videos: 'get_videos',

}

/**
 * Call the Playlist API via the OAuth Client to get the playlists
 * @param {Object} options - addition parameters.
 * @returns {Promise} - The promise.
 */
PlaylistClient.prototype.getPlaylists = function getPlaylists(options) {
	var url = new Uri(this.playlistsUrl);
	var opts = {
		hostname: url.host(),
		path: url.path() + url.query(),
		method: 'GET'
	};
	var qs = querystring.stringify(options);
	if(qs){
		opts.path = opts.path + "?" + qs;
	}
	return this.oauthClient.makeAuthenticatedRequest(this.commands.get_playlist, opts);
}
/**
 * Call the Get Playlist API via the OAuth Client
 * @param {Number} playlistID - Playlist ID.
 * @returns {Promise} - The promise.
 */
PlaylistClient.prototype.getVideos = function getVideos(playlistID) {
	var url = new Uri(this.playlistsUrl + "/" +  playlistID + "/videos");
	var opts = {
		hostname: url.host(),
		path: url.path() + url.query(),
		method: 'GET'
	};

	return this.oauthClient.makeAuthenticatedRequest(this.commands.get_videos, opts);
}




module.exports = PlaylistClient;
