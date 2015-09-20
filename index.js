var crypto = require('crypto-js/md5');
var querystring = require('querystring');

var gravatar = module.exports = {
    imageUrl: function(email, parameters, secure) {
        var baseUrl = 'http://www.gravatar.com/avatar/';
        if(secure){
            baseUrl = 'https://secure.gravatar.com/avatar/';
        }
        var result = "";
        var convertedQueryString = querystring.stringify(parameters);

        if (convertedQueryString !== ""){
            result = "?" + convertedQueryString;
        }

        return baseUrl + crypto(email.toLowerCase().trim()) + result;
    }
}

module.exports = gravatar;