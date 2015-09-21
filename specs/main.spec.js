var test = require('tap').test;
var module = require('../');
var _ = require('lodash');


test('gravatar image url tests: ', function (t) {
    t.test('gravatar unsecure image url tests: ', function (t) {
        var baseUrl = 'http://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058';

        var expected = baseUrl;
        var result = module.imageUrl({email: 'test@gmail.com'});

        t.equal(result, expected, 'should retrieve unsecure url for test@gmail.com');

        var expected2 = baseUrl + '?size=200';
        var result2 = module.imageUrl({email: 'test@gmail.com',parameters:{ "size": 200 }});
        t.equal(result2, expected2, 'should retrieve unsecure url for test@gmail.com with parameters');

        var expected3 = baseUrl + '?size=200&d=http%3A%2F%2Fmyimg.com%2Fimg.jpg';
        var result3 = module.imageUrl({email: 'test@gmail.com',parameters:{ "size": 200, "d": "http://myimg.com/img.jpg" }});
        t.equal(result3, expected3, 'should urlencode parameters for gravatar unsecure url');

        t.end();
    });

    t.test('gravatar secure image url tests: ', function (t) {

        var expected = 'https://secure.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058';
        var result = module.imageUrl({email: 'test@gmail.com', secure: true});

        t.equal(result, expected, 'should retrieve secure url for test@gmail.com');

        var expected2 = expected + '?size=200';
        var result2 = module.imageUrl({email: 'test@gmail.com',parameters:{ "size": 200 }, secure: true});
        t.equal(result2, expected2, 'should retrieve secure url for test@gmail.com with parameters');

        var expected3 = expected + '?size=200&d=http%3A%2F%2Fmyimg.com%2Fimg.jpg';
        var result3 = module.imageUrl({email: 'test@gmail.com',parameters:{ "size": 200, "d": "http://myimg.com/img.jpg" }, secure: true});
        t.equal(result3, expected3, 'should urlencode parameters for gravatar secure url');

        t.end();
    });
    t.end();
});

test('gravatar profile url tests: ', function (t) {
    t.test('gravatar unsecure profile url tests: ', function (t) {

        var validTypes = ['json', 'xml', 'qr', 'php', 'vcf'];
        var baseUrl = 'http://www.gravatar.com/1aedb8d9dc4751e229a335e371db8058';
        var expected = baseUrl +'.json';
        var result = module.getProfileUrl({email: 'test@gmail.com'});
        t.equal(result, expected, 'should retrieve json as default unsecure profile url for test@gmail.com when no type is supplied');

        var expected2 = baseUrl +'.json';
        var result2 = module.getProfileUrl({email: 'test@gmail.com', type: 'http'});
        t.equal(result2, expected2, 'should retrieve json as default unsecure profile url for test@gmail.com when invalid type is supplied');

        _.forEach(validTypes, function(type){
            var expected3 = baseUrl +'.'+type;
            var result3 = module.getProfileUrl({email: 'test@gmail.com', type: type});
            t.equal(result3, expected3, 'should retrieve '+type+' unsecure profile url for test@gmail.com');

        });

        _.forEach(validTypes, function(type){
            var expected3 = baseUrl +'.'+type+'?size=200';
            var result3 = module.getProfileUrl({email: 'test@gmail.com',parameters:{ "size": 200 }, type: type});
            t.equal(result3, expected3, 'should retrieve '+type+' unsecure profile url for test@gmail.com with parameters');

        });

        t.end();
    });

    t.test('gravatar secure profile url tests: ', function (t) {

        var validTypes = ['json', 'xml', 'qr', 'php', 'vcf'];
        var baseUrl = 'https://secure.gravatar.com/1aedb8d9dc4751e229a335e371db8058';
        var expected = baseUrl +'.json';
        var result = module.getProfileUrl({email: 'test@gmail.com', secure: true});
        t.equal(result, expected, 'should retrieve json as default secure profile url for test@gmail.com when no type is supplied');

        var expected2 = baseUrl +'.json';
        var result2 = module.getProfileUrl({email: 'test@gmail.com', secure: true, type: 'http'});
        t.equal(result2, expected2, 'should retrieve json as default secure profile url for test@gmail.com when invalid type is supplied');


        _.forEach(validTypes, function(type){
            var expected3 = baseUrl +'.'+type;
            var result3 = module.getProfileUrl({email: 'test@gmail.com', type: type, secure: true});
            t.equal(result3, expected3, 'should retrieve '+type+' secure profile url for test@gmail.com');

        });

        _.forEach(validTypes, function(type){
            var expected3 = baseUrl +'.'+type+'?size=200';
            var result3 = module.getProfileUrl({email: 'test@gmail.com',parameters:{ "size": 200 }, type: type, secure: true});
            t.equal(result3, expected3, 'should retrieve '+type+' secure profile url for test@gmail.com with parameters');

        });

        t.end();
    });

    t.end();
});



