# Node JS brightcove API client

This is the start of the node JS API client for the new API using the OAuth methodology.

This is similar to the pattern that was from the previous generation for easier adoption.

If someone wants to provide account information for testing purposes to get code coverage going that would be great.

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
