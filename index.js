var querystring = require('querystring');
var _ = {
    includes: require('lodash/includes'),
    trim: require('lodash/trim')
};
var crypto = require('blueimp-md5');

var self = {},
    defaultEmail = '';

var getQueryString = function (parameters) {
    var result = '';
    var convertedQueryString = querystring.stringify(parameters);

    if (convertedQueryString !== '') {
        result = '?' + convertedQueryString;
    }
    return result;
};
var getBaseUrl = function (secure) {
    var baseUrl = 'http://www.gravatar.com/';
    if (secure) {
        baseUrl = 'https://secure.gravatar.com/';
    }
    return baseUrl;
};

var sanitize = function(options){
    options.email = options.email || defaultEmail;
    options.type = _.trim(options.type);
    options.$emailHash = crypto(options.email.toLowerCase().trim());
    return options;
};

self.imageUrl = function(options) {
    options = sanitize(options);
    var baseUrl = getBaseUrl(options.secure) + 'avatar/';
    var result = getQueryString(options.parameters);
    return baseUrl + options.$emailHash + result;
};

self.getProfileUrl = function(options){
    options = sanitize(options);
    var baseUrl = getBaseUrl(options.secure);
    var validTypes = ['json', 'xml', 'qr', 'php', 'vcf'];
    if(!_.includes(validTypes, options.type)){
        options.type = 'json';
    }
    var result = getQueryString(options.parameters);
    return baseUrl + options.$emailHash + '.'+ options.type + result;
};

module.exports = self;
