## Classes

<dl>
<dt><a href="#AssetsClient">AssetsClient</a></dt>
<dd></dd>
<dt><a href="#OAuth">OAuth</a></dt>
<dd></dd>
<dt><a href="#PlaylistClient">PlaylistClient</a></dt>
<dd></dd>
<dt><a href="#VideoClient">VideoClient</a></dt>
<dd></dd>
</dl>

<a name="AssetsClient"></a>

## AssetsClient
**Kind**: global class  

* [AssetsClient](#AssetsClient)
    * [new AssetsClient(accountId, oauthClient)](#new_AssetsClient_new)
    * [.getRenditions(options)](#AssetsClient+getRenditions) ⇒ <code>Promise</code>

<a name="new_AssetsClient_new"></a>

### new AssetsClient(accountId, oauthClient)
Represents the Video API object.


| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | The account ID to lookup videos against. |
| oauthClient | <code>[OAuth](#OAuth)</code> | The authorized api client. |

<a name="AssetsClient+getRenditions"></a>

### assetsClient.getRenditions(options) ⇒ <code>Promise</code>
Call the Get Videos API via the OAuth Client

**Kind**: instance method of <code>[AssetsClient](#AssetsClient)</code>  
**Returns**: <code>Promise</code> - - The promise.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | addition parameters. |

<a name="OAuth"></a>

## OAuth
**Kind**: global class  

* [OAuth](#OAuth)
    * [new OAuth(clientId, clientSecret)](#new_OAuth_new)
    * [.getAccessToken()](#OAuth+getAccessToken)
    * [.createAccessToken()](#OAuth+createAccessToken)

<a name="new_OAuth_new"></a>

### new OAuth(clientId, clientSecret)
Represents the oauth API object.


| Param | Type | Description |
| --- | --- | --- |
| clientId | <code>string</code> | The Oauth client identifier. |
| clientSecret | <code>[OAuth](#OAuth)</code> | The oauth secrent. |

<a name="OAuth+getAccessToken"></a>

### oAuth.getAccessToken()
Check if the last received token is still valid, return it if valid or request an other one

**Kind**: instance method of <code>[OAuth](#OAuth)</code>  
<a name="OAuth+createAccessToken"></a>

### oAuth.createAccessToken()
Request a new access token

**Kind**: instance method of <code>[OAuth](#OAuth)</code>  
<a name="PlaylistClient"></a>

## PlaylistClient
**Kind**: global class  

* [PlaylistClient](#PlaylistClient)
    * [new PlaylistClient(accountId, oauthClient)](#new_PlaylistClient_new)
    * [.getPlaylists(options)](#PlaylistClient+getPlaylists) ⇒ <code>Promise</code>
    * [.getVideos(playlistID)](#PlaylistClient+getVideos) ⇒ <code>Promise</code>

<a name="new_PlaylistClient_new"></a>

### new PlaylistClient(accountId, oauthClient)
Represents the Playlist API object.


| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | The account ID to lookup videos against. |
| oauthClient | <code>[OAuth](#OAuth)</code> | The authorized api client. |

<a name="PlaylistClient+getPlaylists"></a>

### playlistClient.getPlaylists(options) ⇒ <code>Promise</code>
Call the Playlist API via the OAuth Client to get the playlists

**Kind**: instance method of <code>[PlaylistClient](#PlaylistClient)</code>  
**Returns**: <code>Promise</code> - - The promise.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | addition parameters. |

<a name="PlaylistClient+getVideos"></a>

### playlistClient.getVideos(playlistID) ⇒ <code>Promise</code>
Call the Get Playlist API via the OAuth Client

**Kind**: instance method of <code>[PlaylistClient](#PlaylistClient)</code>  
**Returns**: <code>Promise</code> - - The promise.  

| Param | Type | Description |
| --- | --- | --- |
| playlistID | <code>Number</code> | Playlist ID. |

<a name="VideoClient"></a>

## VideoClient
**Kind**: global class  

* [VideoClient](#VideoClient)
    * [new VideoClient(accountId, oauthClient)](#new_VideoClient_new)
    * [.getVideos(options)](#VideoClient+getVideos) ⇒ <code>Promise</code>
    * [.getVideoSources(videoId)](#VideoClient+getVideoSources) ⇒ <code>Promise</code>

<a name="new_VideoClient_new"></a>

### new VideoClient(accountId, oauthClient)
Represents the Video API object.


| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | The account ID to lookup videos against. |
| oauthClient | <code>[OAuth](#OAuth)</code> | The authorized api client. |

<a name="VideoClient+getVideos"></a>

### videoClient.getVideos(options) ⇒ <code>Promise</code>
Call the Get Videos API via the OAuth Client

**Kind**: instance method of <code>[VideoClient](#VideoClient)</code>  
**Returns**: <code>Promise</code> - - The promise.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | addition parameters. |

<a name="VideoClient+getVideoSources"></a>

### videoClient.getVideoSources(videoId) ⇒ <code>Promise</code>
Call the Get Videos API via the OAuth Client

**Kind**: instance method of <code>[VideoClient](#VideoClient)</code>  
**Returns**: <code>Promise</code> - - The promise.  

| Param | Type | Description |
| --- | --- | --- |
| videoId | <code>String</code> | Video ID to lookup. |

