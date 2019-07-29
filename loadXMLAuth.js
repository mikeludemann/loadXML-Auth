function authentication(user, password) {

	var token = user + ':' + password;
	var hash = Base64.encode(token);

	return hash;

}

function loadXML(url, callback, auth) { 

  var xmlHTTP = new XMLHttpRequest();

  xmlHTTP.setRequestHeader('Authorization', auth);
	xmlHTTP.open('GET', url, true);
	xmlHTTP.onreadystatechange = function () {

		if (xmlHTTP.readyState == 4 && xmlHTTP.status == "200") {

			callback(xmlHTTP.responseXML);

		}

	};

	xmlHTTP.send(null); 

}
