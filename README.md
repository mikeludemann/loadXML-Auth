# loadXML - Auth

A function for loading external XML files with callback methods

## Example

```
var auth = authentication("user","password");

loadXMLAuth("./your-data.xml", function(response) {

  var data = response.responseXML;

  console.log(data);

}, auth);
```