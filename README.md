# Node JS brightcove API client

This is the start of the node JS API client for the new API using the OAuth methodology.

This is similar to the pattern that was from the previous generation for easier adoption.

If someone wants to provide account information for testing purposes to get code coverage going that would be great.

## Quick example

```
var nbright = require('nbright');

var nbright = require('/Users/ebond/work/withgod/nbright');
var Promise = require('promise');


var oAuthClient = new nbright.OAuth('<CLIENT_ID>', '<SECRET>');
var videoClient = new nbright.Video('<ACCOUNT_ID>',oAuthClient);
var playlistClient = new nbright.Playlist('<ACCOUNT_ID>', oAuthClient);


videoClient.getVideos(
  {
    limit: 1
  }).then(function(video){
    console.log("single video");
    console.log(video);
  }).catch(function(err){
    console.error("error");
    console.log(err);
  });


playlistClient.getPlaylists(  { limit: 4 }
  ).then( function(playlists) {
    Promise.all(
      playlists.map( function(singlePlaylist){
        return playlistClient.getVideos(singlePlaylist.id);
      })
    ).then( function(playlistsData){
      console.log("playlist data");
      console.log(playlistsData);
    }).catch( function(err){
      console.error("error getting specific data");
    });
  }).catch( function(err){
    console.error("error getting playlists");
  });

```

#### ES6 example

A more complex es6 example

```
import { OAuth,Playlist } from '/Users/ebond/work/withgod/nbright';

var oAuthClient = new OAuth('<CLIENT_ID>', '<SECRET>');
var playlistClient = new Playlist('<ACCOUNT_ID>', oAuthClient);

playlistClient.getPlaylists( { limit: 4 } ).then( function(playlists) {
    Promise.all(
      playlists.map((singlePlaylist) => playlistClient.getVideos(singlePlaylist.id))
    ).then( (playlistsData) => {
      console.log("playlist data");
      console.log(playlistsData);
    }).catch( (err) => {
      console.error("error getting specific data");
      console.log(err);
    });
  }).catch( (err) => {
    console.error("error getting playlists");
  });

```


## Api Reference

[API Documentation](lib/README.md)


## TODO:

* Currently this library generates a new bearer every request. This should be cached eventually.


## Generate API documentation

```
npm install -g jsdoc-to-markdown
jsdoc2md ./lib/*.js > lib/README.md
```



### References
* Previous Generation [node-brightcove](https://github.com/nwbb/node-brightcove)
* [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown)
