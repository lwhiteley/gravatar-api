var querystring = require('querystring');
var _ = require('lodash');
var ntools = require('nodetools');

var self = {},
    defaultEmail = 'no@email.com';

var getQueryString = function (parameters) {
    var result = '';
    var convertedQueryString = querystring.stringify(parameters);

    if (convertedQueryString !== "") {
        result = "?" + convertedQueryString;
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
    if(_.isObject(options.parameters)){
        _.forEach(options.parameters, function(value, key){
            if(_.isString(value)){
                options.parameters[key] = ntools.urlEncode(value);
            }
        });
    }
    options.$emailHash = ntools.hash(options.email.toLowerCase().trim(), 'md5');
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
    if(!_.contains(validTypes, options.type)){
        options.type = 'json';
    }
    var result = getQueryString(options.parameters);
    return baseUrl + options.$emailHash + '.'+ options.type + result;
};

module.exports = self;