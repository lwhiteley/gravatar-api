gravatar-api
===============

Node module to consume image and profiles from gravatar.

gravatar-api makes it easy to build gravatar image and profile urls.


To Install
----------

Using node package manager

#### Example
```javascript
npm install --save gravatar-api
```

To Use
------

Simply add the following require statement to import the module and then call the imageUrl method with the relevant options.

#### Example
```javascript
var gravatar = require('gravatar-api');
var options = {
    email: 'test@gmail.com'
}
user.avatar = gravatar.imageUrl(options);
```


You can also specify the size of the image with the following (or any valid gravatar image option)

#### Example
```javascript
var options = {
    email: 'test@gmail.com',
    parameters: { "size": "200" }
}
user.avatar = gravatar.imageUrl(options);
```

A valid size is between 1 - 2048.

For more options, see [gravatar documentation](https://en.gravatar.com/site/implement/images/)

### Secure Endpoint

You can specify retrieving the secure version of the URL by passing a third `BOOLEAN` parameter 

#### Example
```javascript
var options = {
    email: 'test@gmail.com',
    parameters: { "size": "200", "d": "mm" },
    secure: true 
}
user.avatar = gravatar.imageUrl(options);
```

### Gravatar Profile URLs

You can retrieve a user's gravatar profile url.

see the [gravatar docs](https://en.gravatar.com/site/implement/profiles/) for more information on what parameters can be used
for each type.

#### Example
```javascript
var options = {
    email: 'test@gmail.com',
    type: 'json', // Defailt: json, Available Types: 'json', 'xml', 'qr', 'php', 'vcf'
    parameters: {'callback': 'doSomething' }, //optional
    secure: true
}
var gravatarProfileUrl = gravatar.getProfileUrl(options);
```

### Notes
- All values in parameters will be url encoded
- compatible with react-native