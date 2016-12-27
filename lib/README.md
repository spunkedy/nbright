## Classes

<dl>
<dt><a href="#OAuth">OAuth</a></dt>
<dd></dd>
<dt><a href="#VideoClient">VideoClient</a></dt>
<dd></dd>
</dl>

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
<a name="VideoClient"></a>

## VideoClient
**Kind**: global class  

* [VideoClient](#VideoClient)
    * [new VideoClient(accountId, oauthClient)](#new_VideoClient_new)
    * [.getVideos(options, callback)](#VideoClient+getVideos)

<a name="new_VideoClient_new"></a>

### new VideoClient(accountId, oauthClient)
Represents the Video API object.


| Param | Type | Description |
| --- | --- | --- |
| accountId | <code>string</code> | The account ID to lookup videos against. |
| oauthClient | <code>[OAuth](#OAuth)</code> | The authorized api client. |

<a name="VideoClient+getVideos"></a>

### videoClient.getVideos(options, callback)
Call the Get Videos API via the OAuth Client

**Kind**: instance method of <code>[VideoClient](#VideoClient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | addition parameters. |
| callback | <code>function</code> | The callback. |
